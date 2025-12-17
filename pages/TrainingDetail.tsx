import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { coursesData } from './Training';

const TrainingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = coursesData.find(c => c.id === Number(id));

  if (!course) {
    return <Navigate to="/training" replace />;
  }

  const isPast = new Date(course.date) < new Date();

  return (
    <div className="w-full flex flex-col items-center animate-fade-in-up">
      {/* Hero Header */}
      <section className="w-full bg-background-light dark:bg-background-dark pt-12 pb-8 border-b border-border-light dark:border-border-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
           <Link to="/training" className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary mb-6 transition-colors">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Eğitimlere Dön
           </Link>
           <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                {course.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wide">
                {course.level}
              </span>
              {isPast && (
                 <span className="px-3 py-1 rounded-full bg-gray-500/10 text-gray-500 text-xs font-bold uppercase tracking-wide">
                   Tamamlandı
                 </span>
              )}
           </div>
           <h1 className="text-3xl md:text-5xl font-black text-[#111418] dark:text-white mb-6 leading-tight">
             {course.title}
           </h1>
           
           <div className="flex flex-wrap gap-6 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">calendar_month</span>
                 <span className="font-medium">{new Date(course.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">schedule</span>
                 <span className="font-medium">{new Date(course.date).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })} Başlangıç</span>
              </div>
              <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">hourglass_top</span>
                 <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">videocam</span>
                 <span className="font-medium">Online (Zoom)</span>
              </div>
           </div>
        </div>
      </section>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-12 flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-10">
           <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-black/20">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
           </div>

           <div>
              <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-4">Eğitim Hakkında</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {course.description}
                <br /><br />
                Bu eğitimde teorik bilgilerin yanı sıra, gerçek hayat senaryoları üzerinden uygulamalı örnekler yapılacaktır. Katılımcıların eğitim sonunda kendi projelerini geliştirebilecek seviyeye gelmeleri hedeflenmektedir.
              </p>
           </div>

           <div>
              <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-6">Müfredat</h2>
              <div className="flex flex-col gap-4">
                 {[1, 2, 3, 4].map((week) => (
                    <div key={week} className="bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-[#233648] rounded-xl p-5">
                       <div className="flex items-center gap-4 mb-2">
                          <span className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                            {week}
                          </span>
                          <h3 className="font-bold text-[#111418] dark:text-white text-lg">Bölüm {week}: Konu Başlığı</h3>
                       </div>
                       <p className="text-slate-600 dark:text-slate-400 text-sm pl-12">
                          Bu bölümde ele alınacak konuların detaylı açıklaması ve pratik uygulamalar.
                       </p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[360px] shrink-0">
           <div className="sticky top-24 bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-[#233648] rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-[#111418] dark:text-white mb-6">Eğitim Özeti</h3>
              
              <ul className="flex flex-col gap-4 mb-8">
                 <li className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-[#233648]">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Tarih</span>
                    <span className="text-[#111418] dark:text-white font-medium text-sm text-right">
                       {new Date(course.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric'})}
                    </span>
                 </li>
                 <li className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-[#233648]">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Saat</span>
                    <span className="text-[#111418] dark:text-white font-medium text-sm text-right">
                       {new Date(course.date).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit'})}
                    </span>
                 </li>
                 <li className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-[#233648]">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Süre</span>
                    <span className="text-[#111418] dark:text-white font-medium text-sm text-right">{course.duration}</span>
                 </li>
                 <li className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-[#233648]">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Seviye</span>
                    <span className="text-[#111418] dark:text-white font-medium text-sm text-right">{course.level}</span>
                 </li>
                 <li className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Sertifika</span>
                    <span className="text-[#111418] dark:text-white font-medium text-sm text-right">Katılım Belgesi</span>
                 </li>
              </ul>

              {isPast ? (
                 <button className="w-full py-3 rounded-lg bg-gray-200 dark:bg-[#233648] text-gray-500 font-bold cursor-not-allowed" disabled>
                    Eğitim Tamamlandı
                 </button>
              ) : (
                 <button className="w-full py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold transition-colors shadow-lg shadow-primary/20">
                    Başvuru Yap
                 </button>
              )}
              
              {!isPast && (
                 <p className="text-xs text-center text-slate-500 mt-4">
                    Kontenjan sınırlıdır. Erken kayıt fırsatını kaçırmayın.
                 </p>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetail;