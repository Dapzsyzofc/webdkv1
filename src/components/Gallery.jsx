import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

export default function Gallery({ gallery }) {
    return (
        <section id="galeri" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-purple-400 text-sm uppercase tracking-[0.2em] mb-3 text-center"
                >
                    Gallery
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-[Playfair_Display] text-3xl md:text-4xl font-bold text-white text-center mb-4"
                >
                    Momen yang Tak Terlupakan
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-gray-500 text-center max-w-xl mx-auto mb-16"
                >
                    Dari hari pertama sampai hari ini — setiap foto punya cerita.
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {gallery.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            className={`gallery-item rounded-2xl overflow-hidden ${item.large ? 'col-span-2 row-span-2' : ''
                                } aspect-square`}
                        >
                            {item.photo ? (
                                <img
                                    src={item.photo}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-[#111118] flex items-center justify-center">
                                    <div className="text-center">
                                        <ImageIcon size={item.large ? 48 : 32} className="text-purple-500/20 mx-auto mb-2" />
                                        <p className="text-gray-600 text-xs">{item.title}</p>
                                    </div>
                                </div>
                            )}
                            <div className="absolute bottom-0 left-0 right-0 p-3 z-10 translate-y-full transition-transform duration-400 gallery-caption">
                                <p className="text-white text-sm font-medium">{item.title}</p>
                                {item.desc && <p className="text-gray-300 text-xs">{item.desc}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
