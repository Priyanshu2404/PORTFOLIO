import { motion } from "framer-motion";

export default function About({ darkMode }) {
    return (
        <section
            id="about"
            className={`relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden transition-colors duration-500 
                ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-gray-900'}`}
        >
            {/* Background Code Effect - Adjusts color and opacity for readability */}
            <div className={`absolute inset-0 text-xs font-mono whitespace-pre-wrap px-10 py-10 leading-relaxed pointer-events-none z-0 text-center transition-all duration-500
                ${darkMode ? 'text-cyan-400 opacity-20' : 'text-blue-600 opacity-10'}`}>
                {`function Priyanshu() {
  const skills = ["React", "Node.js", "MongoDB", "Tailwind"];
  return skills.map(skill => \`Mastering \${skill}\`);
}
console.log("FULL STACK DEVELOPER");`}
            </div>

            {/* Glowing Gradient Blob - Softens in Light Mode */}
            <div className={`absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[450px] h-[320px] rounded-full blur-3xl transition-all duration-500
    ${darkMode
                    ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-30'
                    : 'bg-gradient-to-r from-cyan-400 to-blue-300 opacity-20'}`}>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl w-full text-center space-y-8">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-7xl mt-20 font-bold tracking-tight leading-tight"
                >
                    <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                        FULL STACK
                    </span>
                    <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                        DEVELOPER
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`text-lg md:text-xl leading-relaxed max-w-2xl mx-auto transition-colors duration-500
                        ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                    I’m <span className="text-blue-400 font-semibold">Priyanshu Mishra</span>,
                    a passionate <span className="text-pink-400 font-semibold">Full Stack Developer</span>
                    who loves building modern, scalable, and responsive web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center gap-6 mt-12 flex-wrap"
                >
                    <a href="#projects">
                        <button className="px-8 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-pink-500 shadow-lg shadow-pink-500/40 transition transform hover:scale-105 hover:shadow-pink-500/80">
                            VIEW MY WORK
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}