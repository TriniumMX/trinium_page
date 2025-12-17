import { Ear, Sparkles, Wrench, Heart } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: Ear,
    title: "Te escuchamos",
    description: "Entendemos lo que necesitas y cómo te podemos ayudar.",
  },
  {
    icon: Sparkles,
    title: "Lo hacemos simple",
    description: "Convertimos ideas complicadas en soluciones fáciles de entender.",
  },
  {
    icon: Wrench,
    title: "Lo construimos",
    description: "Creamos la solución perfecta para ti, con cuidado y dedicación.",
  },
  {
    icon: Heart,
    title: "Te acompañamos",
    description: "Siempre estamos aquí cuando nos necesites.",
  },
];

const HowWeWork = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: stepsRef, getItemStyle } = useStaggerReveal(steps.length, 150);

  return (
    <section id="como-trabajamos" className="py-20 md:py-32 bg-secondary/30">
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
            <span className="text-foreground">¿Cómo </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">trabajamos?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No necesitas saber de tecnología. Nosotros lo hacemos por ti.
          </p>
        </div>
        
        <div ref={stepsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center space-y-4"
                style={getItemStyle(index)}
              >
              <div className="flex justify-center relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] z-0">
                    <div className="h-1 w-full rounded-full bg-gradient-to-r from-primary/20 via-primary/50 to-accent/80 shadow-sm" />
                  </div>
                )}
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
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

export default HowWeWork;
