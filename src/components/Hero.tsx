import { Button } from "@/components/ui/button";
import triniumLogo from "@/assets/trinium-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <img 
              src={triniumLogo} 
              alt="TRINIUM Logo" 
              className="h-24 md:h-32 lg:h-36 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Tecnología con corazón.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Hacemos que tu trabajo sea más fácil, más rápido y sin complicaciones.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all text-lg px-8 py-6 rounded-full"
            >
              Hablemos
            </Button>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
            <img 
              src={triniumLogo} 
              alt="TRINIUM - Tecnología con corazón" 
              className="relative w-full max-w-md mx-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
