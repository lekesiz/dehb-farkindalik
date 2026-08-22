# Vercel ve Supabase Geçiş Notları

Bu proje, Manus barındırmasına bağımlı olmadan çalışabilmesi için Vercel ve GitHub tabanlı bir dağıtım düzenine hazırlanmıştır. Uygulama statik bir React/Vite tek sayfa uygulamasıdır; test cevapları yalnızca tarayıcı oturumunda tutulur ve kalıcı olarak kaydedilmez.

| Bileşen | Hedef | Durum |
|---|---|---|
| Kaynak kodu | GitHub `lekesiz/dehb-farkindalik` | Ana yedek ve dağıtım kaynağı |
| Uygulama görselleri | GitHub Release `assets-v1` | Manus depolamasından bağımsız |
| Web dağıtımı | Vercel | GitHub `main` dalından otomatik dağıtım |
| Veritabanı altyapısı | Supabase `dehb-farkindalik` | Aktif ve sağlıklı; mevcut uygulama veri yazmaz |

Supabase proje referansı `mjgrdzsxlaydcuppsebm`, bölgesi `eu-central-1` ve API adresi `https://mjgrdzsxlaydcuppsebm.supabase.co` olarak oluşturulmuştur. `public` şeması boş bırakılmıştır; uygulama için tablo, kullanıcı hesabı veya cevap saklama yapısı oluşturulmamıştır.

Vercel proje kimliği `prj_KtJPcNwMbO6ZPmWvxAYypjqxjmnG` ve kalıcı üretim adresi `https://dehb-farkindalik.vercel.app` olarak oluşturulmuştur. Proje GitHub’daki `lekesiz/dehb-farkindalik` deposunun `main` dalına bağlıdır; yeni commit’ler otomatik olarak dağıtılır.

## Gizlilik İlkesi

Supabase projesi hazırlanmış olsa da mevcut uygulama Supabase istemcisini yüklemez, test cevaplarını ağ üzerinden göndermez ve kullanıcı profili oluşturmaz. Bu davranış, uygulamanın anonim ve veritabanısız çalışma ilkesini korur. Gelecekte veri saklama özelliği eklenecekse açık kullanıcı onayı, veri minimizasyonu ve uygun erişim politikaları ayrıca tasarlanmalıdır.

## Yerel ve Vercel Derlemesi

```bash
pnpm install
pnpm check
pnpm build
```

Vercel, `vercel.json` dosyasındaki yapılandırmayla `dist/public` klasörünü yayınlar. SPA alt rotaları `/index.html` dosyasına yönlendirilir; böylece `/test` ve `/results` bağlantıları doğrudan açılabilir.

## Doğrulanan Üretim Akışları

Ana sayfa ve GitHub sürüm görselleri üretim alan adında yüklendi. `/test` rotası doğrudan açıldı, on soruluk akış tamamlandı, sonuç `sessionStorage` içinde üretildi ve `/results` sayfasına geçildi. Sonuç görseli ile `reflektif.net` yönlendirmesi doğrulandı.
