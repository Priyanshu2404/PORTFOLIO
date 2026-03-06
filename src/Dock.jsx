import { AnimatePresence, motion } from 'framer-motion';
import { FolderCode, Github, Home, Instagram, Linkedin, MessageCircle, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import AIChatbot from './AIChatbot';

const Dock = ({ darkMode, setDarkMode }) => {
    const [showChat, setShowChat] = useState(false);

    const navItems = [
        { icon: <Home size={20} />, label: "Home", href: "#" },
        { icon: <FolderCode size={20} />, label: "Projects", href: "#projects" },
        { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/Priyanshu2404" },
        { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-mishra2404/" },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot">
                    <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
                </svg>,
            label: "AI Assistant",
            isAction: true,
            actionType: "chat"
        },
        { icon: <MessageCircle size={20} />, label: "WhatsApp", href: "https://wa.me/919625769191" },
        { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com/beingpriyanshu24" },
        {
            icon: darkMode ? <Sun size={20} /> : <Moon size={20} />,
            label: "Theme",
            isAction: true,
            actionType: "theme"
        },
    ];

    return (
        <>
            <AnimatePresence>
                {showChat && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        // Center the chatbot above the dock
                        className="fixed bottom-28 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-[380px]"
                    >
                        <AIChatbot darkMode={darkMode} />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[50]">
                <motion.div
                    className="flex items-center gap-3 px-4 py-3 bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-full shadow-2xl"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    {navItems.map((item, index) => (
                        item.isAction ? (
                            <motion.button
                                key={index}
                                onClick={() => {
                                    if (item.actionType === "theme") setDarkMode(!darkMode);
                                    if (item.actionType === "chat") setShowChat(!showChat);
                                }}
                                className={`p-3 rounded-full relative group transition-colors
                                    ${item.actionType === "chat" && showChat
                                        ? "bg-pink-500 text-white"
                                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                                whileHover={{ scale: 1.4, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {item.icon}
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                                    {item.label}
                                </span>
                            </motion.button>
                        ) : (
                            <motion.a
                                key={index}
                                href={item.href}
                                target={item.href.startsWith('http') ? "_blank" : "_self"}
                                className="p-3 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 relative group"
                                whileHover={{ scale: 1.4, y: -5 }}
                            >
                                {item.icon}
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                                    {item.label}
                                </span>
                            </motion.a>
                        )
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default Dock;