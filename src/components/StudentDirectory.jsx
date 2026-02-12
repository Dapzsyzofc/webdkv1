import { motion } from 'framer-motion';
import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
    return (
        <section id="siswa" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-purple-400 text-sm uppercase tracking-[0.2em] mb-3 text-center"
                >
                    Student Directory
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-[Playfair_Display] text-3xl md:text-4xl font-bold text-white text-center mb-4"
                >
                    Wajah-Wajah di Balik Cerita
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-gray-500 text-center max-w-xl mx-auto mb-16"
                >
                    {students.length} orang, {students.length} cerita unik. Dari yang paling kalem sampai yang ribut se-sekolahan. 💜
                </motion.p>

                {/* Bento Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
                    {students.map((student, index) => (
                        <motion.div
                            key={student.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: Math.min(index * 0.04, 0.5), duration: 0.4 }}
                        >
                            <StudentCard student={student} index={index} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
