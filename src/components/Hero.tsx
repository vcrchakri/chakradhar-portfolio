import { motion } from 'framer-motion';
import { ArrowDown, Download, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-6">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }}>
            Hi, I'm{' '}
            <span className="glow-text bg-gradient-glow bg-clip-text text-transparent">
              Chakradhar Reddy
            </span>{' '}
            👋
          </motion.h1>

          <motion.p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }}>
            Aspiring Data Scientist | AI & Web Developer
          </motion.p>

          <motion.p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.8
        }}>
            B.Tech CSE (Data Science) • Mohan Babu University • 93% Aggregate
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.8
        }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-hover transition-all" asChild>
              <a href="#projects">
                <Briefcase className="mr-2 h-5 w-5" />
                View My Work
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glow-border hover:bg-primary/10">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.5,
          duration: 1
        }}>
            <a href="#about" className="inline-block animate-bounce">
              
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};