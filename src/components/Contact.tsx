import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vchakradhar2005@gmail.com',
    href: 'mailto:vchakradhar2005@gmail.com',
    color: 'text-cyan-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'v-chakradhar-reddy',
    href: 'https://linkedin.com/in/v-chakradhar-reddy',
    color: 'text-blue-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'vcrchakri',
    href: 'https://github.com/vcrchakri',
    color: 'text-purple-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9347770221',
    href: 'tel:+919347770221',
    color: 'text-green-400',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="glow-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and explore opportunities together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="glass-card p-6 h-full hover:shadow-glow transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <Icon className={`h-6 w-6 ${contact.color}`} />
                    </div>
                    <h3 className="text-sm font-semibold text-muted-foreground">{contact.label}</h3>
                    <p className="text-sm font-medium break-all">{contact.value}</p>
                  </div>
                </Card>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Chakradhar Reddy .V. Built with React & Three.js
          </p>
        </motion.div>
      </div>
    </section>
  );
};
