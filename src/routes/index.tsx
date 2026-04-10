import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ryu Propiedades — Arriendos y Ventas en Los Ángeles" },
      { name: "description", content: "Arriendos, ventas, administración y constructora en Los Ángeles, Chile. Encuentra tu propiedad ideal con Ryu Propiedades." },
      { property: "og:title", content: "Ryu Propiedades — Arriendos y Ventas en Los Ángeles" },
      { property: "og:description", content: "Arriendos, ventas, administración y constructora en Los Ángeles, Chile." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
