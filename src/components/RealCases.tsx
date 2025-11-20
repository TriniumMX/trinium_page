const projects = [
  {
    name: "Hydra",
    description: "Sistema completo de gestión que simplifica procesos y mantiene todo organizado.",
  },
  {
    name: "RECODIG",
    description: "Plataforma digital que conecta personas y hace que la información fluya sin complicaciones.",
  },
  {
    name: "BUNKER",
    description: "Solución segura en la nube donde guardar y proteger información importante.",
  },
  {
    name: "Inventory Cloud",
    description: "Control de inventario en tiempo real, desde cualquier lugar, sin perder detalle.",
  },
  {
    name: "Sitio web SJR",
    description: "Presencia digital moderna que comunica y conecta con las personas correctas.",
  },
  {
    name: "PANDORA",
    description: "Sistemas médicos que ayudan a profesionales de salud a cuidar mejor a sus pacientes.",
  },
];

const RealCases = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Casos reales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proyectos que han ayudado a personas y organizaciones a trabajar mejor
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
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
