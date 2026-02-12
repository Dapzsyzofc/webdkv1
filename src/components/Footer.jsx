import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, Twitter, Facebook, Linkedin, Github, Globe, Music2 } from 'lucide-react';

const platformConfig = {
    instagram: { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-400' },
    youtube: { icon: Youtube, label: 'YouTube', color: 'hover:text-red-400' },
    tiktok: { icon: Music2, label: 'TikTok', color: 'hover:text-cyan-400' },
    twitter: { icon: Twitter, label: 'Twitter / X', color: 'hover:text-sky-400' },
    facebook: { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-400' },
    linkedin: { icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-500' },
    github: { icon: Github, label: 'GitHub', color: 'hover:text-gray-300' },
    email: { icon: Mail, label: 'Email', color: 'hover:text-yellow-400' },
    website: { icon: Globe, label: 'Website', color: 'hover:text-green-400' },
};

export { platformConfig };

export default function Footer({ slogan, socials }) {
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

                {socials && socials.length > 0 && (
                    <div className="flex justify-center gap-4 mb-8 flex-wrap">
                        {socials.map((social) => {
                            const config = platformConfig[social.platform] || platformConfig.website;
                            const Icon = config.icon;
                            return (
                                <a
                                    key={social.id}
                                    href={social.url || '#'}
                                    target={social.url ? '_blank' : undefined}
                                    rel={social.url ? 'noopener noreferrer' : undefined}
                                    className={`glass rounded-full w-10 h-10 flex items-center justify-center text-gray-400 ${config.color} hover:scale-110 transition-all`}
                                    title={config.label}
                                >
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>
                )}

                <div className="section-divider max-w-xs mx-auto mb-6"></div>

                <p className="text-gray-600 text-xs">
                    {slogan.footerCopyright || '© 2025 DKV 1 • Dibuat dengan 💜 oleh anak-anak kelas'}
                </p>
            </motion.div>
        </footer>
    );
}
