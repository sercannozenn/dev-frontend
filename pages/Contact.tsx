import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex-grow layout-container flex flex-col items-center py-10 md:py-16 animate-fade-in-up">
      <div className="w-full max-w-[960px] px-4 md:px-6 flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-[#111418] dark:text-white">İletişim</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
            Bir proje fikriniz mi var veya sadece merhaba mı demek istiyorsunuz? Aşağıdaki formu doldurun veya sosyal medya kanalları üzerinden bana ulaşın.
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left Column: Info & Socials */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">E-posta</p>
                <a href="mailto:developer@example.com" className="text-lg font-medium hover:text-primary transition-colors break-all text-[#111418] dark:text-white">
                  developer@example.com
                </a>
              </div>
              <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Konum</p>
                <div className="flex items-center gap-2 text-[#111418] dark:text-white">
                  <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                  <p className="text-lg font-medium">Remote / İstanbul</p>
                </div>
                {/* Map Placeholder */}
                <div className="mt-4 w-full h-32 rounded-xl overflow-hidden relative bg-slate-200 dark:bg-slate-800">
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-30 bg-cover bg-center" 
                    style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100%25\\' height=\\'100%25\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cdefs%3E%3Cpattern id=\\'grid\\' width=\\'40\\' height=\\'40\\' patternUnits=\\'userSpaceOnUse\\'%3E%3Cpath d=\\'M 40 0 L 0 0 0 40\\' fill=\\'none\\' stroke=\\'%2364748b\\' stroke-width=\\'0.5\\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' fill=\\'url(%23grid)\\' /%3E%3C/svg%3E')" }}
                  ></div>
                  <span className="relative z-10 text-xs font-mono text-slate-500 w-full h-full flex items-center justify-center">MAP VIEW</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Sosyal Medya</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: 'terminal', label: 'GitHub' },
                  { icon: 'contact_page', label: 'LinkedIn' },
                  { icon: 'chat_bubble', label: 'Twitter' },
                  { icon: 'help_center', label: 'StackOver' }
                ].map((social) => (
                  <a key={social.label} href="#" className="group flex flex-col items-center justify-center gap-2 w-20 h-24 rounded-xl bg-slate-100 dark:bg-[#192633] hover:bg-primary/10 dark:hover:bg-primary/20 transition-all border border-transparent hover:border-primary/50">
                    <div className="size-10 rounded-full bg-white dark:bg-[#233648] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-slate-700 dark:text-white" style={{ fontSize: '24px' }}>{social.icon}</span>
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="order-1 lg:order-2 bg-white dark:bg-[#15202b] rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Adınız Soyadınız</span>
                  <input className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#192633] px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 dark:text-white" placeholder="Adınızı giriniz" type="text"/>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">E-posta Adresiniz</span>
                  <input className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#192633] px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 dark:text-white" placeholder="ornek@email.com" type="email"/>
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Konu</span>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-slate-400 dark:text-slate-500 material-symbols-outlined text-xl">topic</span>
                  <select className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#192633] pl-12 pr-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white appearance-none cursor-pointer" defaultValue="">
                    <option disabled value="">Bir konu seçiniz</option>
                    <option value="project">Proje Teklifi</option>
                    <option value="job">İş Fırsatı</option>
                    <option value="consulting">Danışmanlık</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mesajınız</span>
                <textarea className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#192633] px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 dark:text-white resize-none" placeholder="Projenizden veya sorunuzdan bahsedin..." rows={5}></textarea>
              </label>
              <div className="pt-2">
                <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary py-3.5 px-6 text-sm font-bold text-white shadow-md hover:bg-blue-600 focus:ring-4 focus:ring-primary/30 transition-all active:scale-[0.98]" type="submit">
                  <span className="material-symbols-outlined text-xl">send</span>
                  <span>Mesajı Gönder</span>
                </button>
                <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-500">
                  Bu form reCAPTCHA ile korunmaktadır ve Google Gizlilik Politikası geçerlidir.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;