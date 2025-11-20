import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Hablemos.
          </h2>
          
          <p className="text-2xl text-muted-foreground">
            Queremos ayudarte.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all text-lg px-10 py-7 rounded-full group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Contáctanos
          </Button>
          
          <p className="text-muted-foreground pt-4">
            Responderemos pronto con una sonrisa
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
