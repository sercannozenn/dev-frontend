import React from 'react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js",
      excerpt: "A deep dive into architecture patterns, error handling, and performance optimization for modern backend systems.",
      category: "Backend",
      date: "Mar 20, 2024",
      readTime: "8 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV-FrMlUNzeeeNVmdhHYWO9kYM8dgycTGkhy2JPLBxlWrhm1-MdXQyniOwROlxWQIAn-uMCJcjFLBT9B3Vv6NK4ffGMHeMC7ceyWCG4hpiUig1JcIgb1vbE5Wm6lwQ7KX3UmwOY_rSde-NRh6aFLmHxP_fTPsI3sUCTIAKmINniy5RV93RSh3NPdIiBXE1s9xNsVOyUJQgtvCNNlwzTu46IWd_4VwsA9oC0oBP45mgsvngbIUf29utN6X4PrfuYBfGg0-dHaya7ek",
      author: "Ahmet Yılmaz",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUWgTy3nM2euMNHEot2HBp9Q-b-79JrQT5tfGIPa8hFrCEGYgUKsCi2iR9HDvsHZ0SR1pYiKNtJh7ooEu_dd90TNJxZqQBeGkgkz3kkx_Gf7_P64-7uFlJwcqEPQkFu7SG-zTsybQKyFmn2_v4xVuhLYKbvLNfGVQA2F_ycsLI7LGqCMz4xCpXK3jljh3Xdcce1512bK4tNTVS2MjEt3Sn2wdLR1V1DJCUSds7Sp93XrHxx48BBtWIL4ZKIaycuCEQzQFUzhOSr2Y"
    },
    {
      id: 2,
      title: "Understanding React Hooks in 2024",
      excerpt: "A comprehensive guide to best practices with modern React hooks. Stop using useEffect for everything and start thinking in signals.",
      category: "Frontend",
      date: "Mar 16, 2024",
      readTime: "5 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvXkjGnxzddQ6XPcEZF2Uc0_myxfq4c13yqkSvZ8rM9CiLfJQoxA2LRGficUI__YNfJpYtzZHbIDy5f5rHDfQTWFMkLQ3hIYt38sd1T7yQJt-sBjeabyySxGGq8Cx7foqtg6T6Vb95TXW7lE_oIl_YHjG5YY9YEfp1dQ7gb4BUVz-kf6aaaNgOxzUS29XvitNwW5eIzB5CCWtDTSavX7ENDVUsOGBUxySmtCwER1toeOBZ5L0gqTOK5SMYOCdlz6psOhNZ2KImjfY",
      author: "Ahmet Yılmaz",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUWgTy3nM2euMNHEot2HBp9Q-b-79JrQT5tfGIPa8hFrCEGYgUKsCi2iR9HDvsHZ0SR1pYiKNtJh7ooEu_dd90TNJxZqQBeGkgkz3kkx_Gf7_P64-7uFlJwcqEPQkFu7SG-zTsybQKyFmn2_v4xVuhLYKbvLNfGVQA2F_ycsLI7LGqCMz4xCpXK3jljh3Xdcce1512bK4tNTVS2MjEt3Sn2wdLR1V1DJCUSds7Sp93XrHxx48BBtWIL4ZKIaycuCEQzQFUzhOSr2Y"
    },
    {
      id: 3,
      title: "My Setup: VS Code Extensions 2024",
      excerpt: "The essential extensions I use daily to boost productivity, lint code, and maintain sanity while debugging complex applications.",
      category: "Tools",
      date: "Mar 10, 2024",
      readTime: "3 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLEXnQlgZo2ipd59fffHySDCqY7mj3uqmh3T0odSQ2jL7qpBLuEa3iBX7xCGQ4Ik7PFPiwZhPsi6mCbbAHT_6PmRTvgsYXwysDUOif7OD6g17snafpbvPCEXpv9rczEacUcQEpMfCwdYMoe3H_eEt04WA4NKx3Ym4chBz1J_XLNwJd1YtQe25OnVSZ19DhvpAbSBZGhaC66s5Xuvs1PnOutqhQwoV9WzIPZQ9INryHIeuAxS7DfdvsO0lKAnm1nlBUT8Bn8P95-j0",
      author: "Jane Doe",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeDYUKIvRFbgFSQA64TjbxZnfLmNdA19Vpti9AF3W0OalQIXGiMUEYonTxa6tPzfopp249VdAIOJcpvvCKZEm452rmcGzXzMhHMh27I_BP1jOoY61ka4wryXIb0r08mshUX2sRoqpc7EMUxtV9gsFP7SGTR2wB9Tiu7j1fKvY3238zT6zm59ln-pFQb64pGuO-POBFAJa3H7q1pykp4AJWOC1voU7ZS88ikVL3kirwd2P5yr4yq0ODC2mTNKmajUYN2fWieKQKo4Q"
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox",
      excerpt: "When to use which? A practical comparison with real-world layout examples to understand the main differences.",
      category: "Frontend",
      date: "Mar 05, 2024",
      readTime: "6 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqyAF09lLDMyo7buI6x4r_kjFRORUqCCiBxPNVkZsKsOf3T5MyVva0JVboZlujKgZI95ti7JyeoALHPrnWc32g9XLAglZRmpvtvZ1lQNkSJw0MB2p4Xnpn1s25670QALG2jgDHpIKspCNAarvLGhPnDScPPdLKBOFOU49ZElf7kJ5LG4u10Xbeeeab9qNz-_V7t-dMu1_HNF4euUhQhXldVfRE2AcUR7-WpuO2Nxl9-SDAHb7YCYceJkLyFux_HEyIHmY54duOn_M",
      author: "Jane Doe",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeDYUKIvRFbgFSQA64TjbxZnfLmNdA19Vpti9AF3W0OalQIXGiMUEYonTxa6tPzfopp249VdAIOJcpvvCKZEm452rmcGzXzMhHMh27I_BP1jOoY61ka4wryXIb0r08mshUX2sRoqpc7EMUxtV9gsFP7SGTR2wB9Tiu7j1fKvY3238zT6zm59ln-pFQb64pGuO-POBFAJa3H7q1pykp4AJWOC1voU7ZS88ikVL3kirwd2P5yr4yq0ODC2mTNKmajUYN2fWieKQKo4Q"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center animate-fade-in-up">
      {/* Blog Hero/Header */}
      <section className="w-full bg-background-light dark:bg-background-dark pt-12 pb-8 border-b border-border-light dark:border-border-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
           <h1 className="text-4xl md:text-5xl font-black text-[#111418] dark:text-white mb-4">Blog</h1>
           <p className="text-slate-600 dark:text-slate-400 text-lg">Yazılım, teknoloji ve tasarım üzerine notlar.</p>
        </div>
      </section>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* Main Content (List/Grid Mix) */}
        <main className="flex-1 flex flex-col gap-10">
          
          {/* Featured Post (Big Card) */}
          <Link to={`/blog/${posts[0].id}`} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
             <div className="h-[400px] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-6 left-6 z-20">
                   <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Öne Çıkan</span>
                </div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full">
                  <div className="flex items-center gap-3 text-white/80 text-sm mb-3">
                    <span>{posts[0].date}</span>
                    <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                    <span>{posts[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">{posts[0].title}</h2>
                  <p className="text-white/80 line-clamp-2 max-w-2xl">{posts[0].excerpt}</p>
                </div>
             </div>
          </Link>

          {/* Post Grid (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(1).map(post => (
              <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col gap-4 bg-white dark:bg-surface-dark rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-transparent dark:border-border-dark hover:border-border-light dark:hover:border-primary/30">
                <div className="h-56 w-full overflow-hidden relative rounded-xl">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/70 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-900 dark:text-white">
                      {post.category}
                   </div>
                </div>
                <div className="flex flex-col gap-2 p-2">
                   <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                      <span>{post.readTime}</span>
                   </div>
                   <h3 className="text-xl font-bold text-[#111418] dark:text-white group-hover:text-primary transition-colors leading-tight">
                     {post.title}
                   </h3>
                   <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                     {post.excerpt}
                   </p>
                   <div className="flex items-center gap-2 mt-2 pt-2 border-t border-dashed border-slate-200 dark:border-slate-700">
                      <img src={post.avatar} alt={post.author} className="size-6 rounded-full object-cover" />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{post.author}</span>
                   </div>
                </div>
              </Link>
            ))}
          </div>
          
           {/* Pagination */}
           <div className="flex justify-center mt-8">
              <button className="px-6 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-colors font-medium text-sm">
                Daha Fazla Göster
              </button>
           </div>
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 flex flex-col gap-8 shrink-0">
          {/* Search */}
          <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-100 dark:border-border-dark shadow-sm">
             <h3 className="font-bold text-[#111418] dark:text-white mb-4">Ara</h3>
             <div className="relative">
                <input type="text" placeholder="Makale ara..." className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-50 dark:bg-[#101922] border-transparent focus:bg-white dark:focus:bg-black focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm" />
                <span className="material-symbols-outlined absolute left-3 top-2 text-slate-400 text-[20px]">search</span>
             </div>
          </div>

          {/* Categories */}
          <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-100 dark:border-border-dark shadow-sm">
             <h3 className="font-bold text-[#111418] dark:text-white mb-4">Kategoriler</h3>
             <div className="flex flex-col gap-2">
                {['Frontend', 'Backend', 'DevOps', 'Kariyer', 'Tasarım', 'Haberler'].map(cat => (
                   <a key={cat} href="#" className="flex items-center justify-between text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm py-1">
                      <span>{cat}</span>
                      <span className="bg-slate-100 dark:bg-[#101922] px-2 py-0.5 rounded text-xs text-slate-500">{(Math.random() * 10).toFixed(0)}</span>
                   </a>
                ))}
             </div>
          </div>

          {/* Newsletter */}
          <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-2xl border border-primary/10">
             <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
               <span className="material-symbols-outlined">mail</span>
             </div>
             <h3 className="font-bold text-[#111418] dark:text-white mb-2">Bültene Abone Ol</h3>
             <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Her hafta yeni makaleler ve ipuçları e-posta kutunda.</p>
             <input type="email" placeholder="E-posta adresi" className="w-full mb-2 px-3 py-2 rounded-lg border border-primary/20 bg-white dark:bg-[#101922] focus:border-primary outline-none text-sm" />
             <button className="w-full bg-primary text-white font-bold text-sm py-2 rounded-lg hover:bg-primary/90 transition-colors">Abone Ol</button>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Blog;