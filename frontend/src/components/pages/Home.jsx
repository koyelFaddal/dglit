import Hero from "@/components/home/Hero";
import CorePillars from "@/components/home/CorePillars";
import Partners from "@/components/home/Partners";
import IndustryFocus from "@/components/home/IndustryFocus";
import Insights from "@/components/home/Insights";
import CaseStudies from "@/components/home/CaseStudies";
import PrimaryCTA from "@/components/home/PrimaryCTA";
import ArchitectureSection from "@/components/home/ArchitectureSection";
import GlobalPresence from "@/components/home/GlobalPresence";
import SecondaryCTA from "@/components/home/SecondaryCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CorePillars />
      <Partners />
      <IndustryFocus />
      <Insights />
      <CaseStudies />
      <PrimaryCTA />
      <ArchitectureSection />
      <GlobalPresence />
      <SecondaryCTA />
    </>
  );
}
