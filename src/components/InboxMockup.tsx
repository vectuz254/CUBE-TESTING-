import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Inbox as InboxIcon,
  Star,
  Send,
  FileEdit,
  Archive,
  Trash2,
  Search,
  Reply,
  Forward,
  MoreHorizontal,
  Paperclip,
} from 'lucide-react';

interface EmailItem {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread?: boolean;
}

const mockMessages: EmailItem[] = [
  {
    id: '1',
    sender: 'Linear',
    subject: 'Weekly product digest',
    preview: 'Your team shipped 23 issues this week...',
    time: '9:41 AM',
    unread: true,
  },
  {
    id: '2',
    sender: 'Sophia Chen',
    subject: 'Re: Q3 roadmap review',
    preview: 'Thanks for sending the deck over. I had a few thoughts...',
    time: '8:12 AM',
    unread: true,
  },
  {
    id: '3',
    sender: 'Figma',
    subject: 'Marcus commented on your file',
    preview: 'Love the new direction on the landing hero.',
    time: 'Yesterday',
  },
  {
    id: '4',
    sender: 'Stripe',
    subject: 'Payout of $12,480.00 sent',
    preview: 'Your payout is on its way to your bank...',
    time: 'Yesterday',
  },
  {
    id: '5',
    sender: 'Vercel',
    subject: 'Deployment ready for aura-web',
    preview: 'Preview is live at aura-web-g3f.vercel.app',
    time: 'Mon',
  },
  {
    id: '6',
    sender: 'GitHub',
    subject: '[aura/core] PR #482 approved',
    preview: 'david-lim approved your pull request.',
    time: 'Mon',
  },
];

