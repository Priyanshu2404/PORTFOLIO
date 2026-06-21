import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import MatrixRain from './MatrixRain';

/* ── Typewriter hook ───────────────────────────────────────────────────── */
function useTypewriter(text, speed = 55, startDelay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setDone(false);
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay]);
  return { displayed, done };
}

/* ── ASCII box helper ─────────────────────────────────────────────────── */
const BOX = {
  tl: '╔', tr: '╗', bl: '╚', br: '╝',
  h: '═', v: '║',
};

/* ── NAV items ────────────────────────────────────────────────────────── */
const NAV = [
  { key: 'about', label: '[01] ABOUT', href: '#about' },
  { key: 'projects', label: '[02] PROJECTS', href: '#projects' },
  { key: 'skills', label: '[03] SKILLS', href: '#skills' },
  { key: 'certifications', label: '[04] CERTS', href: '#certifications' },
  { key: 'resume', label: '[05] RESUME', href: '#resume' },
  { key: 'contact', label: '[06] CONTACT', href: '#contact' },
];

/* ── Stats bar data ───────────────────────────────────────────────────── */
const STATS = [
  { label: 'PROJECTS', value: '4+' },
  { label: 'STACK', value: '8+' },
  { label: 'CERTS', value: '4' },
  { label: 'STATUS', value: 'OPEN' },
];

