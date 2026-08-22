# Vercel ve Supabase Geçiş Notları

Bu proje, Manus barındırmasına bağımlı olmadan çalışabilmesi için Vercel ve GitHub tabanlı bir dağıtım düzenine hazırlanmıştır. Uygulama statik bir React/Vite tek sayfa uygulamasıdır; test cevapları yalnızca tarayıcı oturumunda tutulur ve kalıcı olarak kaydedilmez.

| Bileşen | Hedef | Durum |
|---|---|---|
| Kaynak kodu | GitHub `lekesiz/dehb-farkindalik` | Ana yedek ve dağıtım kaynağı |
| Uygulama görselleri | GitHub Release `assets-v1` | Manus depolamasından bağımsız |
| Web dağıtımı | Vercel | GitHub `main` dalından otomatik dağıtım |
| Veritabanı altyapısı | Supabase `dehb-farkindalik` | Geleceğe hazır; mevcut uygulama veri yazmaz |

## Gizlilik İlkesi

Supabase projesi hazırlanmış olsa da mevcut uygulama Supabase istemcisini yüklemez, test cevaplarını ağ üzerinden göndermez ve kullanıcı profili oluşturmaz. Bu davranış, uygulamanın anonim ve veritabanısız çalışma ilkesini korur. Gelecekte veri saklama özelliği eklenecekse açık kullanıcı onayı, veri minimizasyonu ve uygun erişim politikaları ayrıca tasarlanmalıdır.

## Yerel ve Vercel Derlemesi

```bash
pnpm install
pnpm check
pnpm build
```

Vercel, `vercel.json` dosyasındaki yapılandırmayla `dist/public` klasörünü yayınlar. SPA alt rotaları `/index.html` dosyasına yönlendirilir; böylece `/test` ve `/results` bağlantıları doğrudan açılabilir.

