import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logoRyu from "@/assets/logo-ryu.jpg";

export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Credenciales inválidas. Intenta de nuevo.");
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-sm rounded-lg bg-card p-8 shadow-lg border border-border">
        <div className="flex flex-col items-center mb-6">
          <img src={logoRyu} alt="Ryu Propiedades" className="h-16 w-16 rounded-full object-cover mb-3" />
          <h1 className="font-heading text-xl font-bold text-foreground">Panel Administrativo</h1>
          <p className="text-body text-sm mt-1">Ryu Propiedades</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@ryupropiedades.cl"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm font-medium">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="mt-1"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-luxury-primary rounded-md py-2.5 text-sm disabled:opacity-50"
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
