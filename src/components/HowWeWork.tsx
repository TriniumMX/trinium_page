import { useState } from "react";
import { Ear, Sparkles, Wrench, Heart, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Step = {
  icon: typeof Ear;
  title: string;
  description: string;
  hook: string;
  expandedDescription: string;
  cta: string;
};

const steps: Step[] = [
  {
    icon: Ear,
    title: "Te escuchamos",
    description: "Entendemos lo que necesitas y cómo te podemos ayudar.",
    hook: "¿Cansado de que no te entiendan?",
    expandedDescription: "No solo escuchamos tus palabras, entendemos tu problema real. Hacemos las preguntas correctas para darte exactamente lo que necesitas.",
    cta: "Cuéntanos tu historia",
  },
  {
    icon: Sparkles,
    title: "Lo hacemos simple",
    description: "Convertimos ideas complicadas en soluciones fáciles de entender.",
    hook: "¿La tecnología te parece complicada?",
    expandedDescription: "Nosotros hablamos tu idioma. Sin tecnicismos, sin jerga confusa. Te explicamos todo de forma clara para que siempre sepas qué está pasando.",
    cta: "Simplifiquemos juntos",
  },
  {
    icon: Wrench,
    title: "Lo construimos",
    description: "Creamos la solución perfecta para ti, con cuidado y dedicación.",
    hook: "¿Has tenido malas experiencias con proyectos?",
    expandedDescription: "Cada línea de código la escribimos pensando en ti. Con atención al detalle, probando todo antes de entregarlo. Nada sale de aquí sin estar perfecto.",
    cta: "Construyamos algo increíble",
  },
  {
    icon: Heart,
    title: "Te acompañamos",
    description: "Siempre estamos aquí cuando nos necesites.",
    hook: "¿Te han dejado solo después de entregar?",
    expandedDescription: "No desaparecemos cuando termina el proyecto. Estamos aquí para resolver dudas, hacer ajustes y crecer contigo. Somos tu equipo de tecnología.",
    cta: "Seamos equipo",
  },
];

const HowWeWork = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal();
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  const getItemStyle = (index: number) => ({
    opacity: stepsVisible ? 1 : 0,
    transform: stepsVisible ? "translateX(0)" : "translateX(-50px)",
    transition: `opacity 0.6s ease-out ${index * 150}ms, transform 0.6s ease-out ${index * 150}ms`,
  });

  const getSvgStyle = () => ({
    opacity: stepsVisible ? 1 : 0,
    strokeDasharray: 1000,
    strokeDashoffset: stepsVisible ? 0 : 1000,
    transition: "stroke-dashoffset 1.5s ease-out 0.3s, opacity 0.6s ease-out",
  });

  const handleCTAClick = () => {
    setSelectedStep(null);
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
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
            <div className="hidden lg:block absolute top-[40px] left-0 right-0 z-0 px-[6.25%] -translate-y-1/2">
              <svg 
                viewBox="0 0 1050 80" 
                className="w-full h-20"
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
                {/* First curve: step 1 to step 2 */}
                <path
                  d="M 95 40 Q 230 110 370 40"
                  fill="none"
                  stroke="url(#curveGradient1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={getSvgStyle()}
                />
                {/* Second curve: step 2 to step 3 */}
                <path
                  d="M 370 40 Q 525 -30 680 40"
                  fill="none"
                  stroke="url(#curveGradient2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    ...getSvgStyle(),
                    transitionDelay: "0.6s",
                  }}
                />
                {/* Third curve: step 3 to step 4 */}
                <path
                  d="M 680 40 Q 820 110 955 40"
                  fill="none"
                  stroke="url(#curveGradient3)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    ...getSvgStyle(),
                    transitionDelay: "0.9s",
                  }}
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
                      <button
                        onClick={() => setSelectedStep(step)}
                        className="group relative w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
                      >
                        <Icon className="w-10 h-10 text-primary-foreground" />
                        <Badge 
                          className="absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center p-0 bg-background text-foreground border-2 border-primary font-bold shadow-md"
                        >
                          {index + 1}
                        </Badge>
                      </button>
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

      {/* Step Modal */}
      <Dialog open={!!selectedStep} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="space-y-4">
            {selectedStep && (
              <>
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto">
                  <selectedStep.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <DialogTitle className="text-2xl text-center">
                  {selectedStep.hook}
                </DialogTitle>
                <DialogDescription className="text-base text-center leading-relaxed">
                  {selectedStep.expandedDescription}
                </DialogDescription>
              </>
            )}
          </DialogHeader>
          
          {selectedStep && (
            <div className="mt-6 flex flex-col gap-3">
              <Button 
                onClick={handleCTAClick}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                {selectedStep.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HowWeWork;
