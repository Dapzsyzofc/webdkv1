import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function WaliKelas({ teacher }) {
    return (
        <section id="wali-kelas" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-purple-400 text-sm uppercase tracking-[0.2em] mb-3 text-center"
                >
                    Wali Kelas
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-[Playfair_Display] text-3xl md:text-4xl font-bold text-white text-center mb-16"
                >
                    Guru yang Menginspirasi
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="glass-strong rounded-3xl overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Photo */}
                        <div className="md:w-2/5 relative">
                            <div className="aspect-[3/4] md:aspect-auto md:h-full bg-[#111118] flex items-center justify-center">
                                {teacher.photo ? (
                                    <img
                                        src={teacher.photo}
                                        alt={teacher.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="text-center p-8">
                                        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 mx-auto mb-4 flex items-center justify-center border-2 border-purple-500/30">
                                            <User size={80} className="text-purple-400/50" />
                                        </div>
                                        <p className="text-xs text-gray-500 mt-3 italic">Tambahkan foto via Admin</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                            <div className="accent-border-left pl-6 mb-6">
                                <h3 className="font-[Playfair_Display] text-2xl md:text-3xl font-bold text-white mb-1">
                                    {teacher.name}
                                </h3>
                                <p className="text-purple-400 font-medium">
                                    {teacher.subject} — {teacher.position}
                                </p>
                            </div>

                            <p className="text-gray-400 leading-relaxed mb-6 italic">
                                "{teacher.quote}"
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {teacher.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="glass rounded-full px-4 py-1.5 text-xs text-purple-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
