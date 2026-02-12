const gradients = [
    'from-purple-500/20 to-pink-500/20',
    'from-indigo-500/20 to-purple-500/20',
    'from-pink-500/20 to-rose-500/20',
    'from-emerald-500/20 to-teal-500/20',
    'from-amber-500/20 to-orange-500/20',
    'from-cyan-500/20 to-blue-500/20',
    'from-violet-500/20 to-fuchsia-500/20',
    'from-rose-500/20 to-red-500/20',
    'from-teal-500/20 to-emerald-500/20',
    'from-sky-500/20 to-blue-500/20',
    'from-lime-500/20 to-green-500/20',
    'from-fuchsia-500/20 to-pink-500/20',
];

const hoverBorders = [
    'group-hover:border-purple-400/50',
    'group-hover:border-indigo-400/50',
    'group-hover:border-pink-400/50',
    'group-hover:border-emerald-400/50',
    'group-hover:border-amber-400/50',
    'group-hover:border-cyan-400/50',
    'group-hover:border-violet-400/50',
    'group-hover:border-rose-400/50',
    'group-hover:border-teal-400/50',
    'group-hover:border-sky-400/50',
    'group-hover:border-lime-400/50',
    'group-hover:border-fuchsia-400/50',
];

const iconColors = [
    'text-purple-400/40 group-hover:text-purple-300',
    'text-indigo-400/40 group-hover:text-indigo-300',
    'text-pink-400/40 group-hover:text-pink-300',
    'text-emerald-400/40 group-hover:text-emerald-300',
    'text-amber-400/40 group-hover:text-amber-300',
    'text-cyan-400/40 group-hover:text-cyan-300',
    'text-violet-400/40 group-hover:text-violet-300',
    'text-rose-400/40 group-hover:text-rose-300',
    'text-teal-400/40 group-hover:text-teal-300',
    'text-sky-400/40 group-hover:text-sky-300',
    'text-lime-400/40 group-hover:text-lime-300',
    'text-fuchsia-400/40 group-hover:text-fuchsia-300',
];

export const defaultStudents = [
    { id: 1, name: 'Ahmad Rifqi', role: 'Wakil Ketua', quote: 'Si tukang nyontek jenius', photo: '' },
    { id: 2, name: 'Bunga Lestari', role: 'Bendahara', quote: 'Selalu bawa cemilan', photo: '' },
    { id: 3, name: 'Citra Dewi', role: 'Ketua Kelas', quote: 'Ketua kelas tersabar', photo: '' },
    { id: 4, name: 'Dimas Pratama', role: 'Sie Olahraga', quote: 'MVP basket kelas', photo: '' },
    { id: 5, name: 'Eka Putri', role: 'Sie Kreatif', quote: 'Desainer poster kelas', photo: '' },
    { id: 6, name: 'Farhan Nugroho', role: 'Anggota', quote: 'Lord of memes', photo: '' },
    { id: 7, name: 'Gita Ayu', role: 'Sie Seni', quote: 'Suara emas kelas', photo: '' },
    { id: 8, name: 'Haikal Rahman', role: 'Anggota', quote: 'Tidur aja di kelas', photo: '' },
    { id: 9, name: 'Indah Permata', role: 'Sekretaris', quote: 'Rajin banget ih', photo: '' },
    { id: 10, name: 'Joko Susilo', role: 'Anggota', quote: 'Komedian kelas', photo: '' },
    { id: 11, name: 'Kartika Sari', role: 'Sie Akademik', quote: 'Ahli presentasi', photo: '' },
    { id: 12, name: 'Lutfi Hakim', role: 'Sie IT', quote: 'Web developer kelas', photo: '' },
    { id: 13, name: 'Mira Anggraini', role: 'Anggota', quote: 'Perpustakaan berjalan', photo: '' },
    { id: 14, name: 'Naufal Aziz', role: 'Anggota', quote: 'Atlet voli handal', photo: '' },
    { id: 15, name: 'Olivia Putri', role: 'Anggota', quote: 'Bucin tapi pintar', photo: '' },
    { id: 16, name: 'Pandu Wicaksono', role: 'Anggota', quote: 'Selalu telat tapi hadir', photo: '' },
    { id: 17, name: 'Qonita Zahra', role: 'Anggota', quote: 'Paling rapi se-kelas', photo: '' },
    { id: 18, name: 'Rizky Aditya', role: 'Anggota', quote: 'Gamer tapi ranking 5', photo: '' },
    { id: 19, name: 'Sinta Maharani', role: 'Anggota', quote: 'Jago bikin rangkuman', photo: '' },
    { id: 20, name: 'Taufik Hidayat', role: 'Sie Kebersihan', quote: 'Bersih-bersih paling semangat', photo: '' },
    { id: 21, name: 'Ulfa Rahmadani', role: 'Anggota', quote: 'Diam-diam menghanyutkan', photo: '' },
    { id: 22, name: 'Vino Saputra', role: 'Anggota', quote: 'Suaranya kayak speaker', photo: '' },
    { id: 23, name: 'Wulan Dari', role: 'Anggota', quote: 'Paling jago nyanyi', photo: '' },
    { id: 24, name: 'Xena Aulia', role: 'Anggota', quote: 'Punya nama paling unik', photo: '' },
    { id: 25, name: 'Yusuf Ramadhan', role: 'Anggota', quote: 'Si cuek tapi perhatian', photo: '' },
    { id: 26, name: 'Zahra Febriana', role: 'Anggota', quote: 'Fotografer dadakan', photo: '' },
    { id: 27, name: 'Arya Kelana', role: 'Anggota', quote: 'Paling suka nanya', photo: '' },
    { id: 28, name: 'Bella Sasmita', role: 'Anggota', quote: 'Catatan paling estetik', photo: '' },
    { id: 29, name: 'Chandra Wijaya', role: 'Anggota', quote: 'Pecerita paling seru', photo: '' },
    { id: 30, name: 'Dina Amalia', role: 'Anggota', quote: 'Mood booster kelas', photo: '' },
    { id: 31, name: 'Erwin Saputra', role: 'Anggota', quote: 'Paling selow tapi cerdas', photo: '' },
];

