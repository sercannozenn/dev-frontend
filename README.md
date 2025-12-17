# DevPortfolio Pro

DevPortfolio Pro, React ve Tailwind CSS kullanılarak geliştirilmiş kapsamlı bir yazılım geliştirici portföy uygulamasıdır. Kişisel blog, hizmet tanıtımları, CV ve eğitim/atölye takvimi gibi özellikleri içerir.

## Özellikler

- **Modern ve Duyarlı Tasarım:** Mobil ve masaüstü cihazlarla tam uyumlu arayüz.
- **Karanlık/Aydınlık Mod:** Kullanıcı tercihine göre tema desteği.
- **Sayfa Yönlendirmeleri:** React Router ile hızlı ve sorunsuz sayfa geçişleri.
- **Blog Bölümü:** Teknik yazılar ve makaleler için özel alan.
- **Hizmetler:** Sunulan profesyonel hizmetlerin tanıtımı.
- **Eğitimler:** Düzenlenen eğitim ve atölye çalışmalarının listesi.
- **CV İndirme:** Özgeçmişin kolayca indirilmesi.
- **İletişim:** Ziyaretçilerin ulaşabileceği iletişim sayfası.

## Teknolojiler

Bu proje aşağıdaki teknolojiler kullanılarak geliştirilmiştir:

- **[React](https://react.dev/):** Kullanıcı arayüzü oluşturmak için JavaScript kütüphanesi.
- **[TypeScript](https://www.typescriptlang.org/):** Tip güvenliği sağlayan JavaScript üst kümesi.
- **[Vite](https://vitejs.dev/):** Hızlı geliştirme ve derleme aracı.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework'ü (CDN üzerinden dahil edilmiştir).
- **[React Router](https://reactrouter.com/):** React uygulamaları için yönlendirme kütüphanesi.

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu klonlayın:**
   ```bash
   git clone https://github.com/kullaniciadi/devportfolio-pro.git
   cd devportfolio-pro
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```
   Tarayıcınızda `http://localhost:5173` (veya terminalde belirtilen adres) adresine giderek uygulamayı görüntüleyebilirsiniz.

## Kullanılabilir Komutlar

Proje dizininde aşağıdaki komutları çalıştırabilirsiniz:

- `npm run dev`: Uygulamayı geliştirme modunda çalıştırır.
- `npm run build`: Uygulamayı üretim için derler.
- `npm run preview`: Üretim derlemesini yerel olarak önizler.

## Proje Yapısı

```
devportfolio-pro/
├── components/       # Yeniden kullanılabilir bileşenler (Layout vb.)
├── pages/            # Sayfa bileşenleri (Home, About, Blog vb.)
├── App.tsx           # Ana uygulama bileşeni
├── routes.tsx        # Yönlendirme tanımları
├── index.html        # Ana HTML dosyası (Tailwind yapılandırması burada)
├── package.json      # Proje bağımlılıkları ve scriptler
└── vite.config.ts    # Vite yapılandırması
```

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.

## İletişim

**Sercan Özen** - Yazılım Geliştirici

---

