import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0F1116] text-gray-400 py-10  border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                
                <div className="text-sm text-white font-medium">
                    © {new Date().getFullYear()} Priyanshu Mishra.     All rights reserved.
                </div>

                <div className="flex space-x-4 text-xl">
                    <a href="https://github.com/Priyanshu2404" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/priyanshu-mishra2404/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:priyanshumishra2404@gmail.com" className="hover:text-white transition">
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </footer>
    );
}
