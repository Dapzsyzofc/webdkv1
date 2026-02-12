import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function Counter({ target }) {
    const ref = useRef(null);
    const counted = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !counted.current) {
                    counted.current = true;
                    let current = 0;
                    const step = Math.ceil(target / 40);
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        el.textContent = current;
                    }, 30);
                }
            },
            { threshold: 0.6 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref} className="block text-3xl font-bold text-white">0</span>;
}

export default function Hero({ slogan, studentCount }) {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
            {/* Floating Shapes */}
            <div className="floating-shape" style={{ width: 400, height: 400, background: '#a855f7', top: -100, right: -100 }} />
            <div className="floating-shape" style={{ width: 300, height: 300, background: '#ec4899', bottom: -80, left: -80, animationDelay: '-4s' }} />
            <div className="floating-shape" style={{ width: 250, height: 250, background: '#6366f1', top: '50%', left: '50%', animationDelay: '-8s' }} />

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-purple-400 font-medium tracking-[0.3em] uppercase text-sm mb-6"
                >
                    {slogan.year}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-[Playfair_Display] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
                >
                    <span className="text-white">{slogan.title1}</span>
                    <br />
                    <span className="gradient-text">{slogan.title2}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light"
                >
                    {slogan.subtitle}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-gray-500 text-sm mb-10"
                >
                    {slogan.tagline}
                </motion.p>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-10 mt-8"
                >
                    <div className="glass rounded-2xl px-8 py-5 relative stat-accent">
                        <Counter target={studentCount} />
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Siswa</span>
                    </div>
                    <div className="glass rounded-2xl px-8 py-5 relative stat-accent">
                        <Counter target={1} />
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Wali Kelas</span>
                    </div>
                    <div className="glass rounded-2xl px-8 py-5 relative stat-accent">
                        <Counter target={365} />
                        <span className="text-xs text-gray-400 uppercase tracking-wider">Hari Bersama</span>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16"
                >
                    <a
                        href="#wali-kelas"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#wali-kelas')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-gray-500 hover:text-purple-400 transition inline-block animate-bounce"
                    >
                        <ChevronDown size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
