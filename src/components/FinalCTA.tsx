import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ContactModal from "./ContactModal";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="contacto" className="py-20 md:py-32 bg-gradient-soft" ref={ref}>
      <div className="container mx-auto px-4">
        <div 
          className="max-w-3xl mx-auto text-center space-y-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease-out",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Hablemos.</span>
          </h2>
          
          <p className="text-2xl text-muted-foreground">
            Queremos ayudarte.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all text-lg px-10 py-7 rounded-full group shadow-lg hover:shadow-xl"
            onClick={() => setContactOpen(true)}
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Escríbenos ahora
          </Button>
          
          <p className="text-muted-foreground pt-4">
            Responderemos pronto con una sonrisa
          </p>
        </div>
      </div>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </section>
  );
};

export default FinalCTA;
