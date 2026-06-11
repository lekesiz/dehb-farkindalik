# DEHB Farkındalık Aracı - Tasarım Fikirleri

## Proje Bağlamı
DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu) farkındalık ve tarama aracı. Kullanıcılar anonim olarak bilimsel temelli soruları cevaplayarak zihinsel işleyişleri hakkında farkındalık kazanır. Hedef kitle: Kendini "tembel" veya "iradesiz" hisseden, aslında DEHB belirtileri yaşıyor olabilecek yetişkinler.

---

<response>
<text>
## Fikir 1: "Nöral Akış" - Organik Nörobilim Estetiği

**Design Movement:** Biyomorfik tasarım + Nörobilim görselliği

**Core Principles:**
1. Organik formlar ve akışkan hatlar (nöron ağlarından ilham)
2. Sakinleştirici ama dikkat çekici renk geçişleri
3. Bilimsel güvenilirlik hissi veren ama korkutucu olmayan atmosfer
4. Kullanıcıyı yargılamayan, kucaklayıcı ton

**Color Philosophy:** Koyu lacivert (#0F172A) zemin üzerine sıcak amber (#F59E0B) ve yumuşak turkuaz (#06B6D4) aksanlar. Lacivert güvenilirlik ve derinlik, amber sıcaklık ve umut, turkuaz ise bilimsel netlik hissi verir.

**Layout Paradigm:** Tek sayfa akış (scroll-based journey). Her bölüm tam ekran, kullanıcı bir "yolculuk" hisseder. Sorular tek tek gösterilir, ilerleme çubuğu ile.

**Signature Elements:**
- Arka planda yavaşça hareket eden parçacık animasyonları (nöron bağlantıları gibi)
- Sorular arasında yumuşak geçiş animasyonları
- Sonuç sayfasında radial progress göstergeleri

**Interaction Philosophy:** Her etkileşim "keşif" hissi verir. Kullanıcı cevap verdikçe arayüz nazikçe tepki verir.

**Animation:** Yavaş, akışkan geçişler (400-600ms). Parçacıklar sürekli ama fark edilmeyecek kadar yavaş hareket eder. Sayfa geçişleri fade + slide.

**Typography System:** Display: Space Grotesk (Bold) - modern ve bilimsel. Body: DM Sans (Regular/Medium) - okunabilir ve sıcak.
</text>
<probability>0.07</probability>
</response>

<response>
<text>
## Fikir 2: "Zihin Haritası" - Minimal Japon Estetiği (Wabi-Sabi)

**Design Movement:** Wabi-Sabi minimalizmi + Zen bahçesi felsefesi

**Core Principles:**
1. Boşluk (Ma) - her elemana nefes alanı
2. Kusursuzluğun güzelliği - DEHB'yi bir "bozukluk" değil farklılık olarak sunma
3. Doğal dokular ve organik asimetri
4. Sessiz güç ve kabul hissi

**Color Philosophy:** Krem/bej (#FAF7F2) zemin, mürekkep siyahı (#1A1A2E) metin, ve tek bir vurgu rengi olarak derin indigo (#4338CA). Krem sıcaklık ve kabul, siyah netlik, indigo ise derinlik ve içgörü temsil eder.

**Layout Paradigm:** Asimetrik grid, sol tarafta geniş içerik alanı, sağda minimal navigasyon. Sorular kart bazlı, her kart hafif bir eğimle (1-2 derece) yerleştirilmiş.

**Signature Elements:**
- İnce fırça darbesi çizgileri (brush stroke dividers)
- Kağıt dokusu arka plan
- Minimal enso (zen dairesi) motifi sonuç sayfasında

**Interaction Philosophy:** Sakin ve düşünceli. Her tıklama bir nefes gibi. Kullanıcı acele ettirilmez.

**Animation:** Çok minimal - sadece opacity geçişleri ve hafif translate. 200-300ms, ease-out. Scroll-triggered reveal.

**Typography System:** Display: Playfair Display (Italic) - zarif ve düşünceli. Body: Source Sans 3 (Light/Regular) - temiz ve huzurlu.
</text>
<probability>0.05</probability>
</response>

<response>
<text>
## Fikir 3: "Zihinsel Pusula" - Warm Editorial Design

**Design Movement:** Modern editorial tasarım + Sıcak terapötik atmosfer

**Core Principles:**
1. Güvenilir ve profesyonel ama soğuk değil
2. Hikaye anlatımı odaklı - kullanıcı bir makale okur gibi ilerler
3. Bilgiyi sindirilebilir parçalara bölen tipografik hiyerarşi
4. Empatik ve destekleyici görsel dil

**Color Philosophy:** Açık warm gray (#F8F6F3) zemin, koyu slate (#334155) metin, sıcak terracotta (#C2410C) vurgu ve yumuşak sage green (#65A30D) pozitif geri bildirim için. Terracotta dikkat çeker ama agresif değildir, sage green umut ve büyüme sembolize eder.

**Layout Paradigm:** Editorial grid - geniş marjinler, sol tarafta pull-quote alanları, merkezi içerik sütunu. Giriş sayfası gazete manşeti gibi güçlü tipografi ile açılır. Test bölümü card-stack (üst üste kart) metaforu ile.

**Signature Elements:**
- Büyük, cesur tipografi başlıkları
- Yan tarafta "pull quote" kutucukları (önemli bilgileri vurgulayan)
- İlerleme göstergesi olarak yatay çizgi (editorial progress bar)

**Interaction Philosophy:** Okuma deneyimi gibi akıcı. Kullanıcı bilgilendirilirken rahat hisseder. Her adım bir "sayfa çevirme" hissi verir.

**Animation:** Scroll-driven animations, staggered text reveals (30-50ms per line), card flip for questions. Snappy 180-250ms transitions.

**Typography System:** Display: Fraunces (Black Italic) - sıcak, editorial, dikkat çekici. Body: Inter Tight (Regular/Medium) - modern ve okunabilir. Accent: JetBrains Mono (bilimsel veri/istatistik için).
</text>
<probability>0.08</probability>
</response>

---

## Seçilen Yaklaşım: Fikir 3 - "Zihinsel Pusula" (Warm Editorial Design)

Bu yaklaşımı seçiyorum çünkü:
1. DEHB konusu hassas bir konu - editorial tasarım güvenilirlik ve profesyonellik hissi verir
2. Sıcak tonlar kullanıcıyı yargılanmış hissettirmez
3. Tipografik hiyerarşi, bilgiyi sindirilebilir parçalara böler (DEHB'li kullanıcılar için önemli!)
4. Card-stack metaforu testi daha az bunaltıcı yapar
5. Hikaye anlatımı yaklaşımı kullanıcıyı motive eder
