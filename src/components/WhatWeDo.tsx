import { Code, Cloud, Zap, Database } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Code,
    title: "Desarrollo de herramientas digitales",
    description: "Creamos aplicaciones y sistemas que realmente funcionan y son fáciles de usar.",
  },
  {
    icon: Database,
    title: "Sistemas para organización",
    description: "Plataformas que te ayudan a mantener todo en orden, sin complicaciones.",
  },
  {
    icon: Cloud,
    title: "Soluciones en la nube",
    description: "Guardamos tu información de forma segura para que nada se te borre.",
  },
  {
    icon: Zap,
    title: "Automatizaciones inteligentes",
    description: "Herramientas que ahorran tiempo haciendo tareas repetitivas por ti.",
  },
];

const WhatWeDo = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, getItemStyle } = useStaggerReveal(services.length, 100);

  return (
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
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={getItemStyle(index)}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
