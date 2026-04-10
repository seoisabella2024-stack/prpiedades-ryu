import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-background/50 mb-4">
            Comienza Hoy
          </p>
          <h2 className="font-heading text-4xl font-light text-background md:text-5xl">
            ¿Listo para encontrar tu
            <br />
            <span className="italic">propiedad ideal?</span>
          </h2>
          <p className="mt-6 mx-auto max-w-lg font-body text-sm font-light leading-relaxed text-background/60">
            Déjanos tus datos y un asesor especializado se pondrá en contacto contigo para ayudarte a encontrar la propiedad perfecta.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center sm:items-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 rounded-sm bg-background/10 border border-background/20 px-5 py-3 font-body text-sm text-background placeholder:text-background/40 outline-none focus:border-background/50 transition-colors"
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-sm bg-background px-6 py-3 font-body text-sm font-medium tracking-wider uppercase text-foreground transition-all hover:opacity-90">
              <Send size={14} />
              Contactar
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <button className="btn-luxury border border-background/20 text-background/80 rounded-sm hover:bg-background/10 text-xs">
              Explorar Propiedades
            </button>
            <button className="btn-luxury border border-background/20 text-background/80 rounded-sm hover:bg-background/10 text-xs">
              Agendar Visita
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
