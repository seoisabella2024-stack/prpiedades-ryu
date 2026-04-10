import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 500, label: "Clientes Satisfechos", suffix: "+" },
  { target: 1200, label: "Propiedades Vendidas", suffix: "+" },
  { target: 15, label: "Años de Experiencia", suffix: "" },
  { target: 98, label: "Satisfacción", suffix: "%" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const motionVal = useMotionValue(0);
          const controls = animate(motionVal, target, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (v) => setValue(Math.round(v)),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-heading text-5xl font-semibold text-foreground md:text-6xl">
      {value.toLocaleString()}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Counter target={stat.target} suffix={stat.suffix} />
              <p className="mt-2 label-luxury">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
