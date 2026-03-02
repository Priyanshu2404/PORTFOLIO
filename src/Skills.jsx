import { FaCss3Alt, FaHtml5, FaNodeJs, FaNpm, FaPython, FaReact } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const skills = [
    { icon: <FaHtml5 className="text-orange-600 hover:text-orange-400 cursor-pointer" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-600 hover:text-blue-400 cursor-pointer" />, name: 'CSS3' },
    { icon: <SiMongodb className="text-green-600 hover:text-green-400 cursor-pointer" />, name: 'MongoDB' },
    { icon: <FaNodeJs className="text-green-600 hover:text-green-400 cursor-pointer" />, name: 'Node.js' },
    { icon: <FaNpm className="text-red-600 hover:text-red-400 cursor-pointer" />, name: 'NPM' },
    { icon: <FaPython className="text-yellow-600 hover:text-yellow-400 cursor-pointer" />, name: 'Python' },
    { icon: <FaReact className="text-cyan-600 hover:text-cyan-400 cursor-pointer" />, name: 'React' },
    { icon: <SiTailwindcss className="text-sky-600 hover:text-sky-400 cursor-pointer" />, name: 'Tailwind CSS' },
];

// 1. Accept darkMode as a prop
export default function SkillsSection({ darkMode }) {
    return (
        <section
            id="skills"
            // 2. Dynamic background and text colors
            className={`py-20 px-6 flex justify-center items-center min-h-screen transition-colors duration-500
                ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-gray-900'}`}
        >
            <div className="max-w-5xl text-center space-y-10">
                <h2 className="text-4xl font-bold">
                    <span className="from-pink-500 via-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent">
                        SKILLS
                    </span>
                </h2>

                {/* 3. Responsive text color for the description */}
                <p className={`text-lg transition-colors duration-500 
                    ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    The skills, tools and technologies I use often:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-10 place-items-center mt-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <div className="text-5xl transform group-hover:scale-125 transition-transform duration-300 ease-out">
                                {skill.icon}
                            </div>
                            {/* 4. Added skill names for better accessibility in both modes */}
                            <span className={`text-xs font-semibold tracking-wider transition-opacity duration-300 opacity-0 group-hover:opacity-100
                                ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}