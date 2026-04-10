import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { properties, type Property } from "@/data/properties";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bed, Bath, Maximize, LogOut, Plus, Edit, Trash2 } from "lucide-react";

export function AdminDashboard({ session }: { session: any }) {
  const [activeTab, setActiveTab] = useState<"list" | "add">("list");
  const [filterTag, setFilterTag] = useState<Property["tag"] | "all">("all");

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const filtered = filterTag === "all"
    ? properties
    : properties.filter((p) => p.tag === filterTag);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Panel Administrativo</h1>
          <p className="text-body text-sm mt-1">{session.user.email}</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <button
            onClick={() => setActiveTab("list")}
            className={`px-4 py-2 rounded-md text-xs font-medium transition-colors ${activeTab === "list" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"}`}
          >
            Propiedades
          </button>
          <button
            onClick={() => setActiveTab("add")}
            className={`px-4 py-2 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${activeTab === "add" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"}`}
          >
            <Plus size={14} />
            Agregar
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-md text-xs font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors flex items-center gap-1"
          >
            <LogOut size={14} />
            Salir
          </button>
        </div>
      </div>

      {activeTab === "list" && (
        <PropertyList filtered={filtered} filterTag={filterTag} setFilterTag={setFilterTag} />
      )}
      {activeTab === "add" && (
        <AddPropertyForm onDone={() => setActiveTab("list")} />
      )}
    </div>
  );
}

function PropertyList({
  filtered,
  filterTag,
  setFilterTag,
}: {
  filtered: Property[];
  filterTag: Property["tag"] | "all";
  setFilterTag: (tag: Property["tag"] | "all") => void;
}) {
  const tags: (Property["tag"] | "all")[] = ["all", "Arriendo", "Venta", "Terreno"];

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilterTag(tag)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${filterTag === tag ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"}`}
          >
            {tag === "all" ? "Todos" : tag}
          </button>
        ))}
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 font-body text-xs font-semibold text-foreground">Propiedad</th>
                <th className="px-4 py-3 font-body text-xs font-semibold text-foreground hidden md:table-cell">Ubicación</th>
                <th className="px-4 py-3 font-body text-xs font-semibold text-foreground">Precio</th>
                <th className="px-4 py-3 font-body text-xs font-semibold text-foreground hidden sm:table-cell">Tipo</th>
                <th className="px-4 py-3 font-body text-xs font-semibold text-foreground hidden lg:table-cell">Detalles</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-t border-border hover:bg-accent/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.title} className="h-10 w-14 rounded object-cover hidden sm:block" />
                      <span className="font-body text-sm font-medium text-foreground">{p.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-body text-sm text-muted-foreground hidden md:table-cell">{p.location}</td>
                  <td className="px-4 py-3 font-heading text-sm font-semibold text-primary">{p.price}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <span className="rounded bg-primary/10 px-2 py-0.5 font-body text-xs font-medium text-primary">{p.tag}</span>
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <span className="flex items-center gap-1 text-xs"><Bed size={12} />{p.beds}</span>
                      <span className="flex items-center gap-1 text-xs"><Bath size={12} />{p.baths}</span>
                      <span className="flex items-center gap-1 text-xs"><Maximize size={12} />{p.area}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-4 text-body text-xs text-center">
        {filtered.length} propiedad{filtered.length !== 1 ? "es" : ""} encontrada{filtered.length !== 1 ? "s" : ""}
      </p>

      <div className="mt-8 rounded-lg bg-accent/50 p-6 text-center">
        <p className="font-heading text-lg font-semibold text-foreground mb-2">
          Gestión avanzada próximamente
        </p>
        <p className="text-body text-sm max-w-md mx-auto">
          Para agregar, editar o eliminar propiedades de forma persistente, conectaremos la base de datos de Lovable Cloud. Por ahora las propiedades se gestionan desde el código.
        </p>
      </div>
    </div>
  );
}

function AddPropertyForm({ onDone }: { onDone: () => void }) {
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    beds: "",
    baths: "",
    area: "",
    tag: "Arriendo" as Property["tag"],
    description: "",
    features: "",
    availability: "Disponible",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Para agregar propiedades de forma persistente, necesitamos configurar la base de datos. Por ahora esta funcionalidad es de demostración.");
    onDone();
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Agregar Propiedad</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label className="text-sm">Título</Label>
            <Input value={form.title} onChange={(e) => update("title", e.target.value)} required className="mt-1" />
          </div>
          <div>
            <Label className="text-sm">Ubicación</Label>
            <Input value={form.location} onChange={(e) => update("location", e.target.value)} required className="mt-1" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <Label className="text-sm">Precio</Label>
            <Input value={form.price} onChange={(e) => update("price", e.target.value)} placeholder="$600.000 CLP" required className="mt-1" />
          </div>
          <div>
            <Label className="text-sm">Tipo</Label>
            <select
              value={form.tag}
              onChange={(e) => update("tag", e.target.value)}
              className="mt-1 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
            >
              <option value="Arriendo">Arriendo</option>
              <option value="Venta">Venta</option>
              <option value="Terreno">Terreno</option>
            </select>
          </div>
          <div>
            <Label className="text-sm">Disponibilidad</Label>
            <Input value={form.availability} onChange={(e) => update("availability", e.target.value)} className="mt-1" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <Label className="text-sm">Dormitorios</Label>
            <Input type="number" value={form.beds} onChange={(e) => update("beds", e.target.value)} min="0" className="mt-1" />
          </div>
          <div>
            <Label className="text-sm">Baños</Label>
            <Input type="number" value={form.baths} onChange={(e) => update("baths", e.target.value)} min="0" className="mt-1" />
          </div>
          <div>
            <Label className="text-sm">Superficie</Label>
            <Input value={form.area} onChange={(e) => update("area", e.target.value)} placeholder="54 m²" className="mt-1" />
          </div>
        </div>

        <div>
          <Label className="text-sm">Características (separadas por coma)</Label>
          <Input value={form.features} onChange={(e) => update("features", e.target.value)} placeholder="Cocina equipada, Internet, Estacionamiento" className="mt-1" />
        </div>

        <div>
          <Label className="text-sm">Descripción</Label>
          <textarea
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            rows={4}
            className="mt-1 flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            required
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit" className="btn-luxury-primary rounded-md text-xs flex-1">
            Guardar Propiedad
          </button>
          <button type="button" onClick={onDone} className="btn-luxury-outline rounded-md text-xs flex-1">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
