import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WaliKelas from './components/WaliKelas';
import StudentDirectory from './components/StudentDirectory';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { useLocalStorage } from './hooks/useLocalStorage';
import { defaultStudents, defaultTeacher, defaultSlogan, defaultGallery } from './data/defaultStudents';

export default function App() {
  const [students, setStudents] = useLocalStorage('xdkv1-students', defaultStudents);
  const [teacher, setTeacher] = useLocalStorage('xdkv1-teacher', defaultTeacher);
  const [slogan, setSlogan] = useLocalStorage('xdkv1-slogan', defaultSlogan);
  const [gallery, setGallery] = useLocalStorage('xdkv1-gallery', defaultGallery);
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0f] text-gray-200 antialiased overflow-x-hidden min-h-screen">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <Navbar onAdminToggle={() => setAdminOpen(true)} />

      <main>
        <Hero slogan={slogan} studentCount={students.length} />
        <div className="section-divider max-w-5xl mx-auto" />

        <WaliKelas teacher={teacher} />
        <div className="section-divider max-w-5xl mx-auto" />

        <StudentDirectory students={students} />
        <div className="section-divider max-w-5xl mx-auto" />

        <Gallery gallery={gallery} />
        <div className="section-divider max-w-5xl mx-auto" />
      </main>

      <Footer slogan={slogan} />

      <AdminPanel
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        students={students}
        setStudents={setStudents}
        teacher={teacher}
        setTeacher={setTeacher}
        slogan={slogan}
        setSlogan={setSlogan}
        gallery={gallery}
        setGallery={setGallery}
      />
    </div>
  );
}
