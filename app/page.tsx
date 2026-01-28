import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Section divider */}
      <div className="section-divider" />

      <Services limit={3} />

      <div className="section-divider" />

      <Process />

      <div className="section-divider" />

      <Portfolio limit={2} />

      <div className="section-divider" />

      <Testimonials />

      <div className="section-divider" />

      <FAQ />

      <CTA />
    </>
  );
}
