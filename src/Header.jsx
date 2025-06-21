import { Globe } from "lucide-react";

export default function Header() {
    return (
        <nav className="w-full flex justify-center py-5 px-6 bg-[#0F1116] text-white">
            <div className="w-full max-w-6xl flex justify-between items-center border border-gray-700 rounded-2xl px-6 py-3">
                
                {/* Logo */}
                <a href="#" className="text-bold font-sans text-white hover:text-green-300 cursor-pointer">
                    PRIYANSHU MISHRA
                </a>

                {/* Nav Links */}
                <ul className="flex space-x-6 text-sm font-medium uppercase tracking-wider">
                    <li><a href="#projects" className="text-blue-500 hover:text-blue-300 transition">Projects</a></li>
                    <li><a href="#about" className="text-white hover:text-blue-300 transition">About</a></li>
                    <li><a href="#skills" className="text-white hover:text-blue-300 transition">Skills</a></li>
                    <li><a href="#certifications" className="text-white hover:text-blue-300 transition">Certifications</a></li>
                    <li><a href="#contact" className="text-white hover:text-blue-300 transition">Contact</a></li>
                </ul>

                {/* Language Button */}
                <button className="flex items-center gap-2 border border-[#2679FF] rounded-full px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:opacity-90 transition">
                    ENG <Globe size={15} />
                </button>
            </div>
        </nav>
    );
}
