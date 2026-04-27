import { motion } from 'motion/react';
import { Star, Shield, Clock, Lightbulb } from 'lucide-react';

const reasons = [
  {
    title: 'Expert Team',
    description: 'Our senior-level engineers and designers have years of experience in top-tier tech environments.',
    icon: Star,
  },
  {
    title: 'On-time Delivery',
    description: 'We respect your deadlines. Our agile process ensures meaningful milestones are met every single time.',
    icon: Clock,
  },
  {
    title: 'Innovative Solutions',
    description: 'We don’t just follow trends; we set them by integrating the latest in AI and cloud tech.',
    icon: Lightbulb,
  },
  {
    title: '24/7 Support',
    description: 'Our global presence means we’re always online. We provide round-the-clock monitoring and support.',
    icon: Shield,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Why Industry Leaders <br />
                <span className="text-brand-purple">Trust Coxycode</span>
              </h2>
              <p className="text-brand-slate-400 text-lg">
                We combine the velocity of a startup with the precision of an enterprise 
                engineering firm.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                    <reason.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                  <p className="text-brand-slate-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800" className="rounded-2xl border border-white/5 grayscale" alt="Dev" />
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800" className="rounded-2xl border border-white/5 grayscale" alt="Meeting" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800" className="rounded-2xl border border-white/5 grayscale" alt="Web Dev" />
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" className="rounded-2xl border border-white/5 grayscale" alt="Graph" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
