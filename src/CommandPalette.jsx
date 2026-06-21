import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const COMMANDS = [
  { id: 'goto-home',        label: 'goto: home',          desc: 'Navigate to the top',           action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { id: 'goto-about',       label: 'goto: about',         desc: 'Navigate to About section',     action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'goto-projects',    label: 'goto: projects',      desc: 'Navigate to Selected Works',    action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'goto-skills',      label: 'goto: skills',        desc: 'Navigate to Modules / Skills',  action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'goto-certs',       label: 'goto: certifications',desc: 'Navigate to Access Log',        action: () => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'goto-resume',      label: 'goto: resume',        desc: 'Navigate to Resume section',    action: () => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'goto-contact',     label: 'goto: contact',       desc: 'Navigate to Secure Transmission',action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'open-github',      label: 'open: github',        desc: 'Open GitHub profile ↗',         action: () => window.open('https://github.com/Priyanshu2404', '_blank') },
  { id: 'open-linkedin',    label: 'open: linkedin',      desc: 'Open LinkedIn profile ↗',       action: () => window.open('https://www.linkedin.com/in/priyanshu-mishra2404/', '_blank') },
  { id: 'download-resume',  label: 'exec: download_resume', desc: 'Open resume PDF ↗',          action: () => window.open('https://drive.google.com/file/d/1KrmSFZ-l9o2uKFylqcZ6HxM5kXPIIQiA/view?usp=sharing', '_blank') },
  { id: 'open-email',       label: 'exec: send_email',    desc: 'Open email client',             action: () => window.open('mailto:priyanshumishra2404@gmail.com') },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery]     = useState('');
  const [active, setActive]   = useState(0);
  const inputRef              = useRef(null);

  const filtered = query.trim() === ''
    ? COMMANDS
    : COMMANDS.filter(c =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.desc.toLowerCase().includes(query.toLowerCase())
      );

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive(a => (a + 1) % filtered.length);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive(a => (a - 1 + filtered.length) % filtered.length);
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[active]) { filtered[active].action(); onClose(); }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, filtered, active, onClose]);

  // Reset active index when filter changes
  useEffect(() => { setActive(0); }, [query]);

  const execute = (cmd) => { cmd.action(); onClose(); };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: 'linear' }}
            onClick={onClose}
          />

          {/* Palette window */}
          <motion.div
            className="fixed top-[10vh] sm:top-[15vh] left-1/2 z-[101] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 border border-phosphor shadow-phosphor bg-terminal-black"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: 'linear' }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-terminal-border">
              <span className="text-xs2 text-smoke-400 tracking-widest uppercase">
                COMMAND_PALETTE
              </span>
              <span className="text-xs2 text-smoke-400">
                <kbd className="border border-terminal-border px-1">ESC</kbd> to close
              </span>
            </div>

            {/* Input */}
            <div className="flex items-center border-b border-terminal-border px-4 py-3">
              <span className="text-phosphor text-glow mr-3 text-sm font-mono select-none">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="TYPE COMMAND OR NAVIGATE..."
                className="flex-1 bg-transparent text-smoke-100 font-mono text-sm placeholder-smoke-400 caret-phosphor"
                spellCheck={false}
              />
              <span className="animate-blink text-phosphor ml-1 select-none">█</span>
            </div>

            {/* Results */}
            <ul className="max-h-72 overflow-y-auto py-1">
              {filtered.length === 0 ? (
                <li className="px-4 py-3 text-smoke-400 text-terminal-sm font-mono">
                  NO MATCHING COMMANDS — try 'goto', 'open', or 'exec'
                </li>
              ) : filtered.map((cmd, i) => (
                <li
                  key={cmd.id}
                  onClick={() => execute(cmd)}
                  onMouseEnter={() => setActive(i)}
                  className={`flex items-center justify-between px-4 py-2.5 cursor-pointer font-mono transition-colors duration-fast
                    ${active === i
                      ? 'bg-phosphor/10 border-l-2 border-phosphor'
                      : 'border-l-2 border-transparent hover:bg-terminal-panel'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono ${active === i ? 'text-phosphor' : 'text-smoke-400'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-terminal-sm uppercase tracking-wider ${active === i ? 'text-phosphor text-glow' : 'text-smoke-100'}`}>
                      {cmd.label}
                    </span>
                  </div>
                  <span className="text-xs2 text-smoke-400 hidden sm:block">
                    {cmd.desc}
                  </span>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="flex items-center gap-4 px-4 py-2 border-t border-terminal-border text-xs2 text-smoke-400">
              <span><kbd className="border border-terminal-border px-1">↑↓</kbd> navigate</span>
              <span><kbd className="border border-terminal-border px-1">↵</kbd> execute</span>
              <span className="ml-auto">{filtered.length} COMMANDS</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
