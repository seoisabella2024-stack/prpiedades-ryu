import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Arrendataria en Los Ángeles",
    text: "Una experiencia excepcional. El equipo de Ryu Propiedades nos guió en cada paso hasta encontrar nuestro departamento ideal. Su profesionalismo es insuperable.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Propietario en Los Ángeles",
    text: "Ryu Propiedades administró mi propiedad de forma impecable. Encontraron arrendatarios confiables en tiempo récord.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Inversionista",
    text: "La gestión de mis propiedades con Ryu Propiedades ha sido impecable. Me siento completamente respaldada y la rentabilidad ha superado mis expectativas.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-secondary">
      <div className="mx-auto max-w-4xl text-center">
        <p className="label-luxury mb-3">Testimonios</p>
        <h2 className="heading-section text-foreground mb-12">
          Lo que Dicen Nuestros Clientes
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="rounded-lg bg-card p-8 md:p-12 shadow-sm"
            >
              <Quote size={40} className="mx-auto mb-6 text-primary/20" />
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-heading text-xl font-light italic leading-relaxed text-foreground md:text-2xl">
                "{t.text}"
              </p>
              <div className="mt-8">
                <p className="font-heading text-lg font-medium text-foreground">{t.name}</p>
                <p className="text-body text-sm">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
