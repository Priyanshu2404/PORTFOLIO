import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const SOCIAL_LINKS = [
  { Icon: FaLinkedin,  label: 'LinkedIn',  color: '#0A66C2', href: 'https://www.linkedin.com/in/priyanshu-mishra2404/' },
  { Icon: SiX,        label: 'X',         color: '#e8e8e8', href: 'https://x.com/Priyanshuuu2404' },
  { Icon: FaWhatsapp, label: 'WhatsApp',  color: '#25D366', href: 'https://wa.me/+919625769191' },
  { Icon: FaInstagram,label: 'Instagram', color: '#E1306C', href: 'https://www.instagram.com/_priyanshuuu24' },
  { Icon: FaTelegram, label: 'Telegram',  color: '#26A5E4', href: 'https://t.me/Priyanshu2404PM' },
];

const fieldVariants = {
  hidden:  { opacity: 0, x: -8 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.15, ease: 'linear', delay: i * 0.07 },
  }),
};

export default function Contact() {
  const form = useRef();

  const sendemail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_x3l4lsd',
      'template_cyu87jr',
      form.current,
      'J8yY0EbMs6lo4CP73'
    ).then(
      () => {
        toast.success('TRANSMISSION SUCCESSFUL ✓', {
          style: {
            background: '#0d0d0d',
            color: '#00ff41',
            border: '1px solid #1f1f1f',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            borderRadius: '0px',
          },
        });
        form.current.reset();
      },
      (error) => {
        toast.error('TRANSMISSION FAILED ✗', {
          style: {
            background: '#0d0d0d',
            color: '#ff3333',
            border: '1px solid #1f1f1f',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            borderRadius: '0px',
          },
        });
        console.error(error.text);
      }
    );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 min-h-screen bg-terminal-surface"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-5xl mx-auto space-y-8">

        {/* Section header */}
        <div className="space-y-1">
          <div className="text-xs2 text-smoke-400 tracking-widest uppercase">[06] SECURE_TRANSMISSION.INIT</div>
          <h2 className="text-terminal-2xl font-mono font-bold text-smoke-100 tracking-wide">
            CONTACT
          </h2>
          <div className="terminal-hr w-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT — status info */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: 'linear' }}
            className="space-y-8"
          >
            {/* Info block */}
            <div className="border border-terminal-border bg-terminal-panel p-5 space-y-4 font-mono text-terminal-sm">
              <div className="text-xs2 text-smoke-400 uppercase tracking-widest border-b border-terminal-border pb-2">
                RELAY_ENDPOINT
              </div>
              <div>
                <div className="text-smoke-400 text-xs2 uppercase tracking-wider mb-1">EMAIL</div>
                <a
                  href="mailto:priyanshumishra2404@gmail.com"
                  className="text-phosphor hover:text-glow transition-colors duration-fast"
                >
                  priyanshumishra2404@gmail.com
                </a>
              </div>
              <div>
                <div className="text-smoke-400 text-xs2 uppercase tracking-wider mb-3">SOCIAL CHANNELS</div>
                <div className="flex gap-2 flex-wrap">
                  {SOCIAL_LINKS.map(({ Icon, label, color, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      className="group flex items-center justify-center w-9 h-9 border border-terminal-border text-smoke-400
                        hover:border-opacity-80 transition-all duration-fast"
                      style={{ '--brand': color }}
                    >
                      <Icon
                        size={16}
                        className="transition-all duration-fast group-hover:scale-110"
                        style={{ color: 'currentColor' }}
                        onMouseEnter={e => e.currentTarget.style.color = color}
                        onMouseLeave={e => e.currentTarget.style.color = ''}
                      />
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* System status */}
            <div className="space-y-2 font-mono text-xs2 text-smoke-400">
              <div className="flex items-center gap-2">
                <span className="text-sys-ok">●</span>
                <span>SECURE_CHANNEL: ACTIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sys-ok">●</span>
                <span>ENCRYPTION: EMAILJS/TLS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sys-warn">●</span>
                <span>RESPONSE_TIME: 24–48H</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <div className="border border-terminal-border bg-terminal-surface">
            {/* Chrome */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-terminal-border bg-terminal-panel">
              <span className="text-xs2 text-smoke-400 uppercase tracking-widest">transmit_message.sh</span>
              <span className="text-xs2 text-sys-ok animate-flicker">● LIVE</span>
            </div>

            <form ref={form} onSubmit={sendemail} className="p-5 space-y-4 font-mono text-terminal-sm">
              {/* OPERATOR_ID */}
              <motion.div
                custom={0} variants={fieldVariants} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className="space-y-1"
              >
                <label className="text-xs2 text-smoke-400 uppercase tracking-wider">OPERATOR_ID</label>
                <div className="flex items-center border border-terminal-border hover:border-smoke-400 focus-within:border-phosphor transition-colors duration-fast">
                  <span className="text-phosphor px-3 select-none">&gt;</span>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="YOUR NAME"
                    required
                    className="flex-1 bg-transparent text-smoke-100 py-2.5 pr-3 placeholder-smoke-400 caret-phosphor text-terminal-sm"
                  />
                </div>
              </motion.div>

              {/* RELAY_ADDR */}
              <motion.div
                custom={1} variants={fieldVariants} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className="space-y-1"
              >
                <label className="text-xs2 text-smoke-400 uppercase tracking-wider">RELAY_ADDR</label>
                <div className="flex items-center border border-terminal-border hover:border-smoke-400 focus-within:border-phosphor transition-colors duration-fast">
                  <span className="text-phosphor px-3 select-none">&gt;</span>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="YOUR EMAIL"
                    required
                    className="flex-1 bg-transparent text-smoke-100 py-2.5 pr-3 placeholder-smoke-400 caret-phosphor text-terminal-sm"
                  />
                </div>
              </motion.div>

              {/* PAYLOAD */}
              <motion.div
                custom={2} variants={fieldVariants} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className="space-y-1"
              >
                <label className="text-xs2 text-smoke-400 uppercase tracking-wider">PAYLOAD</label>
                <div className="flex border border-terminal-border hover:border-smoke-400 focus-within:border-phosphor transition-colors duration-fast">
                  <span className="text-phosphor px-3 pt-2.5 select-none self-start">&gt;</span>
                  <textarea
                    name="message"
                    placeholder="YOUR MESSAGE"
                    rows="5"
                    required
                    className="flex-1 bg-transparent text-smoke-100 py-2.5 pr-3 placeholder-smoke-400 caret-phosphor text-terminal-sm resize-none"
                  />
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div
                custom={3} variants={fieldVariants} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
              >
                <button
                  type="submit"
                  className="w-full font-mono text-sm py-3 border border-phosphor text-phosphor hover:bg-phosphor hover:text-terminal-black transition-colors duration-fast tracking-widest uppercase shadow-phosphor-sm"
                >
                  [ TRANSMIT ]
                </button>
              </motion.div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}