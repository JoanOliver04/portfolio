import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Projects } from "@/components/sections/Projects";
import { TechnicalFocus } from "@/components/sections/TechnicalFocus";
import { DeveloperTools } from "@/components/sections/DeveloperTools";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <span id="top" aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Hero />
        <ProofStrip />
        <Projects />
        <DeveloperTools />
        <TechnicalFocus />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
