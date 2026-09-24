import React from 'react';
import { LogoMark } from './LogoMark';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <LogoMark className="w-6 h-6" />
          <span className="text-sm font-semibold tracking-wide text-white">Aura</span>
          <span className="text-xs text-white/40 ml-2">
            © {new Date().getFullYear()} Aura Technologies Inc.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-white/60">
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Security
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Documentation
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>All systems operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
