import { motion } from 'framer-motion';
// Added Moon to imports
import { FolderCode, Github, Home, Instagram, Linkedin, MessageCircle, Moon, Sun } from 'lucide-react';

// Receive darkMode and setDarkMode as props
const Dock = ({ darkMode, setDarkMode }) => {
    const navItems = [
        { icon: <Home size={20} />, label: "Home", href: "#" },
        { icon: <FolderCode size={20} />, label: "Projects", href: "#projects" },
        { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/Priyanshu2404" },
        { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-mishra2404/" },
        { icon: <MessageCircle size={20} />, label: "WhatsApp", href: "https://wa.me/919625769191" },
        { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com/beingpriyanshu24" },
        { 
            // Switches icon based on current theme
            icon: darkMode ? <Sun size={20} /> : <Moon size={20} />,
            label: "Theme",
            isAction: true // Mark this as an action button, not a link
        },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                className="flex items-center gap-3 px-4 py-3 bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-full shadow-2xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                {navItems.map((item, index) => (
                    item.isAction ? (
                        /* Use a button for the Theme toggle */
                        <motion.button
                            key={index}
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-3 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative group outline-none"
                            whileHover={{ scale: 1.4, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {item.icon}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {item.label}
                            </span>
                        </motion.button>
                    ) : (
                        /* Use an anchor tag for links */
                        <motion.a
                            key={index}
                            href={item.href}
                            target={item.href.startsWith('http') ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="p-3 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative group"
                            whileHover={{ scale: 1.4, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {item.icon}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {item.label}
                            </span>
                        </motion.a>
                    )
                ))}
            </motion.div>
        </div>
    );
};

export default Dock;