import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

// 1. Accept darkMode as a prop
export default function Contact({ darkMode }) {
    const form = useRef();

    const sendemail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_x3l4lsd',
            'template_cyu87jr',
            form.current,
            'J8yY0EbMs6lo4CP73'
        )
            .then(
                () => {
                    toast.success("Message sent successfully! 🚀");
                    form.current.reset();
                },
                (error) => {
                    toast.error("Message failed to send ❌");
                    console.error(error.text);
                }
            );
    }

    return (
        // 2. Dynamic background and text colors
        <section
            id="contact"
            className={`py-20 px-6 flex justify-center items-center min-h-screen transition-colors duration-500
                ${darkMode ? 'bg-slate-950 text-white' : 'bg-gray-50 text-gray-900'}`}
        >
            <Toaster position="top-center" reverseOrder={false} />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 text-center"
            >
                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-pink-500">
                        DO YOU HAVE ANY IDEA TO TALK UPON ??
                    </h2>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        GET IN TOUCH
                    </h3>

                    <div className="mt-8">
                        <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>CONTACT</h4>
                        <a href="mailto:priyanshumishra2404@gmail.com"
                            className="text-blue-500 hover:underline font-medium">
                            priyanshumishra2404@gmail.com
                        </a>
                    </div>

                    <div className="mt-6">
                        <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>SOCIAL MEDIA</h4>
                        <div className="flex justify-center space-x-6 mt-4 text-2xl">
                            {[
                                { Icon: FaLinkedin, link: "https://www.linkedin.com/in/priyanshu-mishra2404/", color: darkMode ? "hover:text-blue-600" : "text-blue-700 hover:text-blue-900" },
                                { Icon: FaTwitter, link: "https://x.com/Priyanshuuu2404", color: darkMode ? "hover:text-blue-400" : "text-blue-400 hover:text-blue-600" },
                                { Icon: FaWhatsapp, link: "https://wa.me/+919625769191", color: darkMode ? "hover:text-green-400" : "text-green-600 hover:text-green-800" },
                                { Icon: FaInstagram, link: "https://www.instagram.com/_priyanshuuu24", color: darkMode ? "hover:text-pink-400" : "text-pink-600 hover:text-pink-800" },
                                { Icon: FaTelegram, link: "https://t.me/Priyanshu2404PM", color: darkMode ? "hover:text-blue-200" : "text-sky-600 hover:text-sky-800" }
                            ].map(({ Icon, link, color }, i) => (
                                <motion.a
                                    key={i}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                    className={`${color} transition-all duration-300`}
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>CONTACT FORM</h4>
                    <form ref={form} onSubmit={sendemail} className="space-y-4">
                        {["user_name", "user_email"].map((field, i) => (
                            <motion.input
                                key={i}
                                type={field === "user_email" ? "email" : "text"}
                                name={field}
                                placeholder={field === "user_email" ? "Email" : "Name"}
                                required
                                whileFocus={{ scale: 1.02 }}
                                // 3. Dynamic input styling for borders and text
                                className={`w-full p-3 rounded-md bg-transparent border transition focus:outline-none focus:border-pink-500
                                    ${darkMode
                                        ? 'border-gray-700 text-white placeholder-gray-500'
                                        : 'border-gray-300 text-gray-900 placeholder-gray-400'}`}
                            />
                        ))}
                        <motion.textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required
                            whileFocus={{ scale: 1.02 }}
                            className={`w-full p-3 rounded-md bg-transparent border transition focus:outline-none focus:border-pink-500
                                ${darkMode
                                    ? 'border-gray-700 text-white placeholder-gray-500'
                                    : 'border-gray-300 text-gray-900 placeholder-gray-400'}`}
                        />
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 mt-2 rounded-md bg-gradient-to-r from-sky-500 to-pink-500 text-white font-semibold transition-all shadow-lg shadow-pink-500/40"
                        >
                            SEND
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
}