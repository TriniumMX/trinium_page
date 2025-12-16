import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Stats from "@/components/Stats";
import HowWeWork from "@/components/HowWeWork";
import RealCases from "@/components/RealCases";
import Testimonials from "@/components/Testimonials";
import WhyTrinium from "@/components/WhyTrinium";
import Philosophy from "@/components/Philosophy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeDo />
      <Stats />
      <SectionDivider variant="gradient" className="my-8" />
      <HowWeWork />
      <SectionDivider variant="gradient" className="my-8" />
      <RealCases />
      <Testimonials />
      <SectionDivider variant="gradient" className="my-8" />
      <WhyTrinium />
      <Philosophy />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
