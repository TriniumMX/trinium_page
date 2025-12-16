interface SectionDividerProps {
  variant?: "wave" | "gradient" | "diagonal";
  flip?: boolean;
  className?: string;
}

const SectionDivider = ({ variant = "wave", flip = false, className = "" }: SectionDividerProps) => {
  if (variant === "wave") {
    return (
      <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[80px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background"
          />
        </svg>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={`w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent ${className}`} />
    );
  }

  if (variant === "diagonal") {
    return (
      <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] md:h-[60px]"
        >
          <polygon
            points="1200 0 1200 120 0 120"
            className="fill-background"
          />
        </svg>
      </div>
    );
  }

  return null;
};

export default SectionDivider;
