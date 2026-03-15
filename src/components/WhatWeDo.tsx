import { useState } from "react";
import { Code, Cloud, Zap, Database, Server, Wifi, Shield } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Service = {
  icon: typeof Code;
  title: string;
  description: string;
  hook: string;
  expandedDescription: string;
  cta: string;
};

const services: Service[] = [
  {
    icon: Code,
    title: "Desarrollo de herramientas digitales",
    description: "Creamos aplicaciones y sistemas que realmente funcionan y son fáciles de usar.",
    hook: "¿Tu negocio depende de Excel o papel?",
    expandedDescription: "Creamos apps y sistemas a tu medida. Fáciles de usar, que realmente resuelven tus problemas del día a día.",
    cta: "Cuéntanos tu reto",
  },
  {
    icon: Database,
    title: "Sistemas para organización",
    description: "Plataformas que te ayudan a mantener todo en orden, sin complicaciones.",
    hook: "¿Pierdes tiempo buscando información?",
    expandedDescription: "Diseñamos plataformas donde todo está en su lugar. Encuentra lo que necesitas en segundos, no en horas.",
    cta: "Organicemos tu mundo",
  },
  {
    icon: Cloud,
    title: "Soluciones en la nube",
    description: "Guardamos tu información de forma segura para que nada se te borre.",
    hook: "¿Te preocupa perder tu información?",
    expandedDescription: "Tu información segura, accesible desde cualquier lugar. Sin miedo a que algo se borre o se pierda.",
    cta: "Protege tu negocio",
  },
  {
    icon: Zap,
    title: "Automatizaciones inteligentes",
    description: "Herramientas que ahorran tiempo haciendo tareas repetitivas por ti.",
    hook: "¿Cuántas horas pierdes en tareas repetitivas?",
    expandedDescription: "Automatizamos lo tedioso para que tú te enfoques en lo importante. Más tiempo, menos estrés.",
    cta: "Ahorra tiempo ahora",
  },
];

const infraServices: Service[] = [
  {
    icon: Server,
    title: "Servidores y Datacenter",
    description: "Configuración y mantenimiento de servidores Windows y Linux, arreglos RAID, gestión remota con ILO/iDRAC.",
    hook: "¿Tu servidor se cae y nadie sabe por qué?",
    expandedDescription: "Configuramos y mantenemos servidores físicos y virtuales con monitoreo proactivo. Experiencia con RAID, ILO, iDRAC, IIS y Nginx.",
    cta: "Estabiliza tu infraestructura",
  },
  {
    icon: Wifi,
    title: "Redes y Conectividad",
    description: "Redes empresariales con Mikrotik, WiFi mesh administrado, VPNs y enlaces de microondas de largo alcance.",
    hook: "¿Tu red es lenta o inestable?",
    expandedDescription: "Diseñamos redes robustas con equipos Mikrotik, WiFi mesh, VPNs Endian y enlaces punto a punto para conectar sucursales.",
    cta: "Mejora tu conectividad",
  },
  {
    icon: Shield,
    title: "Seguridad IT",
    description: "Seguridad perimetral, filtros de contenido, DHCP administrado y control de acceso a la red.",
    hook: "¿Sabes quién accede a tu red?",
    expandedDescription: "Implementamos firewalls, filtros de contenido, segmentación de red y políticas de seguridad para proteger tu infraestructura.",
    cta: "Protege tu red",
  },
];

const WhatWeDo = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, getItemStyle } = useStaggerReveal(services.length, 100);
  const { ref: infraTitleRef, isVisible: infraTitleVisible } = useScrollReveal();
  const { ref: infraCardsRef, getItemStyle: getInfraItemStyle } = useStaggerReveal(infraServices.length, 100);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section id="que-hacemos" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div 
            ref={titleRef}
            className="text-center mb-16 space-y-4"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.6s ease-out",
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-foreground">¿Qué </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">hacemos?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Creamos soluciones digitales que hacen tu vida más fácil
            </p>
          </div>
          
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedService(service)}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer text-left"
                  style={getItemStyle(index)}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Infraestructura y DevOps Subsection */}
          <div
            ref={infraTitleRef}
            className="text-center mt-24 mb-12 space-y-4"
            style={{
              opacity: infraTitleVisible ? 1 : 0,
              transform: infraTitleVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.6s ease-out",
            }}
          >
            <h3 className="text-2xl md:text-4xl font-bold">
              <span className="text-foreground">También cuidamos </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">lo que no se ve</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Con más de 15 años de experiencia en infraestructura IT
            </p>
          </div>

          <div ref={infraCardsRef} className="grid md:grid-cols-3 gap-8">
            {infraServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedService(service)}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer text-left"
                  style={getInfraItemStyle(index)}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="space-y-4">
            {selectedService && (
              <>
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto">
                  <selectedService.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <DialogTitle className="text-2xl text-center">
                  {selectedService.hook}
                </DialogTitle>
                <DialogDescription className="text-base text-center leading-relaxed">
                  {selectedService.expandedDescription}
                </DialogDescription>
              </>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatWeDo;
