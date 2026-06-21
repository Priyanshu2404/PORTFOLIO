import { motion } from "framer-motion";
import {
  FaAws,
  FaGitAlt,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiIntellijidea,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiVscodium,
} from 'react-icons/si';

/* ── Skill definitions ──────────────────────────────────────────────────── */
const SKILLS = [
  // Languages
  { name: 'C',           Icon: SiC,          color: '#A8B9CC', category: 'LANG'  },
  { name: 'C++',         Icon: SiCplusplus,  color: '#00599C', category: 'LANG'  },
  { name: 'Java',        Icon: FaJava,       color: '#E76F00', category: 'LANG'  },
  { name: 'Python',      Icon: FaPython,     color: '#FFD43B', category: 'LANG'  },
  { name: 'JavaScript',  Icon: SiJavascript, color: '#F7DF1E', category: 'LANG'  },
  // Frontend
  { name: 'React',       Icon: FaReact,      color: '#61DAFB', category: 'FRONT' },
  { name: 'Next.js',     Icon: SiNextdotjs,  color: '#e8e8e8', category: 'FRONT' },
  { name: 'Tailwind',    Icon: SiTailwindcss,color: '#38BDF8', category: 'FRONT' },
  // Backend
  { name: 'Node.js',     Icon: FaNodeJs,     color: '#5FA04E', category: 'BACK'  },
  // Databases
  { name: 'PostgreSQL',  Icon: SiPostgresql, color: '#336791', category: 'DB'    },
  { name: 'MongoDB',     Icon: SiMongodb,    color: '#4DB33D', category: 'DB'    },
  { name: 'MySQL',       Icon: SiMysql,      color: '#4479A1', category: 'DB'    },
  // DevOps / Cloud
  { name: 'Git',         Icon: FaGitAlt,     color: '#F1502F', category: 'OPS'   },
  { name: 'AWS',         Icon: FaAws,        color: '#FF9900', category: 'OPS'   },
  // Tools
  { name: 'IntelliJ',   Icon: SiIntellijidea, color: '#E53888', category: 'TOOL' },
  { name: 'VS Code',    Icon: SiVscodium,     color: '#007ACC', category: 'TOOL' },
];

const CATEGORY_LABELS = {
  LANG:  'LANGUAGES',
  FRONT: 'FRONTEND',
  BACK:  'BACKEND',
  DB:    'DATABASES',
  OPS:   'DEVOPS / CLOUD',
  TOOL:  'TOOLING',
};

const GROUPED = Object.entries(
  SKILLS.reduce((acc, s) => {
    (acc[s.category] = acc[s.category] || []).push(s);
    return acc;
  }, {})
);

const cardVariants = {
  hidden:  { opacity: 0, y: 14, scale: 0.97 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.18, ease: 'linear', delay: i * 0.04 },
  }),
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6 min-h-screen bg-terminal-black relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:
          'linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(0,255,65,0.05) 0%, transparent 65%)',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">

        {/* Section header */}
        <div className="space-y-1">
          <div className="text-xs2 text-smoke-400 tracking-widest uppercase">[03] ARSENAL</div>
          <div className="flex items-center gap-4">
            <h2 className="text-terminal-2xl font-mono font-bold text-smoke-100 tracking-wide">
              TECH STACK
            </h2>
            <span className="text-xs2 text-smoke-400 border border-terminal-border px-2 py-0.5">
              {SKILLS.length} MODULES
            </span>
          </div>
          <div className="terminal-hr w-full" />
        </div>

        {/* Grouped grid */}
        {GROUPED.map(([cat, items], groupIdx) => (
          <div key={cat} className="space-y-5">

            {/* Category label */}
            <div className="flex items-center gap-3">
              <span className="text-xs2 text-smoke-400 font-mono tracking-widest uppercase">
                {CATEGORY_LABELS[cat]}
              </span>
              <div className="flex-1 border-t border-terminal-border" />
              <span className="text-xs2 text-smoke-500 font-mono">{items.length}</span>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
              {items.map(({ name, Icon, color }, i) => (
                <motion.div
                  key={name}
                  custom={groupIdx * 5 + i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.12, ease: 'linear' } }}
                  className="group relative flex flex-col items-center justify-center gap-3
                    cursor-default select-none overflow-hidden"
                  style={{
                    /* Solid dark box — matches arsenal page aesthetic */
                    padding: '22px 12px 18px',
                    background: 'rgba(18,18,18,0.95)',
                    border: '1px solid #1f1f1f',
                    borderRadius: '2px',
                  }}
                >
                  {/* ── Green hover fill (slides up from bottom) ── */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-all duration-200 ease-linear"
                    style={{
                      background: 'rgba(0,255,65,0)',
                    }}
                  />
                  {/* We use a pseudo-approach via CSS group-hover via inline style override on the wrapper */}

                  {/* Actual green bg overlay on group-hover */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: 'rgba(0,255,65,0.88)' }}
                  />

                  {/* Phosphor border glow on hover */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-sm"
                    style={{ boxShadow: '0 0 18px rgba(0,255,65,0.35), inset 0 0 12px rgba(0,255,65,0.08)' }}
                  />

                  {/* Icon — brand color at rest, black on hover */}
                  <div className="relative z-10 transition-transform duration-200 group-hover:scale-110">
                    <Icon
                      size={36}
                      className="transition-all duration-200"
                      style={{
                        color,
                        filter: `drop-shadow(0 0 5px ${color}55)`,
                      }}
                    />
                  </div>

                  {/* Label — smoke at rest, black on hover */}
                  <span className="relative z-10 font-mono text-xs2 text-smoke-300 group-hover:text-terminal-black text-center leading-tight tracking-wide transition-colors duration-200 font-medium">
                    {name}
                  </span>

                  {/* Icon color flips to black on hover via an overlay icon */}
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                    style={{ paddingTop: '22px', paddingBottom: '18px' }}
                  >
                    <Icon size={36} style={{ color: '#000000' }} />
                    <span className="font-mono text-xs2 text-terminal-black text-center leading-tight tracking-wide font-bold">
                      {name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer note */}
        <div className="text-xs2 text-smoke-500 font-mono pt-2">
          <span className="text-phosphor">&gt;</span> {SKILLS.length} TECHNOLOGIES LOADED — hover to activate
        </div>

      </div>
    </section>
  );
}