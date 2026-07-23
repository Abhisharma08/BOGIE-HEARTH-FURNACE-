'use server';

/**
 * HubSpot UPSERT Contact
 * - Creates contact if email does not exist
 * - Updates contact if email already exists
 */

export async function submitToHubSpot(data: {
  company_name: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  furnace_requirement: string;
  production_capacity: string;
  lead_source: string;
}) {
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!accessToken) {
    console.error(
      'HUBSPOT_ACCESS_TOKEN is not configured.'
    );

    return {
      success: false,
      error: 'Server configuration error.',
    };
  }

  try {
    const [firstname, ...lastnameParts] =
      data.name.trim().split(/\s+/);

    const lastname = lastnameParts.join(' ');

    /**
     * =====================================
     * CONTACT PROPERTIES
     * =====================================
     */

    const properties = {
      email: data.email,

      firstname: firstname,

      lastname: lastname || '',

      phone: data.phone,

      company: data.company_name || '',

      jobtitle: data.designation || '',

      lead_source: data.lead_source || '',

      furnace_requirement:
        data.furnace_requirement || '',

      production_capacity:
        data.production_capacity || '',
    };

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

                  value: data.email,
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

      console.error(
        'HubSpot Search Error:',
        errorData
      );

      return {
        success: false,
        error:
          errorData.message ||
          'Failed to search HubSpot contact.',
      };
    }

    const searchData = await searchResponse.json();

    const existingContact =
      searchData.results?.[0];

    /**
     * =====================================
     * STEP 2 — UPDATE EXISTING CONTACT
     * =====================================
     */

    if (existingContact) {
      const updateResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${existingContact.id}`,
        {
          method: 'PATCH',

          headers: {
            'Content-Type': 'application/json',

            Authorization: `Bearer ${accessToken}`,
          },

          body: JSON.stringify({
            properties,
          }),
        }
      );

      if (!updateResponse.ok) {
        const errorData =
          await updateResponse.json();

        console.error(
          'HubSpot Update Error:',
          errorData
        );

        return {
          success: false,
          error:
            errorData.message ||
            'Failed to update contact.',
        };
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

    const createResponse = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',

          Authorization: `Bearer ${accessToken}`,
        },

        body: JSON.stringify({
          properties,
        }),
      }
    );

    if (!createResponse.ok) {
      const errorData =
        await createResponse.json();

      console.error(
        'HubSpot Create Error:',
        errorData
      );

      return {
        success: false,
        error:
          errorData.message ||
          'Failed to create contact.',
      };
    }

    return {
      success: true,
      action: 'created',
    };
  } catch (error) {
    console.error(
      'HubSpot Submission Exception:',
      error
    );

    return {
      success: false,
      error:
        'Internal server error during CRM sync.',
    };
  }
}