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
        
        <div ref={stepsRef} className="relative max-w-6xl mx-auto">
          {/* Curved connectors - only visible on lg screens */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 z-0 px-[6.25%]">
            <svg 
              viewBox="0 0 1050 60" 
              className="w-full h-16"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient id="curveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {/* First curve: step 1 to step 2 - starts after circle 1, ends before circle 2 */}
              <path
                d="M 50 30 Q 175 90 300 30"
                fill="none"
                stroke="url(#curveGradient1)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Second curve: step 2 to step 3 - starts after circle 2, ends before circle 3 */}
              <path
                d="M 400 30 Q 525 -30 650 30"
                fill="none"
                stroke="url(#curveGradient2)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Third curve: step 3 to step 4 - starts after circle 3, ends before circle 4 */}
              <path
                d="M 750 30 Q 875 90 1000 30"
                fill="none"
                stroke="url(#curveGradient3)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  );
};

export default HowWeWork;
