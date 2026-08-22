/**
 * DEHB Farkındalık Aracı - Giriş Sayfası
 * Design: Warm Editorial - Fraunces display + Inter Tight body
 * Colors: Terracotta primary, sage green accent, warm cream background
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Brain, Shield, Heart, ArrowRight, Lock, ExternalLink, Compass } from "lucide-react";
import { motion } from "framer-motion";

const heroImage = "https://github.com/lekesiz/dehb-farkindalik/releases/download/assets-v1/hero-brain.webp";
const introImage = "https://github.com/lekesiz/dehb-farkindalik/releases/download/assets-v1/intro-illustration.webp";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative container py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="text-sm font-medium tracking-widest uppercase text-primary/80 mb-4 font-[var(--font-body)]">
                Bilimsel Temelli Farkındalık Aracı
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Kendi Zihnini{" "}
                <span className="italic text-primary">Keşfet</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8 font-[var(--font-body)]">
                Neden bazı işler diğerlerine göre çok daha zor geliyor? Bu bir irade meselesi mi, yoksa zihninin yapısal bir farklılığı mı?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-base px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 transition-all duration-200 active:scale-[0.97]"
                  onClick={() => setLocation("/test")}
                >
                  Teste Başla
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 font-medium"
                  onClick={() => document.getElementById("why-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Neden Bu Testi Yapmalıyım?
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                <span>Tamamen anonim. Hiçbir veri kaydedilmez.</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="hidden lg:block"
            >
              <img
                src={introImage}
                alt="Düşünceli bir kişi"
                className="w-full rounded-2xl shadow-2xl shadow-black/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why-section" className="py-20 md:py-28 bg-secondary/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Neden Bu Testi <span className="italic text-primary">Yapmalısın?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kendini "tembel", "iradesiz" veya "disiplinsiz" olarak etiketliyorsan, belki de sorun sende değil — zihninin çalışma biçiminde.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "İrade Değil, Nörobiyoloji",
                description: "Sürekli ertelemek veya odaklanamamak tembellik değildir. DEHB, beynin dopamin ve ödül sistemlerinin farklı çalışmasından kaynaklanan yapısal bir durumdur. Prefrontal korteksin — planlama ve odaklanmadan sorumlu beyin bölgesi — farklı bir hızda çalışıyor olabilir.",
                delay: 0,
              },
              {
                icon: Heart,
                title: "Kendini Suçlamayı Bırak",
                description: "Yıllardır kendini 'yeterince çalışmıyorum' diye suçluyorsan, bu testle yaşadığın zorlukların aslında senin hatan olmadığını anlayabilirsin. Beynin farklı çalışıyor — bu bir kusur değil, bir farklılık.",
                delay: 0.1,
              },
              {
                icon: Shield,
                title: "Sana Özel Stratejiler",
                description: "Zihninin nasıl çalıştığını anladığında, ona karşı savaşmak yerine onunla birlikte çalışacak stratejiler geliştirebilirsin. Doğru araçlarla, DEHB'li bireyler inanılmaz başarılar elde edebilir.",
                delay: 0.2,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <Card className="p-8 h-full border-border/50 bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Bunlar Sana <span className="italic text-primary">Tanıdık</span> Geliyor mu?
              </h2>
              <div className="space-y-6">
                {[
                  "Saatlerce bilgisayar başında oturup, sadece 15 dakikalık bir e-postayı yazamamak... Ama ilgini çeken bir konuda saatlerce hiç kalkmadan araştırma yapabilmek.",
                  "Anahtarlarını nereye koyduğunu sürekli unutmak, ama 10 yıl önceki bir konuşmanın detaylarını hatırlayabilmek.",
                  "Toplantıda birini dinlerken zihninin tamamen başka bir yere gitmesi — ama bunu isteyerek yapmaman.",
                  "Yapılacaklar listesine bakmak ve 'nereden başlayacağımı bilmiyorum' duygusuyla felç olmak.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-accent-foreground">{i + 1}</span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-[15px]">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-muted/50 rounded-2xl p-8 md:p-10 border border-border/50"
            >
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                DEHB Hakkında Bilmen Gerekenler
              </h3>
              <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">DEHB nörogelişimsel bir durumdur.</strong> Beynin prefrontal korteksi — planlama, organizasyon ve dürtü kontrolünden sorumlu bölge — farklı bir hızda olgunlaşır ve farklı çalışır.
                </p>
                <p>
                  <strong className="text-foreground">Dopamin düzenleme farklılığı</strong> motivasyon ve ödül sistemini etkiler. Bu yüzden "sıkıcı" işlere başlamak neredeyse fiziksel olarak zor hissedilir, ama ilgi çekici konularda saatlerce odaklanabilirsin.
                </p>
                <p>
                  <strong className="text-foreground">Yetişkinlerin yaklaşık %4-5'i</strong> DEHB belirtileri gösterir. Çoğu kişi bunu bilmeden yaşar ve kendini "yetersiz" hisseder.
                </p>
                <p>
                  <strong className="text-foreground">Tedavi edilebilir.</strong> Doğru strateji, terapi ve gerektiğinde ilaç tedavisi ile DEHB'li bireyler potansiyellerini tam olarak kullanabilir.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reflektif Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 md:p-10 border-primary/15 bg-gradient-to-br from-primary/[0.03] to-accent/[0.05] overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Compass className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    Kendini Daha Derinden Tanımak İster misin?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
                    <strong className="text-foreground">Reflektif</strong>, kişisel farkındalık ve gelişim yolculuğunda sana eşlik eden bir platformdur. 
                    DEHB belirtilerinin ötesinde, güçlü yanlarını keşfetmeni, kendinle barışmanı ve potansiyelini 
                    tam olarak kullanmanı destekleyen profesyonel araçlar sunar.
                  </p>
                  <a
                    href="https://reflektif.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline underline-offset-4 transition-colors"
                  >
                    reflektif.net'i Keşfet
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary/5">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Hazır mısın?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              10 soru, yaklaşık 3-5 dakika. Sonuçların anında ekranında görünecek. Hiçbir veri kaydedilmez veya paylaşılmaz.
            </p>
            <Button
              size="lg"
              className="text-base px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 transition-all duration-200 active:scale-[0.97]"
              onClick={() => setLocation("/test")}
            >
              Teste Başla
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-xs text-muted-foreground mt-6 max-w-md mx-auto">
              Bu test, DSM-5 kriterleri ve ASRS (Erişkin DEHB Kendi Bildirim Ölçeği) temel alınarak hazırlanmıştır. Tıbbi bir teşhis aracı değildir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>DEHB Farkındalık Aracı — Bilimsel temelli, anonim tarama</p>
            <div className="flex items-center gap-4">
              <a
                href="https://reflektif.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                reflektif.net
              </a>
              <span className="text-border">|</span>
              <p>Bu araç tıbbi teşhis yerine geçmez.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
