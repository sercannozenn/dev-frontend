import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center animate-fade-in-up">
      {/* Hero Section */}
      <section className="w-full px-4 py-8 md:px-10 lg:px-20 max-w-7xl">
        <div 
          className="relative overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat min-h-[480px] flex items-center justify-center p-6 md:p-12 text-center" 
          style={{ backgroundImage: 'linear-gradient(rgba(17, 26, 34, 0.7), rgba(17, 26, 34, 0.9)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAjhN5VHVA8pKF9BuGsOVcQcw0KIJiEigGt78OghSjb87Zxh7ObPUwCkdD-7HFRrq1z0bmmyaOCpeCXTm-SH1ZVsX1UateruMxDIl_XGdxYjuW4tJRbOiscitIXXC_Y5ncdB4bgOBj4fgPRa73YQKEnjtX7c3SrMtyPRpHqyJ8tGVx17hAI-306YCcMBzLZcnupFYoOzrwe9rYBbi19MgF2r2jhvmV_pakDy2FWBNd5ge7s9fcAK4uN-l4RdrGoeLM-tcUwIvHd6I")' }}
        >
          <div className="relative z-10 flex flex-col gap-6 max-w-3xl items-center">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Yeni İş birliklerine açığım
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Global Standartlarda <br/><span className="text-primary">Yazılım Çözümleri</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              İş hedeflerinizi teknik mükemmeliyetle buluşturarak, ölçeklenebilir, performanslı ve sürdürülebilir dijital sistemler inşa ediyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
              <a href="#portfolio" className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold transition-all shadow-lg shadow-blue-500/25">
                Projelerimi Gör
              </a>
              <Link to="/contact" className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#233648] hover:bg-[#2c445a] text-white text-base font-bold border border-[#324d67] transition-all">
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full px-4 py-12 md:px-10 lg:px-20 max-w-7xl flex flex-col gap-10" id="services">
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest">Hizmetlerim</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Uzmanlık Alanlarım</h3>
          <p className="text-slate-600 dark:text-text-secondary text-lg">
            Go ve PHP tabanlı backend sistemler geliştiren, full stack web projelerinde deneyimli ve teknik liderlik bakış açısına sahip bir yazılım geliştiricisiyim.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Service 1: PHP / Laravel */}
          <div className="group flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/50">
            <div className="size-12 rounded-lg bg-blue-50 dark:bg-[#111a22] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">dns</span>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">PHP / Laravel ile Kurumsal Backend Geliştirme</h4>
              <p className="text-slate-600 dark:text-text-secondary text-sm leading-relaxed">
                Ölçeklenebilir, güvenli ve yüksek performanslı backend altyapıları.
              </p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-[#111a22] border border-gray-200 dark:border-[#233648] text-xs font-medium text-slate-600 dark:text-gray-400">Laravel</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-[#111a22] border border-gray-200 dark:border-[#233648] text-xs font-medium text-slate-600 dark:text-gray-400">PHP</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-[#111a22] border border-gray-200 dark:border-[#233648] text-xs font-medium text-slate-600 dark:text-gray-400">Elasticsearch</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-[#111a22] border border-gray-200 dark:border-[#233648] text-xs font-medium text-slate-600 dark:text-gray-400">Redis</span>
            </div>
          </div>

          {/* Service 2: Full Stack */}
          <div className="group flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/50">
            <div className="size-12 rounded-lg bg-blue-50 dark:bg-[#111a22] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">layers</span>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Full Stack Web Geliştirme (Backend ağırlıklı)</h4>
              <p className="text-slate-600 dark:text-text-secondary text-sm leading-relaxed">
                Kullanıcı deneyimini ön planda tutan, modern arayüzler ve sağlam altyapı entegrasyonu.
              </p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-[#111a22] border border-gray-200 dark:border-[#233648] text-xs font-medium text-slate-600 dark:text-gray-400">React</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-[#111a22] border border-gray-200 dark:border-[#233648] text-xs font-medium text-slate-600 dark:text-gray-400">Vue.js</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-[#111a22] border border-gray-200 dark:border-[#233648] text-xs font-medium text-slate-600 dark:text-gray-400">AngularJS</span>
            </div>
          </div>
          
          {/* Service 3: Leadership */}
          <div className="group flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/50">
            <div className="size-12 rounded-lg bg-blue-50 dark:bg-[#111a22] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl">diversity_3</span>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Teknik Liderlik & Proje / Ekip Yönetimi</h4>
              <p className="text-slate-600 dark:text-text-secondary text-sm leading-relaxed">
                Takım verimliliğini artıran, çevik metodolojilerle proje süreçlerini yöneten liderlik.
              </p>
            </div>
            <div className="mt-auto flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-[#111a22] border border-gray-200 dark:border-[#233648] text-xs font-medium text-slate-600 dark:text-gray-400">Team Lead</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-[#111a22] border border-gray-200 dark:border-[#233648] text-xs font-medium text-slate-600 dark:text-gray-400">Agile</span>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-[#111a22] border border-gray-200 dark:border-[#233648] text-xs font-medium text-slate-600 dark:text-gray-400">Management</span>
            </div>
          </div>

        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full px-4 py-12 md:px-10 lg:px-20 max-w-7xl flex flex-col gap-10" id="portfolio">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center justify-between w-full">
            <div>
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest">Portföy</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Projeler</h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1: Venezia Mega Outlet */}
          <div className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark transition-all hover:shadow-lg">
            <div className="h-48 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                <span className="material-symbols-outlined text-white text-3xl">visibility</span>
              </div>
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Venezia Mega Outlet website" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgt7vMpI25WjmdGVkZwlVT2u2WtxulPZDOt8LmpueFhFvbaxNcLprNWwk_YSLnDHqx0oRkSieDtxojjwFfr0Al1CD3n_xensrsEdI5Yw87UgjfRMLmd-h2XNQ-S-oEz0R1XXBl9m0C_ewt3oX1rlESGz5CSv5ZRa5Dmk9gBV695KGvExSbMAdDWgKGwj3wwTPAWLato1ONrHJqdDZzOR9VMS4y3F9YDW3ipdlQ7zFWAZNWbK6HeDVnl2ubXSZeCU9txK799KCICkM"/>
            </div>
            <div className="flex flex-col flex-1 p-5 gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Venezia Mega Outlet</h4>
                <p className="text-slate-600 dark:text-text-secondary text-sm mt-2 line-clamp-3">
                  Frontend ağırlıklı kurumsal site, Altın Örümcek finalisti, Laravel Voyager ile geliştirildi.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#233648] flex flex-wrap gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">Laravel Voyager</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">Frontend</span>
              </div>
            </div>
          </div>

          {/* Project 2: Olivium */}
          <div className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark transition-all hover:shadow-lg">
            <div className="h-48 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                 <span className="material-symbols-outlined text-white text-3xl">visibility</span>
              </div>
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Olivium website" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA0gzdZ9Ip_z2sjr3mZEHLCkmWiSW1bRrF7hkrJdpmGfdk5TTAaQOZ3-2ZGiOqdm-510kCtxb2jOIPAVpLPfSlPsXEMNdBioWDqVwWAYIrpWi8giS0NgigBqqWRxs5zGBIzGJgWWS7adoOXwl7B7tJdPttuq6IMJDJYRER7kNyq0FwMzw4AaSfVM-M7lbDgvXQdHq1gr0mEConHsCPWjTD8wDKIo3LRe0ubD71StasOCYZX3q6Kcj4xhjJRc1d8Br7rebfNUFWSHw"/>
            </div>
            <div className="flex flex-col flex-1 p-5 gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Olivium</h4>
                <p className="text-slate-600 dark:text-text-secondary text-sm mt-2 line-clamp-3">
                   Frontend ağırlıklı kurumsal site, Altın Örümcek finalisti, Laravel Voyager ile geliştirildi.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#233648] flex flex-wrap gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">Laravel Voyager</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">Frontend</span>
              </div>
            </div>
          </div>

          {/* Project 3: iDATA */}
          <div className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark transition-all hover:shadow-lg">
            <div className="h-48 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                <span className="material-symbols-outlined text-white text-3xl">visibility</span>
              </div>
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="iDATA reservation system" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDsn2H8Po_dgfZq81DBayXXM3V-CJGQPscsEcVHxd7XU4WLYk_V19EjurP_sBaEW7qkpdHWuYzurjLpeFhQiNIsL2Gp_egvEA4FQgjFliPS0yB1zE-S1IsD-Q4zFQ-J3sC-D8T9IiNdcxyxCwS7GcOKVzHMrWdI7uzXeGlkMeQkqJ1DKcgajG1ZtHkEGCX_oqiC4WCcLUOt9imNP3OD_atrV0No1UkzUQYahg3wAUXYyMAl3typt-7ZzJmfsTkNg8z7BxElery5YI"/>
            </div>
            <div className="flex flex-col flex-1 p-5 gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">iDATA</h4>
                <p className="text-slate-600 dark:text-text-secondary text-sm mt-2 line-clamp-3">
                  17+ ülkenin rezervasyon ve süreçlerini ilgilendiren yazılımı geliştirildi.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#233648] flex flex-wrap gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">Rezervasyon</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">Süreç Yönetimi</span>
              </div>
            </div>
          </div>

           {/* Project 4: Vamos Cogida */}
           <div className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark transition-all hover:shadow-lg">
            <div className="h-48 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                <span className="material-symbols-outlined text-white text-3xl">visibility</span>
              </div>
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Vamos Cogida e-commerce" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgt7vMpI25WjmdGVkZwlVT2u2WtxulPZDOt8LmpueFhFvbaxNcLprNWwk_YSLnDHqx0oRkSieDtxojjwFfr0Al1CD3n_xensrsEdI5Yw87UgjfRMLmd-h2XNQ-S-oEz0R1XXBl9m0C_ewt3oX1rlESGz5CSv5ZRa5Dmk9gBV695KGvExSbMAdDWgKGwj3wwTPAWLato1ONrHJqdDZzOR9VMS4y3F9YDW3ipdlQ7zFWAZNWbK6HeDVnl2ubXSZeCU9txK799KCICkM"/>
            </div>
            <div className="flex flex-col flex-1 p-5 gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Vamos Cogida</h4>
                <p className="text-slate-600 dark:text-text-secondary text-sm mt-2 line-clamp-3">
                  Butik e-ticaret, Laravel ile geliştirildi.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#233648] flex flex-wrap gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">Laravel</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">E-Ticaret</span>
              </div>
            </div>
          </div>

           {/* Project 5: GSS GoHub Aero */}
           <div className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark transition-all hover:shadow-lg">
            <div className="h-48 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                <span className="material-symbols-outlined text-white text-3xl">visibility</span>
              </div>
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="GSS GoHub Aero HR app" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA0gzdZ9Ip_z2sjr3mZEHLCkmWiSW1bRrF7hkrJdpmGfdk5TTAaQOZ3-2ZGiOqdm-510kCtxb2jOIPAVpLPfSlPsXEMNdBioWDqVwWAYIrpWi8giS0NgigBqqWRxs5zGBIzGJgWWS7adoOXwl7B7tJdPttuq6IMJDJYRER7kNyq0FwMzw4AaSfVM-M7lbDgvXQdHq1gr0mEConHsCPWjTD8wDKIo3LRe0ubD71StasOCYZX3q6Kcj4xhjJRc1d8Br7rebfNUFWSHw"/>
            </div>
            <div className="flex flex-col flex-1 p-5 gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">GSS GoHub Aero</h4>
                <p className="text-slate-600 dark:text-text-secondary text-sm mt-2 line-clamp-3">
                  Havayolu sektöründe İnsan Kaynakları uygulaması, Laravel, React.js, AngularJS, Golang, Redis, Elasticsearch kullanıldı.
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#233648] flex flex-wrap gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">Golang</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">React</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">Elasticsearch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 py-20 md:px-10 lg:px-20 max-w-7xl" id="contact">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#192633] to-[#0f151b] border border-[#324d67] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col gap-4 text-center md:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Bir Fikriniz mi Var?</h2>
            <p className="text-text-secondary text-lg">
              Projenizi hayata geçirmek için hazırım. Hemen iletişime geçin, detayları konuşalım ve birlikte harika işler çıkaralım.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <Link to="/contact" className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary hover:bg-blue-600 text-white text-lg font-bold transition-all shadow-lg shadow-blue-500/25">
              <span className="material-symbols-outlined">mail</span>
              İletişime Başla
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;