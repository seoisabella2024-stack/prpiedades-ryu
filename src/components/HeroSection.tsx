import { motion } from "framer-motion";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-luxury.jpg";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Villa de lujo con piscina infinita frente al mar"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-background/80"
        >
          Propiedades Exclusivas
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl font-light leading-tight text-background md:text-7xl lg:text-8xl"
        >
          Vive el Lujo
          <br />
          <span className="italic">que Mereces</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-lg font-body text-sm font-light leading-relaxed text-background/70"
        >
          Descubre las propiedades más exclusivas del mercado. Desde villas frente al mar hasta penthouses con vista panorámica.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 w-full max-w-4xl"
        >
          <div className="flex flex-col gap-3 rounded-lg bg-background/95 backdrop-blur-sm p-4 shadow-2xl md:flex-row md:items-center md:gap-0 md:p-2">
            <SearchField icon={<MapPin size={16} />} placeholder="Comuna" />
            <div className="hidden md:block w-px h-8 bg-border" />
            <SearchField icon={<Home size={16} />} placeholder="Tipo de propiedad" />
            <div className="hidden md:block w-px h-8 bg-border" />
            <SearchField icon={<DollarSign size={16} />} placeholder="Rango de precio" />
            <button className="btn-luxury-primary rounded-md px-6 py-3 flex items-center justify-center gap-2">
              <Search size={16} />
              <span>Buscar</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="h-10 w-6 rounded-full border-2 border-background/40 flex items-start justify-center p-1.5">
          <div className="h-2 w-1 rounded-full bg-background/60" />
        </div>
      </motion.div>
    </section>
  );
}

function SearchField({ icon, placeholder }: { icon: React.ReactNode; placeholder: string }) {
  return (
    <div className="flex flex-1 items-center gap-2 px-4 py-2">
      <span className="text-muted-foreground">{icon}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent font-body text-sm font-light text-foreground placeholder:text-muted-foreground outline-none"
      />
    </div>
  );
}
