import { motion } from "framer-motion";

const certs = [
  {
    date: '2025-05-30',
    title: 'Supply Chain Operations',
    issuer: 'FLIPKART',
    id: null,
    link: 'https://app.certif-id.com/certificate-view/4adf199abe29020fd8b505016775d3ad8b7740c93d15351ff023f7933a11f43d',
    status: 'VERIFIED',
  },
  {
    date: '2024-07-23',
    title: 'Java Programming',
    issuer: 'CODSOFT',
    id: '726e0fd',
    link: 'https://codsoft.co.in',
    status: 'VERIFIED',
  },
  {
    date: '2024-05-05',
    title: 'Software Engineering Job Simulation',
    issuer: 'JP MORGAN CHASE & CO.',
    id: null,
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_yzD8agQ45esGE8gn8_1714906346798_completion_certificate.pdf',
    status: 'VERIFIED',
  },
  {
    date: '2024-04-21',
    title: 'Software Engineering Job Simulation',
    issuer: 'GOLDMAN SACHS',
    id: null,
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_yzD8agQ45esGE8gn8_1713696392953_completion_certificate.pdf',
    status: 'VERIFIED',
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-16 sm:py-24 px-4 sm:px-6 min-h-screen bg-terminal-panel"
    >
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Section header */}
        <div className="space-y-1">
          <div className="text-xs2 text-smoke-400 tracking-widest uppercase">[03] ACCESS_LOG</div>
          <h2 className="text-terminal-2xl font-mono font-bold text-smoke-100 tracking-wide">
            CREDENTIALS
          </h2>
          <div className="terminal-hr w-full mt-2" />
        </div>

        {/* Log entries */}
        <div className="space-y-0 border border-terminal-border bg-terminal-surface">
          {/* Log header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-terminal-border bg-terminal-panel">
            <span className="text-xs2 text-smoke-400 uppercase tracking-widest">access_log — read-only</span>
            <span className="text-xs2 text-sys-ok">{certs.length} ENTRIES</span>
          </div>

          {certs.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.15, ease: 'linear', delay: i * 0.07 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 px-4 py-3.5 border-b border-terminal-border last:border-0 hover:bg-phosphor/5 hover:border-l-2 hover:border-l-phosphor transition-all duration-fast cursor-pointer"
            >
              {/* Date + tag on mobile: same row */}
              <div className="flex items-center gap-3 sm:contents">
                <span className="font-mono text-xs2 text-smoke-400 shrink-0 tabular-nums">
                  [{cert.date}]
                </span>
                <span className="term-tag shrink-0">CERT</span>
              </div>

              {/* Title */}
              <span className="font-mono text-terminal-sm text-smoke-100 group-hover:text-phosphor group-hover:text-glow transition-colors duration-fast flex-1 min-w-0">
                {cert.title}
              </span>

              {/* Issuer — visible on all screens */}
              <span className="font-mono text-xs2 text-smoke-300 shrink-0">
                — {cert.issuer}
              </span>

              {/* ID if available */}
              {cert.id && (
                <span className="font-mono text-xs2 text-smoke-400 shrink-0 hidden md:block">
                  ID: {cert.id}
                </span>
              )}

              {/* Status */}
              <span className="font-mono text-xs2 text-sys-ok shrink-0">
                [{cert.status} ✓]
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}