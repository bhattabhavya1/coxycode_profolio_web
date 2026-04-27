import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { HeroScene } from '../three/HeroScene';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue-dark/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
        >
          Pioneering Digital Excellence
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black tracking-tight mb-8"
        >
          We Build the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple animate-gradient-x drop-shadow-sm">
            Future of Tech
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-brand-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Transforming complex ideas into seamless digital realities 
          through AI, Web, and Mobile innovation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-brand-blue-dark rounded-xl font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:brightness-110 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
            Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 rounded-xl font-bold text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
            View Our Work
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
