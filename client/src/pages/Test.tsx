/**
 * DEHB Farkındalık Aracı - Test Sayfası
 * Design: Warm Editorial - Card-stack metaforu, tek tek soru gösterimi
 * Kullanıcı her soruyu tek tek cevaplar, ilerleme çubuğu ile takip eder
 */
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLocation } from "wouter";
import { questions, answerOptions, calculateResults } from "@/lib/questions";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Test() {
  const [, setLocation] = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [direction, setDirection] = useState(1);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;
  const isAnswered = answers[currentQuestion.id] !== undefined;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleAnswer = useCallback((value: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  }, [currentQuestion.id]);

  const handleNext = useCallback(() => {
    if (isLastQuestion && isAnswered) {
      // Calculate and store results in sessionStorage
      const results = calculateResults({ ...answers });
      sessionStorage.setItem("dehb-results", JSON.stringify(results));
      setLocation("/results");
    } else if (isAnswered) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isLastQuestion, isAnswered, answers, setLocation]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleReset = useCallback(() => {
    setAnswers({});
    setCurrentIndex(0);
    setDirection(-1);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Ana Sayfa</span>
          </button>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground font-[var(--font-mono)]">
              {currentIndex + 1} / {questions.length}
            </span>
            <button
              onClick={handleReset}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              title="Baştan Başla"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full">
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-8 md:py-12">
        <div className="container max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentQuestion.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Domain Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">{currentQuestion.icon}</span>
                <span className="text-xs font-medium tracking-widest uppercase text-primary/70 font-[var(--font-body)]">
                  {currentQuestion.domainLabel}
                </span>
              </div>

              {/* Question Card */}
              <Card className="p-8 md:p-10 border-border/50 shadow-sm mb-6">
                <h2 className="text-xl md:text-2xl font-bold leading-relaxed mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  {currentQuestion.text}
                </h2>
                <div className="bg-muted/50 rounded-xl p-4 border border-border/30">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {currentQuestion.example}
                  </p>
                </div>
              </Card>

              {/* Answer Options */}
              <div className="space-y-3">
                {answerOptions.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-200 active:scale-[0.98] ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border/50 bg-card hover:border-primary/30 hover:bg-primary/[0.02]"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            isSelected ? "border-primary bg-primary" : "border-muted-foreground/30"
                          }`}
                        >
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-white"
                            />
                          )}
                        </div>
                        <span className={`font-medium text-[15px] ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                          {option.text}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/30">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Önceki
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isAnswered}
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all duration-200 active:scale-[0.97]"
            >
              {isLastQuestion ? "Sonuçları Gör" : "Sonraki"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
