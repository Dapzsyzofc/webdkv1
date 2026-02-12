import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    { href: '#hero', label: 'Home' },
    { href: '#wali-kelas', label: 'Wali Kelas' },
    { href: '#siswa', label: 'Siswa' },
    { href: '#galeri', label: 'Galeri' },
];

export default function Navbar({ onAdminToggle }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLogoClick = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);
        if (newCount >= 3) {
            setClickCount(0);
            onAdminToggle?.();
        }
        setTimeout(() => setClickCount(0), 1500);
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <button
                    onClick={handleLogoClick}
                    className="font-[Playfair_Display] text-xl font-bold text-white tracking-wide select-none"
                >
                    DKV <span className="text-purple-400">1</span> OFFICIAL
                </button>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={(e) => handleNavClick(e, l.href)}
                            className="text-gray-400 hover:text-purple-400 transition text-sm tracking-wide uppercase"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-gray-300 hover:text-purple-400 transition"
                    aria-label="Toggle navigation"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden glass-strong border-t border-white/5"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={(e) => handleNavClick(e, l.href)}
                                    className="text-gray-400 hover:text-purple-400 transition text-sm tracking-wide uppercase"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
