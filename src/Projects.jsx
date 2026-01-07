import { motion } from "framer-motion";

const projects = [
    {
        title: "Portfolio Website",
        description: "Responsive portfolio built with React & Tailwind.",
        image: "projects/portfolio.png",
        github: "https://github.com/Priyanshu2404/PORTFOLIO",
        tech: ["React", "Tailwind", "Vite"],
    },
    {
        title: "Interactive Constellation Weaver",
        description: "Explore constellations, create stories, and interact with star maps.",
        image: "projects/constellation.png",
        github: "https://github.com/Priyanshu2404/constellation-weaver",
        tech: ["React", "Node.js", "MongoDB"],
    },
    {
        title: "Hand Cricket Game",
        description: "Fun browser-based cricket game with real-time score tracking.",
        image: "projects/handcricket.png",
        github: "https://github.com/Priyanshu2404/HAND-CRICKET",
        tech: ["HTML", "CSS", "JavaScript"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-[#0F1116] text-white py-20 px-6 min-h-screen">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="from-pink-500 via-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text font-bold text-4xl text-transparent">
                    PROJECTS
                </h2>

                <div className="mt-20 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-700 bg-[#1A1D29]/70 backdrop-blur-md cursor-pointer hover:scale-[1.03] hover:shadow-pink-500/30 transition-transform"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-blue-400 font-semibold">View on GitHub ↗</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
