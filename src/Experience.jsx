import { motion } from "framer-motion";
import { useState } from "react";

/* ══════════════════════════════════════════════════════════════════════════
   EXPERIENCE DATA
══════════════════════════════════════════════════════════════════════════ */
const EXPERIENCES = [
  {
    index: '01',
    company: 'NHPC LIMITED',
    role: 'Cybersecurity Intern',
    type: 'INTERNSHIP',
    dateStart: '2026.01',
    dateEnd:   '2026.05',
    location:  'India / Remote',
    status: 'COMPLETED',
    tags: ['Security Audits', 'Adversarial ML', 'Network Automation'],
    bullets: [
      {
        text: 'Conducted comprehensive security audits across internal network infrastructure, identifying and documenting critical vulnerabilities.',
        metric: null,
      },
      {
        text: 'Researched and implemented adversarial machine learning defences, reducing model attack surface by',
        metric: '~40%',
      },
      {
        text: 'Automated network monitoring scripts using Python, cutting manual audit time by',
        metric: '60%',
      },
      {
        text: 'Collaborated with the IT security team to patch identified CVEs and harden firewall rules across',
        metric: '12+ endpoints',
      },
    ],
  },
  {
    index: '02',
    company: 'JAWAHARLAL NEHRU UNIVERSITY',
    role: 'Frontend Development Intern',
    type: 'INTERNSHIP',
    dateStart: '2024.10',
    dateEnd:   '2025.03',
    location:  'New Delhi, India',
    status: 'COMPLETED',
    tags: ['React', 'API Integration', 'Performance Optimization'],
    bullets: [
      {
        text: 'Rebuilt key UI modules in React, delivering a',
        metric: '30% performance gain',
        suffix: ' in core Web Vitals scores.',
      },
      {
        text: 'Integrated REST APIs into the dashboard serving',
        metric: '5,000+ users',
        suffix: ', ensuring <200ms average response time.',
      },
      {
        text: 'Reduced initial bundle size by',
        metric: '25%',
        suffix: ' through code-splitting and lazy loading strategies.',
      },
      {
        text: 'Implemented responsive layouts and accessibility improvements, increasing mobile session duration by',
        metric: '18%',
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   EXPERIENCE CARD
══════════════════════════════════════════════════════════════════════════ */
function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.22, ease: 'linear', delay: index * 0.12 }}
      className="group relative border border-terminal-border hover:border-phosphor transition-colors duration-200 bg-terminal-surface overflow-hidden"
      style={{ boxShadow: '0 0 0 0 transparent' }}
      whileHover={{ boxShadow: '0 0 24px rgba(0,255,65,0.07)' }}
    >

      {/* ── Phosphor left accent bar (visible on hover) ────────────────── */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-phosphor scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />

      {/* ── Log entry header ───────────────────────────────────────────── */}
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-terminal-border bg-terminal-panel cursor-pointer"
        onClick={() => setExpanded(p => !p)}
      >
        {/* Left cluster */}
        <div className="flex items-start gap-4">
          {/* Index badge */}
          <div className="shrink-0 mt-0.5">
            <div className="font-mono text-xs2 text-smoke-500 tracking-widest">LOG_ENTRY</div>
            <div
              className="font-mono font-bold text-phosphor group-hover:text-glow transition-colors duration-200"
              style={{ fontSize: '1.35rem', lineHeight: 1 }}
            >
              [{exp.index}]
            </div>
          </div>

          {/* Company + role */}
          <div className="space-y-0.5">
            <div className="font-mono font-bold text-smoke-100 tracking-wider text-terminal-base group-hover:text-phosphor group-hover:text-glow transition-colors duration-200">
              {exp.company}
            </div>
            <div className="font-mono text-xs2 text-smoke-300 tracking-widest uppercase">
              {exp.role}
            </div>
          </div>
        </div>

        {/* Right cluster */}
        <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 sm:gap-1 shrink-0">
          {/* Date range */}
          <div className="font-mono text-xs2 text-smoke-400 tracking-widest">
            [{exp.dateStart} — {exp.dateEnd}]
          </div>
          {/* Location */}
          <div className="font-mono text-xs2 text-smoke-500 tracking-widest">
            {exp.location}
          </div>
          {/* Status + expand toggle */}
          <div className="flex items-center gap-2 mt-1">
            <span className="font-mono text-xs2 text-sys-ok tracking-widest">
              ● {exp.status}
            </span>
            <span className="text-smoke-500 font-mono text-xs2 select-none">
              {expanded ? '[-]' : '[+]'}
            </span>
          </div>
        </div>
      </div>

      {/* ── Tags row ───────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 px-5 py-3 border-b border-terminal-border">
        <span className="font-mono text-xs2 text-smoke-500 tracking-widest self-center">FOCUS:</span>
        {exp.tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-xs2 px-2 py-0.5 border border-terminal-border text-smoke-300 tracking-wider uppercase group-hover:border-phosphor/40 transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
        <span className="ml-auto font-mono text-xs2 border px-2 py-0.5 tracking-widest border-terminal-border text-smoke-400">
          {exp.type}
        </span>
      </div>

      {/* ── Bullet points (collapsible) ────────────────────────────────── */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.18, ease: 'linear' }}
        className="overflow-hidden"
      >
        <div className="px-5 py-5 space-y-3">
          {/* Log sub-header */}
          <div className="font-mono text-xs2 text-smoke-500 tracking-widest pb-1 border-b border-terminal-border/60">
            EXECUTION_LOG — {exp.bullets.length} ENTRIES
          </div>

          {exp.bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.15, ease: 'linear', delay: index * 0.12 + i * 0.06 }}
              className="flex gap-3 items-start font-mono text-terminal-sm"
            >
              {/* Line number */}
              <span className="text-smoke-500 shrink-0 tabular-nums text-xs2 mt-0.5 w-5 text-right">
                {String(i + 1).padStart(2, '0')}
              </span>
              {/* Prompt */}
              <span className="text-phosphor shrink-0 mt-0.5">▸</span>
              {/* Content */}
              <p className="text-smoke-300 leading-relaxed">
                {b.text}{' '}
                {b.metric && (
                  <span
                    className="text-phosphor font-bold tracking-wide"
                    style={{ textShadow: '0 0 8px rgba(0,255,65,0.5)' }}
                  >
                    {b.metric}
                  </span>
                )}
                {b.suffix && (
                  <span className="text-smoke-300">{b.suffix}</span>
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Bottom status bar ──────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-5 py-2 border-t border-terminal-border bg-terminal-panel/60">
        <span className="font-mono text-xs2 text-smoke-500 tracking-widest">
          PROC: {exp.index} / {EXPERIENCES.length} — {exp.bullets.length} LOG LINES
        </span>
        <span className="font-mono text-xs2 text-smoke-500 tracking-widest">
          {exp.dateStart.replace('.', '-')} → {exp.dateEnd.replace('.', '-')}
        </span>
      </div>

    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   EXPERIENCE SECTION
══════════════════════════════════════════════════════════════════════════ */
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 min-h-screen bg-terminal-panel relative overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,65,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.025) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial glow — top right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 40% at 80% 15%, rgba(0,255,65,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-10">

        {/* ── Section header ──────────────────────────────────────────── */}
        <div className="space-y-1">
          <div className="text-xs2 text-smoke-400 tracking-widest uppercase">
            [EXP] PROCESS_LOG
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-terminal-2xl font-mono font-bold text-smoke-100 tracking-wide">
              PROFESSIONAL EXPERIENCE
            </h2>
            <span className="text-xs2 text-smoke-400 border border-terminal-border px-2 py-0.5">
              {EXPERIENCES.length} ENTRIES
            </span>
          </div>
          <div className="terminal-hr w-full" />
        </div>

        {/* ── Timeline indicator ──────────────────────────────────────── */}
        <div className="flex items-center gap-3 font-mono text-xs2 text-smoke-500 tracking-widest">
          <span className="text-phosphor">SYS&gt;</span>
          <span>QUERYING EMPLOYMENT_RECORDS...</span>
          <span className="text-sys-ok ml-2">✓ {EXPERIENCES.length} RECORDS FOUND</span>
        </div>

        {/* ── Cards ───────────────────────────────────────────────────── */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.index} exp={exp} index={i} />
          ))}
        </div>

        {/* ── End of log ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: 'linear', delay: 0.3 }}
          className="flex items-center gap-3 font-mono text-xs2 text-smoke-500 pt-2"
        >
          <div className="flex-1 border-t border-terminal-border" />
          <span className="tracking-widest">END OF LOG — {EXPERIENCES.length} ENTRIES PROCESSED</span>
          <div className="flex-1 border-t border-terminal-border" />
        </motion.div>

      </div>
    </section>
  );
}
