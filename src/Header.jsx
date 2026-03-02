import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

// 1. Accept darkMode as a prop
export default function Header({ darkMode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className={`w-full px-4 sm:px-6 py-5 transition-colors duration-500
            ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-gray-900'}`}>
            
            {/* 2. Inner container border changes based on theme */}
            <div className={`max-w-6xl mx-auto flex justify-between items-center border rounded-2xl px-4 py-3 transition-colors duration-500
                ${darkMode ? 'border-gray-700 bg-slate-900/50' : 'border-gray-200 bg-gray-50'}`}>

                <p className={`font-bold cursor-pointer text-lg transition-colors
                    ${darkMode ? 'text-white hover:text-green-300' : 'text-gray-900 hover:text-blue-600'}`}>
                    PRIYANSHU MISHRA
                </p>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-sm font-medium uppercase tracking-wider">
                    <li><a href="#projects" className="text-blue-500 hover:text-blue-400 transition">Projects</a></li>
                    {[
                        ['About', '#about'],
                        ['Resume', '#resume'],
                        ['Skills', '#skills'],
                        ['Certifications', '#certifications'],
                        ['Contact', '#contact']
                    ].map(([label, href]) => (
                        <li key={label}>
                            <a href={href} className={`transition-colors 
                                ${darkMode ? 'text-white hover:text-blue-300' : 'text-gray-600 hover:text-blue-600'}`}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Language/Globe Button */}
                <button className="hidden sm:flex items-center gap-2 border border-blue-500 rounded-full px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 transition shadow-md">
                    ENG <Globe size={15} />
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    className={`${darkMode ? 'text-white' : 'text-gray-900'} md:hidden`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <ul className={`md:hidden mt-4 space-y-3 px-6 py-4 rounded-xl text-sm font-medium uppercase tracking-wider shadow-lg transition-colors
                    ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
                    <li><a href="#projects" className="block text-blue-500">Projects</a></li>
                    {['About', 'Resume', 'Skills', 'Certifications', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} className="block hover:text-blue-500 transition">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}