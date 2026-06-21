import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Resume() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="resume"
      ref={ref}
      className="py-16 sm:py-24 px-4 sm:px-6 min-h-screen bg-terminal-black flex items-center"
    >
      <div className="max-w-2xl mx-auto w-full space-y-8">

        {/* Section header */}
        <div className="space-y-1">
          <div className="text-xs2 text-smoke-400 tracking-widest uppercase">[05] RESUME.FETCH</div>
          <h2 className="text-terminal-2xl font-mono font-bold text-smoke-100 tracking-wide">
            RESUME
          </h2>
          <div className="terminal-hr w-full mt-2" />
        </div>

        {/* Terminal execution block */}
        <div className="border border-terminal-border bg-terminal-surface">
          {/* Chrome */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-terminal-border bg-terminal-panel">
            <span className="text-xs2 text-smoke-400 uppercase tracking-widest">fetch_resume.sh</span>
          </div>

          <div className="p-6 space-y-3 font-mono text-terminal-sm">
            {/* Command line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.15, ease: 'linear', delay: 0 }}
              className="text-smoke-200 break-all"
            >
              <span className="text-phosphor">$ </span>
              EXECUTE: FETCH_RESUME --format=pdf --destination=browser
            </motion.div>

            {/* Fetching line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.15, ease: 'linear', delay: 0.3 }}
              className="text-smoke-400"
            >
              <span className="text-phosphor">&gt; </span>
              FETCHING FROM SECURE STORAGE...
            </motion.div>

            {/* Progress bar */}
            {inView && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, ease: 'linear', delay: 0.5 }}
                className="space-y-1"
              >
                <div className="h-1.5 bg-terminal-muted w-full overflow-hidden">
                  <motion.div
                    className="h-full bg-phosphor shadow-phosphor-sm"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.2, ease: 'linear', delay: 0.6 }}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15, ease: 'linear', delay: 1.8 }}
                  className="text-phosphor text-glow"
                >
                  ████████████ 100% — TRANSFER COMPLETE
                </motion.div>
              </motion.div>
            )}

            {/* Ready line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.15, ease: 'linear', delay: 2.0 }}
              className="text-sys-ok"
            >
              <span className="text-phosphor">&gt; </span>
              READY. OPENING FILE...
            </motion.div>

            {/* Download button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.15, ease: 'linear', delay: 2.2 }}
              className="pt-2"
            >
              <a
                href="https://drive.google.com/file/d/1KrmSFZ-l9o2uKFylqcZ6HxM5kXPIIQiA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button className="w-full sm:w-auto font-mono text-sm px-6 py-2.5 border border-phosphor text-phosphor hover:bg-phosphor hover:text-terminal-black transition-colors duration-fast tracking-widest uppercase shadow-phosphor-sm">
                  [ ↓ DOWNLOAD RESUME.PDF ]
                </button>
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}