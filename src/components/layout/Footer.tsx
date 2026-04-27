import { Rocket, Twitter, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-purple/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-lg flex items-center justify-center">
              <span className="font-black text-white text-xs">CX</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">
              Coxycode
            </span>
          </Link>
          <p className="text-brand-slate-400 text-sm leading-relaxed max-w-xs">
            Transforming bold ideas into digital reality through cutting-edge design and engineering. 
            The future of tech starts here.
          </p>
          <div className="flex gap-4">
            <a href="https://x.com/CodeCoxy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-blue/20 hover:text-brand-blue transition-all">
              <Twitter size={18} />
            </a>
            <a href="https://www.linkedin.com/company/coxycode/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-blue/20 hover:text-brand-blue transition-all">
              <Linkedin size={18} />
            </a>
            <a href="mailto:coxycode@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-blue/20 hover:text-brand-blue transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-brand-blue">Quick Links</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            {['Home', 'Services', 'About Us', 'Portfolio'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-brand-blue">Services</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            {['Mobile Apps', 'Web Apps', 'AI Automation', 'IT Support', 'UI/UX Design'].map((item) => (
              <li key={item}>
                <a href="#services" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-brand-blue">Contact Us</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-purple" />
              <span>coxycode@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-purple" />
              <span>+91 940-940-8044</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-brand-purple" />
              <span>India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-xs">
          © 2025 Coxycode. All rights reserved.
        </p>
        <div className="flex gap-8 text-white/30 text-xs">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
