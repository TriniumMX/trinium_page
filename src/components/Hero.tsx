import { Button } from "@/components/ui/button";
import triniumLogo from "@/assets/trinium-logo.png";
import triniumLogoDark from "@/assets/trinium-logo-dark.png";
import FloatingShapes from "./FloatingShapes";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft pt-20">
      <FloatingShapes />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Tecnología con </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">corazón.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Hacemos que tu trabajo sea más fácil, más rápido y sin complicaciones.
            </p>
            
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-105 transition-all text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl"
            >
              Hablemos
            </Button>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full animate-pulse"></div>
            <img 
              src={triniumLogo} 
              alt="TRINIUM - Tecnología con corazón" 
              className="relative w-full max-w-2xl mx-auto drop-shadow-2xl animate-float dark:hidden" 
            />
            <img 
              src={triniumLogoDark} 
              alt="TRINIUM - Tecnología con corazón" 
              className="relative w-full max-w-2xl mx-auto drop-shadow-2xl animate-float hidden dark:block" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;