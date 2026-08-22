import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: "01",
    title: "BOGIE HEARTH FURNACES",
    subtitle: "Heavy-Duty Heat Treatment for Large Components",
    description:
      "Designed for large and heavy components requiring convenient loading and unloading, with uniform heating across the furnace chamber. Suitable for annealing, normalising, hardening, tempering, stress relieving and other heavy-component heat treatment applications.",
  },
  {
    id: "02",
    title: "PIT TYPE ANNEALING FURNACES",
    subtitle: "Controlled Annealing for Long and Heavy Components",
    description:
      "Designed for controlled annealing applications where component geometry, loading requirements and uniform thermal treatment demand a vertical furnace configuration.",
  },
  {
    id: "03",
    title: "BELL TYPE ANNEALING FURNACES",
    subtitle: "Uniform Batch Annealing for Coils and Stacked Components",
    description:
      "Designed for batch annealing applications requiring controlled heating and cooling, with options for protective atmospheres and multiple-batch processing.",
  },
  {
    id: "04",
    title: "NORMALISING FURNACES",
    subtitle: "Controlled Heating for Refined Material Structure",
    description:
      "Designed to provide uniform heating and controlled cooling for normalising applications, supporting consistent grain refinement and mechanical properties.",
  },
  {
    id: "05",
    title: "GAS CARBURISING FURNACES",
    subtitle: "Controlled Case Hardening for Wear-Resistant Components",
    description:
      "Designed for controlled carbon enrichment of steel surfaces, providing precise atmosphere management and repeatable case-hardening results.",
  },
  {
    id: "06",
    title: "NITRIDING FURNACES",
    subtitle: "Surface Hardening for Enhanced Wear Resistance",
    description:
      "Designed for controlled nitriding processes that improve surface hardness and wear resistance while maintaining the required properties of the component core.",
  },
  {
    id: "07",
    title: "HARDENING & TEMPERING FURNACES",
    subtitle: "Controlled Thermal Cycles for Strength and Toughness",
    description:
      "Designed for precise heating and controlled thermal cycles to achieve the required hardness, strength and toughness across treated components.",
  },
  {
    id: "08",
    title: "ROTARY FURNACES FOR HARDENING",
    subtitle: "Consistent Heating for Batch Component Treatment",
    description:
      "Designed for controlled heating of components during hardening applications, supporting uniform thermal treatment and repeatable process results.",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="container mx-auto max-w-7xl px-4">

        {/* HEADING */}
        <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary uppercase">
          OUR HEAT TREATMENT FURNACE RANGE
        </h2>

        {/* PRODUCT GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="rounded-3xl border-0 bg-slate-700 shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardContent className="p-8">

                {/* PRODUCT NUMBER */}
                <span className="inline-flex rounded-full border border-secondary px-4 py-2 text-sm font-semibold text-secondary">
                  Product {product.id}
                </span>

                {/* PRODUCT TITLE */}
                <h3 className="mt-6 text-2xl font-bold text-primary leading-tight">
                  {product.title}
                </h3>

                {/* SUBTITLE */}
                <p className="mt-4 text-lg font-semibold text-secondary">
                  {product.subtitle}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-6 text-base leading-8 text-white/80">
                  {product.description}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}