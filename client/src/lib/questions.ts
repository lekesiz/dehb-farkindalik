export interface Question {
  id: string;
  domain: "inattention" | "hyperactivity_impulsivity" | "executive_dysfunction" | "hyperfocus";
  domainLabel: string;
  icon: string;
  text: string;
  example: string;
}

export interface AnswerOption {
  text: string;
  value: number;
}

export const answerOptions: AnswerOption[] = [
  { text: "Hiçbir Zaman", value: 0 },
  { text: "Nadiren", value: 1 },
  { text: "Bazen", value: 2 },
  { text: "Sık Sık", value: 3 },
  { text: "Çok Sık", value: 4 },
];

export const questions: Question[] = [
  {
    id: "q1",
    domain: "inattention",
    domainLabel: "Dikkat Eksikliği",
    icon: "⏱️",
    text: "Senin için sıkıcı veya rutin olan bir işe (ödev, ev işi, fatura ödeme) başlamakta çok zorlanıp sürekli erteler misin?",
    example: "Örnek: Masaya oturup her şeyi hazırlamana rağmen, bir türlü o ilk adımı atamayıp telefonla oynamaya başlamak.",
  },
  {
    id: "q2",
    domain: "inattention",
    domainLabel: "Dikkat Eksikliği",
    icon: "🔍",
    text: "Biriyle yüz yüze konuşurken veya bir şey okurken, karşı tarafı dinlemek istesen bile zihnin sık sık başka yerlere kayar mı?",
    example: "Örnek: Karşındaki kişi hararetle bir şey anlatırken senin aniden 'acaba ocakta yemeği unuttum mu?' diye düşünmeye başlaman.",
  },
  {
    id: "q3",
    domain: "inattention",
    domainLabel: "Dikkat Eksikliği",
    icon: "🔑",
    text: "Anahtar, telefon, cüzdan veya gözlük gibi günlük eşyaları sıklıkla kaybeder veya evin içinde nereye koyduğunu unutur musun?",
    example: "Örnek: Evden çıkarken anahtarını aramak için 10 dakika harcamak ve onu buzdolabının üstünde bulmak.",
  },
  {
    id: "q4",
    domain: "inattention",
    domainLabel: "Dikkat Eksikliği",
    icon: "🤹",
    text: "Dikkat gerektiren işlerde (form doldurma, basit hesaplamalar, mesaj yazma) sık sık küçük ve gözden kaçan hatalar yapar mısın?",
    example: "Örnek: Uzun bir e-postayı yazıp gönderdikten sonra ekin eksik olduğunu fark etmek.",
  },
  {
    id: "q5",
    domain: "hyperactivity_impulsivity",
    domainLabel: "Hiperaktivite / Dürtüsellik",
    icon: "💭",
    text: "Dışarıdan sakin ve sessiz görünsen bile, içinde hiç durmayan, sürekli konuşan veya düşünen bir zihin hisseder misin?",
    example: "Örnek: Gece yatağa yattığında zihninde 5 farklı konunun aynı anda sekme açmış gibi çalışması.",
  },
  {
    id: "q6",
    domain: "hyperactivity_impulsivity",
    domainLabel: "Hiperaktivite / Dürtüsellik",
    icon: "🧩",
    text: "Bir işe, kitaba veya hobiye büyük bir hevesle başlayıp, kısa süre sonra sıkılıp yarım bıraktığın çok olur mu?",
    example: "Örnek: Gitar çalmaya heveslenip pahalı bir gitar almak, ama 2 hafta sonra onu odanın bir köşesinde tozlanmaya bırakmak.",
  },
  {
    id: "q7",
    domain: "executive_dysfunction",
    domainLabel: "Yürütücü İşlev",
    icon: "⏳",
    text: "Zamanın nasıl geçtiğini fark etmekte zorlanıp randevulara sık sık geç kalır mısın veya işleri yetiştirmekte zorlanır mısın?",
    example: "Örnek: 'Sadece 5 dakika bakacağım' deyip sosyal medyada 2 saat geçirmek (Zaman Körlüğü).",
  },
  {
    id: "q8",
    domain: "executive_dysfunction",
    domainLabel: "Yürütücü İşlev",
    icon: "🌪️",
    text: "Odanda, masanda veya çantanda düzeni korumakta zorlanır mısın? Çevren çabucak dağılır mı?",
    example: "Örnek: Hafta sonu odanı pırıl pırıl temizleyip, pazartesi akşamı tekrar savaş alanına dönmüş bulmak.",
  },
  {
    id: "q9",
    domain: "executive_dysfunction",
    domainLabel: "Yürütücü İşlev",
    icon: "🌊",
    text: "Yapman gereken birden fazla küçük iş veya sorumluluk üst üste geldiğinde ne yapacağını bilemeyip kilitlenip kalır misin?",
    example: "Örnek: Bulaşık yıkanacak, çamaşır asılacak ve e-posta atılacak diye düşünüp, hiçbirini yapamayıp koltukta donup kalmak (Zihinsel Felç).",
  },
  {
    id: "q10",
    domain: "hyperfocus",
    domainLabel: "Hiperfokus",
    icon: "🚀",
    text: "Çok sevdiğin veya ilgini çeken bir işle uğraşırken çevreyle bağını tamamen koparıp saatlerce yemek yemeyi veya uyumayı unutur musun?",
    example: "Örnek: Yeni keşfettiğin bir bilgisayar oyunu veya ilginç bir belgesel serisi yüzünden sabahladığını fark etmemek (Hiperfokus).",
  },
];

