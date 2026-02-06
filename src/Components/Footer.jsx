import { Twitter, Github, Dribbble, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Twitter', icon: <Twitter size={20} />, href: 'https://x.com/GberbieAlpheaus' },
        { name: 'Github', icon: <Github size={20} />, href: 'https://github.com/kofi-lartey' },
        // { name: 'Dribbble', icon: <Dribbble size={20} />, href: 'https://dribbble.com' },
        { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/alpheaus-gberbie-b6b141326' },
    ];

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Work', href: '/work' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="bg-[var(--bg-secondary)] border-t-4 border-black p-8 text-[var(--text-primary)]">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h2 className="font-black italic text-toon-yellow text-2xl mb-4">THE TECH TOON</h2>
                        <p className="text-gray-400 font-bold text-sm mb-4">
                            Turning caffeine into code since 2015. Available for freelance projects and weird ideas.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 brute-border bg-black text-white hover:bg-toon-yellow hover:text-black transition-colors"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="font-black uppercase text-sm mb-4">Quick Links</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-gray-400 hover:text-toon-purple font-bold uppercase text-xs transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-right">
                        <h3 className="font-black uppercase text-sm mb-4">Get In Touch</h3>
                        <p className="text-gray-400 font-bold text-sm mb-2">
                            kofilartey12@gmail.com
                        </p>
                        <p className="text-gray-500 font-bold text-xs">
                            Available for freelance work
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t-2 border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <h2 className="font-black italic text-toon-yellow">THE TECH TOON © {currentYear}</h2>
                    </div>

                    {/* <div className="flex gap-6 font-bold uppercase text-sm">
                        <a href="#" className="hover:text-toon-purple transition-colors flex items-center gap-1">
                            <Twitter size={14} /> Twitter
                        </a>
                        <a href="#" className="hover:text-toon-purple transition-colors flex items-center gap-1">
                            <Github size={14} /> Github
                        </a>
                        <a href="#" className="hover:text-toon-purple transition-colors flex items-center gap-1">
                            <Dribbble size={14} /> Dribbble
                        </a>
                    </div> */}

                    <p className="text-[10px] font-mono opacity-50 flex items-center gap-2">
                        BUILT WITH COFFEE & PIXELS
                        <a href="#" className="inline-block p-1 brute-border bg-toon-yellow text-black hover:translate-y-[-2px] transition-transform">
                            <ArrowUp size={12} />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
