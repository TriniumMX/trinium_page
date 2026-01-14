import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "TRINIUM transformó completamente nuestra forma de trabajar. La tecnología que implementaron nos ahorra horas cada semana.",
    author: "Gabriela",
    role: "Presidenta del sociedad de pozo de agua",
    company: "",
    avatar: "MG",
  },
  {
    quote: "Lo que más valoro es su enfoque humano. No solo entregan software, sino soluciones que realmente entienden nuestras necesidades.",
    author: "Carlos Rodríguez",
    role: "Gerente General",
    company: "Innovatech",
    avatar: "CR",
  },
  {
    quote: "El equipo de TRINIUM se convirtió en parte de nuestro equipo. Su compromiso y profesionalismo son excepcionales.",
    author: "Ana Martínez",
    role: "CEO",
    company: "StartUp Plus",
    avatar: "AM",
  },
  {
    quote: "Gracias a TRINIUM, nuestros procesos médicos son más eficientes y nuestros pacientes reciben mejor atención.",
    author: "Dr. Roberto López",
    role: "Director Médico",
    company: "Clínica Salud",
    avatar: "RL",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16 space-y-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease-out",
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Historias reales de quienes han confiado en nosotros
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease-out 200ms",
          }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-6 h-full">
                    <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col hover:shadow-xl transition-shadow">
                      <Quote className="w-10 h-10 text-primary/30 mb-4" />
                      <p className="text-foreground/90 leading-relaxed flex-grow mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
