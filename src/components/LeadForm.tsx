"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitToHubSpot } from "@/app/actions/hubspot"

type FormValues = {
  name: string
  email: string
  phone: string
  company_name: string
  budget: string
  custom_requirement: string
  lead_source: string
}

type FormErrors = Partial<Record<keyof FormValues, string>> & {
  submit?: string
}

type LeadFormProps = {
  className?: string
  title?: string
  subtitle?: string
  buttonText?: string
  bottomText?: React.ReactNode
  buttonclassName?: string
}

const BUDGET_OPTIONS = [
  "20 Lakh - 50 Lakh",
  "50 lakh to 1cr",
  "1cr +",
]

const defaultValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  company_name: "",
  budget: "",
  custom_requirement: "",
  lead_source: "BOGIE MELTING FURNACE LP",
}

function validateStep1(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name (at least 2 characters)."
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(values.email.trim())) {
    errors.email = "Please enter a valid email address."
  }

  const cleanPhone = values.phone.replace(/\D/g, "")
  if (cleanPhone.length !== 10) {
    errors.phone = "Please enter a valid 10-digit Indian phone number."
  } else if (!/^[6-9]/.test(cleanPhone)) {
    errors.phone = "Indian mobile numbers must start with 6, 7, 8, or 9."
  }

  return errors
}

function validateStep2(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.company_name.trim().length < 2) {
    errors.company_name = "Please enter your company name."
  }

  if (!values.budget) {
    errors.budget = "Please select your estimated budget."
  }

  return errors
}

