'use server';

/**
 * HubSpot UPSERT Contact
 * - Creates contact if email does not exist
 * - Updates contact if email already exists
 */

export type HubSpotLeadPayload = {
  name: string;
  email: string;
  phone: string;
  company_name?: string;
  budget?: string;
  custom_requirement?: string;
  designation?: string;
  furnace_requirement?: string;
  production_capacity?: string;
  lead_source?: string;
  step?: 1 | 2;
};

async function sendHubSpotRequest(
  url: string,
  method: 'POST' | 'PATCH',
  properties: Record<string, string>,
  accessToken: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ properties }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`HubSpot ${method} Error:`, errorData);

      // If a property does not exist in the HubSpot portal, retry without it
      const errorMessage = errorData.message || '';
      const match = errorMessage.match(/Property ["']?([a-zA-Z0-9_]+)["']? does not exist/i);
      if (match && match[1] && properties[match[1]]) {
        console.warn(`HubSpot property "${match[1]}" does not exist. Retrying without it.`);
        const retryProps = { ...properties };
        delete retryProps[match[1]];
        return sendHubSpotRequest(url, method, retryProps, accessToken);
      }

      return {
        success: false,
        error: errorMessage || `Failed to ${method === 'POST' ? 'create' : 'update'} contact in HubSpot.`,
      };
    }

    return { success: true };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message || 'Network exception during HubSpot CRM request.',
    };
  }
}

export async function submitToHubSpot(data: HubSpotLeadPayload) {
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!accessToken) {
    console.error('HUBSPOT_ACCESS_TOKEN is not configured.');
    return {
      success: false,
      error: 'Server configuration error.',
    };
  }

  try {
    const [firstname, ...lastnameParts] = data.name.trim().split(/\s+/);
    const lastname = lastnameParts.join(' ');

    /**
     * =====================================
     * CONTACT PROPERTIES
     * =====================================
     */
    const properties: Record<string, string> = {
      email: data.email.trim(),
      firstname: firstname || '',
      lastname: lastname || '',
      phone: data.phone.trim(),
    };

    if (data.lead_source) {
      properties.lead_source = data.lead_source;
    }

    if (data.company_name?.trim()) {
      properties.company = data.company_name.trim();
    }

    if (data.designation?.trim()) {
      properties.jobtitle = data.designation.trim();
    }

    // Combine custom requirement and budget into furnace_requirement
    const requirementParts: string[] = [];
    if (data.custom_requirement?.trim()) {
      requirementParts.push(`Requirement: ${data.custom_requirement.trim()}`);
    } else if (data.furnace_requirement?.trim()) {
      requirementParts.push(data.furnace_requirement.trim());
    }
    if (data.budget?.trim()) {
      requirementParts.push(`Budget: ${data.budget.trim()}`);
    }

    if (requirementParts.length > 0) {
      properties.furnace_requirement = requirementParts.join(' | ');
    }

    if (data.budget?.trim()) {
      properties.budget = data.budget.trim();
    }

    if (data.production_capacity?.trim()) {
      properties.production_capacity = data.production_capacity.trim();
    }

    /**
     * =====================================
     * STEP 1 — SEARCH CONTACT BY EMAIL
     * =====================================
     */
    const searchResponse = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts/search',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'email',
                  operator: 'EQ',
                  value: data.email.trim(),
                },
              ],
            },
          ],
          properties: ['email'],
        }),
      }
    );

    if (!searchResponse.ok) {
      const errorData = await searchResponse.json();
      console.error('HubSpot Search Error:', errorData);
      return {
        success: false,
        error: errorData.message || 'Failed to search HubSpot contact.',
      };
    }

    const searchData = await searchResponse.json();
    const existingContact = searchData.results?.[0];

    /**
     * =====================================
     * STEP 2 — UPDATE EXISTING CONTACT
     * =====================================
     */
    if (existingContact) {
      const updateResult = await sendHubSpotRequest(
        `https://api.hubapi.com/crm/v3/objects/contacts/${existingContact.id}`,
        'PATCH',
        properties,
        accessToken
      );

      if (!updateResult.success) {
        return updateResult;
      }

      return {
        success: true,
        action: 'updated',
      };
    }

    /**
     * =====================================
     * STEP 3 — CREATE NEW CONTACT
     * =====================================
     */
    const createResult = await sendHubSpotRequest(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      'POST',
      properties,
      accessToken
    );

    if (!createResult.success) {
      return createResult;
    }

    return {
      success: true,
      action: 'created',
    };
  } catch (error) {
    console.error('HubSpot Submission Exception:', error);
    return {
      success: false,
      error: 'Internal server error during CRM sync.',
    };
  }
}