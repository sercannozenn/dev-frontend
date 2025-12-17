import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Updated Tech Stack Order
  const techStack = [
    { name: 'PHP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'Laravel', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'Go', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg' },
    { name: 'Gin', url: 'https://raw.githubusercontent.com/gin-gonic/logo/master/color.png' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Redis', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
    { name: 'Elasticsearch', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg' },
    { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MSSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'jQuery', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg' },
    { name: 'Vue.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Angular', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },
    { name: 'Bootstrap', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Bitbucket', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg' },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js",
      excerpt: "A deep dive into architecture patterns, error handling, and performance optimization for modern backend systems.",
      category: "Backend",
      date: "Mar 20, 2024",
      readTime: "8 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV-FrMlUNzeeeNVmdhHYWO9kYM8dgycTGkhy2JPLBxlWrhm1-MdXQyniOwROlxWQIAn-uMCJcjFLBT9B3Vv6NK4ffGMHeMC7ceyWCG4hpiUig1JcIgb1vbE5Wm6lwQ7KX3UmwOY_rSde-NRh6aFLmHxP_fTPsI3sUCTIAKmINniy5RV93RSh3NPdIiBXE1s9xNsVOyUJQgtvCNNlwzTu46IWd_4VwsA9oC0oBP45mgsvngbIUf29utN6X4PrfuYBfGg0-dHaya7ek",
    },
    {
      id: 2,
      title: "Understanding React Hooks in 2024",
      excerpt: "A comprehensive guide to best practices with modern React hooks. Stop using useEffect for everything and start thinking in signals.",
      category: "Frontend",
      date: "Mar 16, 2024",
      readTime: "5 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvXkjGnxzddQ6XPcEZF2Uc0_myxfq4c13yqkSvZ8rM9CiLfJQoxA2LRGficUI__YNfJpYtzZHbIDy5f5rHDfQTWFMkLQ3hIYt38sd1T7yQJt-sBjeabyySxGGq8Cx7foqtg6T6Vb95TXW7lE_oIl_YHjG5YY9YEfp1dQ7gb4BUVz-kf6aaaNgOxzUS29XvitNwW5eIzB5CCWtDTSavX7ENDVUsOGBUxySmtCwER1toeOBZ5L0gqTOK5SMYOCdlz6psOhNZ2KImjfY",
    },
    {
      id: 3,
      title: "My Setup: VS Code Extensions 2024",
      excerpt: "The essential extensions I use daily to boost productivity, lint code, and maintain sanity while debugging complex applications.",
      category: "Tools",
      date: "Mar 10, 2024",
      readTime: "3 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLEXnQlgZo2ipd59fffHySDCqY7mj3uqmh3T0odSQ2jL7qpBLuEa3iBX7xCGQ4Ik7PFPiwZhPsi6mCbbAHT_6PmRTvgsYXwysDUOif7OD6g17snafpbvPCEXpv9rczEacUcQEpMfCwdYMoe3H_eEt04WA4NKx3Ym4chBz1J_XLNwJd1YtQe25OnVSZ19DhvpAbSBZGhaC66s5Xuvs1PnOutqhQwoV9WzIPZQ9INryHIeuAxS7DfdvsO0lKAnm1nlBUT8Bn8P95-j0",
    }
  ];

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      {/* Hero Section */}
      <section className="w-full max-w-[1280px] px-4 sm:px-10 py-12 md:py-20 animate-fade-in-up">
        <div className="@container">
          <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6 flex-1 text-center md:text-left md:items-start items-center">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold w-fit animate-pulse">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Yeni Projelere Açık
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-[#111418] dark:text-white">
                  Yazılım Geliştirici, <br className="hidden md:block"/> YBS Uzmanı & <span className="text-primary relative inline-block">
                    Eğitmen
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-40" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7201 5.2076 92.8814 -1.8787 198.006 2.53912" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
                  </span>
                </h1>
                <h2 className="text-base md:text-lg font-normal leading-relaxed text-[#637588] dark:text-[#92adc9] max-w-xl">
                  Karmaşık problemleri zarif kodlara dönüştürüyorum. Dijital dünyada iz bırakan, ölçeklenebilir ve modern çözümler üretiyorum.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link to="/services" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-all hover:scale-105 text-white text-base font-bold shadow-lg shadow-primary/25">
                  <span className="truncate">Projelerimi Gör</span>
                </Link>
                <Link to="/contact" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-border-dark hover:border-primary hover:text-primary transition-all hover:scale-105 text-[#111418] dark:text-white text-base font-bold">
                  <span className="truncate">İletişime Geç</span>
                </Link>
              </div>
            </div>
            {/* Hero Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
              <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl bg-surface-dark group border border-border-dark hover:shadow-primary/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 pointer-events-none"></div>
                <div 
                  className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZJ_s8Ji8HzW73TzlBk8BbFWBXl_ye5LAmH5YlDaftgYyYB8DgziWWjuC2r2bsT5sGStUzWBQx3sPCwKvGldsY4N2wRZY-SeIVe36wEAjUMA_4C-OkZ3kqMqqriINIxuz0LYcvEm-BKdu0-i5kDTVxOoQOtlsD7CX8ahcXId2hLhfnAzFHbaDuNX6KxG8UJH3SnmR7sBzsHdW3axXrL3FtkmEXHJ6rUOrYdt7b1aN3HJNNLIpTJaiGzmF_KQ1rlbcScBs9PqUYSo0")' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 p-6 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">schedule</span>
                <p className="text-[#637588] dark:text-[#92adc9] text-sm font-medium uppercase tracking-wider">Deneyim</p>
              </div>
              <p className="text-3xl font-black leading-tight text-[#111418] dark:text-white">9+ Yıl</p>
            </div>
            <div className="flex flex-col gap-2 p-6 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">rocket_launch</span>
                <p className="text-[#637588] dark:text-[#92adc9] text-sm font-medium uppercase tracking-wider">Tamamlanan Proje</p>
              </div>
              <p className="text-3xl font-black leading-tight text-[#111418] dark:text-white">40+</p>
            </div>
            <div className="flex flex-col gap-2 p-6 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">code_blocks</span>
                <p className="text-[#637588] dark:text-[#92adc9] text-sm font-medium uppercase tracking-wider">Github Repoları</p>
              </div>
              <p className="text-3xl font-black leading-tight text-[#111418] dark:text-white">35+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee Section */}
      <section className="w-full py-16 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 mb-10 text-center">
           <h2 className="text-2xl md:text-3xl font-bold text-[#111418] dark:text-white">Kullandığım Teknolojiler</h2>
           <p className="text-[#637588] dark:text-[#92adc9] mt-2">Projelerimde tercih ettiğim modern araçlar ve kütüphaneler</p>
        </div>
        
        {/* Marquee Container */}
        <div className="relative w-full max-w-full overflow-hidden mask-gradient">
          <div className="flex w-max gap-6 animate-marquee pause-on-hover">
            {/* Doubled list for infinite scroll effect */}
            {[...techStack, ...techStack].map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`} 
                className="group relative flex flex-col gap-3 rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 items-center justify-center min-w-[140px] md:min-w-[160px] cursor-default transition-all duration-500 hover:-translate-y-2 overflow-hidden h-[120px]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                
                {tech.url ? (
                  <img src={tech.url} alt={tech.name} className="w-10 h-10 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
                ) : (
                   <span className={`material-symbols-outlined text-4xl text-gray-500 relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm`}>code</span>
                )}
                
                <h3 className="font-bold text-xs text-[#111418] dark:text-white relative z-10 text-center mt-1">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="w-full bg-surface-light dark:bg-surface-dark border-y border-border-light dark:border-border-dark py-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex items-center justify-between mb-10">
             <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111418] dark:text-white">Son Yazılar</h2>
                <p className="text-[#637588] dark:text-[#92adc9]">Teknoloji ve yazılım dünyasından notlar</p>
             </div>
             <Link to="/blog" className="hidden sm:flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all">
               Tümünü Gör <span className="material-symbols-outlined text-sm">arrow_forward</span>
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map(post => (
              <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col bg-white dark:bg-background-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 w-full overflow-hidden relative">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-900 dark:text-white">
                      {post.category}
                   </div>
                </div>
                <div className="flex flex-col gap-3 p-5 flex-1">
                   <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                      <span>{post.readTime}</span>
                   </div>
                   <h3 className="text-lg font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors leading-tight">
                     {post.title}
                   </h3>
                   <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                     {post.excerpt}
                   </p>
                   <div className="mt-auto pt-4 flex items-center text-primary font-bold text-xs uppercase tracking-wide">
                      Devamını Oku
                   </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
             <Link to="/blog" className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border-dark bg-transparent text-white font-bold hover:bg-primary hover:border-primary transition-all">
               Tüm Yazıları Gör <span className="material-symbols-outlined text-sm">arrow_forward</span>
             </Link>
          </div>
        </div>
      </section>

      {/* Content Shortcuts */}
      <section className="w-full py-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 max-w-[720px]">
              <h2 className="tracking-tight text-[32px] font-bold leading-tight sm:text-4xl text-[#111418] dark:text-white">
                İçerik ve Hizmetler
              </h2>
              <p className="text-[#637588] dark:text-[#92adc9] text-base font-normal leading-normal">
                Profesyonel yolculuğum, teknik birikimim ve sunduğum çözümler hakkında daha fazla bilgi edinin.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/blog" className="group flex flex-col gap-4 rounded-2xl border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">book_2</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-[#111418] dark:text-white">Teknik Blog</h3>
                  <p className="text-[#637588] dark:text-[#92adc9] text-sm leading-relaxed">
                    Yazılım mimarisi, clean code ve en son teknolojiler üzerine yazdığım makaleler ve notlar.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex items-center text-primary font-medium text-sm">
                  Okumaya Başla <span className="material-symbols-outlined text-base ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>
              
              <Link to="/about" className="group flex flex-col gap-4 rounded-2xl border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">description</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-[#111418] dark:text-white">CV & Deneyim</h3>
                  <p className="text-[#637588] dark:text-[#92adc9] text-sm leading-relaxed">
                    Eğitim geçmişim, detaylı iş tecrübelerim, sertifikalarım ve yetenek setimin zaman çizelgesi.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex items-center text-primary font-medium text-sm">
                  İncele <span className="material-symbols-outlined text-base ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>

              <Link to="/services" className="group flex flex-col gap-4 rounded-2xl border border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">briefcase_meal</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-[#111418] dark:text-white">Hizmetler</h3>
                  <p className="text-[#637588] dark:text-[#92adc9] text-sm leading-relaxed">
                    Web geliştirme, teknik danışmanlık ve özel yazılım çözümleri için sunduğum profesyonel hizmetler.
                  </p>
                </div>
                <div className="mt-auto pt-4 flex items-center text-primary font-medium text-sm">
                  Detayları Gör <span className="material-symbols-outlined text-base ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;