import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="min-h-screen pt-20 pb-20 px-4 md:p-20 grid md:grid-cols-2 gap-10 items-center overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <span className="brute-border bg-toon-purple px-3 py-1 text-sm font-bold mb-6 inline-block">
                    AVAILABLE FOR FREELANCE
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black italic uppercase leading-none mb-6">
                    I build stuff <br />
                    that <span className="text-toon-yellow underline decoration-white">actually</span> <br />
                    works.
                </h1>
                <p className="text-xl text-gray-400 max-w-md border-l-4 border-toon-yellow pl-4 mb-8">
                    Full-stack developer by day, cartoon enthusiast by night.
                    Turning complex problems into simple, pixel-perfect code.
                </p>

                <div className="flex flex-wrap gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to='/contact' className="inline-block brute-border bg-toon-yellow text-black font-black px-6 py-3 hover:brute-border-hover transition-all">
                            START A PROJECT
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to='/work' className="inline-block brute-border bg-toon-purple text-white font-black px-6 py-3 hover:brute-border-hover transition-all flex items-center gap-2">
                            SEE THE MAGIC <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-8 mt-10 text-sm font-bold">
                    <div className="flex items-center gap-2">
                        <Code size={20} className="text-toon-yellow" />
                        <span>5+ YEARS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap size={20} className="text-toon-purple" />
                        <span>50+ PROJECTS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Rocket size={20} className="text-neon-green" />
                        <span>100% FUN</span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 100, opacity: 0, rotate: 5 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="relative flex justify-center"
            >
                {/* The Avatar Card */}
                <div className="brute-border bg-[#F4A460] p-4 w-full max-w-sm relative">
                    <img
                        src="https://imgcdn.stablediffusionweb.com/2024/5/7/c30674d9-923f-400b-a21c-54dcd0b6c31d.jpg"
                        alt="Avatar"
                        className="brute-border w-full h-auto bg-white"
                    />
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -bottom-6 -right-6 brute-border bg-dark-bg p-3 text-xs italic font-bold max-w-[150px]"
                    >
                        "I drink code and brew solutions."
                    </motion.div>
                </div>

                {/* Floating decorative elements */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-10 -left-8 brute-border bg-toon-purple p-2 text-white text-xs font-black"
                >
                    REACT
                </motion.div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute bottom-20 -right-4 brute-border bg-toon-yellow text-black text-xs font-black"
                >
                    NODE.JS
                </motion.div>
            </motion.div>
        </section>
    );
}
