import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AIChatbot({ darkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hi! I'm Priyanshu's AI assistant. Ask me about his LSTM research or MERN skills!" }
    ]);
    const scrollRef = useRef(null);

    useEffect(() => { scrollRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMsg = { role: "user", text: input };
        setMessages([...messages, userMsg]);
        setInput("");

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
        });
        const data = await response.json();
        setMessages(prev => [...prev, { role: "bot", text: data.reply }]);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-all"
            >
                {isOpen ? "✕" : "🤖"}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className={`absolute bottom-20 right-0 w-80 h-[450px] rounded-2xl shadow-2xl border flex flex-col overflow-hidden backdrop-blur-xl
            ${darkMode ? 'bg-slate-900/90 border-gray-700' : 'bg-white/90 border-gray-200'}`}
                    >
                        <div className="p-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold flex justify-between">
                            <span>AI Assistant</span>
                            <span className="text-xs opacity-70">Powered by Gemini</span>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto space-y-3 custom-scrollbar">
                            {messages.map((m, i) => (
                                <div key={i} className={`max-w-[80%] p-2 rounded-xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white ml-auto' : 'bg-gray-700 text-gray-100 mr-auto'}`}>
                                    {m.text}
                                </div>
                            ))}
                            <div ref={scrollRef} />
                        </div>

                        <div className="p-3 border-t border-gray-700 flex gap-2">
                            <input
                                value={input} onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-transparent text-sm outline-none px-2 py-1 border border-gray-600 rounded-md text-white"
                            />
                            <button onClick={sendMessage} className="text-pink-500 font-bold px-2">Send</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}