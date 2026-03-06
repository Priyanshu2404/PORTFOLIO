import { AnimatePresence, motion } from 'framer-motion';
import { Bot, FolderCode, Github, Home, Instagram, Linkedin, MessageCircle, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import AIChatbot from './AIChatbot'; // Ensure the path is correct

const Dock = ({ darkMode, setDarkMode }) => {
    // 1. Local state to manage the AI Chatbot visibility
    const [showChat, setShowChat] = useState(false);

    const navItems = [
        { icon: <Home size={20} />, label: "Home", href: "#" },
        { icon: <FolderCode size={20} />, label: "Projects", href: "#projects" },
        { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/Priyanshu2404" },
        { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-mishra2404/" },
        {
            // 2. New AI Assistant Action Button
            icon: <Bot size={20} />,
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
            {/* 3. AI Chatbot Window (Appears above the Dock when toggled) */}
            <AnimatePresence>
                {showChat && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-28 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px]"
                    >
                        <AIChatbot darkMode={darkMode} />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <motion.div
                    className="flex items-center gap-3 px-4 py-3 bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-full shadow-2xl"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    {navItems.map((item, index) => (
                        item.isAction ? (
                            <motion.button
                                key={index}
                                // 4. Handles different actions for Theme vs Chat
                                onClick={() => {
                                    if (item.actionType === "theme") setDarkMode(!darkMode);
                                    if (item.actionType === "chat") setShowChat(!showChat);
                                }}
                                className={`p-3 rounded-full transition-colors relative group outline-none
                                    ${item.actionType === "chat" && showChat
                                        ? "bg-pink-500 text-white"
                                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                                whileHover={{ scale: 1.4, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {item.icon}
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    {item.label}
                                </span>
                            </motion.button>
                        ) : (
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
        </>
    );
};

export default Dock;