import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue-dark/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">Let's Build Something <br /><span className="text-brand-blue">Extraordinary</span></h2>
            <p className="text-brand-slate-400 text-lg font-medium leading-relaxed">
              Ready to take your digital presence to the next level? 
              Fill out the form and our architects will reach out within 24 hours.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                <Mail size={24} />
              </div>
              <div>
                <div className="font-bold mb-1 text-white text-lg">Email Us</div>
                <div className="text-brand-slate-400">coxycode@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                <Phone size={24} />
              </div>
              <div>
                <div className="font-bold mb-1 text-white text-lg">Call Us</div>
                <div className="text-brand-slate-400">+91 940-940-8044</div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                <MapPin size={24} />
              </div>
              <div>
                <div className="font-bold mb-1 text-white text-lg">Location</div>
                <div className="text-brand-slate-400 leading-relaxed font-medium">India</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[32px] p-10 relative overflow-hidden backdrop-blur-xl"
        >
          {formState === 'success' ? (
// ... existing success UI ...
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-6"
            >
              <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-blue">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-bold">Message Received!</h3>
              <p className="text-white/50">Our team is already reviewing your request. Expect a response soon.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="text-brand-blue font-bold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-blue uppercase tracking-widest pl-1">Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-brand-blue transition-all text-white placeholder:text-brand-slate-400/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-blue uppercase tracking-widest pl-1">Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-brand-blue transition-all text-white placeholder:text-brand-slate-400/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-blue uppercase tracking-widest pl-1">Service Needed</label>
                <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-brand-blue transition-all appearance-none text-brand-slate-400">
                  <option className="bg-brand-bg" disabled value="">Select a service</option>
                  <option className="bg-brand-bg">Web Development</option>
                  <option className="bg-brand-bg">Mobile Development</option>
                  <option className="bg-brand-bg">AI & Automation</option>
                  <option className="bg-brand-bg">Consulting</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-blue uppercase tracking-widest pl-1">Message</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-brand-blue transition-all resize-none text-white placeholder:text-brand-slate-400/50" />
              </div>

              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full py-4 bg-gradient-to-r from-brand-blue-dark to-brand-blue rounded-xl font-bold text-white shadow-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {formState === 'submitting' ? 'Transmitting...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
