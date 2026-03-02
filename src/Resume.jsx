import { motion } from "framer-motion";

// 1. Accept darkMode as a prop
export default function Resume({ darkMode }) {
    return (
        <motion.section
            id="resume"
            // 2. Updated: Dynamic background and text color transition
            className={`py-20 px-6 flex justify-center items-center min-h-screen transition-colors duration-500
                ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-gray-900'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-8xl mx-auto text-center">
                {/* Heading */}
                <motion.h2
                    className="from-pink-500 via-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text font-bold text-4xl text-transparent"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    RESUME
                </motion.h2>

                {/* Resume Download/View Link */}
                <motion.a
                    href="https://drive.google.com/file/d/1KrmSFZ-l9o2uKFylqcZ6HxM5kXPIIQiA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {/* 3. Button with hover and shadow effects */}
                    <button className={`px-8 py-3 mt-20 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-pink-500 shadow-lg transition transform hover:scale-105 animate-pulse
                        ${darkMode ? 'shadow-pink-500/40 hover:shadow-pink-500/80' : 'shadow-blue-500/30 hover:shadow-xl'}`}>
                        VIEW MY RESUME
                    </button>
                </motion.a>
            </div>
        </motion.section>
    );
}