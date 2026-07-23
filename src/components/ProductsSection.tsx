import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: "01",
    title: "PIT TYPE ANNEALING FURNACE",
    subtitle:
      "Precision Vertical Heat Treatment for Long Components & Wire Coils",
    description:
      "Vertical pit design engineered for annealing long components, wire coils, forgings, and heavy-duty parts with excellent temperature uniformity and controlled cooling for superior metallurgical performance.",
  },
  {
    id: "02",
    title: "BOGIE HEARTH FURNACE",
    subtitle:
      "Heavy-Duty Heat Treatment for Large & Oversized Components",
    description:
      "Designed with a rail-mounted mobile bogie platform for effortless loading and unloading of heavy industrial components while delivering uniform heating and maximum operational efficiency.",
  },
  {
    id: "03",
    title: "BELL TYPE ANNEALING FURNACE",
    subtitle:
      "Batch Annealing with Superior Temperature Uniformity",
    description:
      "A movable bell cover design ideal for processing wire coils, strip coils, and sheet metal stacks with controlled atmosphere options for bright, oxidation-free annealing.",
  },
  {
    id: "04",
    title: "ROTARY FURNACE FOR HARDENING",
    subtitle:
      "Uniform Component Hardening Through Continuous Rotation",
    description:
      "Rotating drum technology provides consistent heating, reduced distortion, and repeatable hardening results for fasteners, gears, bearings, and precision-engineered components.",
  },
  {
    id: "05",
    title: "GAS CARBURISING FURNACE (GCF)",
    subtitle:
      "Precision Case Hardening with Controlled Atmosphere Technology",
    description:
      "Advanced gas carburising furnace designed for accurate carbon enrichment, delivering wear-resistant surfaces, consistent case depth, and exceptional hardness for critical steel components.",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="container mx-auto max-w-7xl px-4">

        <h2 className="max-w-5xl mx-auto text-center text-3xl md:text-4xl font-bold leading-tight text-primary uppercase">
          Advanced Industrial Heat Treatment Furnaces
          <br />
          For Every Manufacturing Need
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="rounded-3xl border-0 bg-slate-700 shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardContent className="p-8">

                <span className="inline-flex rounded-full border border-secondary px-4 py-2 text-sm font-semibold text-secondary">
                  Product {product.id}
                </span>

                <h3 className="mt-6 text-2xl font-bold text-primary leading-tight">
                  {product.title}
                </h3>

                <p className="mt-4 text-lg font-semibold text-secondary">
                  {product.subtitle}
                </p>

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