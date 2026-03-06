import { useEffect, useRef, useState } from "react";

export default function AIChatbot({ darkMode }) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hi! I'm Priyanshu's AI assistant. Ask me about his LSTM research or MERN skills!" }
    ]);
    const scrollRef = useRef(null);

    // Auto-scroll logic to stay at the bottom of the chat
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", text: input };
        setMessages([...messages, userMsg]);
        setInput("");

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });
            const data = await response.json();
            setMessages(prev => [...prev, { role: "bot", text: data.reply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: "bot", text: "Sorry, I'm having trouble connecting right now." }]);
        }
    };

    return (
        /* Saari 'fixed' aur 'absolute' classes hata di gayi hain taaki ye Dock ke container mein render ho */
        <div className={`w-full h-[450px] rounded-2xl shadow-2xl border flex flex-col overflow-hidden backdrop-blur-xl transition-all duration-300
            ${darkMode ? 'bg-slate-900/95 border-gray-700' : 'bg-white/95 border-gray-200 shadow-xl'}`}>

            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-lg">🤖</span>
                    <span>AI Assistant</span>
                </div>
                <span className="text-[10px] opacity-80 bg-black/20 px-2 py-1 rounded-full uppercase tracking-wider">Gemini 1.5 Flash</span>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-hide">
                {messages.map((m, i) => (
                    <div
                        key={i}
                        className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                                ? 'bg-blue-600 text-white ml-auto rounded-tr-none'
                                : `${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'} mr-auto rounded-tl-none border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`
                            }`}
                    >
                        {m.text}
                    </div>
                ))}
                <div ref={scrollRef} />
            </div>

            {/* Input Field Area */}
            <div className={`p-4 border-t ${darkMode ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50/50'} flex gap-2`}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type your message..."
                    className={`flex-1 text-sm outline-none px-4 py-2 rounded-full border transition-all
                        ${darkMode
                            ? 'bg-slate-800 border-gray-700 text-white focus:border-pink-500'
                            : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'}`}
                />
                <button
                    onClick={sendMessage}
                    className="bg-gradient-to-r from-pink-500 to-blue-500 text-white p-2 rounded-full hover:scale-105 transition-transform"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}