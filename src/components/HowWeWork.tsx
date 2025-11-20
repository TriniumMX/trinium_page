import { Ear, Sparkles, Wrench, Heart } from "lucide-react";

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
  return (
    <section className="py-20 md:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No necesitas saber de tecnología. Nosotros lo hacemos por ti.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center space-y-4"
              >
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent opacity-30" />
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
