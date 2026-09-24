import React from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { AppleLogo } from './AppleLogo';

const menuItems = ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];

export const MenuBar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
      className="w-full h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10 relative z-20 select-none"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
        {/* Left: AppleLogo + Aura + Menu items */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <AppleLogo className="w-3.5 h-3.5 text-white" />
            <span className="font-bold text-white tracking-wide">Aura</span>
          </div>

          <div className="flex items-center gap-4 text-white/80">
            {menuItems.map((item, index) => {
              let visibility = 'inline';
              if (index > 3) {
                visibility = 'hidden md:inline';
              } else if (index > 2) {
                visibility = 'hidden sm:inline';
              }
              return (
                <span
                  key={item}
                  className={`${visibility} hover:text-white cursor-default transition-colors`}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>

        {/* Right: Search icon + Date/Time */}
        <div className="flex items-center gap-3 text-white/70">
          <Search className="w-3.5 h-3.5" />
          <span className="font-normal tabular-nums">Wed May 6 1:09 PM</span>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuBar;
