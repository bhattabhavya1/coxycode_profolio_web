import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatProps {
  label: string;
  value: number;
  suffix?: string;
  delay?: number;
}

function Stat({ label, value, suffix = '', delay = 0 }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-3xl md:text-4xl font-black text-white mb-1">
        {count}{suffix}
      </div>
      <div className="text-brand-blue text-[10px] font-bold uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-brand-bg">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue-dark/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 w-12 bg-brand-blue" />
            <span className="text-brand-blue font-bold text-xs uppercase tracking-[0.2em]">Our DNA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-white">
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Next Dimension</span>
          </h2>
          <div className="space-y-6 text-brand-slate-400 text-lg leading-relaxed mb-10">
            <p>
              Coxycode operates at the intersection of aesthetic precision and high-performance engineering. 
              We transform complex legacy systems into streamlined digital powerhouses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 bg-brand-blue-dark/5 border border-brand-blue-dark/10 p-8 rounded-3xl">
            <Stat label="Global Projects" value={120} suffix="+" />
            <Stat label="Success Rate" value={100} suffix="%" />
            <Stat label="AI Toolsets" value={12} suffix="+" />
            <Stat label="Senior Devs" value={24} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-[40px] blur-2xl group-hover:opacity-75 transition-opacity" />
          <div className="relative rounded-[32px] overflow-hidden border border-white/10 aspect-[4/5] bg-[#0A0A0A]">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Team collaboration" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <div className="text-2xl font-bold mb-1">Our Mission</div>
              <div className="text-white/60 text-sm">To bridge the gap between human creativity and digital execution.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
