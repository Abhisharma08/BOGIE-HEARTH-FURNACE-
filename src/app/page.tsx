"use client"

import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProductsSection from "@/components/ProductsSection";
import {
  ShieldCheck,
  Flame,
  Factory,
  Settings,
  Building2,
  Wrench,
  Cpu,
  BarChart3,
  MoveHorizontal,
  PencilRuler,
  Cog,
  Car,
  Home,
  Drill,
  Trophy,
  BadgeCheck,
  Leaf,
  MapPin,
  Thermometer,
  Gauge,
  Zap,
  Repeat2,
  SlidersHorizontal,
  Hammer,
  Plane,
  Fuel,
  TrainFront,
  Headphones,
  Plus,
Minus,


} from "lucide-react"
import LeadForm from "@/components/LeadForm"
import SectionHeader from "@/components/SectionHeader"
import { useState } from "react"

const LOGO_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779361354/cropped-Continental-Furnaces-Logo_q8ict4.jpg"
const HERO_BG_URL = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779695000/WhatsApp_Image_2026-05-21_at_11.22.03_1_mpxnyo.jpg"
const DEFAULT_PLACEHOLDER = "https://picsum.photos/seed/furnace/1200/900"
const Img1_SRC = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779875693/Bogie-Hearth-Furnace-_-Industrial-Heat-Treatment-for-Oversized-Parts_jehybr.jpg"
const Img2_SRC = "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779875956/WhatsApp_Image_2026-05-21_at_11.19.56_2_yia0eh.jpg"
const WHY_CONTINENTAL_IMG =
  "https://res.cloudinary.com/dw9v7jjrq/image/upload/v1779875693/Bogie-Hearth-Furnace-_-Industrial-Heat-Treatment-for-Oversized-Parts_jehybr.jpg"

export default function LandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const scrollToLeadForm = () => {
    const candidates = [
      document.getElementById("top-form-desktop"),
      document.getElementById("top-form-mobile"),
    ].filter(Boolean) as HTMLElement[]

    const target =
      candidates.find((el) => el.getClientRects().length > 0) ?? candidates[0]

    if (!target) return

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KWNWGTH9');`,
        }}
      />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KWNWGTH9"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <div className="flex flex-col min-h-screen overflow-x-hidden bg-white">


{/* NAVBAR */}
<nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white backdrop-blur-xl overflow-x-hidden">
  <div className="container mx-auto flex h-16 md:h-24 max-w-7xl items-center justify-between px-4">
    
    {/* LEFT */}
    <div className="flex items-center gap-3 md:gap-5">

      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src={LOGO_URL}
          alt="Continental Furnaces"
          width={180}
          height={55}
          className="h-10 md:h-14 w-auto object-contain"
          priority
        />
      </Link>
    </div>

    {/* RIGHT */}
    <div className="hidden lg:flex items-center gap-5">
      <div className="text-right">

        <p className="text-xs text-white/60">
          ISO 9001:2015 &
          <br />ISO 14001:2015 Certified
        </p>
      </div>

      <Button
        className="bg-primary hover:bg-primary/90 text-white font-bold px-7 h-12 rounded-xl"
        onClick={() => {
          scrollToLeadForm()
        }}
      >
        GET FREE QUOTE →
      </Button>
    </div>
  </div>
