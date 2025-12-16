import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import triniumLogo from "@/assets/trinium-logo.png";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Qué hacemos", href: "#que-hacemos" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Casos reales", href: "#casos-reales" },
  { label: "Por qué TRINIUM", href: "#por-que-trinium" },
  { label: "Filosofía", href: "#filosofia" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={triniumLogo}
              alt="TRINIUM"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("#contacto")}
              className="hidden md:inline-flex bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all rounded-full px-6"
            >
              Hablemos
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contacto")}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all rounded-full w-full mt-4"
            >
              Hablemos
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
