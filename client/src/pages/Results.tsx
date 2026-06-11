/**
 * DEHB Farkındalık Aracı - Sonuçlar Sayfası
 * Design: Warm Editorial - Detaylı sonuç analizi, domain bazlı gösterim
 * Kullanıcıya empati ile sonuçlarını gösterir ve stratejiler sunar
 */
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLocation } from "wouter";
import { TestResult, resultContent, copingStrategies } from "@/lib/questions";
import { ArrowLeft, RotateCcw, Heart, Lightbulb, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Results() {
  const [, setLocation] = useLocation();
  const [results, setResults] = useState<TestResult | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("dehb-results");
    if (stored) {
      setResults(JSON.parse(stored));
    } else {
      setLocation("/");
    }
  }, [setLocation]);

  if (!results) return null;

  const content = resultContent[results.level];
  const relevantStrategies = copingStrategies.filter((s) =>
    results.domains.some(
      (d) => d.percentage >= 50 && s.forDomains.includes(d.domain)
    )
  );

  // If no high domains, show general strategies
  const strategiesToShow = relevantStrategies.length > 0 
    ? relevantStrategies 
    : copingStrategies.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Ana Sayfa</span>
          </button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              sessionStorage.removeItem("dehb-results");
              setLocation("/test");
            }}
            className="gap-2"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Testi Tekrarla
          </Button>
        </div>
      </header>

      <main className="container py-12 md:py-16 max-w-4xl">
        {/* Result Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-primary/70 mb-3 font-[var(--font-body)]">
                Sonuçların
              </p>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                {content.title}
              </h1>
              <p className="text-xl text-muted-foreground italic mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                {content.subtitle}
              </p>
              <p className="text-foreground/80 leading-relaxed text-[15px] mb-6">
                {content.description}
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                src={content.image}
                alt="Sonuç görseli"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Overall Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-8 border-border/50 shadow-sm mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                Genel Skor
              </h3>
              <span className="text-2xl font-bold font-[var(--font-mono)] text-primary">
                {results.totalScore}/{results.maxScore}
              </span>
            </div>
            <Progress value={results.percentage} className="h-3 mb-3" />
            <div className="flex justify-between text-xs text-muted-foreground font-[var(--font-mono)]">
              <span>0 (Düşük)</span>
              <span>20 (Orta)</span>
              <span>40 (Yüksek)</span>
            </div>
          </Card>
        </motion.div>

        {/* Domain Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Alan Bazlı Analiz
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {results.domains.map((domain, i) => (
              <motion.div
                key={domain.domain}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
              >
                <Card className="p-6 border-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-sm">{domain.label}</h4>
                    <span className="text-sm font-[var(--font-mono)] text-muted-foreground">
                      {domain.score}/{domain.maxScore}
                    </span>
                  </div>
                  <Progress value={domain.percentage} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground">
                    {domain.percentage >= 70
                      ? "Bu alanda belirgin zorluklar yaşıyor olabilirsin"
                      : domain.percentage >= 40
                      ? "Bu alanda bazı zorluklar mevcut"
                      : "Bu alanda belirgin bir zorluk görünmüyor"}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="p-8 md:p-10 border-primary/20 bg-primary/[0.03]">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Unutma: Bu Senin Suçun Değil
                </h3>
                <p className="text-foreground/80 leading-relaxed text-[15px]">
                  {content.advice}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Coping Strategies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Sana Özel Stratejiler
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {strategiesToShow.map((strategy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.06 }}
              >
                <Card className="p-5 border-border/50 h-full">
                  <h4 className="font-semibold text-sm mb-2">{strategy.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {strategy.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What to Do Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Şimdi Ne Yapmalısın?
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Kendini Suçlamayı Bırak",
                description: "Yaşadığın zorluklar bir karakter kusuru değil. Beynin farklı çalışıyor — bu kadar basit. Kendine karşı nazik ol.",
              },
              {
                step: "2",
                title: "Profesyonel Destek Al",
                description: results.level === "high"
                  ? "Bir psikiyatrist veya DEHB konusunda uzman bir psikologla görüşmeni şiddetle öneriyoruz. Doğru teşhis, doğru tedavinin kapısını açar."
                  : "Belirtilerin hayatını olumsuz etkiliyorsa, bir psikolog veya psikiyatristle görüşmek faydalı olabilir.",
              },
              {
                step: "3",
                title: "Stratejileri Dene",
                description: "Yukarıdaki stratejilerden birini bu hafta dene. Küçük adımlarla başla — mükemmel olmak zorunda değilsin.",
              },
              {
                step: "4",
                title: "Bilgilen",
                description: "DEHB hakkında daha fazla oku. Kendini tanıdıkça, zihnine karşı savaşmak yerine onunla birlikte çalışmayı öğreneceksin.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-bold text-primary font-[var(--font-mono)]">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[15px] mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="p-6 border-border/50 bg-muted/30">
            <div className="flex gap-3 items-start">
              <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground/70 mb-1">Önemli Not</p>
                <p>
                  Bu test, bilimsel ASRS (Erişkin DEHB Kendi Bildirim Ölçeği) ve DSM-5 kriterleri temel alınarak hazırlanmış bir farkındalık aracıdır. 
                  Tıbbi bir teşhis aracı değildir ve profesyonel değerlendirmenin yerini almaz. 
                  Kesin teşhis için mutlaka bir psikiyatrist veya klinik psikologla görüşmenizi öneriyoruz.
                  Hiçbir veriniz kaydedilmemiştir — bu sayfa kapatıldığında tüm sonuçlar silinecektir.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
          <Button
            variant="outline"
            onClick={() => {
              sessionStorage.removeItem("dehb-results");
              setLocation("/test");
            }}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Testi Tekrarla
          </Button>
          <Button
            onClick={() => setLocation("/")}
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Ana Sayfaya Dön
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>DEHB Farkındalık Aracı — Bilimsel temelli, anonim tarama</p>
            <p>Bu araç tıbbi teşhis yerine geçmez. Profesyonel destek için bir uzmana başvurun.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
