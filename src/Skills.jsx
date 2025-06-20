import { FaCss3Alt, FaHtml5, FaNodeJs, FaNpm, FaPython, FaReact } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const skills = [
    { icon: <FaHtml5 className="text-orange-600 hover:text-orange-300 cursor-pointer" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-600 hover:text-blue-300 cursor-pointer" />, name: 'CSS3' },
    { icon: <SiMongodb className="text-green-600 hover:text-green-300 cursor-pointer" />, name: 'MongoDB' },
    { icon: <FaNodeJs className="text-green-600 hover:text-green-300 cursor-pointer" />, name: 'Node.js' },
    { icon: <FaNpm className="text-red-600 hover:text-red-300 cursor-pointer" />, name: 'NPM' },
    { icon: <FaPython className="text-yellow-600 hover:text-yellow-300 cursor-pointer" />, name: 'Python' },
    { icon: <FaReact className="text-cyan-600 hover:text-cyan-300 cursor-pointer" />, name: 'React' },
    { icon: <SiTailwindcss className="text-sky-600 hover:text-sky-300 cursor-pointer" />, name: 'Tailwind CSS' },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="bg-[#0F1116] text-white py-20 px-6 flex justify-center items-center min-h-screen">
            <div className="max-w-5xl text-center space-y-10">
                <h2 className="text-4xl font-bold">
                    <span className="from-pink-500 via-purple-500 to-blue-500 bg-gradient-to-r bg-clip-text text-transparent">SKILLS</span>
                </h2>
                <p className="text-lg">The skills, tools and technologies I use often:</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-10 place-items-center mt-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="text-5xl hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
