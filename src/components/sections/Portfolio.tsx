import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Mobile', 'Web', 'AI'];

const projects = [
  { id: 1, title: 'Nexus FinTech', category: 'Web', tech: 'React, Node.js, AWS', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800' },
  { id: 2, title: 'HealthAI App', category: 'AI', tech: 'Python, TensorFlow, React Native', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800' },
  { id: 3, title: 'Global Logistics', category: 'Web', tech: 'Next.js, PostgreSQL', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800' },
  { id: 4, title: 'CryptoTracker', category: 'Mobile', tech: 'Flutter, Solidity', img: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800' },
  { id: 5, title: 'Neural Vision', category: 'AI', tech: 'PyTorch, Docker', img: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800' },
  { id: 6, title: 'EcoStream', category: 'Mobile', tech: 'React Native, Firebase', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Latest <span className="text-brand-blue">Masterpieces</span></h2>
            <p className="text-brand-slate-400 max-w-lg">
              Explore our latest ventures where engineering meets imagination. 
              Each project is a testament to our commitment to quality.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 text-brand-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-blue/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-40 group-hover:opacity-60"
                  />
                </div>
                <div className="p-8">
                  <div className="text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{project.title}</h3>
                  <div className="text-brand-slate-400 text-xs mb-6 font-mono">
                    {project.tech}
                  </div>
                  <button className="flex items-center gap-2 text-sm font-bold hover:text-brand-blue transition-colors group/btn">
                    View Project <ExternalLink size={16} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
