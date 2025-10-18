import { motion } from 'framer-motion';
import { Award, Trophy, GraduationCap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const achievements = [
  {
    icon: Trophy,
    title: 'SIH Government Mentorship',
    description: 'Selected for Smart India Hackathon Government Mentorship Program',
    color: 'text-yellow-400',
  },
  {
    icon: GraduationCap,
    title: 'Data Science Certification',
    description: 'AICTE – Next24tech Data Science Program',
    color: 'text-cyan-400',
  },
  {
    icon: Award,
    title: 'Cyber Security',
    description: 'Certified in Cyber Security by Cranes Varsity',
    color: 'text-purple-400',
  },
  {
    icon: GraduationCap,
    title: 'IT Automation with Python',
    description: 'Google – Coursera Professional Certificate',
    color: 'text-blue-400',
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="glow-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and recognition in tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-6 h-full hover:shadow-glow transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-gradient-primary">
                      <Icon className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
