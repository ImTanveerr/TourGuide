import { HowItWorks } from "@/components/landing/HowItWorks";

import { Testimonials } from "@/components/landing/Testimonials";
import { CallToAction } from "@/components/landing/CTASection";
import { HeroSection } from "@/components/common/HeroSection";

import { TrendingDestinations } from "@/components/landing/trending-destinations";
import { TopGuides } from "@/components/landing/top-guides";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { Categories } from "@/components/common/categories";


export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <HeroSection />
      < Categories />

      <TrendingDestinations />
      <TopGuides/>

      <HowItWorks />

      <Testimonials />
      <WhyChooseUs/>
      <CallToAction/>
      
    </>
  );
}
