import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/70 border-t border-background/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="font-heading text-2xl font-semibold text-background mb-4">
              LUXE<span className="text-primary">PROP</span>
            </h3>
            <p className="font-body text-sm font-light leading-relaxed">
              Tu socio de confianza en el mercado inmobiliario de lujo. Más de 15 años creando experiencias excepcionales.
            </p>
          </div>

          <div>
            <h4 className="label-luxury text-background/50 mb-4">Enlaces</h4>
            <ul className="space-y-2 font-body text-sm">
              {["Propiedades", "Servicios", "Nosotros", "Blog", "Contacto"].map((link) => (
                <li key={link}>
                  <span className="cursor-pointer transition-colors hover:text-background">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-luxury text-background/50 mb-4">Servicios</h4>
            <ul className="space-y-2 font-body text-sm">
              {["Compra", "Venta", "Arriendo", "Gestión de Propiedades", "Asesoría Legal"].map((s) => (
                <li key={s}>
                  <span className="cursor-pointer transition-colors hover:text-background">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-luxury text-background/50 mb-4">Contacto</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Av. Apoquindo 3000, Las Condes, Santiago</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>+56 2 2345 6789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>contacto@luxeprop.cl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="font-body text-xs text-background/40">
            © 2026 LUXEPROP. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Instagram", "LinkedIn", "Facebook", "WhatsApp"].map((social) => (
              <span
                key={social}
                className="cursor-pointer font-body text-xs uppercase tracking-wider text-background/40 transition-colors hover:text-background"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
