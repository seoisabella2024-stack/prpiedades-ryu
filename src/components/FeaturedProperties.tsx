import { motion } from "framer-motion";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    title: "Depto Amoblado Full — Calle Balmaceda",
    location: "Los Ángeles, Biobío",
    price: "$600.000 CLP + GGCC",
    beds: 2,
    baths: 2,
    area: "54 m²",
    tag: "Arriendo",
    features: ["Cocina full equipada", "Internet incluido", "Estacionamiento privado"],
    availability: "Disponibilidad Inmediata",
  },
  {
    image: property2,
    title: "Casa Mediterránea en Condominio",
    location: "Km 1.5 Camino Antuco, Los Ángeles",
    price: "$1.200.000 CLP (GGCC incl.)",
    beds: 3,
    baths: 3,
    area: "139,88 m²",
    tag: "Arriendo",
    features: ["Terreno 315 m²", "3 estacionamientos", "2 aires acondicionados"],
    availability: "Disponibilidad Inmediata",
  },
  {
    image: property3,
    title: "Depto Moderno — Edificio Luminity",
    location: "Laguna Verde 2365, Los Ángeles",
    price: "$750.000 CLP (GGCC incl.)",
    beds: 2,
    baths: 2,
    area: "75 m²",
    tag: "Arriendo",
    features: ["Piscina y gimnasio", "Conserje 24h", "Piso 8°, terraza amplia"],
    availability: "Disponibilidad Inmediata",
  },
];

export function FeaturedProperties() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="label-luxury mb-3">Propiedades Disponibles</p>
          <h2 className="heading-section text-foreground">Arriendos Destacados</h2>
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
                    {property.tag}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                  <MapPin size={12} />
                  <span className="font-body text-xs">{property.location}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground leading-tight">
                  {property.title}
                </h3>
                <p className="mt-2 font-heading text-xl font-bold text-primary">
                  {property.price}
                </p>

                <div className="mt-3 flex items-center gap-4 border-t border-border pt-3">
                  <Feature icon={<Bed size={14} />} text={`${property.beds} Hab.`} />
                  <Feature icon={<Bath size={14} />} text={`${property.baths} Baños`} />
                  <Feature icon={<Maximize size={14} />} text={property.area} />
                </div>

                <ul className="mt-3 space-y-1">
                  {property.features.map((f) => (
                    <li key={f} className="font-body text-xs text-muted-foreground flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 rounded bg-primary/10 px-3 py-1.5 text-center">
                  <span className="font-body text-xs font-semibold text-primary">{property.availability}</span>
                </div>

                <a
                  href="https://wa.me/56941336389?text=Hola%2C%20me%20interesa%20la%20propiedad%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full btn-luxury-primary rounded-md text-xs py-2.5 block text-center"
                >
                  Consultar por WhatsApp
                </a>
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
