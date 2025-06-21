import emailjs from '@emailjs/browser';
import { useRef } from "react";
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
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert('Message failed to send!!');
                    console.error(error.text);
                }
            );
    }

    return (
        <section id="contact" className="bg-[#0F1116] text-white py-20 px-6 flex justify-center items-center min-h-screen">
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 text-center">
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-pink-500">
                        DO YOU HAVE ANY IDEA TO TALK UPON ??
                    </h2>
                    <h3 className="text-xl font-semibold">GET IN TOUCH</h3>

                    <div className="mt-8">
                        <h4 className="text-lg font-semibold">CONTACT</h4>
                        <a
                            href="mailto:priyanshumishra2404@gmail.com"
                            className="text-blue-400 hover:underline"
                        >
                            priyanshumishra2404@gmail.com
                        </a>
                    </div>

                    <div className="mt-6">
                        <h4 className="text-lg font-semibold">SOCIAL MEDIA</h4>
                        <div className="flex justify-center space-x-4 mt-2 text-2xl">
                            <a
                                href="https://www.linkedin.com/in/priyanshu-mishra2404/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://x.com/Priyanshuuu2404"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://wa.me/+919625769191"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-green-400"
                            >
                                <FaWhatsapp />
                            </a>
                            <a
                                href="https://www.instagram.com/_priyanshuuu24"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-400"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://t.me/Priyanshu2404PM"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-200"
                            >
                                <FaTelegram />
                            </a>
                        </div>
                    </div>

                </div>

                <div className='space-y-6'>
                    <h4 className='text-lg font-semibold'>CONTACT FORM</h4>
                    <form ref={form} onSubmit={sendemail} className='space-y-4'>
                        <input
                            type="text"
                            name="user_name"
                            placeholder='Name'
                            required
                            className='w-full p-3 rounded-md bg-transparent border border-gray-700 text-white focus:outline-none' />

                        <input
                            type="email"
                            name="user_email"
                            placeholder='Email'
                            required
                            className='w-full p-3 rounded-md bg-transparent border border-gray-700 text-white focus:outline-none' />

                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required
                            className='w-full p-3 rounded-md bg-transparent border border-gray-700 text-white focus:outline-none' />

                        <button
                            type="submit"
                            className='px-6 py-3 mt-2 rounded-md bg-gradient-to-r from-sky-500 to-pink-500 text-white font-semibold hover:opacty-90 transition-all shadow-lg'>SEND</button>
                    </form>
                </div>
            </div>
        </section>
    );
};