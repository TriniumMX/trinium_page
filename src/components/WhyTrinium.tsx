import { MessageCircle, CheckCircle, Users, Shield } from "lucide-react";

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
  return (
    <section className="py-20 md:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            ¿Por qué TRINIUM?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Razones reales para confiar en nosotros
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
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
