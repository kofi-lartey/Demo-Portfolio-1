import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Mail, ArrowRight } from 'lucide-react';

const timelineEvents = [
    {
        year: "2015",
        title: "THE FIRST 'HELLO WORLD'",
        text: "Found a dusty C++ book in the basement. Compiled my first program. It didn't do much, but it felt like magic.",
        align: "left",
        icon: "🚀"
    },
    {
        year: "2019",
        title: "THE GREAT SYNTAX ERROR",
        text: "Spent 14 hours looking for a missing semicolon. Learned the importance of screen wipes and resilience.",
        align: "right",
        icon: "💀"
    },
    {
        year: "2021",
        title: "FREELANCE ODYSSEY",
        text: "Escaped the cubicle life. Started building custom solutions for brands that didn't know they needed me yet.",
        align: "left",
        icon: "💼"
    }
];

const stats = [
    { label: "LOGIC", value: "99%", width: "99%" },
    { label: "SOCIAL BATTERY", value: "40%", width: "40%" },
    { label: "COFFEE CAPACITY", value: "∞", width: "100%" },
    { label: "BUGS CRUSHED", value: "4.2M", width: "85%" },
];

export default function OriginStory() {
    return (
        <section id="origin-story" className="py-20 px-4 font-sans overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

            {/* HEADER BOX */}
            <div className="max-w-4xl mx-auto brute-border bg-white p-8 mb-20 relative text-black">
                <span className="absolute -top-4 left-6 bg-green-500 text-white px-3 py-1 font-bold brute-border text-xs">
                    ISSUE #01: THE BEGINNING
                </span>
                <h2 className="text-6xl font-black italic uppercase leading-none mb-4">
                    THE MAN. <br /> THE MYTH. <br />
                    <span className="text-green-500">THE NERD.</span>
                </h2>
                <p className="text-lg font-medium max-w-xl">
                    Turning caffeine into code since 2015. A journey of pixels, logic, and too many energy drinks. Witness the evolution of a developer who thinks in comic panels.
                </p>
                <div className="absolute -bottom-6 -right-4 bg-yellow-400 font-black px-4 py-2 brute-border rotate-3">
                    ZAP! POW! CODE!
                </div>
            </div>

            <h3 className="text-center text-2xl font-black underline decoration-green-500 mb-16">CHRONOLOGICAL CHAOS</h3>

            {/* TIMELINE SECTION */}
            <div className="max-w-5xl mx-auto relative mb-32">
                {/* Center Line */}
                <div className="absolute left-1/2 w-1 bg-black h-full -translate-x-1/2 hidden md:block" />

                {timelineEvents.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: event.align === 'left' ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`flex flex-col md:flex-row items-center justify-between mb-16 w-full ${event.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Content Box */}
                        <div className="w-full md:w-[45%] brute-border bg-white p-6 relative text-black">
                            <span className="absolute -top-4 left-4 bg-green-500 text-white px-2 py-1 text-xs font-bold brute-border">
                                {event.year}
                            </span>
                            <h4 className="font-black text-xl mb-2 italic uppercase">{event.title}</h4>
                            <p className="text-sm font-semibold text-gray-700">{event.text}</p>
                        </div>

                        {/* Center Icon */}
                        <div className="hidden md:flex z-10 w-12 h-12 brute-border bg-green-500 items-center justify-center text-xl">
                            {event.icon}
                        </div>

                        {/* Image Placeholder */}
                        <div className="w-full md:w-[45%] mt-8 md:mt-0 h-48 brute-border bg-gray-800 rotate-2 overflow-hidden">
                            <div className="w-full h-full bg-[url('https://img.freepik.com/premium-photo/generative-ai-double-exposure-lone-figure-hoodie-power-boxing-universes-collide-with-neon-cyberpunk-holography-cosmic-background-anonymous-man-black-hoodie-hacking-computer-avatar_620624-6562.jpg')] bg-cover opacity-80 hover:scale-110 transition-transform duration-500" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CHARACTER PROFILE */}
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-8">
                    <h3 className="text-4xl font-black italic">CHARACTER PROFILE</h3>
                    <div className="brute-border bg-green-500 px-4 py-1 text-xs font-bold">EXP: 10,240,432 / MAX</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="brute-border bg-white p-4 text-black">
                            <span className="text-xs font-bold text-gray-500 tracking-widest">{stat.label}</span>
                            <div className="text-3xl font-black mb-2 italic">{stat.value}</div>
                            <div className="h-4 w-full bg-gray-200 border-2 border-black">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: stat.width }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-black"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FINAL CTA BOX */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto mt-32 brute-border bg-black text-white p-12 text-center relative"
            >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 px-4 py-1 brute-border text-black font-black italic">
                    TO BE CONTINUED...
                </div>
                <h2 className="text-4xl md:text-5xl font-black italic mb-6">THINK YOUR PROJECT NEEDS A HERO?</h2>
                <p className="mb-10 text-gray-400 font-bold">I'm currently looking for new side-quests and legendary partnerships. Let's build something that breaks the fourth wall.</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center font-black">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to='/work' className="inline-block brute-border bg-green-500 text-black px-8 py-3 hover:translate-x-1 hover:translate-y-1 transition-transform">
                            TELEPORT TO PORTFOLIO
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to='/contact' className="inline-block brute-border bg-white text-black px-8 py-3 hover:translate-x-1 hover:translate-y-1 transition-transform flex items-center gap-2">
                            SUMMON VIA EMAIL <Mail size={18} />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
}
