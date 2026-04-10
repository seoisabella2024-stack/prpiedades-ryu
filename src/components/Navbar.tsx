import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoRyu from "@/assets/logo-ryu.jpg";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = ["Arriendos", "Venta", "Administración", "Constructora"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-12">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoRyu} alt="Ryu Propiedades" className="h-12 w-12 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground leading-tight">
              RYU
            </span>
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
              Propiedades
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <span
              key={item}
              className="font-body text-xs font-medium uppercase tracking-wider cursor-pointer text-foreground/70 transition-colors hover:text-primary"
            >
              {item}
            </span>
          ))}
          <a
            href="https://wa.me/56941336389"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-primary rounded-md px-4 py-2 text-xs"
          >
            Contactar
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <span key={item} className="font-body text-sm font-medium uppercase tracking-wider cursor-pointer py-2 text-foreground/70">
              {item}
            </span>
          ))}
          <a
            href="https://wa.me/56941336389"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-primary rounded-md text-xs mt-2 text-center"
          >
            Contactar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
