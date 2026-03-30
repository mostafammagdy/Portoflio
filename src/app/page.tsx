import ClientLayout from "@/components/ClientLayout";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  return (
    <ClientLayout>
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-neutral-800/60 to-transparent" /></div>
        <Skills />
        <Experience />
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-neutral-800/60 to-transparent" /></div>
        <Projects />
        <Testimonials />
        <div className="max-w-6xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-neutral-800/60 to-transparent" /></div>
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ClientLayout>
  );
}
