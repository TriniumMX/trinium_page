const Philosophy = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            La tecnología puede ser fría.
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Nosotros no.
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
            En TRINIUM hacemos tecnología con corazón.
          </p>
          
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