/* ═══════════════════════════════════════════════════════════════════════ */
export default function LandingPage({ onEnter }) {
  const [booted, setBooted] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [glitch, setGlitch] = useState(false);

  /* Navigate: dismiss landing → wait for exit anim → scroll to section */
  const navigateTo = (href) => {
    onEnter();
    setTimeout(() => {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 480); // matches exit transition duration (0.45s) + buffer
  };

  /* Boot sequence */
  useEffect(() => {
    const t1 = setTimeout(() => setBooted(true), 400);
    const t2 = setTimeout(() => setShowMain(true), 1200);
    const t3 = setTimeout(() => setShowNav(true), 2800);
    const t4 = setTimeout(() => setShowStats(true), 3400);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  /* Random glitch bursts */
  useEffect(() => {
    const fire = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 140);
    };
    const schedule = () => {
      const next = 4000 + Math.random() * 6000;
      return setTimeout(() => { fire(); schedule(); }, next);
    };
    const t = schedule();
    return () => clearTimeout(t);
  }, []);

  /* Typewriter strings */
  const line1 = useTypewriter('PRIYANSHU MISHRA', 42, 1200);
  const line2 = useTypewriter('FULL STACK DEVELOPER', 38, 1900);
  const line3 = useTypewriter('REACT · NODE.JS · MONGODB · PYTHON', 28, 2500);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-terminal-black flex flex-col items-center justify-center">

      {/* ── Background layers ──────────────────────────────────────── */}
      <MatrixRain opacity={0.13} speed={55} />

      {/* Radial glow bloom */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 65% at 50% 50%, rgba(0,255,65,0.07) 0%, transparent 70%)',
      }} />

      {/* Fine grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:
          'linear-gradient(rgba(0,255,65,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.045) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Scan beam */}
      <div className="scan-beam" />

      {/* Vignette edges */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.7) 100%)',
      }} />

      {/* ── Corner brackets ─────────────────────────────────────────── */}
      {/* Top-left */}
      <div className="absolute top-12 left-8 pointer-events-none">
        <div style={{ borderTop: '1px solid #00ff41', borderLeft: '1px solid #00ff41', width: 24, height: 24, opacity: 0.5 }} />
      </div>
      {/* Top-right */}
      <div className="absolute top-12 right-8 pointer-events-none">
        <div style={{ borderTop: '1px solid #00ff41', borderRight: '1px solid #00ff41', width: 24, height: 24, opacity: 0.5 }} />
      </div>
      {/* Bottom-left */}
      <div className="absolute bottom-12 left-8 pointer-events-none">
        <div style={{ borderBottom: '1px solid #00ff41', borderLeft: '1px solid #00ff41', width: 24, height: 24, opacity: 0.5 }} />
      </div>
      {/* Bottom-right */}
      <div className="absolute bottom-12 right-8 pointer-events-none">
        <div style={{ borderBottom: '1px solid #00ff41', borderRight: '1px solid #00ff41', width: 24, height: 24, opacity: 0.5 }} />
      </div>

      {/* ── Top meta bar ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute top-8 left-0 right-0 flex justify-between px-10 font-mono text-xs2 text-smoke-400 tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'linear' }}
      >
        <span>PORTFOLIO_v2.0</span>
        <span className="text-phosphor animate-blink">●</span>
        <span>EST. 2024</span>
      </motion.div>

      {/* ── Boot line ────────────────────────────────────────────────── */}
      {!showMain && booted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs2 text-smoke-400 tracking-widest"
        >
          <span className="text-phosphor">SYS&gt; </span>
          BOOTING PRIYANSHU_OS v2.0...
          <span className="animate-blink text-phosphor ml-1">█</span>
        </motion.div>
      )}

      {/* ── Main hero block ──────────────────────────────────────────── */}
      {showMain && (
        <motion.div
          className="relative z-10 w-full max-w-4xl px-6 space-y-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: 'linear' }}
        >
          {/* ASCII box top border */}
          <div className="font-mono text-xs2 text-smoke-500 leading-none select-none hidden sm:block">
            {BOX.tl}{BOX.h.repeat(72)}{BOX.tr}
          </div>

          {/* Name — largest element */}
          <div className="space-y-3 py-2">
            {/* System tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: 'linear' }}
              className="text-xs2 text-smoke-400 font-mono tracking-[0.25em] uppercase"
            >
              SYS&gt; IDENTIFY_OPERATOR —
            </motion.div>

            {/* NAME */}
            <div
              className={`font-mono font-bold tracking-[0.12em] uppercase leading-none transition-all duration-75
                ${glitch ? 'translate-x-[2px] opacity-90' : ''}`}
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                color: '#e8e8e8',
                textShadow: '0 0 30px rgba(0,255,65,0.15)',
              }}
            >
              {line1.displayed}
              {!line1.done && <span className="animate-blink text-phosphor">█</span>}
            </div>

            {/* ROLE — phosphor green */}
            <div
              className="font-mono font-bold tracking-[0.18em] uppercase"
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
                color: '#00ff41',
                textShadow: '0 0 12px rgba(0,255,65,0.5), 0 0 30px rgba(0,255,65,0.2)',
              }}
            >
              {line2.displayed}
              {line1.done && !line2.done && <span className="animate-blink text-phosphor">█</span>}
            </div>

            {/* STACK — muted */}
            <div
              className="font-mono tracking-[0.12em] text-smoke-300"
              style={{ fontSize: 'clamp(0.65rem, 1.4vw, 0.9rem)' }}
            >
              {line3.displayed}
              {line2.done && !line3.done && <span className="animate-blink text-phosphor">█</span>}
            </div>
          </div>

          {/* ASCII box bottom border */}
          <div className="font-mono text-xs2 text-smoke-500 leading-none select-none hidden sm:block">
            {BOX.bl}{BOX.h.repeat(72)}{BOX.br}
          </div>

          {/* Stats bar */}
          {showStats && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: 'linear' }}
              className="flex justify-center gap-6 sm:gap-12 flex-wrap"
            >
              {STATS.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, ease: 'linear', delay: i * 0.07 }}
                  className="text-center"
                >
                  <div className="font-mono text-terminal-hero font-bold text-phosphor"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', textShadow: '0 0 12px rgba(0,255,65,0.4)' }}>
                    {value}
                  </div>
                  <div className="font-mono text-xs2 text-smoke-400 tracking-widest">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Nav links grid */}
          {showNav && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: 'linear' }}
              className="flex flex-wrap justify-center gap-3"
            >
              {NAV.map(({ key, label, href }, i) => (
                <motion.button
                  key={key}
                  onClick={() => navigateTo(href)}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.14, ease: 'linear', delay: i * 0.06 }}
                  className="font-mono text-xs2 tracking-widest uppercase px-3 py-1.5 border border-terminal-border text-smoke-300
                    hover:border-phosphor hover:text-phosphor hover:shadow-phosphor-sm
                    transition-all duration-fast cursor-pointer"
                >
                  {label}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Enter / Scroll CTA */}
          {showStats && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: 'linear', delay: 0.4 }}
              className="flex justify-center gap-4 pt-2"
            >
              <button
                onClick={onEnter}
                className="font-mono text-sm px-8 py-3 border border-phosphor text-phosphor tracking-widest uppercase
                  hover:bg-phosphor hover:text-terminal-black transition-colors duration-fast"
                style={{ boxShadow: '0 0 16px rgba(0,255,65,0.2)' }}
              >
                $ ENTER PORTFOLIO
              </button>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* ── Bottom meta ──────────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-between px-10 font-mono text-xs2 text-smoke-500 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'linear', delay: 0.5 }}
      >
        <span>CTRL+K — COMMAND PALETTE</span>
        <span className="hidden sm:block">PRIYANSHU_MISHRA.DEV — 2026</span>
        <span>↓ SCROLL</span>
      </motion.div>

    </div>
  );
}
