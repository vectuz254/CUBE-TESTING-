import React from 'react';
import { motion } from 'motion/react';
import { SectionEyebrow } from './SectionEyebrow';

interface TriageGroup {
  name: string;
  count: number;
  color: string;
  items: string[];
}

const triageGroups: TriageGroup[] = [
  {
    name: 'Priority',
    count: 4,
    color: '#ffffff',
    items: ['Sophia Chen — Q3 review', 'David Lim — contract signoff'],
  },
  {
    name: 'Follow-up',
    count: 7,
    color: '#e5e5e5',
    items: ['Marcus — design review', 'Figma — comment thread'],
  },
  {
    name: 'Updates',
    count: 18,
    color: '#a3a3a3',
    items: ['Vercel — deploy ready', 'GitHub — PR #482 merged'],
  },
  {
    name: 'Archived',
    count: 13,
    color: '#525252',
    items: ['Stripe payout · Newsletter · Receipts'],
  },
];

const chips = [
  'Auto-categorize',
  'Snooze for later',
  'Silent newsletters',
  'One-tap unsubscribe',
];

export const FeatureTriage: React.FC = () => {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28" id="solutions">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left column motion (y 20 -> 0, 0.7s) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionEyebrow label="Triage" tag="AI-native" />

          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
            Clear your inbox
            <br />
            in a single pass.
          </h2>

          <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
            Aura reads every message, understands intent, and routes the noise away from the
            signal. Focus on what moves your day forward — the rest handles itself.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] select-none hover:border-white/20 transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right column: liquid-glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="liquid-glass rounded-2xl p-5 border border-white/10 shadow-2xl"
        >
          <div className="text-xs text-white/50 font-medium mb-4 flex items-center justify-between">
            <span>Today · 42 messages triaged</span>
            <span className="text-[11px] text-[#A4F4FD] bg-[#00d2ff]/10 px-2 py-0.5 rounded-full border border-[#00d2ff]/20">
              Auto-Pilot active
            </span>
          </div>

          <div className="space-y-3">
            {triageGroups.map((group) => (
              <div
                key={group.name}
                className="liquid-glass rounded-lg p-3 transition-transform hover:scale-[1.01]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: group.color }}
                    />
                    <span className="text-xs font-semibold text-white">
                      {group.name}
                    </span>
                  </div>
                  <span
                    className="text-xs font-mono font-medium px-2 py-0.5 rounded-md bg-white/5"
                    style={{ color: group.color }}
                  >
                    {group.count}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-white/60 pl-4 border-l border-white/10">
                  {group.items.map((item, idx) => (
                    <div key={idx} className="truncate hover:text-white transition-colors">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureTriage;
