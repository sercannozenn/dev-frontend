import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock Data for Courses
export const coursesData = [
  {
    id: 1,
    title: "Modern React & Next.js Masterclass",
    category: "Frontend",
    level: "İleri Seviye",
    duration: "12 Saat",
    date: "2023-10-05T10:00:00", // Past date example
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0uG9Iw2WwCI3Vkx4KFMw9yuZr3L5UI822Ym_fAjznxHFJ_OT7KdGGJPDFejnEwh9N6Xe2nh7JT5sQUcp3ueieEiQY2vHy-n0mJh1f5lOwNDwQO4lohgqn5NHPaVAj7W8FzrYaVvFk69rfu9kaCKkE6CQwDJonWwfxwGyF9WP7q8nsrvLJ6XXxG_-nPutXDLyVXiCuub_Tf28rs3WxprulCyhA4eqQ9r5y7VczfI8WwFsaseVLXCkS1tBBwsy-O8AEudFFl0NCGo",
    description: "React ekosisteminin derinliklerine iniyoruz. Server Components, Hooks patternleri ve performans optimizasyonu konularını uygulamalı olarak işliyoruz."
  },
  {
    id: 2,
    title: "Python ile Veri Analizine Giriş",
    category: "Backend",
    level: "Başlangıç",
    duration: "8 Saat",
    date: "2024-12-01T14:00:00", // Future date example (assuming current date is before Dec 2024)
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFApIFfr6WTU5Mb-_5tVGAs_nOdzAwxGL-1xWWdOvUFf7qJB03O1lZt707nbgAPYwhdAryT3oHQOshlL-o_C_zNc6O82-8hYxWDIBCSnwkO-zDRpmgVNLnaPijLzJos63fbT5-wfz5rW1TAgYObGgwY1DdX4y4vnLB6z31ZrSa_PPnvRfAWQMw6dyFc5jgwv-fqIj8zIIJTZAxRr81Ie3swh8EDRo_8S_tONgHHjWmgbCRw3CL7cKIbSEWb3jRALqdW4zizb2QPsE",
    description: "Pandas ve NumPy kütüphanelerini kullanarak veri setlerini işlemeyi, temizlemeyi ve görselleştirmeyi öğrenin."
  },
  {
    id: 3,
    title: "Docker & Kubernetes ile DevOps",
    category: "DevOps",
    level: "Orta Seviye",
    duration: "16 Saat",
    date: "2024-11-15T09:00:00",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", // Using icon as placeholder for diversity
    description: "Container mimarisi, Docker file oluşturma, Kubernetes cluster yönetimi ve CI/CD süreçlerine giriş."
  },
  {
    id: 4,
    title: "Flutter ile Mobil Uygulama Geliştirme",
    category: "Mobile",
    level: "Başlangıç",
    duration: "20 Saat",
    date: "2023-01-20T10:00:00", // Past
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    description: "Tek kod tabanı ile hem iOS hem Android uygulamaları geliştirmeyi öğrenin. Dart dili ve Widget yapısı."
  }
];

