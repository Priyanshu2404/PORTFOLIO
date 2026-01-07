import { motion } from "framer-motion";

export default function Resume() {
    return (
        <motion.section
            id="resume"
            className="bg-[#0F1116] text-white py-20 px-6 flex justify-center items-center min-h-screen"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-8x1 mx-auto text-center">
                <motion.h2
                    className="from-pink-500 via-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text font-bold text-4xl text-transparent"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    RESUME
                </motion.h2>

                <motion.a
                    href="https://drive.google.com/file/d/1KrmSFZ-l9o2uKFylqcZ6HxM5kXPIIQiA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <button className="px-8 py-3 mt-20 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-pink-500 shadow-lg shadow-pink-500/40 transition transform hover:scale-105 hover:shadow-pink-500/80 animate-pulse">
                        VIEW MY RESUME
                    </button>
                </motion.a>
            </div>
        </motion.section>
    );
}
