import { User } from 'lucide-react';
import { getStudentStyle } from '../data/defaultStudents';

export default function StudentCard({ student, index }) {
    const style = getStudentStyle(index);

    return (
        <div className="glass card-glow rounded-2xl p-4 text-center group cursor-default">
            <div
                className={`w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br ${style.gradient} flex items-center justify-center border border-white/10 ${style.hoverBorder} transition overflow-hidden`}
            >
                {student.photo ? (
                    <img
                        src={student.photo}
                        alt={student.name}
                        className="w-full h-full object-cover rounded-full"
                    />
                ) : (
                    <User size={32} className={`${style.iconColor} transition`} />
                )}
            </div>
            <h4 className="text-white text-sm font-semibold mb-0.5 truncate">{student.name}</h4>
            {student.role && student.role !== 'Anggota' && (
                <p className="text-purple-400 text-[10px] font-medium mb-0.5 uppercase tracking-wider">{student.role}</p>
            )}
            <p className="text-gray-500 text-[11px] italic truncate">{student.quote}</p>
        </div>
    );
}
