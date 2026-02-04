# 📸 Panduan Memasukkan Gambar & Assets

## 📁 Struktur Folder

```
public/
├── images/
│   ├── profile/
│   │   ├── avatar.jpg          ← Foto profil utama (Hero section)
│   │   └── about.jpg           ← Foto di About section
│   ├── projects/
│   │   ├── project-1.jpg       ← Screenshot project 1
│   │   ├── project-2.jpg       ← Screenshot project 2
│   │   └── ...
│   ├── testimonials/
│   │   ├── client-1.jpg        ← Foto klien 1
│   │   └── ...
│   └── og-image.jpg            ← Preview untuk social media (1200x630px)
├── icons/
│   ├── favicon.ico             ← Icon browser tab (32x32 atau 16x16)
│   └── logo.svg                ← Logo website
└── cv/
    └── Madesmac-CV.pdf         ← File CV untuk download
```

## 🖼️ Ukuran Gambar yang Direkomendasikan

| Gambar | Ukuran | Format |
|--------|--------|--------|
| Profile Avatar | 400x400 px | JPG/PNG |
| About Photo | 500x600 px | JPG/PNG |
| Project Screenshot | 800x600 px | JPG/PNG |
| Testimonial Photo | 100x100 px | JPG/PNG |
| OG Image | 1200x630 px | JPG/PNG |
| Favicon | 32x32 px | ICO/PNG |
| Logo | 150x50 px | SVG/PNG |

## 🔧 Cara Menggunakan di Kode

### 1. Import dari constants.ts
```tsx
import { IMAGES, PERSONAL_INFO } from '@/lib/constants';

// Gunakan di component
<Image src={IMAGES.profile.avatar} alt={PERSONAL_INFO.name} />
```

### 2. Direct Path (dari public folder)
```tsx
// Gambar di public/ bisa diakses langsung dengan path /
<Image src="/images/profile/avatar.jpg" alt="Profile" />
```

### 3. Menggunakan Next.js Image Component
```tsx
import Image from 'next/image';

<Image
  src="/images/profile/avatar.jpg"
  alt="Madesmac"
  width={400}
  height={400}
  className="rounded-full"
  priority // untuk gambar above-the-fold
/>
```

## ✅ Checklist Sebelum Deploy

- [ ] `avatar.jpg` - Foto profil sudah ada
- [ ] `og-image.jpg` - Preview social media sudah ada
- [ ] `favicon.ico` - Icon tab browser sudah ada
- [ ] `Madesmac-CV.pdf` - File CV sudah ada (jika ada tombol download CV)
- [ ] Semua gambar project sudah ada
- [ ] Semua foto testimonial sudah ada (atau gunakan placeholder)

## 💡 Tips

1. **Optimasi Gambar**: Kompres gambar sebelum upload menggunakan [TinyPNG](https://tinypng.com/) atau [Squoosh](https://squoosh.app/)

2. **Format WebP**: Untuk performa lebih baik, gunakan format WebP

3. **Placeholder**: Jika belum punya gambar, bisa gunakan:
   - [Unsplash](https://unsplash.com/) - Foto gratis
   - [UI Faces](https://uifaces.co/) - Foto profil placeholder
   - [Placeholder.com](https://placeholder.com/) - Gambar placeholder

4. **Favicon Generator**: Gunakan [Favicon.io](https://favicon.io/) untuk generate favicon dari teks/gambar