const Training: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Tümü', 'Frontend', 'Backend', 'DevOps', 'Mobile'];

  // Helper to check if date is past
  const isPastEvent = (dateString: string) => {
    return new Date(dateString) < new Date();
  };

  // Filter Logic
  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'Tümü' || course.category === selectedCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full flex flex-col items-center animate-fade-in-up">
      {/* Hero Section */}
      <div className="@container w-full">
        <div className="flex flex-col items-center justify-center bg-background-dark border-b border-[#233648]">
          <div 
            className="flex min-h-[320px] w-full flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 relative"
            style={{ backgroundImage: 'linear-gradient(rgba(17, 26, 34, 0.8) 0%, rgba(17, 26, 34, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqyAF09lLDMyo7buI6x4r_kjFRORUqCCiBxPNVkZsKsOf3T5MyVva0JVboZlujKgZI95ti7JyeoALHPrnWc32g9XLAglZRmpvtvZ1lQNkSJw0MB2p4Xnpn1s25670QALG2jgDHpIKspCNAarvLGhPnDScPPdLKBOFOU49ZElf7kJ5LG4u10Xbeeeab9qNz-_V7t-dMu1_HNF4euUhQhXldVfRE2AcUR7-WpuO2Nxl9-SDAHb7YCYceJkLyFux_HEyIHmY54duOn_M")' }}
          >
            <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">Akademi & Workshop</span>
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                Bilgiyi Paylaşmak: Yazılım Eğitimleri & Atölyeler
              </h1>
              <h2 className="text-gray-300 text-base font-normal leading-relaxed md:text-lg max-w-2xl mx-auto">
                Modern web teknolojileri, mimari yaklaşımlar ve kariyer gelişimi üzerine deneyimlerimi aktardığım güncel eğitim takvimi.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex grow flex-col w-full max-w-[1280px] mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 space-y-8">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined">search</span>
              <input 
                className="w-full h-12 bg-surface-dark rounded-lg pl-10 pr-4 text-white placeholder-gray-400 border border-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                placeholder="Eğitim ara..." 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4 px-2">Kategoriler</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex h-8 items-center justify-center rounded-lg px-4 text-sm font-medium transition-all ${
                      selectedCategory === cat 
                        ? 'bg-primary text-white scale-105 shadow-lg shadow-primary/20' 
                        : 'bg-[#233648] text-gray-300 hover:text-white hover:bg-[#2d445a]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Course List Area */}
          <main className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-white">Eğitim Listesi</h2>
              {/* Removed Calendar Toggle as requested */}
            </div>

            <div className="flex flex-col gap-4">
              {filteredCourses.length > 0 ? (
                filteredCourses.map(course => {
                  const isPast = isPastEvent(course.date);
                  
                  return (
                    <div 
                      key={course.id} 
                      className={`group relative flex flex-col md:flex-row gap-6 bg-[#1a2632] border border-[#233648] rounded-xl p-5 transition-all duration-300 shadow-sm ${
                        isPast 
                          ? 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:border-gray-500' 
                          : 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5'
                      }`}
                    >
                      <div className="shrink-0 md:w-48 h-48 md:h-auto rounded-lg overflow-hidden relative bg-black/20 flex items-center justify-center">
                        <img 
                          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${!course.image.includes('http') ? 'p-8' : ''}`} 
                          alt={course.title} 
                          src={course.image}
                        />
                        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">
                          {course.category}
                        </div>
                      </div>
                      
                      <div className="flex flex-col flex-1 justify-between gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {/* Only Level displayed, Status removed */}
                              <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
                                {course.level}
                              </span>
                              {isPast && (
                                <span className="inline-flex items-center rounded-full bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                                  Tamamlandı
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-gray-400 flex items-center gap-1">
                              <span className="material-symbols-outlined text-base">schedule</span> {course.duration}
                            </span>
                          </div>
                          <h3 className={`text-xl font-bold mb-2 transition-colors ${isPast ? 'text-gray-400' : 'text-white group-hover:text-primary'}`}>
                            {course.title}
                          </h3>
                          <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                            {course.description}
                          </p>
                          <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                              <span className={`material-symbols-outlined text-[20px] ${isPast ? 'text-gray-500' : 'text-primary'}`}>calendar_today</span>
                              <span>{new Date(course.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`material-symbols-outlined text-[20px] ${isPast ? 'text-gray-500' : 'text-primary'}`}>videocam</span>
                              <span>Online (Zoom)</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-end pt-4 border-t border-[#233648]">
                          <Link 
                            to={`/training/${course.id}`}
                            className={`flex items-center gap-2 text-sm font-bold px-6 py-2 rounded-lg transition-colors ${
                              isPast 
                                ? 'bg-[#233648] text-gray-400 hover:bg-[#2d445a]' 
                                : 'bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(19,127,236,0.3)]'
                            }`}
                          >
                            Detayları İncele
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-20 bg-[#1a2632] rounded-xl border border-[#233648]">
                  <span className="material-symbols-outlined text-4xl text-gray-500 mb-2">search_off</span>
                  <p className="text-gray-400">Aradığınız kriterlere uygun eğitim bulunamadı.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredCourses.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                 <button className="p-2 rounded-lg border border-[#233648] text-gray-400 hover:text-white hover:border-gray-500 transition-colors disabled:opacity-50" disabled>
                   <span className="material-symbols-outlined text-sm">chevron_left</span>
                 </button>
                 <button className="h-8 w-8 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">1</button>
                 <button className="p-2 rounded-lg border border-[#233648] text-gray-400 hover:text-white hover:border-gray-500 transition-colors" disabled>
                   <span className="material-symbols-outlined text-sm">chevron_right</span>
                 </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Training;