import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-terminal-black border-t border-terminal-border">
      <div className="max-w-6xl mx-auto px-4 h-10 flex items-center justify-between font-mono text-xs2 text-smoke-400">

        {/* Left */}
        <div className="flex items-center gap-3">
          <span className="text-sys-ok">■</span>
          <span className="tracking-widest uppercase">
            © {year} PRIYANSHU_MISHRA.DEV
          </span>
        </div>

        {/* Center — build info */}
        <div className="hidden sm:flex items-center gap-3 text-smoke-500 tracking-widest">
          <span>REACT_19</span>
          <span className="text-terminal-border">|</span>
          <span>TW_v3.4</span>
          <span className="text-terminal-border">|</span>
          <span>FM_v12</span>
        </div>

        {/* Right — icon links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Priyanshu2404"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="group text-smoke-400 hover:text-phosphor transition-colors duration-fast"
          >
            <FaGithub
              size={15}
              className="group-hover:drop-shadow-[0_0_6px_rgba(0,255,65,0.6)] transition-all duration-fast"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshu-mishra2404/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="group text-smoke-400 hover:text-[#0A66C2] transition-colors duration-fast"
          >
            <FaLinkedin
              size={15}
              className="transition-all duration-fast"
            />
          </a>
          <a
            href="mailto:priyanshumishra2404@gmail.com"
            title="Email"
            className="group text-smoke-400 hover:text-phosphor transition-colors duration-fast"
          >
            <FaEnvelope
              size={15}
              className="group-hover:drop-shadow-[0_0_6px_rgba(0,255,65,0.6)] transition-all duration-fast"
            />
          </a>
        </div>

      </div>
    </footer>
  );
}