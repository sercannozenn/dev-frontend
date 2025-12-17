import React, { useState } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium leading-normal transition-colors ${
      isActive ? 'text-primary' : 'text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
    }`;

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3">
          <div className="flex items-center justify-between whitespace-nowrap">
            <Link to="/" className="flex items-center gap-3 text-[#111418] dark:text-white">
              <div className="size-8 flex items-center justify-center text-primary bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Sercan Özen</h2>
            </Link>

            {/* Desktop Nav */}
            <div className="flex flex-1 justify-end gap-8 items-center">
              <div className="hidden md:flex items-center gap-6">
                <NavLink to="/" className={navLinkClass}>Ana Sayfa</NavLink>
                <NavLink to="/about" className={navLinkClass}>Hakkımda</NavLink>
                <NavLink to="/services" className={navLinkClass}>Hizmetler</NavLink>
                <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
                <NavLink to="/training" className={navLinkClass}>Eğitimler</NavLink>
                <NavLink to="/contact" className={navLinkClass}>İletişim</NavLink>
              </div>
              
              <div className="flex items-center gap-4">
                 <Link to="/about" className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span className="truncate">CV İndir</span>
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-slate-500 dark:text-slate-400"
                >
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-4 flex flex-col gap-4">
             <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>Ana Sayfa</NavLink>
             <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>Hakkımda</NavLink>
             <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>Hizmetler</NavLink>
             <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>Blog</NavLink>
             <NavLink to="/training" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>Eğitimler</NavLink>
             <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={navLinkClass}>İletişim</NavLink>
          </div>
        )}
      </nav>

      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>

      <footer className="w-full border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#637588] dark:text-[#92adc9] text-sm">© 2024 Sercan Özen. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6 text-[#637588] dark:text-[#92adc9]">
            <a aria-label="GitHub" className="hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined">code</span>
            </a>
            <a aria-label="LinkedIn" className="hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined">work</span>
            </a>
            <a aria-label="Twitter" className="hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined">chat</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;