import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-[#0F1116] text-white px-4 sm:px-6 py-5">
            <div className="max-w-6xl mx-auto flex justify-between items-center border border-gray-700 rounded-2xl px-4 py-3">

                <p className="font-bold text-white hover:text-green-300 cursor-pointer text-lg">
                    PRIYANSHU MISHRA
                </p>

                <ul className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wider">
                    <li><a href="#projects" className="text-blue-500 hover:text-blue-300 transition">Projects</a></li>
                    <li><a href="#about" className="text-white hover:text-blue-300 transition">About</a></li>
                    <li><a href="#resume" className="text-white hover:text-blue-300 transition">Resume</a></li>
                    <li><a href="#skills" className="text-white hover:text-blue-300 transition">Skills</a></li>
                    <li><a href="#certifications" className="text-white hover:text-blue-300 transition">Certifications</a></li>
                    <li><a href="#contact" className="text-white hover:text-blue-300 transition">Contact</a></li>
                </ul>

                <button className="hidden sm:flex items-center gap-2 border border-[#2679FF] rounded-full px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 transition">
                    ENG <Globe size={15} />
                </button>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <ul className="md:hidden mt-4 space-y-3 px-4 text-sm font-medium uppercase tracking-wider">
                    <li><a href="#projects" className="block text-blue-500 hover:text-blue-300 transition">Projects</a></li>
                    <li><a href="#about" className="block text-white hover:text-blue-300 transition">About</a></li>
                    <li><a href="#resume" className="block text-white hover:text-blue-300 transition">Resume</a></li>
                    <li><a href="#skills" className="block text-white hover:text-blue-300 transition">Skills</a></li>
                    <li><a href="#certifications" className="block text-white hover:text-blue-300 transition">Certifications</a></li>
                    <li><a href="#contact" className="block text-white hover:text-blue-300 transition">Contact</a></li>
                </ul>
            )}
        </nav>
    );
}
