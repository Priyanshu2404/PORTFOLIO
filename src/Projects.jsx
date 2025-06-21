
const projects = [
    {
        title: "Portfolio Website",
        description: "Responsive portfolio built with React & Tailwind.",
        image: "/projects/portfolio.png",
        github: "https://github.com/Priyanshu2404/PORTFOLIO",
    },
    {
        title: "Interactive Constellation weaver",
        description: "Get full-proof information about various constellations and perform operations on it",
        image: "/projects/constellation.png",
        github: "https://github.com/Priyanshu2404/constellation-weaver",
    },
    {
        title: "Hand Cricket Game",
        description: "2 players playing interface made with HTML,CSS and JavaScript",
        image: "/projects/handcricket.png",
        github: "https://github.com/Priyanshu2404/HAND-CRICKET",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-[#0F1116] text-white py-20 px-6 min-h-screen">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="from-pink-500 via-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text font-bold text-4xl text-transparent">PROJECTS</h2>
                <div className="mt-20 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-700"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                                <div className="flex justify-between text-sm">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-white"
                                    >
                                        GitHub ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
