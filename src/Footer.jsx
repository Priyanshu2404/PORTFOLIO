import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// 1. Accept darkMode as a prop
export default function Footer({ darkMode }) {
    return (
        <footer
            // 2. Dynamic background, text, and border colors
            className={`py-10 border-t transition-colors duration-500
                ${darkMode
                    ? 'bg-slate-950 text-gray-400 border-gray-800'
                    : 'bg-white text-gray-600 border-gray-200'}`}
        >
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

                {/* Copyright Text */}
                <div className={`text-sm font-medium transition-colors duration-500
                    ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    © {new Date().getFullYear()} Priyanshu Mishra. All rights reserved.
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 text-xl">
                    <a
                        href="https://github.com/Priyanshu2404"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors duration-300 ${darkMode ? 'hover:text-white' : 'hover:text-blue-600'}`}
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/priyanshu-mishra2404/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors duration-300 ${darkMode ? 'hover:text-white' : 'hover:text-blue-700'}`}
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:priyanshumishra2404@gmail.com"
                        className={`transition-colors duration-300 ${darkMode ? 'hover:text-white' : 'hover:text-red-500'}`}
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
}