export interface DomainResult {
  domain: string;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface TestResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  level: "low" | "medium" | "high";
  domains: DomainResult[];
}

export function calculateResults(answers: Record<string, number>): TestResult {
  const maxScore = questions.length * 4;
  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Calculate domain scores
  const domainScores: Record<string, { score: number; count: number; label: string }> = {};
  
  questions.forEach((q) => {
    if (!domainScores[q.domain]) {
      domainScores[q.domain] = { score: 0, count: 0, label: q.domainLabel };
    }
    domainScores[q.domain].score += answers[q.id] || 0;
    domainScores[q.domain].count += 1;
  });

  const domains: DomainResult[] = Object.entries(domainScores).map(([domain, data]) => ({
    domain,
    label: data.label,
    score: data.score,
    maxScore: data.count * 4,
    percentage: Math.round((data.score / (data.count * 4)) * 100),
  }));

  let level: "low" | "medium" | "high";
  if (totalScore <= 15) {
    level = "low";
  } else if (totalScore <= 26) {
    level = "medium";
  } else {
    level = "high";
  }

  return { totalScore, maxScore, percentage, level, domains };
}

export const resultContent = {
  low: {
    title: "Düşük Seviye",
    subtitle: "Zihinsel işleyişin genel olarak tipik aralıkta",
    description: "Cevaplarına göre, günlük hayatında karşılaştığın zorluklar DEHB'den ziyade stres, yorgunluk veya geçici durumlardan kaynaklanıyor olabilir. Zihinsel odaklanma ve organizasyon becerilerin genel olarak iyi çalışıyor görünüyor.",
    advice: "Yine de zaman zaman odaklanma sorunu yaşıyorsan, bu tamamen normal. Uyku düzenine dikkat etmek, düzenli egzersiz yapmak ve mola vererek çalışmak sana yardımcı olacaktır. Stresli dönemlerde bu belirtiler artabilir — bu geçici bir durumdur.",
    color: "sage",
    image: "https://github.com/lekesiz/dehb-farkindalik/releases/download/assets-v1/result-low.webp",
  },
  medium: {
    title: "Orta Düzey Belirtiler",
    subtitle: "Zihnin biraz farklı çalışıyor olabilir",
    description: "Bazı durumlarda odaklanmakta, organize olmakta veya işlere başlamakta zorlandığını görüyoruz. Bu durumlar hayatını tamamen kilitlemese de, potansiyelini tam olarak kullanmanı engelliyor olabilir. Önemli olan şu: Bu senin 'tembelliğin' veya 'iradesizliğin' değil.",
    advice: "Kendini 'tembel' olarak etiketlemeyi bırakmanın zamanı geldi. Zihnin bazı görevlerde daha fazla uyarıcıya ihtiyaç duyuyor — bu yapısal bir durum. Pomodoro tekniği (25 dk çalışma, 5 dk mola), işleri küçük parçalara bölmek ve 'body doubling' (biriyle aynı ortamda çalışma) sana çok yardımcı olabilir. Bir psikolog veya psikiyatristle görüşmek, durumunu daha net anlamana yardımcı olacaktır.",
    color: "amber",
    image: "https://github.com/lekesiz/dehb-farkindalik/releases/download/assets-v1/result-medium.webp",
  },
  high: {
    title: "Yüksek DEHB Belirtileri",
    subtitle: "Bu irade değil, yapısal bir farklılık",
    description: "Cevapların, DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu) ile oldukça uyumlu bir zihinsel profile sahip olduğunu gösteriyor. Yaşadığın erteleme sorunları, dağınıklık, odaklanma güçlüğü veya zihinsel felç KESİNLİKLE senin suçun veya iradesizliğin değil. Bu durum beyninin dopamin ve ödül sisteminin yapısal olarak farklı çalışmasından kaynaklanıyor.",
    advice: "Kendine yapabileceğin en büyük iyilik, zihnine karşı savaşmayı bırakıp onun nasıl çalıştığını anlamaktır. Profesyonel bir psikiyatristten destek almak, hayat kaliteni inanılmaz derecede artırabilir. DEHB tedavi edilebilir bir durumdur — ilaç tedavisi, terapi veya her ikisinin kombinasyonu çok etkili olabilir. Ayrıca zamanlayıcı kullanma, görevleri mikro-adımlara bölme ve 'body doubling' gibi stratejiler günlük hayatını kolaylaştıracaktır.",
    color: "terracotta",
    image: "https://github.com/lekesiz/dehb-farkindalik/releases/download/assets-v1/result-high.webp",
  },
};

