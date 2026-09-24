import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { LogoMark } from './LogoMark';
import { AppleButton } from './AppleButton';

const navLinks = ['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers'];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full pt-6">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Left: just the LogoMark (NO "Aura" word) */}
        <a href="#" className="flex items-center transition-transform hover:scale-105" aria-label="Aura Home">
          <LogoMark className="w-8 h-8" />
        </a>

        {/* Center: Desktop links with staggered y animation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
              className="text-white/70 text-sm font-medium hover:text-white transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Right desktop: AppleButton */}
        <div className="hidden md:block">
          <AppleButton label="Download Aura" />
        </div>

        {/* Mobile right: Menu icon button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/80 hover:text-white transition-colors active:scale-95"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-6 mt-3 p-6 rounded-2xl liquid-glass border border-white/10 flex flex-col gap-4 text-center z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 text-base font-medium py-2 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
            <div className="pt-2">
              <AppleButton full label="Download Aura" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
