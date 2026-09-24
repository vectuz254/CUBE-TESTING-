import React from 'react';
import { motion } from 'motion/react';

const logos = [
  'Linear',
  'Vercel',
  'Figma',
  'Stripe',
  'Ramp',
  'Notion',
  'Loom',
  'Arc',
];

export const LogoCloud: React.FC = () => {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xs uppercase tracking-widest text-white/40 text-center"
      >
        Trusted by the world&apos;s most thoughtful teams
      </motion.p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
        {logos.map((name, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
            className="text-sm font-semibold tracking-tight text-white/50 hover:text-white transition-colors cursor-default select-none py-2 px-3 rounded-lg hover:bg-white/[0.02]"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LogoCloud;
