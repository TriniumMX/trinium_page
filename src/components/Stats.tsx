import { useEffect, useState, useRef } from "react";
import { Briefcase, Users, Calendar, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: Briefcase, value: 7, suffix: "", label: "Proyectos completados" },
  { icon: Users, value: 30, suffix: "", label: "Clientes satisfechos" },
  { icon: Calendar, value: 2, suffix: "+", label: "Años de experiencia" },
  { icon: Heart, value: 100, suffix: "%", label: "Compromiso" },
];

const useCountAnimation = (end: number, isVisible: boolean, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isVisible, duration]);

  return count;
};

const StatItem = ({ icon: Icon, value, suffix, label, isVisible, delay }: {
  icon: typeof Briefcase;
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}) => {
  const count = useCountAnimation(value, isVisible);

  return (
    <div
      className="text-center p-6 group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease-out ${delay}ms`,
      }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-primary-foreground" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
        {count}
        <span className="text-primary">{suffix}</span>
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const Stats = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              {...stat}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
