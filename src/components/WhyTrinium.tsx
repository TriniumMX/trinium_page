import { MessageCircle, CheckCircle, Users, Shield } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const reasons = [
  {
    icon: MessageCircle,
    title: "Hablamos claro",
    description: "Sin tecnicismos raros. Te explicamos todo de forma simple y honesta.",
  },
  {
    icon: CheckCircle,
    title: "Soluciones que sí funcionan",
    description: "No hacemos cosas bonitas que no sirven. Hacemos cosas útiles que funcionan.",
  },
  {
    icon: Users,
    title: "Te acompañamos siempre",
    description: "No te dejamos solo después de entregar el proyecto. Estamos contigo.",
  },
  {
    icon: Shield,
    title: "Paz y orden",
    description: "Nuestra tecnología te da tranquilidad y mantiene todo en su lugar.",
  },
];

const WhyTrinium = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, getItemStyle } = useStaggerReveal(reasons.length, 120);

  return (
    <section id="por-que-trinium" className="py-20 md:py-32 bg-secondary/30">
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
            <span className="text-foreground">¿Por qué </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">TRINIUM?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Razones reales para confiar en nosotros
          </p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={getItemStyle(index)}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyTrinium;
