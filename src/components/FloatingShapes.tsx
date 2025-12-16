const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large blurred circle */}
      <div 
        className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0s" }}
      />
      
      {/* Medium circle */}
      <div 
        className="absolute top-1/3 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      
      {/* Small decorative shapes */}
      <div 
        className="absolute top-20 left-1/4 w-4 h-4 bg-primary/40 rounded-full animate-float"
        style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
      />
      <div 
        className="absolute top-40 right-1/4 w-3 h-3 bg-accent/40 rounded-full animate-float"
        style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}
      />
      <div 
        className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-primary/30 rounded-full animate-float"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      />
      
      {/* Gradient orbs */}
      <div 
        className="absolute bottom-20 right-1/3 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "0.8s", animationDuration: "4.2s" }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default FloatingShapes;
