
export default function About() {
    return (
        <section id="about" className="relative w-full min-h-screen bg-[#0F1116] text-white flex items-center justify-center px-6 overflow-hidden">

            <div className="absolute inset-0 text-xs text-cyan-400 opacity-30 font-mono whitespace-pre-wrap px-10 py-10 leading-relaxed pointer-events-none z-0 text-center">
                {`function Priyanshu() {
  const skills = ["React", "Node.js", "MongoDB", "Tailwind"];
  return skills.map(skill => \`Mastering \${skill}\`);
}
console.log("FULL STACK DEVELOPER");`}
            </div>

            <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[400px] h-[300px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 opacity-30 blur-3xl"></div>

            <div className="relative z-10 max-w-4xl w-full text-center space-y-6">
                <h1 className="text-5xl md:text-7xl mt-20 font-bold tracking-tight leading-tight">
                    <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                        FULL STACK
                    </span>
                    <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                        DEVELOPER
                    </span>
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
                    I am, Priyanshu — <span className="text-blue-400">full-stack developer</span> with a passion for
                    creating beautiful and responsive websites.
                </p>

                <a href="#certifications">
                    <button className="px-6 py-2 rounded-full border mt-20 border-pink-500 text-sm font-semibold bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:opacity-90 transition shadow-lg shadow-pink-500/30">
                    VIEW MY WORK
                    </button>
                </a>
            </div>
        </section>
    );
}
