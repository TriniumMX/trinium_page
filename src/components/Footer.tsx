import { Heart, Mail, Phone, MapPin } from "lucide-react";
import triniumLogo from "@/assets/trinium-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <img 
              src={triniumLogo} 
              alt="TRINIUM Logo" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-background/80 leading-relaxed">
              Tecnología con corazón para hacer tu vida más fácil.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contacto</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>hola@trinium.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+52 (999) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>México</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Síguenos</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-semibold">in</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <span className="text-sm font-semibold">𝕏</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> por TRINIUM
          </p>
          <p className="text-background/60 mt-2">
            Estamos para ayudarte.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
