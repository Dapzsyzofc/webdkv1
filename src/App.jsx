import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WaliKelas from './components/WaliKelas';
import StudentDirectory from './components/StudentDirectory';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { useFirestore } from './hooks/useFirestore';
import { defaultStudents, defaultTeacher, defaultSlogan, defaultGallery, defaultSocials } from './data/defaultStudents';

export default function App() {
  const [students, setStudents] = useFirestore('students', defaultStudents);
  const [teacher, setTeacher] = useFirestore('teacher', defaultTeacher);
  const [slogan, setSlogan] = useFirestore('slogan', defaultSlogan);
  const [gallery, setGallery] = useFirestore('gallery', defaultGallery);
  const [socials, setSocials] = useFirestore('socials', defaultSocials);
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

      <Footer slogan={slogan} socials={socials} />

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
        socials={socials}
        setSocials={setSocials}
      />
    </div>
  );
}
