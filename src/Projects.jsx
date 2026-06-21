import { motion } from "framer-motion";

const projects = [
  {
    index: '001',
    codename: 'PORTFOLIO_WEBSITE',
    description: 'Responsive portfolio built with React & Tailwind.',
    stack: ['React', 'Tailwind', 'Vite'],
    classification: 'PUBLIC',
    linkLabel: 'GITHUB',
    href: 'https://github.com/Priyanshu2404/PORTFOLIO',
  },
  {
    index: '002',
    codename: 'CONSTELLATION_WEAVER',
    description: 'Explore constellations, create stories, interact with star maps.',
    stack: ['React', 'Node.js', 'MongoDB'],
    classification: 'PUBLIC',
    linkLabel: 'GITHUB',
    href: 'https://github.com/Priyanshu2404/constellation-weaver',
  },
  {
    index: '003',
    codename: 'HAND_CRICKET_ENGINE',
    description: 'Browser-based cricket game with real-time score tracking.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    classification: 'PUBLIC',
    linkLabel: 'GITHUB',
    href: 'https://github.com/Priyanshu2404/HAND-CRICKET',
  },
  {
    index: '004',
    codename: 'LSTM_STOCK_FORECASTING',
    description: 'Hybrid deep learning framework: technical indicators + news sentiment for stock prediction.',
    stack: ['Python', 'TensorFlow', 'LSTM', 'FinBERT', 'yfinance'],
    classification: 'RESEARCH',
    linkLabel: 'COLAB',
    href: 'https://colab.research.google.com/drive/1OGJT0emTYXtReVqbzS4kYc7ZWgKy5wFl#scrollTo=pjgGwiTEsE2K',
  },
];

const rowVariants = {
  hidden:  { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.18, ease: 'linear', delay: i * 0.06 },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 min-h-screen bg-terminal-surface"
    >
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Section header */}
        <div className="space-y-1">
          <div className="text-xs2 text-smoke-400 tracking-widest uppercase">[02] SELECTED_WORKS.LOG</div>
          <div className="flex items-center gap-3">
            <h2 className="text-terminal-2xl font-mono font-bold text-smoke-100 tracking-wide">
              SELECTED WORKS
            </h2>
            <span className="text-xs2 text-smoke-400 border border-terminal-border px-2 py-0.5">
              {projects.length} RECORDS
            </span>
          </div>
          <div className="terminal-hr w-full mt-2" />
        </div>

        {/* Table header */}
        <div className="hidden md:grid grid-cols-[60px_1fr_200px_120px_80px] gap-4 text-xs2 text-smoke-400 tracking-widest uppercase pb-2 border-b border-terminal-border">
          <span>INDEX</span>
          <span>CODENAME / DESCRIPTION</span>
          <span>STACK</span>
          <span>CLASS</span>
          <span>LINK</span>
        </div>

        {/* Rows */}
        <div className="space-y-0">
          {projects.map((proj, i) => (
            <motion.a
              key={proj.index}
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group block border-b border-terminal-border hover:border-phosphor hover:bg-phosphor/5 transition-colors duration-fast cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-[60px_1fr_200px_120px_80px] gap-4 items-start py-4 px-2">
                {/* Index */}
                <span className="font-mono text-terminal-sm text-smoke-400 group-hover:text-phosphor transition-colors duration-fast">
                  [{proj.index}]
                </span>

                {/* Codename + Description */}
                <div className="space-y-1">
                  <div className="font-mono text-terminal-base text-smoke-100 group-hover:text-phosphor group-hover:text-glow transition-colors duration-fast tracking-wider">
                    {proj.codename}
                  </div>
                  <div className="font-mono text-xs2 text-smoke-300 leading-relaxed">
                    {proj.description}
                  </div>
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((tech) => (
                    <span key={tech} className="term-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Classification */}
                <span className={`font-mono text-xs2 tracking-widest uppercase self-start mt-0.5
                  ${proj.classification === 'RESEARCH' ? 'text-sys-warn' : 'text-sys-ok'}`}>
                  {proj.classification}
                </span>

                {/* Link */}
                <span className="font-mono text-xs2 text-smoke-400 group-hover:text-phosphor transition-colors duration-fast self-start mt-0.5 tracking-widest">
                  [{proj.linkLabel}]&nbsp;↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}