export const InboxMockup: React.FC = () => {
  const [selectedId, setSelectedId] = useState('1');
  const [activeNav, setActiveNav] = useState('Inbox');

  const navItems = [
    { name: 'Inbox', icon: InboxIcon, count: 12 },
    { name: 'Starred', icon: Star, count: 3 },
    { name: 'Sent', icon: Send },
    { name: 'Drafts', icon: FileEdit, count: 2 },
    { name: 'Archive', icon: Archive },
    { name: 'Trash', icon: Trash2 },
  ];

  const labels = [
    { name: 'Work', color: '#00d2ff' },
    { name: 'Personal', color: '#A4F4FD' },
    { name: 'Travel', color: '#f59e0b' },
    { name: 'Finance', color: '#10b981' },
  ];

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl shadow-2xl shadow-black/80"
      >
        {/* Title bar */}
        <div className="h-10 px-4 flex items-center border-b border-white/10 bg-black/40 relative select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/20" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/20" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/20" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 text-xs text-white/50 font-medium">
            Aura — Inbox
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 h-[540px] text-xs">
          {/* Sidebar (col-span-3, border-r, bg-black/30, p-4) */}
          <div className="col-span-12 md:col-span-3 border-r border-white/10 bg-black/30 p-4 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Compose button */}
              <button
                type="button"
                className="w-full rounded-lg bg-white text-black text-xs font-semibold px-3 py-2 flex items-center justify-center gap-2 shadow-sm hover:bg-white/90 active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Compose with Aura</span>
              </button>

              {/* Nav Items */}
              <div className="mt-4 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeNav === item.name;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveNav(item.name)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md transition-colors text-left ${
                        isActive
                          ? 'bg-white/10 text-white font-medium'
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{item.name}</span>
                      </div>
                      {item.count !== undefined && (
                        <span className={`text-[11px] font-medium ${isActive ? 'text-white' : 'text-white/40'}`}>
                          {item.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Labels section */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-2.5 px-1">
                  Labels
                </div>
                <div className="space-y-1.5">
                  {labels.map((lbl) => (
                    <div
                      key={lbl.name}
                      className="flex items-center gap-2 px-2.5 py-1 rounded-md text-white/60 hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: lbl.color }}
                      />
                      <span>{lbl.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Storage / Footer info in sidebar */}
            <div className="pt-4 border-t border-white/5 text-[11px] text-white/40 px-1">
              <div className="flex items-center justify-between mb-1">
                <span>Storage</span>
                <span>4.2 GB of 100 GB</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1">
                <div className="bg-[#00d2ff] h-1 rounded-full w-[4.2%]" />
              </div>
            </div>
          </div>

          {/* Message list (col-span-4, border-r) */}
          <div className="col-span-12 md:col-span-4 border-r border-white/10 bg-black/10 flex flex-col h-full overflow-hidden">
            {/* Search header */}
            <div className="p-3 border-b border-white/10 flex items-center gap-2 bg-white/[0.02]">
              <Search className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search mail"
                className="w-full bg-transparent text-xs text-white placeholder-white/40 focus:outline-none"
              />
            </div>

            {/* Message rows */}
            <div className="flex-1 overflow-y-auto divide-y divide-white/5">
              {mockMessages.map((msg) => {
                const isSelected = selectedId === msg.id;
                return (
                  <div
                    key={msg.id}
                    onClick={() => setSelectedId(msg.id)}
                    className={`p-3.5 cursor-pointer transition-colors relative ${
                      isSelected
                        ? 'bg-white/[0.08]'
                        : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00d2ff]" />
                    )}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5 truncate">
                        {msg.unread && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] flex-shrink-0" />
                        )}
                        <span className={`truncate text-xs ${msg.unread ? 'font-semibold text-white' : 'font-medium text-white/80'}`}>
                          {msg.sender}
                        </span>
                      </div>
                      <span className="text-[10px] text-white/40 flex-shrink-0">
                        {msg.time}
                      </span>
                    </div>
                    <div className={`text-xs mb-1 truncate ${msg.unread ? 'text-white/95 font-medium' : 'text-white/70'}`}>
                      {msg.subject}
                    </div>
                    <div className="text-[11px] text-white/40 truncate">
                      {msg.preview}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reader (col-span-5) */}
          <div className="col-span-12 md:col-span-5 bg-black/20 flex flex-col h-full overflow-hidden">
            {/* Reader Toolbar */}
            <div className="h-10 px-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-1 text-white/60">
                <button
                  type="button"
                  aria-label="Reply"
                  className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center hover:text-white transition-colors"
                >
                  <Reply className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Forward"
                  className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center hover:text-white transition-colors"
                >
                  <Forward className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Archive"
                  className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center hover:text-white transition-colors"
                >
                  <Archive className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Delete"
                  className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center hover:text-white transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                type="button"
                aria-label="More actions"
                className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <MoreHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Email Header */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="text-sm font-semibold text-white truncate">
                  Weekly product digest
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/30 font-medium">
                  Work
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-white text-xs font-bold shadow-inner">
                  L
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white text-xs">Linear</div>
                  <div className="text-[11px] text-white/40">to me · 9:41 AM</div>
                </div>
              </div>
            </div>

            {/* Email Body */}
            <div className="p-4 flex-1 overflow-y-auto space-y-4">
              {/* Summary by Aura Card */}
              <div className="liquid-glass rounded-xl p-3.5 border border-[#00d2ff]/20 bg-[#00d2ff]/[0.03]">
                <div className="flex items-center gap-1.5 text-xs font-semibold mb-1 text-[#A4F4FD]">
                  <Sparkles className="w-3.5 h-3.5 text-[#A4F4FD]" />
                  <span>Summary by Aura</span>
                </div>
                <p className="text-[11px] text-white/80 leading-relaxed">
                  Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.
                </p>
              </div>

              {/* Email Content Paragraphs */}
              <div className="space-y-2.5 text-xs text-white/80 leading-relaxed">
                <p>Hi team,</p>
                <p>
                  Here is your weekly digest of everything happening across your projects. This was a
                  strong week with significant progress on the Q3 roadmap.
                </p>
                <p>
                  Twenty-three issues were closed, fourteen pull requests were merged, and two
                  customer-facing features went out. The velocity trend continues to climb.
                </p>
                <p>Let me know if you would like a deeper breakdown by project or contributor.</p>
                <p className="text-white/50 pt-1">— The Linear team</p>
              </div>

              {/* Attachment Pill */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white/80 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">
                  <Paperclip className="w-3.5 h-3.5 text-white/50" />
                  <span>digest-may-6.pdf</span>
                  <span className="text-[10px] text-white/40 ml-1">1.4 MB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InboxMockup;
