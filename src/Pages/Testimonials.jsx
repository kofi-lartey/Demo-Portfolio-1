import { motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
    {
        id: 1,
        text: "The Tech Toon turned my spaghetti code into a masterpiece! I've never seen a dev move this fast.",
        author: "SARAH @ TECHCORP",
        role: "PRODUCT LEAD",
        type: "white",
        stars: 5,
        rotate: -1,
        highlight: "masterpiece!"
    },
    {
        id: 2,
        text: "Brilliant, fast, and surprisingly funny. Highly recommend if you want your UI to actually pop.",
        author: "JAMES @ STARTUPX",
        role: "FOUNDER",
        type: "yellow",
        stars: 5,
        rotate: 2,
        tag: "TOP RATED"
    },
    {
        id: 3,
        text: "Exceeded all expectations. The neo-brutalist style fits our brand perfectly. It's bold, loud, and works.",
        author: "ELENA @ CREATIVE STUDIO",
        role: "ART DIRECTOR",
        type: "white",
        stars: 5,
        rotate: 1,
        highlight: "neo-brutalist style"
    },
    {
        id: 4,
        text: "The best dev in this dimension. Period.",
        author: "UNKNOWN USER",
        role: "",
        type: "white",
        stars: 0,
        rotate: -2,
        small: true
    }
];

export default function Testimonials() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen pt-24 pb-20 px-6 bg-dot-grid relative overflow-hidden"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            {/* Decorative Elements */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-40 right-10 bg-toon-yellow brute-border px-4 py-2 font-black italic rotate-12 hidden md:block"
            >
                POW!
            </motion.div>
            <div className="absolute bottom-40 left-10 text-gray-400 hidden md:block">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 8.989-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.972z" />
                </svg>
            </div>

            {/* Header Area */}
            <div className="max-w-4xl mx-auto mb-20 relative">
                <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase tracking-widest">
                    Reviews from the Multiverse
                </span>
                <h1 className="text-7xl md:text-9xl font-black italic uppercase leading-none mt-4" style={{ color: 'var(--text-primary)' }}>
                    WHAT THE <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: '3px var(--text-primary)' }}>HUMANS</span> SAY
                </h1>
            </div>

            {/* Staggered Grid of Testimonials */}
            <div className="max-w-6xl mx-auto relative grid grid-cols-1 md:grid-cols-12 gap-8">

                {/* Sarah's Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.02, rotate: 0 }}
                    style={{ rotate: reviews[0].rotate }}
                    className="md:col-span-7 brute-card-white p-8 relative"
                >
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="black" />)}
                    </div>
                    <p className="text-3xl font-bold leading-tight mb-8" style={{ color: '#000000' }}>
                        "The Tech Toon turned my spaghetti code into a <span className="bg-toon-yellow px-2">masterpiece!</span> I've never seen a dev move this fast."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full brute-border border-2 overflow-hidden">
                            <img src="https://i.pravatar.cc/100?u=sarah" alt="sarah" />
                        </div>
                        <div>
                            <p className="font-black text-sm uppercase" style={{ color: '#000000' }}>{reviews[0].author}</p>
                            <p className="text-[10px] font-bold uppercase" style={{ color: '#666666' }}>{reviews[0].role}</p>
                        </div>
                    </div>
                </motion.div>

                {/* James's Card (The Yellow One) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02, rotate: 0 }}
                    style={{ rotate: reviews[1].rotate }}
                    className="md:col-span-5 brute-card-yellow p-8 md:mt-12"
                >
                    <span className="text-[10px] font-black bg-black text-white px-2 py-1 mb-4 inline-block">TOP RATED</span>
                    <p className="text-2xl font-bold leading-tight mb-8" style={{ color: '#000000' }}>
                        "Brilliant, fast, and surprisingly funny. Highly recommend if you want your UI to actually pop."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full brute-border border-2 overflow-hidden">
                            <img src="https://i.pravatar.cc/100?u=james" alt="james" />
                        </div>
                        <div>
                            <p className="font-black text-sm uppercase" style={{ color: '#000000' }}>{reviews[1].author}</p>
                            <p className="text-[10px] font-bold uppercase" style={{ color: '#333333' }}>{reviews[1].role}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Elena's Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02, rotate: 0 }}
                    style={{ rotate: reviews[2].rotate }}
                    className="md:col-span-8 md:col-start-3 brute-card-white p-8"
                >
                    <p className="text-3xl font-bold leading-tight mb-8" style={{ color: '#000000' }}>
                        "Exceeded all expectations. The <span className="underline decoration-toon-yellow decoration-8 underline-offset-[-4px]">neo-brutalist style</span> fits our brand perfectly. It's bold, loud, and works."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full brute-border border-2 overflow-hidden">
                            <img src="https://i.pravatar.cc/100?u=elena" alt="elena" />
                        </div>
                        <div>
                            <p className="font-black text-sm uppercase" style={{ color: '#000000' }}>{reviews[2].author}</p>
                            <p className="text-[10px] font-bold uppercase" style={{ color: '#666666' }}>{reviews[2].role}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Short Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    style={{ rotate: reviews[3].rotate }}
                    className="md:col-span-3 brute-card-white p-6 md:mt-[-40px]"
                >
                    <p className="text-lg font-bold italic mb-4" style={{ color: '#000000' }}>"The best dev in this dimension. Period."</p>
                    <p className="text-[10px] font-black uppercase" style={{ color: '#666666' }}>UNKNOWN USER</p>
                </motion.div>
            </div>

            {/* Pagination Controls */}
            <div className="max-w-6xl mx-auto mt-24 pt-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-4">
                    <button className="brute-border p-4 bg-white hover:bg-toon-yellow transition-colors">
                        <ArrowLeft size={24} />
                    </button>
                    <button className="brute-border p-4 bg-white hover:bg-toon-yellow transition-colors">
                        <ArrowRight size={24} />
                    </button>
                    <div className="flex items-center font-black uppercase text-sm ml-4 italic" style={{ color: 'var(--text-primary)' }}>
                        Issue 03 / 12
                    </div>
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to='/contact' className="inline-block brute-card-yellow px-8 py-4 font-black uppercase text-xl hover:translate-x-1 hover:translate-y-1 transition-transform flex items-center gap-2">
                        MORE PRAISE! <ArrowRightCircle size={24} />
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
}