export default function LeadForm({
  className = "",
  title = "Get a Free Consultation",
  subtitle = "Discuss your furnace requirement with our engineers.",
  buttonText = "GET A FREE QUOTE →",
  buttonclassName = "",
  bottomText = <></>,
}: LeadFormProps) {
  const router = useRouter()

  const [step, setStep] = useState<1 | 2>(1)
  const [values, setValues] = useState<FormValues>(defaultValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: undefined,
      submit: undefined,
    }))
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    let rawValue = event.target.value.replace(/\D/g, "")

    // Strip leading country code 91 if typed/pasted with 12 digits
    if (rawValue.startsWith("91") && rawValue.length > 10) {
      rawValue = rawValue.slice(2)
    } else if (rawValue.startsWith("0") && rawValue.length > 10) {
      rawValue = rawValue.slice(1)
    }

    // Limit to 10 digits
    const formattedPhone = rawValue.slice(0, 10)

    setValues((current) => ({
      ...current,
      phone: formattedPhone,
    }))

    setErrors((current) => ({
      ...current,
      phone: undefined,
      submit: undefined,
    }))
  }

  async function handleStep1Submit(e: React.FormEvent) {
    e.preventDefault()

    const step1Errors = validateStep1(values)
    if (Object.keys(step1Errors).length > 0) {
      setErrors(step1Errors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    const cleanPhone = values.phone.replace(/\D/g, "")
    const fullPhone = `+91 ${cleanPhone}`

    try {
      // Intermediate sync to HubSpot after Step 1
      const result = await submitToHubSpot({
        name: values.name,
        email: values.email,
        phone: fullPhone,
        lead_source: values.lead_source,
        step: 1,
      })

      if (!result.success) {
        console.warn("HubSpot Step 1 CRM Sync Warning:", result.error)
      }

      // Move to Step 2
      setStep(2)
    } catch (error) {
      console.error("Step 1 Submission Error:", error)
      // Proceed to Step 2 so user is not blocked if intermediate network flickers
      setStep(2)
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleStep2Submit(e: React.FormEvent) {
    e.preventDefault()

    const step2Errors = validateStep2(values)
    if (Object.keys(step2Errors).length > 0) {
      setErrors(step2Errors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    const cleanPhone = values.phone.replace(/\D/g, "")
    const fullPhone = `+91 ${cleanPhone}`

    try {
      // Final submission to HubSpot with Step 2 data
      const result = await submitToHubSpot({
        name: values.name,
        email: values.email,
        phone: fullPhone,
        company_name: values.company_name,
        budget: values.budget,
        custom_requirement: values.custom_requirement,
        lead_source: values.lead_source,
        step: 2,
      })

      if (!result.success) {
        console.warn("HubSpot Step 2 CRM Sync Warning:", result.error)
      }

      // Redirect to thank-you page after step 2
      router.push("/thank-you")
    } catch (error) {
      console.error("Step 2 Submission Error:", error)
      setErrors({
        submit: "We encountered a problem. Please try again or contact us directly.",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white p-6 shadow-2xl md:p-8 ${className}`}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="mb-1 text-left text-xl font-bold leading-tight text-primary md:text-2xl">
          {title}
        </h3>
        <p className="text-left text-xs text-muted-foreground md:text-sm">
          {subtitle}
        </p>
      </div>

      {/* Step Progress Bar */}
      <div className="mb-6 rounded-xl bg-slate-50 p-3 border border-slate-100">
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className={step === 1 ? "text-primary font-bold" : "text-emerald-600 flex items-center gap-1 font-medium"}>
            {step === 2 && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" />}
            1. Contact Details
          </span>
          <span className={step === 2 ? "text-primary font-bold" : "text-muted-foreground"}>
            2. Company & Requirements
          </span>
        </div>
        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>

      {/* STEP 1 FORM */}
      {step === 1 && (
        <form onSubmit={handleStep1Submit} className="space-y-4" noValidate>
          <input type="hidden" name="lead_source" value={values.lead_source} />

          {/* Full Name */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="name" className="text-sm font-semibold text-black">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              autoComplete="name"
              className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="email" className="text-sm font-semibold text-black">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              autoComplete="email"
              className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Phone Number (10 digits Indian standard with +91 pre-written) */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="phone" className="text-sm font-semibold text-black">
              Phone Number *
            </label>
            <div className="relative flex rounded-xl border border-input bg-white focus-within:ring-2 focus-within:ring-secondary overflow-hidden">
              <span className="inline-flex items-center gap-1 bg-slate-100 px-3.5 text-sm font-semibold text-slate-700 border-r border-input select-none">
                <span>🇮🇳</span> +91
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                value={values.phone}
                onChange={handlePhoneChange}
                placeholder="10 digit mobile number"
                autoComplete="tel-national"
                maxLength={10}
                className="h-12 w-full bg-transparent px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <p className="text-[11px] text-slate-500">
              10 digits as per Indian standard
            </p>
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone}</p>
            )}
          </div>

          {errors.submit && (
            <p className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-xs text-destructive">
              {errors.submit}
            </p>
          )}

          {/* Next Button */}
          <Button
            type="submit"
            className={`h-14 w-full bg-primary text-base font-bold text-white hover:bg-primary/90 ${buttonclassName}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Saving Details...
              </>
            ) : (
              <span className="inline-flex items-center justify-center gap-2">
                Next: Company Details
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>

          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            {bottomText}
          </p>
        </form>
      )}

      {/* STEP 2 FORM */}
      {step === 2 && (
        <form onSubmit={handleStep2Submit} className="space-y-4" noValidate>
          {/* Company Name */}
          <div className="space-y-1.5 text-left">
            <label
              htmlFor="company_name"
              className="text-sm font-semibold text-black"
            >
              Company Name *
            </label>
            <input
              id="company_name"
              name="company_name"
              value={values.company_name}
              onChange={handleChange}
              placeholder="Your Company Name"
              className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            />
            {errors.company_name && (
              <p className="text-xs text-destructive">{errors.company_name}</p>
            )}
          </div>

          {/* Budget Options */}
          <div className="space-y-1.5 text-left">
            <label
              htmlFor="budget"
              className="text-sm font-semibold text-black"
            >
              Budget *
            </label>
            <select
              id="budget"
              name="budget"
              value={values.budget}
              onChange={handleChange}
              className="flex h-12 w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <option value="" disabled>
                Select budget range
              </option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.budget && (
              <p className="text-xs text-destructive">{errors.budget}</p>
            )}
          </div>

          {/* Custom Requirement (Optional) */}
          <div className="space-y-1.5 text-left">
            <div className="flex items-center justify-between">
              <label
                htmlFor="custom_requirement"
                className="text-sm font-semibold text-black"
              >
                Custom Requirement
              </label>
              <span className="text-xs text-muted-foreground font-normal">
                (Optional)
              </span>
            </div>
            <textarea
              id="custom_requirement"
              name="custom_requirement"
              rows={3}
              value={values.custom_requirement}
              onChange={handleChange}
              placeholder="Specify your furnace requirements, dimensions, or specifications..."
              className="flex w-full rounded-xl border border-input bg-white px-4 py-2 text-sm text-black placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary resize-none"
            />
          </div>

          {errors.submit && (
            <p className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-xs text-destructive">
              {errors.submit}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-1">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setStep(1)}
              disabled={isSubmitting}
              className="h-14 px-5 font-bold rounded-xl text-secondary-foreground hover:bg-secondary/90 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </Button>

            <Button
              type="submit"
              className={`h-14 flex-1 bg-primary text-base font-bold text-white hover:bg-primary/90 ${buttonclassName}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                buttonText
              )}
            </Button>
          </div>

          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            {bottomText}
          </p>
        </form>
      )}
    </div>
  )
}
