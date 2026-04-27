import { motion } from 'motion/react';
import { Smartphone, Globe, Brain, Zap, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';

const services = [
  {
    title: 'Mobile Development',
    description: 'Bespoke iOS and Android applications built for speed, scalability, and user delight.',
    icon: Smartphone,
    color: 'from-brand-blue to-[#00A3FF]'
  },
  {
    title: 'Web Development',
    description: 'High-performance web applications and ecosystems using modern frameworks and cloud tech.',
    icon: Globe,
    color: 'from-[#00A3FF] to-brand-purple'
  },
  {
    title: 'AI Services',
    description: 'Integrating LLMs and custom machine learning models to solve complex business problems.',
    icon: Brain,
    color: 'from-brand-purple to-[#9E5FFF]'
  },
  {
    title: 'AI Automation',
    description: 'Streamlining workflows with intelligent agents and automated data pipelines.',
    icon: Zap,
    color: 'from-[#9E5FFF] to-brand-blue'
  },
  {
    title: 'IT Solutions',
    description: 'Strategic consulting and full-spectrum IT support to keep your infrastructure resilient.',
    icon: ShieldCheck,
    color: 'from-brand-blue to-white'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Digital <span className="text-brand-blue drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]">Solutions</span> For Any Challenge
          </motion.h2>
          <p className="text-brand-slate-400 max-w-2xl mx-auto">
            We combine strategic thinking with technical excellence to build products 
            that don't just work—they excel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-brand-blue/50 transition-all duration-300"
            >
              <div className="relative flex flex-col items-start gap-6 h-full">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center transition-colors shadow-lg",
                  index % 2 === 0 ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-purple/10 text-brand-purple"
                )}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-brand-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-auto pt-6">
                  <a href="#" className="text-brand-blue font-bold text-xs uppercase tracking-widest hover:brightness-125 transition-all">
                    Explore Solution →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
