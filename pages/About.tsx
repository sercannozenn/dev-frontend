import React, { useState } from 'react';

const About: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  // --- DATA ---
  
  const contactInfo = {
    phone: "0543 929 2076",
    email: "sercan.ozen@outlook.com.tr",
    linkedin: "linkedin.com/in/sercanozen",
    github: "github.com/sercannozenn",
    youtube: "youtube.com/c/YazılımEğitimLaravel"
  };

  const experiences = [
    { company: "GÖZEN DIGITAL AVIATION", date: "Mart 2022 - Devam Ediyor", role: "Senior Software Developer" },
    { company: "TEKNOFİX", date: "Haziran 2021 - Mart 2022", role: "Senior Software Developer" },
    { company: "ENDIGITALS", date: "Nisan 2021 - Haziran 2021", role: "Senior PHP Developer" },
    { company: "JUVENIS", date: "Mayıs 2019 - Nisan 2021", role: "Full Stack Developer" },
    { company: "GALA BİLİŞİM", date: "Ara 2018 - Tem 2019", role: "Software Team Lead" },
    { company: "RED BLAC", date: "Şub 2018 - Kas 2018", role: "Full Stack Developer" },
    { company: "FREELANCE", date: "2016 - Şub 2018", role: "Junior Software Developer" },
    { company: "ROBOTUS", date: "Şub 2017 - Tem 2017", role: "Yazılım Arge" },
    { company: "POZİTİF 7/24 CANLI DESTEK", date: "Tem 2015 - Eyl 2015", role: "Customer Service Representative" },
    { company: "KOTON MAĞAZACILIK", date: "May 2013 - Eyl 2013", role: "Satış Danışmanı" },
    { company: "INDEX GRUP", date: "Ara 2011 - Tem 2012", role: "Stajyer" },
    { company: "ALORA BİLİŞİM", date: "2011 - Ara 2011", role: "Stajyer" }
  ];

  const educations = [
    { school: "Düzce Üniversitesi", degree: "Yönetim Bilişim Sistemleri (Tezli Yüksek Lisans)", date: "2017 - 2020", note: "Onur Belgesi", gpa: "3.50" },
    { school: "Mehmet Akif Ersoy Üniversitesi", degree: "Yönetim Bilişim Sistemleri (Lisans)", date: "2013 - 2017", note: "Onur Belgesi", gpa: "3.10" },
    { school: "Rüştü Akın Anadolu Meslek Lisesi", degree: "Web Tasarım ve Programlama", date: "2009 - 2012", note: "2 Kez Onur Belgesi", gpa: "" }
  ];

  const certificates = [
    "CISCO NETWORKING ACADEMY - CISCO IT ESSENTIALS: PC HARDWARE AND SOFTWARE",
    "WEB PROGRAMCILIĞI TEMELLERİ - MİLLÎ EĞİTİM BAKANLIĞI",
    "BODY LANGUAGE - RODOS GRUP",
    "TRAINING INFLUENCE PEOPLE - RODOS GRUP",
    "ORATORY TRAINING - RODOS GRUP",
    "FİNANSAL OKURYAZARLIK VE GİRİŞİMCİLİK",
    "ISO 10002:2004 MÜŞTERİ MEMNUNİYETİ YÖNETİM SİSTEMİ - TSC YÖNETİM SİSTEMLERİ AKADEMİSİ",
    "ZAMAN YÖNETİMİ - TSC YÖNETİM SİSTEMLERİ AKADEMİSİ",
    "ISO 27001:2013 BİLGİ GÜVENLİĞİ YÖNETİMİ - TSC YÖNETİM SİSTEMLERİ AKADEMİSİ",
    "ISO 9001:2015 KALİTE YÖNETİM SİSTEMİ - TSC YÖNETİM SİSTEMLERİ AKADEMİSİ",
    "SEO & DİJİTAL MEDYA & BİLİŞİMDE ARANAN OLMAK - BİLGE ADAM",
    "YAZILIMDA PROJE GELİŞTİRME TEKNİKLERİ - BİLGE ADAM",
    "BİLGİ YÖNETİMİ VE RAPORLAMA TEKNİKLERİ - BİLGE ADAM",
    "JAVA ANDROID - ARI BİLGİ BİLİŞİM TEKNOLOJİLERİ AKADEMİSİ"
  ];

  const techStackList = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "JQuery",
    "Ajax",
    "Bootstrap",
    "Tailwind CSS",
    "Vue.js",
    "React",
    "Angular",
    "MySQL",
    "PostgreSQL",
    "MSSQL",
    "Redis",
    "Elasticsearch",
    "XML",
    "JSON",
    "PHP",
    "Laravel",
    "Go",
    "Gin",
    "SOAP API",
    "REST API",
    "OAuth",
    "Queue",
    "Supervisor",
    "Unit Test",
    "Git",
    "Bitbucket",
    "Github",
    "GitFlow",
    "Trunk-based Development",
    "Jira",
    "Trello",
    "Docker",
    "Postman",
    "Arduino"
  ];

  // Helper to render tech badges with original SVG logos
  const TechBadge = ({ name, logoUrl, color }: { name: string, logoUrl: string, color: string }) => (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md border ${color} bg-opacity-5 border-opacity-20 hover:bg-opacity-10 transition-colors`}>
      <img src={logoUrl} alt={name} className="w-4 h-4 object-contain" />
      <span className={`text-xs font-bold ${color.replace('border-', 'text-').replace('bg-', 'text-')}`}>{name}</span>
    </div>
  );

  // Logo URLs (Using Devicon CDN for reliable original SVGs)
  const logos = {
    csharp: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
    android: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
    php: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    angular: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    elastic: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg",
    redis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    go: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
    voyager: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    windows: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg",
    wordpress: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  };
  
  // Stacks for Display (Web View)
  const architectureStackList = [
    "Object Oriented Programing", "Design Patterns", "MVC | Facade",
    "Dependency Injection + IoC Container", "Service Layer | Observer",
    "Command Pattern", "Adapter Pattern", "Agile | Scrum",
    "Management Information Systems", "Sorun Çözme",
    "Ekip Yönetimi", "Proje Yönetimi", "CRM | ERP"
  ];

  // --- PDF GENERATOR ---
  const handleDownloadPDF = async () => {
    setIsDownloading(true);

    // Create a robust HTML string specifically designed for A4 PDF layout.
    // REMOVED EXTERNAL IMAGES to prevent CORS issues causing blank PDF.
    const printContent = `
      <div style="width: 750px; padding: 40px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #111; background: #fff; line-height: 1.5;">
        
        <!-- HEADER -->
        <div style="display: flex; align-items: center; border-bottom: 2px solid #137fec; padding-bottom: 30px; margin-bottom: 30px;">
          <!-- Avatar Placeholder (CSS Only - No Image = No CORS Error) -->
          <div style="width: 100px; height: 100px; flex-shrink: 0; margin-right: 30px; border-radius: 50%; background-color: #137fec; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 36px; font-weight: bold; border: 4px solid #e2e8f0;">
             SÖ
          </div>
          <div>
            <h1 style="font-size: 32px; font-weight: 800; text-transform: uppercase; margin: 0; color: #111;">Sercan <span style="color: #137fec;">Özen</span></h1>
            <p style="font-size: 18px; color: #666; margin: 5px 0 0 0; font-weight: 500;">Software Developer & MIS Specialist</p>
            <div style="margin-top: 15px; font-size: 12px; color: #555; display: flex; flex-wrap: wrap; gap: 15px;">
              <span><strong>Tel:</strong> ${contactInfo.phone}</span>
              <span><strong>Email:</strong> ${contactInfo.email}</span>
              <span><strong>Linkedin:</strong> sercanozen</span>
            </div>
          </div>
        </div>

        <!-- LAYOUT GRID -->
        <div style="display: flex; gap: 30px;">
          
          <!-- LEFT COLUMN (Sidebar styled) -->
          <div style="width: 35%; padding-right: 15px;">
            
            <!-- SKILLS -->
            <div style="margin-bottom: 30px;">
              <h3 style="font-size: 14px; font-weight: 800; text-transform: uppercase; border-bottom: 2px solid #eee; padding-bottom: 5px; margin-bottom: 15px; color: #111;">Yetenekler</h3>
              <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                ${techStackList.map(item => `
                  <span style="background: #f1f5f9; color: #334155; padding: 4px 8px; border-radius: 4px; font-size: 10px; font-weight: 700; display: inline-block; border: 1px solid #e2e8f0;">${item}</span>
                `).join('')}
              </div>
            </div>

            <!-- EDUCATION -->
            <div style="margin-bottom: 30px;">
              <h3 style="font-size: 14px; font-weight: 800; text-transform: uppercase; border-bottom: 2px solid #eee; padding-bottom: 5px; margin-bottom: 15px; color: #111;">Eğitim</h3>
              ${educations.map(edu => `
                <div style="margin-bottom: 15px;">
                  <div style="font-weight: 700; font-size: 12px; color: #111;">${edu.school}</div>
                  <div style="font-size: 11px; color: #555;">${edu.degree}</div>
                  <div style="font-size: 10px; color: #888; margin-top: 2px;">${edu.date}</div>
                   <div style="display: flex; gap: 6px; flex-wrap: wrap; align-items: center; margin-top: 2px;">
                      ${edu.note ? `<span style="font-size: 10px; color: #137fec; font-weight: 600;">${edu.note}</span>` : ''}
                      ${edu.gpa ? `<span style="font-size: 9px; color: #666; font-weight: 500; background: #f0f0f0; padding: 0 4px; border-radius: 2px;">Not Ort: ${edu.gpa}</span>` : ''}
                   </div>
                </div>
              `).join('')}
            </div>

            <!-- CERTIFICATES -->
             <div style="margin-bottom: 30px;">
              <h3 style="font-size: 14px; font-weight: 800; text-transform: uppercase; border-bottom: 2px solid #eee; padding-bottom: 5px; margin-bottom: 15px; color: #111;">Sertifikalar</h3>
              <ul style="padding-left: 12px; margin: 0; font-size: 10px; color: #444; line-height: 1.4;">
                ${certificates.map(cert => `
                  <li style="margin-bottom: 6px;">${cert}</li>
                `).join('')}
              </ul>
            </div>

          </div>

          <!-- RIGHT COLUMN (Main Content) -->
          <div style="width: 65%;">
            
            <!-- SUMMARY -->
            <div style="margin-bottom: 30px;">
              <h3 style="font-size: 16px; font-weight: 800; text-transform: uppercase; border-bottom: 2px solid #137fec; padding-bottom: 5px; margin-bottom: 15px; color: #111;">Hakkımda</h3>
              <p style="font-size: 12px; color: #333; text-align: justify; line-height: 1.6;">
                2014-2015 yıllarından itibaren yazılım geliştirme alanında çalışmaktayım. PHP Laravel Framework ve modern web teknolojileri üzerinde uzmanlaştım. Gözen Digital Aviation'da Senior Developer olarak görev yapmaktayım. Proje yönetimi, ekip liderliği ve karmaşık sistem mimarileri konularında deneyim sahibiyim.
              </p>
            </div>

            <!-- EXPERIENCE -->
            <div style="margin-bottom: 30px;">
              <h3 style="font-size: 16px; font-weight: 800; text-transform: uppercase; border-bottom: 2px solid #137fec; padding-bottom: 5px; margin-bottom: 20px; color: #111;">Deneyim</h3>
              
              ${experiences.map(exp => `
                <div style="margin-bottom: 15px; page-break-inside: avoid;">
                  <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; border-bottom: 1px dotted #eee; padding-bottom: 2px;">
                    <h4 style="font-size: 13px; font-weight: 800; color: #111; margin: 0;">${exp.company}</h4>
                    <span style="font-size: 10px; color: #137fec; font-weight: 600;">${exp.date}</span>
                  </div>
                  <div style="font-size: 11px; color: #444; font-weight: 500;">${exp.role}</div>
                </div>
              `).join('')}
            </div>

          </div>
        </div>
        
        <!-- FOOTER -->
        <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; text-align: center; font-size: 10px; color: #999;">
          Bu CV devportfolio.com üzerinden oluşturulmuştur.
        </div>

      </div>
    `;

    // Create a temporary container for the print content
    const container = document.createElement('div');
    container.innerHTML = printContent;
    
    // CRITICAL FIX: Make it visible on screen (z-index) so html2canvas can capture it properly.
    // Instead of hiding it off-screen, we overlay it with a white background.
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '99999'; // On top of everything
    container.style.backgroundColor = 'rgba(0,0,0,0.8)'; // Dim background
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.overflow = 'auto';
    container.style.padding = '20px';
    
    // The inner wrapper acts as the "paper"
    const paper = container.firstElementChild as HTMLElement;
    if (paper) {
        paper.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
        paper.style.margin = 'auto'; // Center in overlay
    }

    document.body.appendChild(container);

    // Give browser a moment to render the DOM
    await new Promise(resolve => setTimeout(resolve, 500));

    const opt = {
      margin:       0,
      filename:     'Sercan_Ozen_CV.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { 
        scale: 2, 
        useCORS: true, 
        scrollY: 0,
        // windowWidth: 800 // Removed to let it use natural width
      },
      jsPDF:        { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };

    try {
        // We select the paper element specifically, not the full container overlay
        // @ts-ignore
        await window.html2pdf().set(opt).from(paper).save();
    } catch (error) {
        console.error("PDF Fail", error);
        alert("Hata oluştu.");
    } finally {
        // Clean up after a short delay so user sees the "flash" of the CV
        setTimeout(() => {
             if(document.body.contains(container)){
                document.body.removeChild(container);
             }
             setIsDownloading(false);
        }, 1000);
    }
  };


  return (
    <div id="cv-content" className="layout-container flex flex-col w-full py-10 animate-fade-in-up">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* LEFT COLUMN - Sidebar Info */}
          <aside className="w-full lg:w-[320px] shrink-0 flex flex-col gap-8">
            
            {/* Profile Card */}
            <div className="bg-[#111418] dark:bg-[#1a2632] text-white rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-square w-full bg-slate-800 relative">
                 <img 
                  src="https://placehold.co/600x600?text=Yeni+Foto" 
                  alt="Sercan Özen" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h1 className="text-3xl font-black uppercase tracking-wider leading-none mb-1">Sercan<br/><span className="text-primary">Özen</span></h1>
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-6">
                <div>
                  <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Unvan</h2>
                  <p className="font-medium">Software Developer</p>
                  <p className="text-sm text-gray-400">Management Information Systems Specialist</p>
                </div>

                <div className="h-px bg-gray-700"></div>

                <div>
                  <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">İletişim</h2>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-3 group">
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-sm">call</span>
                      </div>
                      <a href="https://wa.me/905439292076?text=Merhaba" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors">{contactInfo.phone}</a>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-sm">mail</span>
                      </div>
                      <a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-300 hover:text-white transition-colors truncate">{contactInfo.email}</a>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-sm">link</span>
                      </div>
                      <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors">{contactInfo.linkedin}</a>
                    </li>
                     <li className="flex items-center gap-3 group">
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-sm">code</span>
                      </div>
                      <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors">{contactInfo.github}</a>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-sm">play_circle</span>
                      </div>
                      <a href={`https://${contactInfo.youtube}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors">{contactInfo.youtube}</a>
                    </li>
                  </ul>
                </div>
                
                <div className="h-px bg-gray-700"></div>
                
                <button 
                  onClick={handleDownloadPDF}
                  disabled={isDownloading}
                  className="w-full py-3 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                   {isDownloading ? (
                     <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                   ) : (
                     <span className="material-symbols-outlined">download</span>
                   )}
                   {isDownloading ? 'Hazırlanıyor...' : 'CV İndir'}
                </button>
              </div>
            </div>

            {/* Certifications (Web View) */}
            <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-border-dark">
               <h3 className="text-lg font-bold text-[#111418] dark:text-white border-b-2 border-primary w-fit pb-1 mb-4">Sertifikalar</h3>
               <ul className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300">
                  {certificates.map((cert, i) => (
                    <li key={i} className="flex flex-col">
                      <span className="font-bold text-slate-900 dark:text-white">{cert}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </aside>

          {/* RIGHT COLUMN - Main Content */}
          <main className="flex-1 flex flex-col gap-10">
            
            {/* About / Summary Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Hakkımda
              </h2>
              <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-border-dark text-slate-600 dark:text-slate-300 leading-relaxed space-y-4 text-justify">
                <p>
                  Selamlar, 2014-2015 yıllarından itibaren yazılım geliştirme alanında çalışmaya başladım ve 2017 yılı itibariyle <strong>PHP Laravel Framework</strong> üzerinde uzmanlaştım. Bu süreçte RedBlac ve Gala Bilişim’de çeşitli projelerde yer aldım. RedBlac’te UNİELEMAN projesini baştan sona tek başıma geliştirdim. Gala Bilişim’de ise TRANSPORT TR projesinde görev aldım ve freelance çalışanlarla birlikte geniş bir ekip ile çalışma fırsatı buldum.
                </p>
                <p>
                  Juvenis Konsept Tasarım Reklam Ajansı’nda Full Stack Developer olarak başladığım görevimde, kısa süre içerisinde projelere yön veren ekibin bir parçası oldum. Endigitals firmasında kısa ancak yoğun geçen 3 aylık bir süreçte görev aldım. Daha sonra Teknofix firmasına geçiş yaparak, Pure PHP ile geliştirilmiş sistemlerin modern teknolojilerle ve Laravel Framework ile yeniden yapılandırılması süreçlerinde aktif rol oynadım.
                </p>
                <p>
                  Gözen Holding’in önemli projelerinden biri olan GoHub projesinde, projenin geliştirilmesi ve mimari süreçlerinde sorumluluk alarak çalışmaya devam ediyorum.
                </p>
                <p>
                  "Yazılım Eğitim" adlı YouTube kanalımda (5000+ abone) ve Udemy platformunda (1000+ öğrenci), başta PHP Laravel Framework olmak üzere web teknolojileri üzerine eğitimler veriyorum.
                </p>
                <p>
                  Hızlı öğrenen, yeniliklere açık ve kendini sürekli geliştiren bir profesyonel olarak, teknik bilgi birikimimi ve tecrübelerimi projelere en verimli şekilde aktarmaya odaklanıyorum.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Deneyim
              </h2>
              <div className="flex flex-col gap-6">
                {experiences.map((job, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-4 bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-border-dark transition-all hover:border-primary/50 group">
                    <div className="min-w-[4px] bg-slate-200 dark:bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></div>
                    <div className="flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-[#111418] dark:text-white">{job.company}</h3>
                      <span className="text-primary font-medium text-sm mb-1">{job.role}</span>
                      <span className="text-slate-500 text-xs uppercase tracking-wide">{job.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

             {/* Skills Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Yetenekler
              </h2>
              <div className="bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-border-dark">
                
                {/* Tech Stack List */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">Teknoloji Yığını (Tech Stack)</h3>
                        <div className="flex flex-wrap gap-2">
                          {techStackList.map((skill, i) => (
                            <span key={i} className="px-3 py-1.5 rounded bg-background-light dark:bg-background-dark text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-border-dark transition-all duration-300 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">Mimari Yaklaşımlar & Kurumsal Çözümler</h3>
                         <div className="flex flex-wrap gap-2">
                          {architectureStackList.map((skill, i) => (
                            <span key={i} className="px-3 py-1.5 rounded bg-background-light dark:bg-background-dark text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-border-dark transition-all duration-300 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                    </div>
                </div>
              </div>
            </section>

             {/* Education Section */}
            <section>
               <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Eğitim
              </h2>
               <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-border-dark flex flex-col gap-6">
                  {educations.map((edu, index) => (
                     <div key={index} className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-lg text-[#111418] dark:text-white leading-tight">{edu.school}</h3>
                            <span className="text-slate-500 text-sm">{edu.degree}</span>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                                {edu.note && (
                                    <span className="px-1.5 py-0.5 bg-yellow-400/10 border border-yellow-400/20 text-yellow-600 dark:text-yellow-400 text-[10px] font-bold rounded uppercase tracking-wide">{edu.note}</span>
                                )}
                                {edu.gpa && (
                                    <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-medium rounded">Not Ort: {edu.gpa}</span>
                                )}
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full w-fit whitespace-nowrap">{edu.date}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-2xl font-bold text-[#111418] dark:text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Projeler
              </h2>
              <div className="grid grid-cols-1 gap-6">
                
                {/* Robotus */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark">
                  <h3 className="text-xl font-bold text-slate-400 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">ROBOTUS</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-[#111418] dark:text-white text-lg">Üretim Reçetesi</h4>
                      <TechBadge name="C# Windows Forms" logoUrl={logos.csharp} color="border-purple-500 bg-purple-500" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="font-bold text-[#111418] dark:text-white text-lg">Alkolmetre Projesi & Bluetooth Kontrollü Araç</h4>
                      <div className="flex gap-2 flex-wrap">
                        <TechBadge name="Arduino" logoUrl={logos.arduino} color="border-teal-500 bg-teal-500" />
                        <TechBadge name="Java Android" logoUrl={logos.android} color="border-green-500 bg-green-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* RedBlac */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark">
                  <h3 className="text-xl font-bold text-slate-400 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">REDBLAC AGENCY</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Muzaffer Çaha Web Sitesi</h4>
                        <TechBadge name="PHP" logoUrl={logos.php} color="border-blue-500 bg-blue-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Suare Smokin Web Site</h4>
                        <TechBadge name="PHP" logoUrl={logos.php} color="border-blue-500 bg-blue-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Moncon Invest Web Site</h4>
                        <TechBadge name="Wordpress" logoUrl={logos.wordpress} color="border-slate-500 bg-slate-500" />
                    </div>
                     <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Unieleman Web Site</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                  </div>
                </div>

                {/* Freelance */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark">
                  <h3 className="text-xl font-bold text-slate-400 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">FREELANCE</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Aerobicity Web Site (E-Ticaret)</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Vamosco Gıda Web Sitesi</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                  </div>
                </div>

                {/* Gala Bilişim */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark">
                  <h3 className="text-xl font-bold text-slate-400 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">GALA BİLİŞİM</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Royale Rose E-Ticaret Web Site</h4>
                        <TechBadge name="Wordpress" logoUrl={logos.wordpress} color="border-slate-500 bg-slate-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Transport TR</h4>
                        <div className="flex flex-wrap gap-2">
                          <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Ekip Lideri</span>
                        </div>
                    </div>
                     <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Vip Araç Kiralama Sistemi</h4>
                        <div className="flex flex-wrap gap-2">
                           <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                           <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Ekip Lideri</span>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Juvenis Agency */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark">
                  <h3 className="text-xl font-bold text-slate-400 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">JUVENIS AGENCY</h3>
                  <div className="grid grid-cols-1 gap-4">
                     <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">İtalyan Okulları Web Sitesi</h4>
                        <TechBadge name="HTML" logoUrl={logos.html} color="border-orange-500 bg-orange-500" />
                    </div>
                     <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Capitol AVM Web Site</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Venezia Mega Outlet Web Site</h4>
                        <TechBadge name="Laravel Voyager" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Kuzu Effect AVM Web Site</h4>
                        <TechBadge name="Laravel Voyager" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">iDATA.com.tr</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">iDATA Visametric</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">iDATA Visametric İran Randevu Sistemi</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">iDATA Ulusal Randevu Sistemi</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Olivium Outlet Center Web Sitesi</h4>
                        <TechBadge name="Laravel Voyager" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">SS Finans Call Center Web Application</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">iDATA Schengen Vizesi Randevu Sistemi</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">iDATA Ödeme Sistemi</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">iDATA Suriyeli Randevu Sistemi</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[#111418] dark:text-white mb-1">Volans Video Agency</h4>
                        <TechBadge name="Laravel Voyager" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                    </div>
                  </div>
                </div>

                {/* Endigitals */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark">
                  <h3 className="text-xl font-bold text-slate-400 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">ENDIGITALS</h3>
                  <div>
                      <h4 className="font-bold text-[#111418] dark:text-white mb-1">Online Fuar Sistemi</h4>
                      <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                  </div>
                </div>

                {/* Teknofix */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark">
                  <h3 className="text-xl font-bold text-slate-400 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">TEKNOFIX</h3>
                  <div>
                      <h4 className="font-bold text-[#111418] dark:text-white mb-1">Utofix</h4>
                      <TechBadge name="PHP" logoUrl={logos.php} color="border-blue-500 bg-blue-500" />
                  </div>
                </div>

                {/* Gözen */}
                <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark">
                   <h3 className="text-xl font-bold text-slate-400 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">GÖZEN DIGITAL AVIATION</h3>
                   <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-[#111418] dark:text-white text-lg mb-2">GoHub</h4>
                        <div className="flex flex-wrap gap-2">
                           <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                           <TechBadge name="Angular JS" logoUrl={logos.angular} color="border-red-600 bg-red-600" />
                           <TechBadge name="React JS" logoUrl={logos.react} color="border-blue-400 bg-blue-400" />
                           <TechBadge name="Elasticsearch" logoUrl={logos.elastic} color="border-green-500 bg-green-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111418] dark:text-white text-lg mb-2">Security Front</h4>
                        <TechBadge name="Angular JS" logoUrl={logos.angular} color="border-red-600 bg-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#111418] dark:text-white text-lg mb-2">K9 Dogs</h4>
                        <TechBadge name="Laravel" logoUrl={logos.laravel} color="border-red-500 bg-red-500" />
                      </div>
                   </div>
                </div>

              </div>
            </section>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default About;