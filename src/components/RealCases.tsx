import { Globe, Stethoscope, LucideIcon } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import hydraLogo from "@/assets/hydra-logo.png";
import bunkerLogo from "@/assets/bunker-logo.png";
import marialeLogo from "@/assets/mariale-logo.png";
import inventoryCloudLogo from "@/assets/inventory-cloud-logo.png";
type Project = {
  name: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
};

const projects: Project[] = [
  {
    name: "Hydra",
    description: "Sistema de gestión de pozo de agua, usuarios y medidores",
    image: hydraLogo,
  },
  {
    name: "BUNKER",
    description: "Plataforma de gobernanza e identidad Digital",
    image: bunkerLogo,
  },
  {
    name: "MARIALE",
    description: "Sistema simple de punto de venta",
    image: marialeLogo,
  },
  {
    name: "Inventory Cloud",
    description: "Control de inventario en tiempo real, desde cualquier lugar, sin perder detalle.",
    image: inventoryCloudLogo,
  },
  {
    name: "Sitio web SJR",
    description: "Presencia digital moderna que comunica y conecta con las personas correctas.",
    icon: Globe,
  },
  {
    name: "MERIDIA",
    description: "Plataforma medica integral para el control de citas, referencias, contrareferencias y CIE-11",
    icon: Stethoscope,
  },
];

const RealCases = () => {
  const { ref, getItemStyle } = useStaggerReveal(projects.length, 100);

  return (
    <section id="casos-reales" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-foreground">Casos </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">reales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proyectos que han ayudado a personas y organizaciones a trabajar mejor
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 space-y-4 relative overflow-hidden"
                style={getItemStyle(index)}
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="flex items-center space-x-3 relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.name} className="w-10 h-10 object-contain" />
                    ) : project.icon ? (
                      <project.icon className="w-6 h-6 text-primary-foreground" />
                    ) : null}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed relative">
                  {project.description}
                </p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealCases;
