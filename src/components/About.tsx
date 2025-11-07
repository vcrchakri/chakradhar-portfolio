import { motion } from 'framer-motion';
import { Code2, Brain, Database, Camera } from 'lucide-react';
import { Card } from '@/components/ui/card';
const skills = [{
  icon: Code2,
  title: 'Programming',
  items: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'PHP']
}, {
  icon: Brain,
  title: 'AI & Machine Learning',
  items: ['Supervised Learning', 'Unsupervised Learning', 'Ensemble Methods', 'Deep Learning']
}, {
  icon: Database,
  title: 'Data Analytics',
  items: ['Data Cleaning', 'Visualization', 'Statistical Analysis', 'MySQL']
}, {
  icon: Camera,
  title: 'Hobbies',
  items: ['Photography', 'Traveling', 'Video Editing', 'Reading']
}];
export const About = () => {
  return <section id="about" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="glow-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging data science and AI to solve real-world problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
          const Icon = skill.icon;
          return <motion.div key={skill.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <Card className="glass-card p-6 h-full hover:shadow-glow transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <div className="space-y-2">
                      {skill.items.map(item => <p key={item} className="text-sm text-muted-foreground">
                          {item}
                        </p>)}
                    </div>
                  </div>
                </Card>
              </motion.div>;
        })}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="mt-12 sm:mt-16 text-center">
          <Card className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <p className="text-lg mb-2">
              <span className="font-semibold text-primary">B.Tech in Computer Science Engineering</span>
            </p>
            <p className="text-muted-foreground mb-1">Mohan Babu University
          </p>
            <p className="text-muted-foreground mb-1">Specialization: Data Science</p>
            <p className="text-muted-foreground mb-1">2022 – 2026</p>
            <p className="text-lg font-semibold text-primary mt-2">CGPA: 9.5%</p>
          </Card>
        </motion.div>
      </div>
    </section>;
};