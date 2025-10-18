import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Health Connect Hospital Website',
    description: 'A comprehensive hospital management system with patient records, appointment scheduling, and medical staff coordination.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Brain Tumor Classification',
    description: 'Deep learning model using CNN for accurate brain tumor detection and classification from MRI scans.',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'Python'],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Weatherstack Pro',
    description: 'Real-time weather application providing accurate forecasts and weather data using API integration.',
    tech: ['JavaScript', 'API Integration', 'HTML', 'CSS'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in web development, AI, and data science
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass-card p-6 h-full hover:shadow-glow-hover transition-all duration-300 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="glow-border">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="glow-border">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
