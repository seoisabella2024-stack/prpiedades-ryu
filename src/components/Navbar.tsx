import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="font-heading text-2xl font-semibold tracking-tight text-foreground">
          LUXE<span className="text-primary">PROP</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {["Propiedades", "Servicios", "Nosotros", "Contacto"].map((item) => (
            <span
              key={item}
              className="label-luxury cursor-pointer transition-colors hover:text-primary"
            >
              {item}
            </span>
          ))}
          <button className="btn-luxury-primary rounded-sm text-xs">
            Agendar Visita
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 px-6 py-6 flex flex-col gap-4">
          {["Propiedades", "Servicios", "Nosotros", "Contacto"].map((item) => (
            <span key={item} className="label-luxury cursor-pointer py-2">
              {item}
            </span>
          ))}
          <button className="btn-luxury-primary rounded-sm text-xs mt-2">
            Agendar Visita
          </button>
        </div>
      )}
    </nav>
  );
}
