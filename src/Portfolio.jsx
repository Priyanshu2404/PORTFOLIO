import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from './About';
import "./App.css";
import Certifications from './Certifications';
import CommandPalette from './CommandPalette';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';
import SystemTelemetry from './SystemTelemetry';
import AIChatbot from './AIChatbot';

const Portfolio = () => {
  const [paletteOpen, setPaletteOpen]   = useState(false);
  const [showChat,    setShowChat]       = useState(false);
  const [entered,     setEntered]        = useState(false);

  // Global CTRL+K shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Scroll-to-enter: if user scrolls down on the landing page, enter automatically
  useEffect(() => {
    if (entered) return;
    const handler = (e) => {
      if (e.deltaY > 30) setEntered(true);
    };
    window.addEventListener('wheel', handler, { passive: true });
    return () => window.removeEventListener('wheel', handler);
  }, [entered]);

  return (
    <div className="min-h-screen bg-terminal-black text-smoke-200 font-mono relative overflow-x-hidden">

      {/* ── Persistent top telemetry bar ── */}
      <SystemTelemetry />

      {/* ── CTRL+K Command Palette ── */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />

      {/* ── Landing page (full-screen, slides out on enter) ── */}
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="landing"
            className="fixed inset-0 z-40 pt-8"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -30,
              transition: { duration: 0.45, ease: 'linear' },
            }}
          >
            <LandingPage onEnter={() => setEntered(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main portfolio content (revealed after entering) ── */}
      <motion.main
        className="pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'linear', delay: entered ? 0.3 : 0 }}
      >
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Resume />
        <Contact />
        <Footer />
      </motion.main>

      {/* ── Floating AI terminal button ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {showChat && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.12, ease: 'linear' }}
              className="w-[90vw] max-w-sm"
            >
              <AIChatbot />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setShowChat(p => !p)}
          title="Toggle AI Assistant"
          className={`w-10 h-10 border font-mono text-sm flex items-center justify-center transition-colors duration-fast
            ${showChat
              ? 'border-phosphor text-phosphor bg-phosphor/10 shadow-phosphor-sm'
              : 'border-terminal-border text-smoke-300 hover:border-phosphor hover:text-phosphor bg-terminal-black'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.08, ease: 'linear' }}
        >
          &gt;_
        </motion.button>
      </div>

    </div>
  );
};

export default Portfolio;