export const copingStrategies = [
  {
    title: "Pomodoro Tekniği",
    description: "25 dakika odaklanma + 5 dakika mola. Beyniniz için ideal çalışma ritmi.",
    forDomains: ["inattention", "executive_dysfunction"],
  },
  {
    title: "Body Doubling",
    description: "Biriyle aynı ortamda (fiziksel veya sanal) çalışmak. Hesap verebilirlik hissi yaratır.",
    forDomains: ["inattention", "executive_dysfunction"],
  },
  {
    title: "Zamanlayıcı ve Alarm",
    description: "Zaman körlüğüne karşı en etkili silah. Her geçiş için alarm kur.",
    forDomains: ["executive_dysfunction"],
  },
  {
    title: "Mikro-Adımlar",
    description: "Büyük görevleri 2 dakikalık parçalara böl. 'Sadece dosyayı aç' ile başla.",
    forDomains: ["inattention", "executive_dysfunction"],
  },
  {
    title: "Eşyalara Sabit Yer",
    description: "Anahtar, cüzdan, telefon için kapının yanında tek bir yer belirle.",
    forDomains: ["inattention"],
  },
  {
    title: "Zihinsel Boşaltma",
    description: "Aklındaki her şeyi kağıda dök. Zihnini 'RAM' gibi boşalt.",
    forDomains: ["hyperactivity_impulsivity", "executive_dysfunction"],
  },
  {
    title: "Hiperfokus Yönetimi",
    description: "İlgi çekici işlere başlamadan önce alarm kur. Kendine zaman limiti koy.",
    forDomains: ["hyperfocus"],
  },
  {
    title: "Düzenli Egzersiz",
    description: "Fiziksel aktivite dopamin seviyelerini doğal yoldan düzenler.",
    forDomains: ["hyperactivity_impulsivity", "inattention"],
  },
];
