import { motion } from "framer-motion";
import { ArrowRight, Bed, Bath, Maximize } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    title: "Penthouse Panorámico",
    location: "Las Condes, Santiago",
    price: "UF 32.000",
    beds: 4,
    baths: 3,
    area: "280 m²",
  },
  {
    image: property2,
    title: "Villa Mediterránea",
    location: "Lo Barnechea, Santiago",
    price: "UF 45.000",
    beds: 5,
    baths: 4,
    area: "420 m²",
  },
  {
    image: property3,
    title: "Casa Frente al Mar",
    location: "Zapallar, Valparaíso",
    price: "UF 58.000",
    beds: 6,
    baths: 5,
    area: "520 m²",
  },
];

export function FeaturedProperties() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="label-luxury mb-3">Selección Exclusiva</p>
            <h2 className="heading-section text-foreground">
              Propiedades Destacadas
            </h2>
          </div>
          <button className="btn-luxury-outline rounded-sm text-xs flex items-center gap-2">
            Ver Todas
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, i) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-property"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="card-property-image"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-sm bg-primary px-3 py-1 font-body text-xs font-medium text-primary-foreground">
                    Destacada
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="label-luxury mb-1">{property.location}</p>
                <h3 className="font-heading text-xl font-medium text-foreground">
                  {property.title}
                </h3>
                <p className="mt-2 font-heading text-2xl font-semibold text-primary">
                  {property.price}
                </p>

                <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
                  <Feature icon={<Bed size={14} />} text={`${property.beds} Hab.`} />
                  <Feature icon={<Bath size={14} />} text={`${property.baths} Baños`} />
                  <Feature icon={<Maximize size={14} />} text={property.area} />
                </div>

                <button className="mt-5 w-full btn-luxury-outline rounded-sm text-xs py-2.5">
                  Ver Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5 text-muted-foreground">
      {icon}
      <span className="font-body text-xs">{text}</span>
    </div>
  );
}
