import { Heart, Mail, Phone, MapPin, Linkedin, Instagram, Github } from "lucide-react";
import triniumLogo from "@/assets/trinium-logo.png";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", hoverColor: "hover:bg-[#0077b5]" },
  { icon: Instagram, href: "#", label: "Instagram", hoverColor: "hover:bg-[#e4405f]" },
  { icon: Github, href: "#", label: "GitHub", hoverColor: "hover:bg-[#333]" },
];

const Footer = () => {
  return (
    <footer id="contacto" className="bg-foreground text-background py-16">
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
              <a href="mailto:hola@trinium.com.mx" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>hola@trinium.com.mx</span>
              </a>
              <a href="tel:+529991234567" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+52 (999) 123-4567</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>México</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Síguenos</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className={`w-10 h-10 rounded-full bg-background/10 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> por TRINIUM
          </p>
          <p className="text-background/60 mt-2">
            © {new Date().getFullYear()} TRINIUM. Estamos para ayudarte.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
