import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Cpu, Bug, Zap, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: "01",
        title: "THE BUG-SQUASHER 3000",
        desc: "A Dashboard so clean you could eat off it. Built for high-stakes debugging where every semicolon counts.",
        tags: ["REACT", "NODE.JS", "SOCKET.IO"],
        status: "STATUS: 100% LETHAL",
        color: "neon-green",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600"
    },
    {
        id: "02",
        title: "DASHBOARD DELUXE",
        desc: "Code so fast it breaks the sound barrier (and my keyboard). Analytics that look good even at 3AM.",
        tags: ["NEXT.JS", "D3.JS", "POSTGRESQL"],
        status: "HYPER-SPEED",
        color: "magenta-500",
        img: "https://img.freepik.com/free-vector/user-panel-template-infographic-dashboard_23-2148378206.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: "03",
        title: "PIXEL PUNCHER",
        desc: "A creative engine for the artistically inclined. It doesn't draw for you, but it judges you silently.",
        tags: ["VUE 2", "CANVAS", "FIREBASE"],
        status: "ULTRA HD",
        color: "yellow-400",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600"
    },
    {
        id: "04",
        title: "LOGIC LABYRINTH",
        desc: "An AI that solves puzzles so you don't have to. Warning: May become sentient and start ordering pizza.",
        tags: ["PYTHON", "TENSORFLOW", "FASTAPI"],
        status: "SOLVED!",
        color: "cyan-400",
        img: "https://opengraph.b-cdn.net/production/images/7ded02d3-264a-4024-a0c0-ce154f71c68d.png?token=2npOxkXx-eHPgO4zk36kkNK5lCQFhLyB6RWarq5dGyo&height=630&width=1200&expires=33273463056"
    }
];

export default function HallOfFame() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen pt-24 pb-20 px-4"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
        >
            {/* HEADER SECTION */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter neon-glow"
                >
                    HALL OF <span className="text-neon-green">FAME</span>
                </motion.h1>
                <p className="text-gray-400 font-bold uppercase mt-4 tracking-widest">
                    Behold the glorious digital monuments of code and chaos.
                </p>
                <div className="mt-4 bg-neon-green text-black inline-block px-4 py-1 font-black text-xs uppercase italic brute-border">
                    Warranted until the next browser update.
                </div>
            </div>

            {/* GRID SECTION */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((proj, i) => (
                    <motion.div
                        key={proj.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="brute-card border-white group overflow-hidden"
                    >
                        {/* WINDOW TOP BAR */}
                        <div className="bg-[#1e1e1e] p-3 flex justify-between items-center border-b-2 border-white">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black" />
                                <div className="w-3 h-3 rounded-full bg-green-500 border border-black" />
                            </div>
                            <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                                PROJECT_FILE_v{proj.id}.exe
                            </span>
                        </div>

                        {/* PREVIEW IMAGE AREA */}
                        <div className="relative h-64 overflow-hidden border-b-2 border-white">
                            <img
                                src={proj.img}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                alt={proj.title}
                            />
                            <div className="absolute top-4 left-4 bg-neon-green text-black px-2 py-1 font-black text-[10px] brute-border">
                                {proj.status}
                            </div>
                        </div>

                        {/* CONTENT AREA */}
                        <div className="p-8">
                            <h2 className="text-3xl font-black text-white italic uppercase mb-2">
                                {proj.title}
                            </h2>
                            <p className="text-gray-400 font-bold mb-6 line-clamp-2">
                                {proj.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {proj.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-black border border-white px-2 py-1 text-white bg-black">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-neon-green text-black font-black py-4 uppercase text-lg brute-border hover:bg-white transition-colors flex items-center justify-center gap-2"
                            >
                                VIEW CASE <ExternalLink size={20} />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* FINAL CALL TO ACTION BOX */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto mt-32 border-4 border-neon-green bg-[#0a0a0a] p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10"
            >
                <div className="flex items-center gap-8">
                    <div className="w-24 h-24 bg-neon-green rounded-full brute-border flex items-center justify-center">
                        <Zap size={48} fill="black" />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black italic text-white leading-none">WANT TO SEE MORE CHAOS?</h2>
                        <p className="text-gray-500 font-bold uppercase mt-2 italic">Let's build something weird together.</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to='/contact' className="inline-block bg-neon-green text-black font-black px-8 py-4 brute-border hover:bg-white transition-all uppercase flex items-center gap-2">
                            Get in touch <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to='/pricing' className="inline-block bg-black text-white font-black px-8 py-4 border-2 border-white hover:border-neon-green transition-all uppercase">
                            View Pricing
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
