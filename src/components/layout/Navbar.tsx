import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 py-4',
        isScrolled ? 'glass-dark h-16 flex items-center border-b' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="font-black text-white text-xs">CX</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
            Coxycode
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                link.name === 'Home' ? "text-brand-blue" : "text-brand-slate-400 hover:text-white"
              )}
            >
              {link.name}
              {link.name !== 'Home' && (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
              )}
            </a>
          ))}
          <button className="px-5 py-2 bg-brand-blue/10 border border-brand-blue/50 rounded-full text-brand-blue hover:bg-brand-blue/20 transition-all text-sm font-medium">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-dark border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-brand-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-blue text-black font-bold py-3 rounded-xl mt-2">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
