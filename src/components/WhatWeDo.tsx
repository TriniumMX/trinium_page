import { useState } from "react";
import { Code, Cloud, Zap, Database, ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Service = {
  icon: typeof Code;
  title: string;
  description: string;
  hook: string;
  expandedDescription: string;
  cta: string;
};

const services: Service[] = [
  {
    icon: Code,
    title: "Desarrollo de herramientas digitales",
    description: "Creamos aplicaciones y sistemas que realmente funcionan y son fáciles de usar.",
    hook: "¿Tu negocio depende de Excel o papel?",
    expandedDescription: "Creamos apps y sistemas a tu medida. Fáciles de usar, que realmente resuelven tus problemas del día a día.",
    cta: "Cuéntanos tu reto",
  },
  {
    icon: Database,
    title: "Sistemas para organización",
    description: "Plataformas que te ayudan a mantener todo en orden, sin complicaciones.",
    hook: "¿Pierdes tiempo buscando información?",
    expandedDescription: "Diseñamos plataformas donde todo está en su lugar. Encuentra lo que necesitas en segundos, no en horas.",
    cta: "Organicemos tu mundo",
  },
  {
    icon: Cloud,
    title: "Soluciones en la nube",
    description: "Guardamos tu información de forma segura para que nada se te borre.",
    hook: "¿Te preocupa perder tu información?",
    expandedDescription: "Tu información segura, accesible desde cualquier lugar. Sin miedo a que algo se borre o se pierda.",
    cta: "Protege tu negocio",
  },
  {
    icon: Zap,
    title: "Automatizaciones inteligentes",
    description: "Herramientas que ahorran tiempo haciendo tareas repetitivas por ti.",
    hook: "¿Cuántas horas pierdes en tareas repetitivas?",
    expandedDescription: "Automatizamos lo tedioso para que tú te enfoques en lo importante. Más tiempo, menos estrés.",
    cta: "Ahorra tiempo ahora",
  },
];

const WhatWeDo = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, getItemStyle } = useStaggerReveal(services.length, 100);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleCTAClick = () => {
    setSelectedService(null);
    // Scroll to contact section
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="que-hacemos" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={titleRef}
            className="text-center mb-16 space-y-4"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.6s ease-out",
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground">¿Qué </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">hacemos?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Creamos soluciones digitales que hacen tu vida más fácil
            </p>
          </div>
          
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedService(service)}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer text-left"
                  style={getItemStyle(index)}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-4 h-4" />
                    Descubre más
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="space-y-4">
            {selectedService && (
              <>
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto">
                  <selectedService.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <DialogTitle className="text-2xl text-center">
                  {selectedService.hook}
                </DialogTitle>
                <DialogDescription className="text-base text-center leading-relaxed">
                  {selectedService.expandedDescription}
                </DialogDescription>
              </>
            )}
          </DialogHeader>
          
          {selectedService && (
            <div className="mt-6 flex flex-col gap-3">
              <Button 
                onClick={handleCTAClick}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                {selectedService.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatWeDo;
