import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MatrixRain from "./MatrixRain";

const LINES = [
  { prefix: '> ', text: 'IDENTIFYING OPERATOR...', delay: 0,    color: 'text-smoke-400' },
  { prefix: '> ', text: 'NAME: PRIYANSHU MISHRA',  delay: 0.5,  color: 'text-smoke-100' },
  { prefix: '> ', text: 'ROLE: FULL STACK DEVELOPER', delay: 1.0, color: 'text-smoke-100' },
  { prefix: '> ', text: 'STACK: REACT / NODE.JS / MONGODB / PYTHON', delay: 1.5, color: 'text-smoke-200' },
  { prefix: '> ', text: 'STATUS: AVAILABLE FOR HIRE', delay: 2.0, color: 'text-phosphor' },
];

function useTypedLines(lines) {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    const timers = lines.map((_, idx) =>
      setTimeout(() => setVisible(idx + 1), lines[idx].delay * 1000 + 200)
    );
    return () => timers.forEach(clearTimeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return visible;
}

const lineVariants = {
  hidden:  { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.18, ease: 'linear' } },
};

export default function About() {
  const visible = useTypedLines(LINES);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden bg-terminal-black"
    >
      {/* ── Layer 1: Matrix rain canvas (very subtle, behind everything) ── */}
      <MatrixRain opacity={0.12} speed={60} />

      {/* ── Layer 2: Phosphor radial glow (center bloom) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% 45%, rgba(0,255,65,0.09) 0%, transparent 72%)',
        }}
      />

      {/* ── Layer 3: Fine phosphor grid on top of rain ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,65,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Layer 4: Horizontal scan beam sweep ── */}
      <div className="scan-beam" />

      {/* ── Decorative corner brackets (full-section) ── */}
      <div className="absolute inset-4 pointer-events-none corner-brackets" />

      {/* ── Corner labels ── */}
      <div className="absolute top-10 left-8 text-xs2 text-smoke-400 font-mono tracking-widest uppercase select-none z-10">
        [01] OPERATOR_PROFILE
      </div>
      <div className="absolute top-10 right-8 text-xs2 text-smoke-400 font-mono tracking-widest select-none z-10">
        SYS/INIT
      </div>

      {/* ── Decorative hex coords (bottom corners) ── */}
      <div className="absolute bottom-6 left-8 text-xs2 text-smoke-500 font-mono select-none z-10">
        0x{Math.floor(Date.now() / 1000).toString(16).toUpperCase()}
      </div>
      <div className="absolute bottom-6 right-8 text-xs2 text-smoke-500 font-mono select-none z-10">
        NODE: PRIYANSHU_DEV_01
      </div>

      {/* ── Main content (above all layers) ── */}
      <div className="relative z-10 max-w-3xl w-full space-y-10">

        {/* Terminal window card */}
        <div
          className="relative border border-terminal-border bg-terminal-surface"
          style={{ boxShadow: '0 0 60px rgba(0,255,65,0.06), 0 0 0 1px #1f1f1f' }}
        >
          {/* Window chrome bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-terminal-border bg-terminal-panel">
            <div className="flex items-center gap-2">
              {/* Fake traffic lights as squares */}
              <span className="w-2.5 h-2.5 bg-sys-err opacity-60" />
              <span className="w-2.5 h-2.5 bg-sys-warn opacity-60" />
              <span className="w-2.5 h-2.5 bg-sys-ok opacity-60" />
              <span className="ml-3 text-xs2 text-smoke-400 tracking-widest uppercase">
                terminal — bash — 80×24
              </span>
            </div>
            <span className="text-xs2 text-sys-ok animate-flicker">● LIVE</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 space-y-2.5 min-h-[240px]">
            {LINES.map((line, i) => (
              <motion.div
                key={i}
                variants={lineVariants}
                initial="hidden"
                animate={visible > i ? 'visible' : 'hidden'}
                className={`font-mono text-terminal-base ${line.color}`}
              >
                <span className="text-phosphor text-glow select-none">{line.prefix}</span>
                {line.text}
                {i === visible - 1 && visible < LINES.length && (
                  <span className="animate-blink text-phosphor ml-1">█</span>
                )}
              </motion.div>
            ))}

            {/* Progress bar — shows after all lines */}
            {visible >= LINES.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.12, ease: 'linear' }}
                className="pt-3 space-y-1.5"
              >
                <div className="flex justify-between text-xs2 text-smoke-400 font-mono">
                  <span>HIRE_READINESS</span>
                  <span className="text-phosphor">100%</span>
                </div>
                <div className="h-1.5 bg-terminal-muted w-full overflow-hidden">
                  <motion.div
                    className="h-full bg-phosphor"
                    style={{ boxShadow: '0 0 10px #00ff41, 0 0 20px #00ff4166' }}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, ease: 'linear' }}
                  />
                </div>
                <div className="text-xs2 text-phosphor text-glow-strong font-mono">
                  ████████████ READY — AVAILABLE FOR HIRE
                </div>
              </motion.div>
            )}
          </div>

          {/* Phosphor inner glow edge */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: 'inset 0 0 40px rgba(0,255,65,0.04)' }}
          />
        </div>

        {/* CTA buttons */}
        {visible >= LINES.length && (
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'linear', delay: 0.15 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects">
              <button
                className="font-mono text-sm px-6 py-3 border border-phosphor text-phosphor tracking-widest uppercase transition-all duration-fast hover:bg-phosphor hover:text-terminal-black"
                style={{ boxShadow: '0 0 12px rgba(0,255,65,0.2)' }}
              >
                $ EXECUTE: VIEW_WORK
              </button>
            </a>
            <a href="#contact">
              <button className="font-mono text-sm px-6 py-3 border border-terminal-border text-smoke-300 hover:border-smoke-300 transition-colors duration-fast tracking-widest uppercase">
                $ EXECUTE: CONTACT
              </button>
            </a>
          </motion.div>
        )}

      </div>
    </section>
  );
}