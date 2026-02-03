import { useState } from "react";
import { Globe, Stethoscope, Eye } from "lucide-react";
import { useStaggerReveal } from "@/hooks/useScrollReveal";
import hydraLogo from "@/assets/hydra-logo.png";
import bunkerLogo from "@/assets/bunker-logo.png";
import marialeLogo from "@/assets/mariale-logo.png";
import inventoryCloudLogo from "@/assets/inventory-cloud-logo.png";
import inventoryDashboard from "@/assets/proyects/Inventory/inventory-dahboard.jpg";
import inventoryResguardos from "@/assets/proyects/Inventory/inventory-resguardos.jpg";
import inventoryReportes from "@/assets/proyects/Inventory/inventory-resportes.jpg";
import bunkerLogin from "@/assets/proyects/Bunker/bunker-login.jpg";
import bunkerPadron from "@/assets/proyects/Bunker/bunker-padron.jpg";
import bunkerAsambleas from "@/assets/proyects/Bunker/bunker-asambleas.jpg";
import bunkerRoles from "@/assets/proyects/Bunker/bunker-roles.jpg";
import ProjectModal, { type Project } from "./ProjectModal";

const projects: Project[] = [
  {
    name: "Hydra",
    description: "Sistema de gestión de pozo de agua, usuarios y medidores",
    fullDescription: "Sistema integral para la gestión de pozos de agua, control de usuarios, medidores y cobranza",
    image: hydraLogo,
    features: [
      "Control de consumo por medidor",
      "Cobros de servicio",
      "Gestión de usuarios y permisos",
      "Control de almacen",
    ],
  },
  {
    name: "BUNKER",
    description: "Plataforma de gobernanza e identidad Digital",
    fullDescription: "Plataforma segura para gestión de identidad digital y gobernanza corporativa.",
    image: bunkerLogo,
    screenshots: [bunkerLogin, bunkerPadron, bunkerAsambleas, bunkerRoles],
    features: [
      "ID ciudadano",
      "Control de aportaciones comunitarias",
      "Gestión de asambleas y eventos",
      "Auditoría y trazabilidad",
    ],
  },
  {
    name: "MARIALE",
    description: "Sistema simple de punto de venta",
    fullDescription: "Punto de venta intuitivo y rápido, diseñado para pequeños y medianos negocios.",
    image: marialeLogo,
    features: [
      "Interfaz sencilla",
      "Control de inventario",
      "Reportes de ventas",
      "Control de caja",
    ],
  },
  {
    name: "Inventory Cloud",
    description: "Control de inventario en tiempo real, desde cualquier lugar, sin perder detalle.",
    fullDescription: "Solución en la nube para gestionar tu inventario desde cualquier dispositivo, con actualizaciones en tiempo real.",
    image: inventoryCloudLogo,
    screenshots: [inventoryDashboard, inventoryResguardos, inventoryReportes],
    features: [
      "Sincronización en tiempo real",
      "Control de resguardos",
      "Múltiples comodatos",
      "Códigos QR",
    ],
  },
  {
    name: "Sitios Web",
    description: "Presencia digital moderna que comunica y conecta con las personas correctas.",
    fullDescription: "Diseño web moderno optimizado, creando una presencia digital memorable.",
    icon: Globe,
    features: [
      "Diseño responsive",
      "Optimización SEO",
      "Velocidad de carga rápida",
      "Integración con redes sociales",
    ],
  },
  {
    name: "EVA",
    description: "Plataforma medica integral para el control de citas, referencias, contrareferencias y CIE-11",
    fullDescription: "Sistema médico completo para gestión de citas, expedientes clínicos, referencias y clasificación CIE-11.",
    icon: Stethoscope,
    features: [
      "Agenda de citas inteligente",
      "Expediente clínico electrónico",
      "Referencias y contrareferencias",
      "Codificación CIE-11 integrada",
    ],
  },
];

const RealCases = () => {
  const { ref, getItemStyle } = useStaggerReveal(projects.length, 100);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
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
                onClick={() => setSelectedProject(project)}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 space-y-4 relative overflow-hidden cursor-pointer"
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

                {/* View more indicator */}
                <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                  <Eye className="w-4 h-4" />
                  <span>Ver detalles</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default RealCases;
