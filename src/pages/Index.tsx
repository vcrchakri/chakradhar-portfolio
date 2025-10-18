import { ParticleNetwork } from '@/components/ParticleNetwork';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleNetwork />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
