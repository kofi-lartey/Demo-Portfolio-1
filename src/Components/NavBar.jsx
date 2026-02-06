import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, Sun, Moon, Home, User, Briefcase, DollarSign, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', href: '/', icon: <Home size={18} /> },
        { name: 'Origin Story', href: '/about', icon: <User size={18} /> },
        { name: 'Hall of Fame', href: '/work', icon: <Briefcase size={18} /> },
        { name: 'Price Tiers', href: '/pricing', icon: <DollarSign size={18} /> },
        { name: 'Testimonials', href: '/testimonials', icon: <MessageCircle size={18} /> },
    ];

    // Toggle dark mode and apply to body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    }, [darkMode]);

    const isActive = (href) => {
        if (href === '/') return location.pathname === '/';
        return location.pathname.startsWith(href);
    };

    return (
        <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-[var(--bg-primary)] text-[var(--text-primary)] border-b-4 border-black sticky top-0 z-50 transition-colors duration-300">
            <div className="flex items-center gap-2 brute-border bg-toon-yellow p-2 text-black font-black italic">
                <Terminal size={24} />
                <span className="hidden md:inline">THE TECH TOON</span>
                <span className="md:hidden text-sm">TTT</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-6 xl:gap-8 font-bold uppercase tracking-tighter">
                {navLinks.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        whileHover={{ scale: 1.1, color: '#FFD700' }}
                        className={`cursor-pointer flex items-center gap-2 transition-colors ${isActive(link.href) ? 'text-toon-yellow' : ''}`}
                    >
                        {link.icon}
                        {link.name}
                    </motion.a>
                ))}
            </div>

            <div className="flex items-center gap-3">
                {/* Dark/Light Mode Toggle */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDarkMode(!darkMode)}
                    className="brute-border p-2 bg-toon-purple text-white hover:bg-toon-yellow hover:text-black transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>

                {/* Desktop Contact Button */}
                <Link to='/contact' className="hidden md:inline-block brute-border bg-toon-purple px-4 py-2 font-bold hover:brute-border-hover transition-colors">
                    SIGNAL ME
                </Link>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden brute-border bg-toon-yellow p-2 text-black"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[var(--bg-primary)] border-b-4 border-black p-4 md:px-8 flex flex-col gap-4 shadow-lg"
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 p-3 brute-border bg-white text-black font-bold uppercase hover:bg-toon-yellow transition-colors ${isActive(link.href) ? 'bg-toon-yellow' : ''}`}
                            >
                                {link.icon}
                                {link.name}
                            </motion.a>
                        ))}
                        <Link
                            to='/contact'
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 p-3 brute-border bg-toon-purple text-white font-bold uppercase hover:brute-border-hover"
                        >
                            <MessageCircle size={18} />
                            SIGNAL ME
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
