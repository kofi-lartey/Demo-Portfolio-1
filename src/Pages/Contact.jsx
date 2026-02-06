import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, MessageSquare, Send, Sparkles, Rocket, MessageCircle } from 'lucide-react';

export default function Contact() {
    const [status, setStatus] = useState('idle'); // idle, sending, success
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Create mailto link with form data
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
        const mailtoLink = `mailto:kofilartey12@gmail.com?subject=${subject}&body=${body}`;

        // Open email client
        window.open(mailtoLink, '_blank');

        // Simulate API call and show success
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // WhatsApp URL
    const whatsappNumber = '233557655008';
    const whatsappMessage = 'Hi! I saw your portfolio and would like to discuss a project.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen pt-24 pb-20 px-6 bg-dot-grid relative"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
        >
            {/* Floating Decorative Icons */}
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-40 left-10 text-toon-yellow opacity-40"><Sparkles size={48} /></motion.div>
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute bottom-20 right-20 text-toon-yellow opacity-20"><Rocket size={100} /></motion.div>

            {/* Header Area */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
                    ACTIVATE THE <br />
                    <span className="bg-toon-yellow text-black px-4 rotate-2 inline-block mt-2">SIGNAL</span>
                </h1>
                <p className="text-gray-400 font-bold mt-8 text-xl">
                    Need a hero? Or just a decent developer? Drop a line below.
                </p>
            </div>

            {/* Quick Contact Options */}
            <div className="max-w-4xl mx-auto mb-12 flex flex-wrap justify-center gap-4">
                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-[#25D366] text-black font-black px-6 py-3 brute-border hover:brute-border-hover transition-all"
                >
                    <MessageCircle size={24} />
                    WhatsApp Me
                </motion.a>
                <motion.a
                    href="mailto:kofilartey12@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-toon-purple text-white font-black px-6 py-3 brute-border hover:brute-border-hover transition-all"
                >
                    <Mail size={24} />
                    Email Me
                </motion.a>
            </div>

            {/* The Form Container */}
            <div className="max-w-2xl mx-auto relative">
                {/* "Top Secret" Badge */}
                <div className="absolute -top-6 -right-6 bg-toon-yellow text-black font-black px-4 py-1 brute-border rotate-12 z-20 hidden md:block">
                    TOP SECRET
                </div>

                <form onSubmit={handleSubmit} className="bg-[var(--bg-secondary)] brute-border border-white p-8 md:p-12 relative overflow-hidden">
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                className="absolute inset-0 z-50 bg-toon-yellow flex flex-col items-center justify-center text-black p-6 text-center"
                            >
                                <Rocket size={80} className="mb-4" />
                                <h2 className="text-4xl font-black italic uppercase">Message Launched!</h2>
                                <p className="font-bold mt-2">Check your radar. I'll be in touch soon.</p>
                                <button onClick={() => setStatus('idle')} className="mt-8 brute-border bg-black text-white px-6 py-2 font-black uppercase">Send Another</button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Field: Name */}
                    <div className="mb-8">
                        <label className="flex items-center gap-2 text-toon-yellow font-black uppercase text-sm mb-2">
                            <User size={16} /> Who are you? <span className="text-gray-600 dark:text-gray-400 normal-case italic">(Don't say Batman)</span>
                        </label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="What's your alias?"
                            className="w-full bg-black border-2 border-gray-800 p-4 text-white font-bold focus:border-toon-yellow outline-none transition-colors"
                        />
                    </div>

                    {/* Field: Email */}
                    <div className="mb-8">
                        <label className="flex items-center gap-2 text-toon-yellow font-black uppercase text-sm mb-2">
                            <Mail size={16} /> Where do I send the reply pigeon?
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="The coordinates..."
                            className="w-full bg-black border-2 border-gray-800 p-4 text-white font-bold focus:border-toon-yellow outline-none transition-colors"
                        />
                    </div>

                    {/* Field: Message */}
                    <div className="mb-10">
                        <label className="flex items-center gap-2 text-toon-yellow font-black uppercase text-sm mb-2">
                            <MessageSquare size={16} /> Tell me your secrets...
                        </label>
                        <textarea
                            required
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Broadcast your message to the multiverse..."
                            className="w-full bg-black border-2 border-gray-800 p-4 text-white font-bold focus:border-toon-yellow outline-none transition-colors resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === 'sending'}
                        className="w-full bg-toon-yellow text-black font-black py-5 uppercase text-2xl brute-border flex items-center justify-center gap-3 neon-pulse disabled:opacity-50"
                    >
                        {status === 'sending' ? 'LAUNCHING...' : 'SEND IT TO THE CLOUD 🚀'}
                    </motion.button>
                </form>

                <div className="text-center mt-8">
                    <p className="text-gray-500 font-bold italic uppercase text-xs tracking-[0.3em]">
                        ⚡ No Spam, Just Vibes ⚡
                    </p>
                </div>
            </div>
        </motion.section>
    );
}
