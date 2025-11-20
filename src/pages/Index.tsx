import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeWork from "@/components/HowWeWork";
import RealCases from "@/components/RealCases";
import WhyTrinium from "@/components/WhyTrinium";
import Philosophy from "@/components/Philosophy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <HowWeWork />
      <RealCases />
      <WhyTrinium />
      <Philosophy />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