</nav>

  <main className="pt-[64px] md:pt-[96px] pb-24 lg:pb-0 w-full">


    {/* HERO SECTION */}
    <section className="relative overflow-hidden bg-background py-20 lg:py-28 w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BG_URL}
          alt="Industrial Aluminium Furnace"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/75" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[54%_38%] xl:gap-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8 text-white pt-4">

            {/* Main Heading */}
            <div className="space-y-5">
              <h1 className="max-w-5xl text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-4xl">

              HEAT TREATMENT FURNACES — 

              <br /> <span className="text-white text-2xl"> Precision Thermal Processing for Consistent Metallurgical Performance</span>
              </h1>

              <h2 className="max-w-4xl text-2xl font-semibold leading-relaxed text-secondary md:text-2xl">
              Engineered heat treatment furnace solutions for controlled 
              <br />
              heating, soaking, cooling and atmosphere management across critical metal 
              processing applications.
              </h2>

              {/* <h2 className="max-w-4xl text-2xl font-semibold leading-relaxed text-secondary md:text-2xl">
              2 to 20 Tons Capacity | Up to 1,200°C | 
              <br /> ±5°C Uniformity | Gas / Oil / Electric | 
              <br />Custom-Built|
              </h2> */}
            </div>

        {/* TRUST TILES */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-5xl">
          {[
  {
    title: "Precision Heating",
    icon: Trophy,
  },
  {
    title: " Uniform Temperature Control",
    icon: BadgeCheck,
  },
  {
    title: "Process Reliability",
    icon: Cog,
  },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-card/70 p-6 backdrop-blur-sm text-center"
            >
              <div className="flex flex-col items-center gap-4">
                {/* ICON */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <item.icon className="h-8 w-8 text-primary" strokeWidth={2.2} />
                </div>

                {/* TEXT */}
                <h3 className="text-base md:text-lg font-bold leading-snug text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        </div>

          {/* RIGHT FORM */}
          <div
            className="lg:sticky lg:top-32"
            id="top-form-desktop"
          >
            <LeadForm            />
          </div>
        </div>
      </div>
    </section>


    {/* SECTION 1 — HEAT TREATMENT REQUIREMENTS */}
<section className="relative overflow-hidden bg-white py-24 w-full">
  {/* Subtle Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(7,17,31,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(7,17,31,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="container relative z-10 mx-auto max-w-7xl px-4">
    <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-14 items-center">

      {/* LEFT — HEADING */}
      <div className="space-y-6">


        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary">
          ENGINEERED FOR EVERY
           TREATMENT
          REQUIREMENT
        </h2>

        <div className="h-1.5 w-20 rounded-full bg-primary" />
      </div>

      {/* RIGHT — CONTENT */}
      <div className="space-y-7">
        <p className="text-lg md:text-xl leading-relaxed text-slate-700">
          Heat treatment is critical to achieving the required mechanical and
          metallurgical properties of metal components.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-slate-700">
          Continental Furnaces designs and manufactures industrial heat
          treatment furnace systems for processes including{" "}
          <span className="font-semibold text-primary">
            annealing, normalising, hardening, tempering, stress relieving,
            carburising and nitriding
          </span>
          .
        </p>

        <div className="border-l-4 border-secondary bg-secondary/10 rounded-r-2xl p-6">
          <p className="text-lg md:text-xl font-semibold leading-relaxed text-primary">
            From individual components to large and heavy industrial loads,
            our furnace solutions are engineered around the material,
            component size, process cycle, production volume and required
            temperature profile.
          </p>
        </div>
      </div>
    </div>
    </div>
</section>

{/* SECTION 2 — HEAT TREATMENT PROCESSES */}
<section className="relative overflow-hidden bg-slate-200 py-24 w-full">
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="container relative z-10 mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
        HEAT TREATMENT PROCESSES WE SUPPORT
      </h2>

      <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-primary" />
    </div>

    {/* PROCESS CARDS */}
    <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "ANNEALING",
          desc: "Controlled heating and cooling to improve ductility, reduce hardness, relieve internal stresses and prepare materials for subsequent processing.",
        },
        {
          title: "NORMALISING",
          desc: "Controlled heating followed by air cooling to refine grain structure and achieve improved mechanical properties and material consistency.",
        },
        {
          title: "HARDENING",
          desc: "Precise heating followed by controlled cooling to increase hardness, strength and wear resistance according to component requirements.",
        },
        {
          title: "TEMPERING",
          desc: "Controlled reheating after hardening to achieve the required balance of hardness, toughness and dimensional stability.",
        },
        {
          title: "STRESS RELIEVING",
          desc: "Controlled thermal treatment designed to reduce residual stresses generated during welding, machining, forming or other manufacturing operations.",
        },
        {
          title: "CARBURISING",
          desc: "Controlled carbon enrichment of the component surface to develop a hard, wear-resistant case while retaining a tougher core.",
        },
        {
          title: "NITRIDING",
          desc: "Controlled nitrogen diffusion into the component surface to enhance surface hardness, wear resistance and service performance.",
        },
      ].map((item, i) => (
        <Card
          key={i}
          className={`rounded-3xl border border-white/10 bg-slate-700 shadow-2xl ${
            i === 6 ? "lg:col-start-2" : ""
          }`}
        >
          <CardContent className="p-8">
            <div className="space-y-5">

              {/* ACCENT LINE */}
              <div className="h-1.5 w-20 rounded-full bg-primary" />

              {/* TITLE */}
              <h3 className="text-2xl font-bold leading-snug text-white">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-lg leading-relaxed text-white/80">
                {item.desc}
              </p>

            </div>
          </CardContent>
        </Card>
      ))}

    </div>
  </div>
</section>



{/* SECTION 3 — PRODUCT INTRODUCTION & LIST */}

<ProductsSection />

{/* SECTION 4 — PRECISION CONTROL */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-7xl px-4">

    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-14 items-center">

      {/* LEFT — IMAGE */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
          <Image
            src={Img2_SRC}
            alt="Precision control in industrial heat treatment"
            width={900}
            height={1100}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Subtle Accent */}
        <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-3xl bg-primary/10 -z-0" />
      </div>

      {/* RIGHT — CONTENT */}
      <div className="space-y-8">

        {/* HEADING */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary">
            PRECISION CONTROL
            <br />
            <span className="text-secondary">
              AT EVERY STAGE
            </span>
          </h2>

          <div className="mt-5 h-1.5 w-20 rounded-full bg-primary" />
        </div>

        {/* PROCESS CONTROL LIST */}
        <div className="space-y-6">
          {[
            {
              icon: Flame,
              title: "Heating",
              subtitle: "Controlled heat input for consistent process temperatures",
              desc: "Controlled heat input ensures components reach the required process temperature without unnecessary thermal variation.",
            },
            {
              icon: Settings,
              title: "Soaking",
              subtitle: "Precise temperature and time management",
              desc: "Precise temperature and time management allows uniform heat penetration throughout the component or batch.",
            },
            {
              icon: ShieldCheck,
              title: "Atmosphere Control",
              subtitle: "Managing oxidation, decarburisation and surface conditions",
              desc: "Controlled furnace atmospheres can help manage oxidation, decarburisation and surface conditions during specialised heat treatment processes.",
            },
            {
              icon: MoveHorizontal,
              title: "Cooling",
              subtitle: "Controlled cooling according to metallurgical requirements",
              desc: "Controlled cooling methods are selected according to the required metallurgical properties and process cycle.",
            },
            {
              icon: BarChart3,
              title: "Process Monitoring",
              subtitle: "Integrated monitoring for repeatable treatment cycles",
              desc: "Temperature, time and process parameters can be monitored and managed through integrated control systems for repeatable treatment cycles.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border-b border-slate-200 pb-6 last:border-b-0 last:pb-0"
            >

              {/* ICON */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <item.icon
                  className="h-5 w-5 text-primary"
                  strokeWidth={2.2}
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-primary">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base font-semibold leading-relaxed text-secondary">
                  {item.subtitle}
                </p>

                <p className="pt-1 text-base leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>

  </div>
</section>

{/* SECTION 5 — ENGINEERED AROUND YOUR PROCESS */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* TOP CONTENT */}
    <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-14 items-start">

      {/* LEFT */}
      <div className="lg:sticky lg:top-32">
        <div className="space-y-6">

          {/* LABEL */}
          <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            CUSTOM ENGINEERING
          </div>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] text-primary">
            ENGINEERED
            <br />
            AROUND
            <br />
            <span className="text-secondary">YOUR PROCESS</span>
          </h2>

          {/* ACCENT */}
          <div className="h-1.5 w-20 rounded-full bg-primary" />

          {/* INTRO */}
          <p className="max-w-md text-lg md:text-xl leading-relaxed text-slate-700">
            No two heat treatment requirements are exactly alike.
          </p>

          <p className="max-w-md text-base md:text-lg leading-relaxed text-slate-600">
            Our furnace systems are configured around the specific requirements
            of your material, component, process and production environment.
          </p>
        </div>
      </div>

      {/* RIGHT — ENGINEERING PARAMETERS */}
      <div className="rounded-3xl bg-slate-700 p-7 md:p-10 shadow-2xl">

        {/* PANEL HEADER */}
        <div className="flex items-center justify-between gap-4 pb-7 border-b border-white/10">
          <div>
            <p className="text-sm font-semibold tracking-wider text-secondary uppercase">
              Furnace Configuration
            </p>

            <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
              Designed to Your Requirements
            </h3>
          </div>

          <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <PencilRuler
              className="h-6 w-6 text-primary"
              strokeWidth={2.2}
            />
          </div>
        </div>

        {/* PARAMETERS */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2">

          {[
            "Material type and grade",
            "Component dimensions and geometry",
            "Load weight and batch size",
            "Required treatment process",
            "Operating temperature",
            "Heating and soaking cycle",
            "Cooling requirements",
            "Production capacity",
            "Atmosphere requirements",
            "Loading and unloading method",
            "Fuel or electrical heating preference",
            "Automation and control requirements",
            "Available plant space",
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 py-5 ${
                i < 12 ? "border-b border-white/10" : ""
              } ${
                i % 2 === 0
                  ? "md:border-r md:border-white/10 md:pr-6"
                  : "md:pl-6"
              }`}
            >
              <span className="mt-0.5 text-sm font-bold text-secondary">
                {String(i + 1).padStart(2, "0")}
              </span>

              <p className="text-base leading-relaxed text-white/90">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>

    {/* BOTTOM STATEMENT */}
    <div className="mt-10 border-t border-slate-200 pt-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

        <p className="text-base font-semibold text-slate-500">
          Our engineering approach
        </p>

        <p className="text-lg md:text-xl font-bold text-primary">
          Your process defines the furnace.
          <span className="ml-2 font-semibold text-secondary">
            We engineer around it.
          </span>
        </p>

      </div>
    </div>

  </div>
</section>

{/* SECTION 6 — BUILT FOR UNIFORM HEAT TREATMENT */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
BUILT FOR UNIFORM HEAT TREATMENT
</h2>

    {/* FEATURES GRID */}
    <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {[
{
  icon: Thermometer,
  title: "Precise Temperature Control",
  subtitle: "Accurate thermal control throughout the treatment cycle",
  desc: "Multi-zone heating and programmable controls help maintain the required thermal profile throughout the treatment cycle.",
},
{
  icon: Gauge,
  title: "Uniform Heating",
  subtitle: "Consistent temperature distribution across the workload",
  desc: "Engineered heating arrangements support consistent temperature distribution across the furnace chamber and workload.",
},
{
  icon: Zap,
  title: "Energy-Efficient Operation",
  subtitle: "Reduced heat loss for economical furnace operation",
  desc: "Efficient insulation, heating systems and thermal management help minimise heat loss and support economical operation.",
},
{
  icon: Factory,
  title: "Robust Construction",
  subtitle: "Built for demanding industrial production environments",
  desc: "Heavy-duty construction and industrial-grade components are designed for demanding production environments.",
},
{
  icon: Repeat2,
  title: "Process Repeatability",
  subtitle: "Consistent results across repeated treatment cycles",
  desc: "Programmable temperature and time controls help maintain consistency across repeated heat treatment cycles.",
},
{
  icon: SlidersHorizontal,
  title: "Flexible Configuration",
  subtitle: "Configured around your specific application requirements",
  desc: "Furnace size, loading arrangement, heating method, control architecture and process features can be configured according to application requirements.",
},
      ].map((item, i) => (
        <Card
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-50 shadow-xl"
        >
          <CardContent className="p-8">
          <div className="space-y-6">
            
            {/* ICON */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <item.icon className="h-7 w-7 text-primary" strokeWidth={2.2} />
            </div>

            {/* TITLE */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold leading-snug text-primary">
                {item.title}
              </h3>

              {/* SUBTITLE */}
              <p className="text-base font-semibold leading-relaxed text-secondary">
                {item.subtitle}
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-lg leading-relaxed text-slate-700">
              {item.desc}
            </p>
          </div>              
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* SECTION 7 — APPLICATIONS ACROSS METAL PROCESSING */}
<section className="py-24 bg-slate-200 w-full">
  <div className="container mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
        APPLICATIONS ACROSS METAL PROCESSING
      </h2>

      <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-primary" />


    </div>

    {/* APPLICATION PANEL */}
    <div className="mt-14 overflow-hidden rounded-3xl bg-slate-700 shadow-2xl">

      {/* PANEL HEADER */}
      {/* <div className="border-b border-white/10 px-7 py-6 md:px-10">
        <h3 className="mt-2 text-2xl md:text-3xl font-bold text-secondary">
          APPLICATIONS ACROSS METAL PROCESSING
        </h3>
      </div> */}

      {/* APPLICATION LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2">

        {[
          {
            number: "01",
            title: "Automotive Components",
            desc: "Heat treatment for gears, shafts, crankshafts, camshafts, transmission components, fasteners and other critical automotive parts.",
          },
          {
            number: "02",
            title: "Forgings",
            desc: "Controlled thermal processing for forged components requiring improved strength, hardness, toughness or dimensional stability.",
          },
          {
            number: "03",
            title: "Castings",
            desc: "Heat treatment for cast components requiring stress relief, structural refinement or improved mechanical properties.",
          },
          {
            number: "04",
            title: "Gears & Power Transmission Components",
            desc: "Surface and core treatment for components requiring hardness, wear resistance and reliable service performance.",
          },
          {
            number: "05",
            title: "Heavy Engineering Components",
            desc: "Heat treatment of large and heavy components where uniform heating and controlled thermal cycles are critical.",
          },
          {
            number: "06",
            title: "Aerospace Components",
            desc: "Precision thermal processing for components requiring controlled and repeatable heat treatment cycles.",
          },
          {
            number: "07",
            title: "Oil & Gas Components",
            desc: "Heat treatment for shafts, fittings, pressure-related components and other metal parts requiring enhanced mechanical performance.",
          },
          {
            number: "08",
            title: "Railway Components",
            desc: "Thermal processing solutions for heavy-duty railway components requiring strength, toughness and wear resistance.",
          },
          {
            number: "09",
            title: "Tooling & Industrial Components",
            desc: "Heat treatment for industrial tools, dies, shafts, fasteners and other components requiring improved hardness and service life.",
          },
          {
          number: "10",
          title: "And Many More Applications",
          desc: "Our heat treatment furnace solutions can be adapted to a wide range of metal processing requirements across diverse components, materials and industrial applications.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`
              flex gap-5 p-7 md:p-8
              border-white/10
              ${i % 2 === 0 ? "md:border-r" : ""}
              ${i < 7 ? "border-b" : ""}
            `}
          >
            {/* NUMBER */}
            <div className="shrink-0">
              <span className="text-sm font-bold text-secondary">
                {item.number}
              </span>
            </div>

            {/* CONTENT */}
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-bold leading-snug text-white">
                {item.title}
              </h3>

              <p className="text-base leading-relaxed text-white/75">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  </div>
</section>

{/* SECTION 8 — WHY CONTINENTAL FURNACES */}
        <section className="relative overflow-hidden bg-slate-200 py-24 w-full">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
          <div className="container relative z-10 mx-auto max-w-7xl px-4">
        
            {/* HEADING */}
            <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary">
              WHY CONTINENTAL FURNACES
            </h2>
        
            {/* BENEFIT CARDS */}
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  icon: Flame,
                  title: "Heat Treatment Expertise",
                  desc: "Focused engineering capabilities for industrial thermal processing and heat treatment applications.",
                },
                {
                  icon: PencilRuler,
                  title: "Application-Led Engineering",
                  desc: "Furnace systems are developed around your material, process cycle, load, capacity and production requirements.",
                },
                {
                  icon: Gauge,
                  title: "Precision & Consistency",
                  desc: "Designed for controlled temperature profiles and uniform thermal treatment across the workload.",
                },
                {
                  icon: Zap,
                  title: "Energy Conscious Design",
                  desc: "Thermal insulation and heating systems are engineered with efficient operation and reduced heat loss in mind.",
                },
                {
                  icon: Settings,
                  title: "Custom-Built Solutions",
                  desc: "Furnace dimensions, heating configuration, loading systems, controls and process features can be tailored to the application.",
                },
                {
                  icon: Headphones,
                  title: "End-to-End Support",
                  desc: "From furnace design and manufacturing through installation, commissioning and ongoing technical support.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-slate-700 p-7 shadow-2xl"
                >
                  <div className="space-y-5">
        
                    {/* ICON */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <item.icon
                        className="h-7 w-7 text-primary"
                        strokeWidth={2.2}
                      />
                    </div>
        
                    {/* CONTENT */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold leading-snug text-white">
                        {item.title}
                      </h3>
        
                      <p className="text-base leading-relaxed text-white/75">
                        {item.desc}
                      </p>
                    </div>
        
                  </div>
                </div>
              ))}
            </div>
        
          </div>
        </section>

{/* SECTION 9 — FROM PROCESS REQUIREMENT TO PRODUCTION-READY FURNACE */}
<section className="relative overflow-hidden bg-white py-24 w-full">
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="container relative z-10 mx-auto max-w-7xl px-4">

    {/* HEADING */}
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
        FROM PROCESS REQUIREMENT TO
        <br className="hidden md:block" />
        PRODUCTION-READY FURNACE
      </h2>

      <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-primary" />
    </div>

    {/* PROCESS FLOW */}
    <div className="relative mt-16">

      {/* CONNECTING LINE */}
      <div
        className="
          absolute
          hidden lg:block
          left-[10%] right-[10%]
          top-8
          h-[3px]
          bg-primary/30
          z-0
        "
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">

        {[
          {
            number: "01",
            title: "UNDERSTAND",
            desc: "We study your material, component, heat treatment process, production volume and operating requirements.",
          },
          {
            number: "02",
            title: "ENGINEER",
            desc: "Our team develops the furnace configuration around the required thermal cycle, load and plant conditions.",
          },
          {
            number: "03",
            title: "BUILD",
            desc: "The furnace is manufactured using industrial-grade construction, heating, insulation and control components.",
          },
          {
            number: "04",
            title: "COMMISSION",
            desc: "The system is installed, commissioned and configured for the intended heat treatment process.",
          },
          {
            number: "05",
            title: "SUPPORT",
            desc: "Technical support and service help maintain reliable furnace operation throughout its working life.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative z-10 flex flex-col items-center"
          >

            {/* NUMBER */}
            <div className="relative z-20 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white shadow-xl ring-8 ring-slate-200">
              {item.number}
            </div>

            {/* CONTENT CARD */}
            <div className="mt-7 flex w-full min-h-[280px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">

              <h3 className="text-center text-xl font-bold text-primary">
                {item.title}
              </h3>

              <div className="mx-auto mt-4 h-1 w-12 shrink-0 rounded-full bg-secondary" />

              <p className="mt-6 text-center text-base leading-relaxed text-slate-700">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>

    {/* BOTTOM STATEMENT */}
    <div className="mt-14 text-center">
      <p className="text-lg md:text-xl font-semibold text-slate-600">
        From initial process understanding to long-term furnace support —
        <span className="font-bold text-primary">
          {" "}we stay involved throughout the journey.
        </span>
      </p>
    </div>

  </div>
</section>


{/* SECTION 10 — QUALITY THAT STARTS WITH CONTROL */}
<section className="py-24 bg-slate-200 w-full">
  <div className="container mx-auto max-w-4xl px-4">

    <div className="text-center">

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary">
        QUALITY THAT STARTS WITH CONTROL
      </h2>

      {/* ACCENT */}
      <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-primary" />

      {/* CONTENT */}
      <div className="mt-8 space-y-5">
        <p className="text-lg md:text-xl leading-relaxed text-slate-700">
          Every heat treatment process depends on control — control of
          temperature, time, atmosphere and cooling.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-slate-700">
          Our furnace solutions are designed to provide the control required
          to achieve repeatable thermal cycles and consistent component
          properties.
        </p>
      </div>

      {/* KEY STATEMENT */}
      <div className="mt-10">
        <p className="text-xl md:text-2xl font-bold text-primary">
          Better control.
          <span className="mx-2 text-secondary">More consistent treatment.</span>
          <span className="text-primary">Reliable performance.</span>
        </p>
      </div>

    </div>

  </div>
</section>




{/* FINAL CTA */}
<section className="py-24 bg-slate-200 relative overflow-hidden w-full">
  <div className="container mx-auto px-4 max-w-7xl relative z-10">
    
    {/* TOP GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-[48%_52%] gap-14 items-start">
      
      {/* LEFT CONTENT */}
      <div className="space-y-7 pt-6">
        <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          Get Your Quote
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
          HEAT TREATMENT SOLUTIONS FOR YOUR NEXT PROJECT
</h2>

        <p className="text-lg text-black max-w-2xl leading-relaxed">
          Whether you are processing individual components, batch loads, coils, forgings or large heavy assemblies, Continental Furnaces can engineer a heat treatment furnace around your specific requirements.
          <br />
          <br />
          Tell us about your material, component, process and production capacity.
          <br />
          <br />
          <span className="font-bold text-xl md:text-2xl text-primary">
          GET A CUSTOM HEAT TREATMENT FURNACE SOLUTION.
          </span>
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full">
        <LeadForm />
      </div>
    </div>
  </div>
  
</section>

{/* SECTION 11 — FAQs */}
<section className="py-24 bg-white w-full">
  <div className="container mx-auto max-w-5xl px-4">

    {/* HEADING */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary">
        FAQs
      </h2>

      <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-primary" />

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
        Answers to common questions about our heat treatment furnace
        solutions and capabilities.
      </p>
    </div>

    {/* FAQ LIST */}
    <div className="mt-14 space-y-4">
      {[
        {
          question: "What is heat treatment?",
          answer:
            "Heat treatment is a controlled thermal process used to modify the physical and metallurgical properties of metal components through specific heating, soaking and cooling cycles.",
        },
        {
          question: "Which heat treatment processes can your furnaces support?",
          answer:
            "Our heat treatment furnace solutions support applications including annealing, normalising, hardening, tempering, stress relieving, carburising and nitriding.",
        },
        {
          question: "Can the furnace be customised for our components?",
          answer:
            "Yes. Furnace configuration can be developed around component dimensions, load weight, production capacity, operating temperature, process cycle, loading method and other application requirements.",
        },
        {
          question: "Do you manufacture furnaces for large and heavy components?",
          answer:
            "Yes. Bogie hearth furnace configurations are designed specifically for large and heavy components requiring convenient loading and unloading and uniform heating.",
        },
        {
          question: "Can heat treatment furnaces use different heating methods?",
          answer:
            "Heating configurations can be selected according to the application and furnace design, including gas, oil or electric heating options where applicable.",
        },
        {
          question: "Can atmosphere control be incorporated?",
          answer:
            "For specialised processes such as carburising and certain annealing applications, controlled-atmosphere systems can be incorporated according to process requirements.",
        },
        {
          question: "Do you provide installation and commissioning support?",
          answer:
            "Yes. Furnace solutions can be supported through installation, commissioning and technical service.",
        },
        {
          question: "How do I select the right heat treatment furnace?",
          answer:
            "The right furnace depends on the material, component geometry, load size, required process, temperature range, production volume, heating method and cooling requirements. Our team can assess these parameters and recommend the appropriate configuration.",
        },
      ].map((faq, index) => {
        const isOpen = openFAQ === index

        return (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300"
          >

            {/* QUESTION */}
            <button
              type="button"
              onClick={() =>
                setOpenFAQ(isOpen ? null : index)
              }
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7 md:py-6"
              aria-expanded={isOpen}
            >

              <div className="flex items-start gap-4">

                {/* NUMBER */}
                <span className="hidden sm:block shrink-0 pt-0.5 text-sm font-bold text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* QUESTION */}
                <span className="text-lg md:text-xl font-bold leading-snug text-primary">
                  {faq.question}
                </span>

              </div>

              {/* PLUS / MINUS */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                {isOpen ? (
                  <Minus
                    className="h-5 w-5 text-primary"
                    strokeWidth={2.5}
                  />
                ) : (
                  <Plus
                    className="h-5 w-5 text-primary"
                    strokeWidth={2.5}
                  />
                )}
              </div>

            </button>

            {/* ANSWER */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-slate-200 px-6 pb-6 pt-5 md:px-7 md:pl-[4.5rem]">
                  <p className="text-base md:text-lg leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )
      })}
    </div>

  </div>
</section>

{/* SECTION 12 — FINAL CTA */}
<section className="py-24 bg-slate-900 w-full">
  <div className="container mx-auto max-w-5xl px-4">

    <div className="text-center">

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
        READY TO ENGINEER YOUR
        <br className="hidden md:block" />
        HEAT TREATMENT PROCESS?
      </h2>

      {/* ACCENT */}
      <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-secondary" />

      {/* INTRO */}
      <div className="mt-8 space-y-3">
        <p className="text-xl md:text-2xl font-bold text-white">
          Precision starts with the right furnace.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-white/75">
          Talk to Continental Furnaces about your heat treatment requirements.
        </p>
      </div>

      {/* CTA BUTTONS */}
      <div className="mt-10 flex flex-row items-center justify-center gap-4">

        <button
          type="button"
          onClick={scrollToLeadForm}
          className="rounded-xl bg-primary px-7 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          REQUEST A QUOTE
        </button>

        <button
          type="button"
          onClick={scrollToLeadForm}
          className="rounded-xl border-2 border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
        >
          SPEAK TO OUR ENGINEERS
        </button>

      </div>

    </div>
  </div>
</section>

      </main>

      {/* FOOTER */}
      <footer className="bg-background text-white pt-8 pb-28 lg:py-8 w-full border-t border-white/10">
        <div className="container mx-auto px-4 max-w-7xl text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Continental Furnaces. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-4 bg-white border-t shadow-[0_-4px_10px_rgba(0,0,0,0.1)] flex gap-2 w-screen">
        <div className="w-full flex gap-2 max-w-7xl mx-auto px-4">
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold h-12"
            onClick={() => {
              scrollToLeadForm()
            }}
          >
            REQUEST FREE QUOTE NOW
          </Button>
        </div>
      </div>
    </div>
    </>
  )
  
}
