import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
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
        <section id="contact" className="bg-[#0F1116] text-white py-20 px-6 flex justify-center items-center min-h-screen">
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
                    <h3 className="text-xl font-semibold">GET IN TOUCH</h3>

                    <div className="mt-8">
                        <h4 className="text-lg font-semibold">CONTACT</h4>
                        <a href="mailto:priyanshumishra2404@gmail.com"
                           className="text-blue-400 hover:underline">
                            priyanshumishra2404@gmail.com
                        </a>
                    </div>

                    <div className="mt-6">
                        <h4 className="text-lg font-semibold">SOCIAL MEDIA</h4>
                        <div className="flex justify-center space-x-6 mt-4 text-2xl">
                            {[
                                { Icon: FaLinkedin, link: "https://www.linkedin.com/in/priyanshu-mishra2404/", color: "hover:text-blue-600" },
                                { Icon: FaTwitter, link: "https://x.com/Priyanshuuu2404", color: "hover:text-blue-400" },
                                { Icon: FaWhatsapp, link: "https://wa.me/+919625769191", color: "hover:text-green-400" },
                                { Icon: FaInstagram, link: "https://www.instagram.com/_priyanshuuu24", color: "hover:text-pink-400" },
                                { Icon: FaTelegram, link: "https://t.me/Priyanshu2404PM", color: "hover:text-blue-200" }
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
                    <h4 className="text-lg font-semibold">CONTACT FORM</h4>
                    <form ref={form} onSubmit={sendemail} className="space-y-4">
                        {["user_name", "user_email"].map((field, i) => (
                            <motion.input
                                key={i}
                                type={field === "user_email" ? "email" : "text"}
                                name={field}
                                placeholder={field === "user_email" ? "Email" : "Name"}
                                required
                                whileFocus={{ scale: 1.02 }}
                                className="w-full p-3 rounded-md bg-transparent border border-gray-700 text-white focus:outline-none focus:border-pink-500 transition"
                            />
                        ))}
                        <motion.textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required
                            whileFocus={{ scale: 1.02 }}
                            className="w-full p-3 rounded-md bg-transparent border border-gray-700 text-white focus:outline-none focus:border-pink-500 transition"
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
