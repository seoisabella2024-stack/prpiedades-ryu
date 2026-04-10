import { motion } from "framer-motion";
import { Home, Key, Building2, Settings } from "lucide-react";

const services = [
  {
    icon: <Home size={28} />,
    title: "Compra",
    description: "Te acompañamos en cada paso para encontrar la propiedad de tus sueños con asesoría personalizada.",
  },
  {
    icon: <Key size={28} />,
    title: "Venta",
    description: "Maximizamos el valor de tu propiedad con estrategias de marketing de alto impacto.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Arriendo",
    description: "Gestión integral de arriendos para propietarios e inquilinos con total tranquilidad.",
  },
  {
    icon: <Settings size={28} />,
    title: "Gestión",
    description: "Administración profesional de tus propiedades, optimizando rentabilidad y mantención.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="label-luxury mb-3">Lo que Hacemos</p>
          <h2 className="heading-section text-foreground">Nuestros Servicios</h2>
          <p className="mt-4 mx-auto max-w-xl text-body">
            Ofrecemos un servicio integral en el mercado inmobiliario de lujo, con la excelencia que nuestros clientes merecen.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-lg bg-card p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-body text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
