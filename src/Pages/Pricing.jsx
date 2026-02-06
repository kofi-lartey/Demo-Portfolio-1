import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Zap, Ghost, Skull, Pizza, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
    {
        name: "JUST A TASTE",
        subtitle: "For those with commitment issues.",
        price: { monthly: 999, yearly: 799 },
        features: ["Single Landing Page", "4px thick borders (standard)", "Neo-brutalist soul", "Sarcastic 404 page"],
        cta: "GET STARTED",
        icon: <Ghost className="text-toon-purple" />
    },
    {
        name: "FULL COURSE",
        subtitle: "The whole enchilada. No antacids required.",
        price: { monthly: 2999, yearly: 2399 },
        features: ["Full-stack Application", "Everything in 'Taste'", "Custom Cartoon Assets", "Priority Support (No Ghosts)"],
        cta: "GO PRO",
        popular: true,
        icon: <Zap className="text-toon-purple" fill="currentColor" />
    },
    {
        name: "CUSTOM CHAOS",
        subtitle: "Tell me your wildest dreams (or nightmares).",
        price: { monthly: "????", yearly: "????" },
        features: ["Enterprise Nightmares", "Weird API Integrations", "Legacy Code Exorcism", "Unlimited Chaos"],
        cta: "LET'S CHAT",
        icon: <Skull className="text-toon-purple" />
    }
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 md:px-10 overflow-hidden relative" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            {/* Decorative Background Rocket */}
            <div className="absolute top-10 right-10 opacity-10 rotate-12 pointer-events-none">
                <Zap size={400} />
            </div>

            {/* Header Area */}
            <div className="max-w-4xl mx-auto text-center mb-16 relative">
                <div className="inline-block bg-toon-yellow text-black px-4 py-1 brute-border font-black italic text-xs mb-6 rotate-[-2deg]">
                    PRICING FOR HUMANS
                </div>
                <h1 className="text-7xl md:text-9xl font-black uppercase leading-none purple-glow">
                    THE <span className="text-toon-purple italic">DAMAGE</span>
                </h1>
                <p className="text-gray-400 font-bold text-lg mt-6 max-w-2xl mx-auto">
                    Pick your poison. No hidden fees, just honest code and occasional sarcasm.
                    <span className="text-toon-purple underline cursor-help ml-1">Commitment issues?</span> We've got a tier for that.
                </p>

                {/* Toggle Switch */}
                <div className="mt-12 flex justify-center">
                    <div className="bg-[#1a1a1a] p-2 brute-border flex items-center gap-2">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2 font-black transition-all ${!isYearly ? 'bg-toon-purple text-white brute-border' : 'text-gray-500'}`}
                        >
                            MONTHLY
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2 font-black transition-all ${isYearly ? 'bg-toon-purple text-white brute-border' : 'text-gray-500'}`}
                        >
                            YEARLY (20% OFF!)
                        </button>
                    </div>
                </div>
            </div>

            {/* Tiers Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {tiers.map((tier, idx) => (
                    <motion.div
                        key={tier.name}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -10 }}
                        className={`brute-panel bg-panel-dark p-8 flex flex-col relative ${tier.popular ? 'border-toon-purple ring-2 ring-toon-purple ring-offset-4 ring-offset-deep-dark' : 'border-black'}`}
                    >
                        {tier.popular && (
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-toon-purple text-white font-black px-4 py-1 brute-border italic text-xs uppercase">
                                MOST POPULAR
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-3xl font-black italic mb-2">{tier.name}</h3>
                            <p className="text-gray-500 font-bold text-sm uppercase">{tier.subtitle}</p>
                        </div>

                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="text-6xl font-black">
                                {typeof tier.price.monthly === 'number' ? `$${isYearly ? tier.price.yearly : tier.price.monthly}` : tier.price.monthly}
                            </span>
                            <span className="text-gray-500 font-bold">/ PROJECT</span>
                        </div>

                        <div className="flex-grow space-y-4 mb-10">
                            {tier.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 size={18} className="text-toon-purple" />
                                    <span className="text-gray-300 font-bold text-sm uppercase">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-4 brute-border font-black text-xl transition-all ${tier.popular ? 'bg-toon-purple text-white' : 'bg-[#1a1a1a] text-white hover:bg-white hover:text-black'}`}
                        >
                            {tier.cta}
                        </motion.button>
                    </motion.div>
                ))}
            </div>

            {/* CTA Box */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto mt-20 brute-border bg-toon-yellow text-black p-8 md:p-12 text-center"
            >
                <h3 className="text-3xl md:text-4xl font-black italic mb-4">NOT SURE WHICH PLAN FITS?</h3>
                <p className="font-bold mb-6">Let's chat and figure out what's best for your project.</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to='/contact' className="inline-block bg-black text-white font-black px-8 py-4 brute-border hover:bg-toon-purple transition-colors flex items-center justify-center gap-2 mx-auto w-fit">
                        TALK TO ME <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Easter Egg Footer */}
            <div className="mt-20 text-center">
                <div className="inline-flex items-center gap-4 text-gray-500">
                    <Pizza size={40} className="opacity-20" />
                    <p className="text-2xl font-black italic">"Wait, can I pay in pizza?"</p>
                </div>
                <p className="text-[10px] text-toon-purple font-black mt-2 uppercase tracking-[0.2em]">
                    NO, MY LANDLORD IS BORING AND PREFERS LEGAL TENDER.
                </p>
            </div>
        </div>
    );
}
