import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer({ slogan }) {
    return (
        <footer className="py-16 px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <h3 className="font-[Playfair_Display] text-2xl md:text-3xl font-bold text-white mb-3">
                    {slogan.footerMotto1 || 'Beyond the Classroom:'}
                    <br />
                    <span className="gradient-text">{slogan.footerMotto2 || 'A Legacy in the Making.'}</span>
                </h3>
                <p className="text-gray-500 text-sm mt-4 mb-8">
                    {slogan.footerTagline || 'Version 2.0: Better, Stronger, Together. 🚀'}
                </p>

                <div className="flex justify-center gap-4 mb-8">
                    <a
                        href="#"
                        className="glass rounded-full w-10 h-10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:scale-110 transition-all"
                    >
                        <Instagram size={18} />
                    </a>
                    <a
                        href="#"
                        className="glass rounded-full w-10 h-10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:scale-110 transition-all"
                    >
                        <Youtube size={18} />
                    </a>
                    <a
                        href="#"
                        className="glass rounded-full w-10 h-10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:scale-110 transition-all"
                    >
                        <Mail size={18} />
                    </a>
                </div>

                <div className="section-divider max-w-xs mx-auto mb-6"></div>

                <p className="text-gray-600 text-xs">
                    {slogan.footerCopyright || '© 2025 DKV 1 • Dibuat dengan 💜 oleh anak-anak kelas'}
                </p>
            </motion.div>
        </footer>
    );
}
