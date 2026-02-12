import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Trash2, Edit3, Save, Lock, Users, GraduationCap, Type, Image, Share2 } from 'lucide-react';
import { platformConfig } from './Footer';

const ADMIN_PASSWORD = 'xidkv1admin';

export default function AdminPanel({ isOpen, onClose, students, setStudents, teacher, setTeacher, slogan, setSlogan, gallery, setGallery, socials, setSocials }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('students');
    const [editingStudent, setEditingStudent] = useState(null);
    const [form, setForm] = useState({ name: '', role: 'Anggota', quote: '', photo: '' });

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setAuthenticated(true);
            setPassword('');
        } else {
            alert('Password salah!');
        }
    };

    const handleClose = () => {
        setAuthenticated(false);
        setPassword('');
        setEditingStudent(null);
        setForm({ name: '', role: 'Anggota', quote: '', photo: '' });
        onClose();
    };

    const addStudent = () => {
        if (!form.name.trim()) return;
        const newStudent = {
            id: Date.now(),
            name: form.name.trim(),
            role: form.role.trim() || 'Anggota',
            quote: form.quote.trim(),
            photo: form.photo.trim(),
        };
        setStudents([...students, newStudent]);
        setForm({ name: '', role: 'Anggota', quote: '', photo: '' });
    };

    const startEdit = (student) => {
        setEditingStudent(student.id);
        setForm({ name: student.name, role: student.role, quote: student.quote, photo: student.photo || '' });
    };

    const saveEdit = () => {
        setStudents(students.map(s =>
            s.id === editingStudent
                ? { ...s, name: form.name.trim(), role: form.role.trim(), quote: form.quote.trim(), photo: form.photo.trim() }
                : s
        ));
        setEditingStudent(null);
        setForm({ name: '', role: 'Anggota', quote: '', photo: '' });
    };

    const deleteStudent = (id) => {
        if (confirm('Hapus siswa ini?')) {
            setStudents(students.filter(s => s.id !== id));
        }
    };

    const tabs = [
        { id: 'students', label: 'Siswa', icon: Users },
        { id: 'teacher', label: 'Wali Kelas', icon: GraduationCap },
        { id: 'slogan', label: 'Slogan', icon: Type },
        { id: 'gallery', label: 'Galeri', icon: Image },
        { id: 'socials', label: 'Sosmed', icon: Share2 },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#111118] border-l border-white/10 z-[70] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <h2 className="text-white font-bold text-lg flex items-center gap-2">
                                <Lock size={18} className="text-purple-400" />
                                Admin Panel
                            </h2>
                            <button onClick={handleClose} className="text-gray-400 hover:text-white transition">
                                <X size={20} />
                            </button>
                        </div>

                        {!authenticated ? (
                            /* Login Form */
                            <div className="flex-1 flex items-center justify-center p-8">
                                <form onSubmit={handleLogin} className="w-full max-w-sm text-center">
                                    <Lock size={48} className="text-purple-400/50 mx-auto mb-4" />
                                    <h3 className="text-white font-semibold text-lg mb-2">Masukkan Password</h3>
                                    <p className="text-gray-500 text-sm mb-6">Hanya admin yang bisa mengakses panel ini.</p>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition mb-4"
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-xl py-3 transition"
                                    >
                                        Masuk
                                    </button>
                                </form>
                            </div>
                        ) : (
                            /* Admin Content */
                            <>
                                {/* Tabs */}
                                <div className="flex border-b border-white/10 px-4">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex items-center gap-1.5 px-4 py-3 text-xs font-medium uppercase tracking-wider border-b-2 transition ${activeTab === tab.id
                                                ? 'border-purple-400 text-purple-400'
                                                : 'border-transparent text-gray-500 hover:text-gray-300'
                                                }`}
                                        >
                                            <tab.icon size={14} />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Tab Content */}
                                <div className="flex-1 overflow-y-auto p-6">

                                    {/* ===== STUDENTS TAB ===== */}
                                    {activeTab === 'students' && (
                                        <div>
                                            {/* Add Form */}
                                            <div className="glass rounded-xl p-4 mb-6">
                                                <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                                                    <Plus size={14} />
                                                    {editingStudent ? 'Edit Siswa' : 'Tambah Siswa'}
                                                </h4>
                                                <div className="space-y-3">
                                                    <input
                                                        value={form.name}
                                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                        placeholder="Nama lengkap"
                                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                                                    />
                                                    <input
                                                        value={form.role}
                                                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                                                        placeholder="Jabatan (opsional)"
                                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                                                    />
                                                    <input
                                                        value={form.quote}
                                                        onChange={(e) => setForm({ ...form, quote: e.target.value })}
                                                        placeholder="Quote / deskripsi lucu"
                                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                                                    />
                                                    <input
                                                        value={form.photo}
                                                        onChange={(e) => setForm({ ...form, photo: e.target.value })}
                                                        placeholder="URL foto (opsional)"
                                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                                                    />
                                                    <button
                                                        onClick={editingStudent ? saveEdit : addStudent}
                                                        className="w-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg py-2 transition flex items-center justify-center gap-2"
                                                    >
                                                        {editingStudent ? <><Save size={14} /> Simpan</> : <><Plus size={14} /> Tambah</>}
                                                    </button>
                                                    {editingStudent && (
                                                        <button
                                                            onClick={() => { setEditingStudent(null); setForm({ name: '', role: 'Anggota', quote: '', photo: '' }); }}
                                                            className="w-full bg-white/5 hover:bg-white/10 text-gray-300 text-sm rounded-lg py-2 transition"
                                                        >
                                                            Batal
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Student List */}
                                            <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                                                Daftar Siswa ({students.length})
                                            </h4>
                                            <div className="space-y-2">
                                                {students.map((s) => (
                                                    <div key={s.id} className="flex items-center gap-3 glass rounded-lg px-3 py-2">
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-white text-sm font-medium truncate">{s.name}</p>
                                                            <p className="text-gray-500 text-xs truncate">{s.role} • {s.quote}</p>
                                                        </div>
                                                        <button onClick={() => startEdit(s)} className="text-gray-400 hover:text-purple-400 transition p-1">
                                                            <Edit3 size={14} />
                                                        </button>
                                                        <button onClick={() => deleteStudent(s.id)} className="text-gray-400 hover:text-red-400 transition p-1">
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* ===== TEACHER TAB ===== */}
                                    {activeTab === 'teacher' && (
                                        <div className="space-y-4">
                                            <h4 className="text-white text-sm font-semibold">Edit Info Wali Kelas</h4>
                                            <input
                                                value={teacher.name}
                                                onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
                                                placeholder="Nama"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                                            />
                                            <input
                                                value={teacher.subject}
                                                onChange={(e) => setTeacher({ ...teacher, subject: e.target.value })}
                                                placeholder="Mata Pelajaran"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                                            />
                                            <input
                                                value={teacher.position}
                                                onChange={(e) => setTeacher({ ...teacher, position: e.target.value })}
                                                placeholder="Jabatan"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                                            />
                                            <textarea
                                                value={teacher.quote}
                                                onChange={(e) => setTeacher({ ...teacher, quote: e.target.value })}
                                                placeholder="Quote / pesan"
                                                rows={3}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
                                            />
                                            <input
                                                value={teacher.photo}
                                                onChange={(e) => setTeacher({ ...teacher, photo: e.target.value })}
                                                placeholder="URL foto"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                                            />
                                            <div>
                                                <label className="text-gray-400 text-xs mb-2 block">Tags (pisahkan dengan koma)</label>
                                                <input
                                                    value={teacher.tags.join(', ')}
                                                    onChange={(e) => setTeacher({ ...teacher, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
                                                    placeholder="📚 Matematika, 🏆 Pembina OSIS"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                                                />
                                            </div>
                                            <p className="text-green-400/70 text-xs mt-2">✓ Perubahan tersimpan otomatis</p>
                                        </div>
                                    )}

                                    {/* ===== SLOGAN TAB ===== */}
                                    {activeTab === 'slogan' && (
                                        <div className="space-y-4">
                                            <h4 className="text-white text-sm font-semibold">Edit Hero Slogan</h4>
                                            <div>
                                                <label className="text-gray-400 text-xs mb-1 block">Baris 1 (putih)</label>
                                                <input
                                                    value={slogan.title1}
                                                    onChange={(e) => setSlogan({ ...slogan, title1: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-xs mb-1 block">Baris 2 (gradient)</label>
                                                <input
                                                    value={slogan.title2}
                                                    onChange={(e) => setSlogan({ ...slogan, title2: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-xs mb-1 block">Subtitle</label>
                                                <input
                                                    value={slogan.subtitle}
                                                    onChange={(e) => setSlogan({ ...slogan, subtitle: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-xs mb-1 block">Tagline</label>
                                                <input
                                                    value={slogan.tagline}
                                                    onChange={(e) => setSlogan({ ...slogan, tagline: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-xs mb-1 block">Tahun Ajaran</label>
                                                <input
                                                    value={slogan.year}
                                                    onChange={(e) => setSlogan({ ...slogan, year: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                />
                                            </div>

                                            <div className="border-t border-white/10 pt-4 mt-4">
                                                <h4 className="text-white text-sm font-semibold mb-3">⏱️ Pengaturan Hari Bersama</h4>
                                                <div>
                                                    <label className="text-gray-400 text-xs mb-1 block">Tanggal mulai kelas (otomatis hitung hari)</label>
                                                    <input
                                                        type="date"
                                                        value={slogan.startDate || ''}
                                                        onChange={(e) => setSlogan({ ...slogan, startDate: e.target.value })}
                                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                    />
                                                    <p className="text-gray-500 text-xs mt-1">Counter akan otomatis dihitung dari tanggal ini sampai hari ini (WIB)</p>
                                                </div>
                                            </div>

                                            <div className="border-t border-white/10 pt-4 mt-4">
                                                <h4 className="text-white text-sm font-semibold mb-3">📊 Label Statistik</h4>
                                                <div className="space-y-3">
                                                    <div>
                                                        <label className="text-gray-400 text-xs mb-1 block">Label stat 1 (jumlah siswa)</label>
                                                        <input
                                                            value={slogan.stat1Label || ''}
                                                            onChange={(e) => setSlogan({ ...slogan, stat1Label: e.target.value })}
                                                            placeholder="Siswa"
                                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-gray-400 text-xs mb-1 block">Label stat 2</label>
                                                        <input
                                                            value={slogan.stat2Label || ''}
                                                            onChange={(e) => setSlogan({ ...slogan, stat2Label: e.target.value })}
                                                            placeholder="Wali Kelas"
                                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-gray-400 text-xs mb-1 block">Label stat 3 (hari bersama)</label>
                                                        <input
                                                            value={slogan.stat3Label || ''}
                                                            onChange={(e) => setSlogan({ ...slogan, stat3Label: e.target.value })}
                                                            placeholder="Hari Bersama"
                                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-white/10 pt-4 mt-4">
                                                <h4 className="text-white text-sm font-semibold mb-3">🏠 Teks Footer</h4>
                                                <div className="space-y-3">
                                                    <div>
                                                        <label className="text-gray-400 text-xs mb-1 block">Motto baris 1</label>
                                                        <input
                                                            value={slogan.footerMotto1 || ''}
                                                            onChange={(e) => setSlogan({ ...slogan, footerMotto1: e.target.value })}
                                                            placeholder="Beyond the Classroom:"
                                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-gray-400 text-xs mb-1 block">Motto baris 2 (gradient)</label>
                                                        <input
                                                            value={slogan.footerMotto2 || ''}
                                                            onChange={(e) => setSlogan({ ...slogan, footerMotto2: e.target.value })}
                                                            placeholder="A Legacy in the Making."
                                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-gray-400 text-xs mb-1 block">Tagline footer</label>
                                                        <input
                                                            value={slogan.footerTagline || ''}
                                                            onChange={(e) => setSlogan({ ...slogan, footerTagline: e.target.value })}
                                                            placeholder="Version 2.0: Better, Stronger, Together. 🚀"
                                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-gray-400 text-xs mb-1 block">Copyright</label>
                                                        <input
                                                            value={slogan.footerCopyright || ''}
                                                            onChange={(e) => setSlogan({ ...slogan, footerCopyright: e.target.value })}
                                                            placeholder="© 2025 DKV 1 • Dibuat dengan 💜"
                                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-green-400/70 text-xs mt-2">✓ Perubahan tersimpan otomatis</p>
                                        </div>
                                    )}

                                    {/* ===== GALLERY TAB ===== */}
                                    {activeTab === 'gallery' && (
                                        <div>
                                            <div className="glass rounded-xl p-4 mb-6">
                                                <h4 className="text-white text-sm font-semibold mb-3">Tambah Foto</h4>
                                                <GalleryForm gallery={gallery} setGallery={setGallery} />
                                            </div>

                                            <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                                                Daftar Foto ({gallery.length})
                                            </h4>
                                            <div className="space-y-2">
                                                {gallery.map((item) => (
                                                    <div key={item.id} className="flex items-center gap-3 glass rounded-lg px-3 py-2">
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-white text-sm font-medium truncate">{item.title}</p>
                                                            <p className="text-gray-500 text-xs truncate">{item.large ? '🔲 Besar' : '▪️ Normal'}</p>
                                                        </div>
                                                        <button
                                                            onClick={() => {
                                                                if (confirm('Hapus foto ini?')) {
                                                                    setGallery(gallery.filter(g => g.id !== item.id));
                                                                }
                                                            }}
                                                            className="text-gray-400 hover:text-red-400 transition p-1"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* ===== SOCIALS TAB ===== */}
                                    {activeTab === 'socials' && (
                                        <div>
                                            <div className="glass rounded-xl p-4 mb-6">
                                                <h4 className="text-white text-sm font-semibold mb-3 flex items-center gap-2">
                                                    <Plus size={14} /> Tambah Sosial Media
                                                </h4>
                                                <SocialForm socials={socials} setSocials={setSocials} />
                                            </div>

                                            <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                                                Daftar Sosial Media ({socials.length})
                                            </h4>
                                            <div className="space-y-2">
                                                {socials.map((social) => {
                                                    const config = platformConfig[social.platform] || { label: social.platform };
                                                    return (
                                                        <div key={social.id} className="flex items-center gap-3 glass rounded-lg px-3 py-2">
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-white text-sm font-medium">{config.label}</p>
                                                                <p className="text-gray-500 text-xs truncate">{social.url || '(belum ada link)'}</p>
                                                            </div>
                                                            <button
                                                                onClick={() => {
                                                                    if (confirm(`Hapus ${config.label}?`)) {
                                                                        setSocials(socials.filter(s => s.id !== social.id));
                                                                    }
                                                                }}
                                                                className="text-gray-400 hover:text-red-400 transition p-1"
                                                            >
                                                                <Trash2 size={14} />
                                                            </button>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

function GalleryForm({ gallery, setGallery }) {
    const [gForm, setGForm] = useState({ title: '', desc: '', photo: '', large: false });

    const addGalleryItem = () => {
        if (!gForm.title.trim()) return;
        setGallery([...gallery, {
            id: Date.now(),
            title: gForm.title.trim(),
            desc: gForm.desc.trim(),
            photo: gForm.photo.trim(),
            large: gForm.large,
        }]);
        setGForm({ title: '', desc: '', photo: '', large: false });
    };

    return (
        <div className="space-y-3">
            <input
                value={gForm.title}
                onChange={(e) => setGForm({ ...gForm, title: e.target.value })}
                placeholder="Judul foto"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
            />
            <input
                value={gForm.desc}
                onChange={(e) => setGForm({ ...gForm, desc: e.target.value })}
                placeholder="Deskripsi (opsional)"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
            />
            <input
                value={gForm.photo}
                onChange={(e) => setGForm({ ...gForm, photo: e.target.value })}
                placeholder="URL foto"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
            />
            <label className="flex items-center gap-2 text-gray-400 text-sm cursor-pointer">
                <input
                    type="checkbox"
                    checked={gForm.large}
                    onChange={(e) => setGForm({ ...gForm, large: e.target.checked })}
                    className="accent-purple-500"
                />
                Ukuran besar (2×2)
            </label>
            <button
                onClick={addGalleryItem}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg py-2 transition flex items-center justify-center gap-2"
            >
                <Plus size={14} /> Tambah
            </button>
        </div>
    );
}

function SocialForm({ socials, setSocials }) {
    const [sForm, setSForm] = useState({ platform: 'instagram', url: '' });

    const availablePlatforms = [
        { value: 'instagram', label: '📸 Instagram' },
        { value: 'youtube', label: '▶️ YouTube' },
        { value: 'tiktok', label: '🎵 TikTok' },
        { value: 'twitter', label: '🐦 Twitter / X' },
        { value: 'facebook', label: '👤 Facebook' },
        { value: 'linkedin', label: '💼 LinkedIn' },
        { value: 'github', label: '💻 GitHub' },
        { value: 'email', label: '📧 Email' },
        { value: 'website', label: '🌐 Website' },
    ];

    const addSocial = () => {
        setSocials([...socials, {
            id: Date.now(),
            platform: sForm.platform,
            url: sForm.url.trim(),
        }]);
        setSForm({ platform: 'instagram', url: '' });
    };

    return (
        <div className="space-y-3">
            <div>
                <label className="text-gray-400 text-xs mb-1 block">Platform</label>
                <select
                    value={sForm.platform}
                    onChange={(e) => setSForm({ ...sForm, platform: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                >
                    {availablePlatforms.map((p) => (
                        <option key={p.value} value={p.value} className="bg-[#111118]">
                            {p.label}
                        </option>
                    ))}
                </select>
            </div>
            <input
                value={sForm.url}
                onChange={(e) => setSForm({ ...sForm, url: e.target.value })}
                placeholder="URL link (contoh: https://instagram.com/kelaskita)"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
            />
            <button
                onClick={addSocial}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg py-2 transition flex items-center justify-center gap-2"
            >
                <Plus size={14} /> Tambah
            </button>
        </div>
    );
}