export function getStudentStyle(index) {
    const i = index % gradients.length;
    return {
        gradient: gradients[i],
        hoverBorder: hoverBorders[i],
        iconColor: iconColors[i],
    };
}

export const defaultTeacher = {
    name: 'Nama Wali Kelas',
    subject: 'Matematika',
    position: 'Wali Kelas X DKV 1',
    quote: 'Pendidikan bukan hanya soal nilai, tapi tentang membentuk karakter dan membangun mimpi bersama. Kelas ini bukan sekadar ruangan, tapi rumah kedua kita.',
    photo: '',
    tags: ['📚 Matematika', '🏆 Pembina OSIS', '💡 10+ Tahun Mengajar'],
};

export const defaultSlogan = {
    title1: 'Solidarity in',
    title2: 'Diversity',
    subtitle: 'Satu Frekuensi, Berjuta Cerita.',
    tagline: 'Turning chaos into memories, and dreams into reality.',
    year: 'Tahun Ajaran 2025/2026',
    startDate: '2025-07-14',
    stat1Label: 'Siswa',
    stat2Label: 'Wali Kelas',
    stat3Label: 'Hari Bersama',
    footerMotto1: 'Beyond the Classroom:',
    footerMotto2: 'A Legacy in the Making.',
    footerTagline: 'Version 2.0: Better, Stronger, Together. 🚀',
    footerCopyright: '© 2025 DKV 1 • Dibuat dengan 💜 oleh anak-anak kelas',
};

export const defaultGallery = [
    { id: 1, title: '📸 Foto Kelas Bersama', desc: 'Hari pertama masuk, September 2025', photo: '', large: true },
    { id: 2, title: '🚌 Study Tour', desc: '', photo: '' },
    { id: 3, title: '🏆 Lomba 17 Agustus', desc: '', photo: '' },
    { id: 4, title: '📖 Belajar Kelompok', desc: '', photo: '' },
    { id: 5, title: '🎵 Pentas Seni Sekolah', desc: '', photo: '' },
    { id: 6, title: '😂 Candid Gak Kira-kira', desc: '', photo: '' },
];

export const defaultSocials = [
    { id: 1, platform: 'instagram', url: '' },
    { id: 2, platform: 'youtube', url: '' },
    { id: 3, platform: 'tiktok', url: '' },
];
