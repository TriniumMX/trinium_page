import { useState } from "react";
import { Heart, Mail, Phone, MapPin, Linkedin, Instagram, Github, Sparkles } from "lucide-react";
import triniumLogo from "@/assets/trinium-logo.png";
import triniumLogoDark from "@/assets/trinium-logo-dark.png";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", hoverColor: "hover:bg-[#0077b5]" },
  { icon: Instagram, href: "https://www.instagram.com/triniummx", label: "Instagram", hoverColor: "hover:bg-[#e4405f]" },
  { icon: Github, href: "#", label: "GitHub", hoverColor: "hover:bg-[#333]" },
];

const Footer = () => {
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  return (
    <footer id="contacto" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <img src={triniumLogo} alt="TRINIUM Logo" className="h-12 w-auto brightness-0 invert dark:hidden" />
            <img src={triniumLogoDark} alt="TRINIUM Logo" className="h-12 w-auto hidden dark:block" />
            <p className="text-background/80 leading-relaxed">Tecnología con corazón para hacer tu vida más fácil.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contacto</h3>
            <div className="space-y-3 text-background/80">
              <a
                href="mailto:hola@trinium.com.mx"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hola@trinium.com.mx</span>
              </a>
              <a href="tel:+524271234567" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+52 (427) 123-4567 Proximamente</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>San Juan del Río, Querétaro, México</span>
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
            Hecho con{" "}
            <button
              onClick={() => setEasterEggOpen(true)}
              className="group relative focus:outline-none"
              aria-label="Descubre un secreto"
            >
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse transition-transform duration-300 group-hover:scale-125 cursor-pointer" />
            </button>{" "}
            por TRINIUM
          </p>
          <p className="text-background/60 mt-2">© {new Date().getFullYear()} TRINIUM. Estamos para ayudarte.</p>
        </div>

        {/* Easter Egg Modal */}
        <Dialog open={easterEggOpen} onOpenChange={setEasterEggOpen}>
          <DialogContent className="sm:max-w-md bg-gradient-to-br from-background via-background to-primary/10 border-primary/20">
            <div className="flex flex-col items-center text-center space-y-6 py-4">
              <div className="relative">
                <div className="absolute inset-0 animate-ping bg-primary/20 rounded-full" />
                <div className="relative bg-primary/10 p-4 rounded-full">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ¡Exacto! 🎯
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sabemos que siempre esperas que cada elemento sea funcional, que te sorprenda, que tenga un propósito.
                </p>
                <p className="text-foreground font-medium">Así somos en Trinium: cada detalle cuenta.</p>
                <p className="text-primary font-semibold flex items-center justify-center gap-2">
                  Tecnología con corazón, siempre.
                  <Heart className="w-4 h-4 fill-primary" />
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </footer>
  );
};

export default Footer;
