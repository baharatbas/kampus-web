import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KampüsCep | KPSS, YKS, LGS ve AGS Hazırlık",
  description:
    "KampüsCep ile KPSS, YKS, LGS ve AGS hazırlığını konu özetleri, podcast, zihin haritaları, testler ve eğitici oyunlarla daha düzenli hale getir.",
};

const exams = [
  {
    icon: "🎯",
    title: "KPSS",
    description: "Genel Yetenek ve Genel Kültür çalışmalarını düzenle.",
  },
  {
    icon: "🎓",
    title: "YKS",
    description: "TYT ve AYT çalışmalarını tek bir yerde takip et.",
  },
  {
    icon: "📚",
    title: "LGS",
    description: "Derslerini oyunlaştırılmış etkinliklerle destekle.",
  },
  {
    icon: "🏫",
    title: "AGS",
    description: "Sınav konularını sistemli bir çalışma akışıyla ilerlet.",
  },
];

const features = [
  {
    icon: "📖",
    title: "Konu Özetleri",
    description:
      "Konuları düzenli ve anlaşılır içeriklerle çalışarak temel bilgilerini oluştur.",
  },
  {
    icon: "🎧",
    title: "Podcast",
    description:
      "Konu tekrarlarını dinleyerek çalışma rutinine farklı bir yöntem ekle.",
  },
  {
    icon: "🧠",
    title: "Zihin Haritaları",
    description:
      "Konular arasındaki bağlantıları görerek bilgileri daha düzenli tekrar et.",
  },
  {
    icon: "✏️",
    title: "Test ve Soru",
    description:
      "Çalıştığın konuları sorularla pekiştir ve eksiklerini fark et.",
  },
  {
    icon: "🎮",
    title: "Eğitici Oyunlar",
    description:
      "Haritalardan biyolojiye kadar farklı oyunlarla öğrenme deneyimini çeşitlendir.",
  },
  {
    icon: "📈",
    title: "İlerleme Takibi",
    description:
      "Konu içerisindeki çalışma adımlarını tamamlayarak ilerlemeni takip et.",
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Konu Özeti",
    description: "Konuyu öğren ve temel bilgileri oluştur.",
  },
  {
    number: "02",
    title: "Podcast",
    description: "Dinleyerek tekrar yap ve bilgiyi farklı şekilde pekiştir.",
  },
  {
    number: "03",
    title: "Zihin Haritası",
    description: "Bilgiler arasındaki bağlantıları görselleştir.",
  },
  {
    number: "04",
    title: "Test",
    description: "Soruları çöz ve konuyu ne kadar öğrendiğini kontrol et.",
  },
];

const games = [
  ["📍", "Şehri Bul"],
  ["🗺️", "Bölgeler"],
  ["🌾", "Tarım Haritası"],
  ["⛏️", "Maden Avı"],
  ["🧬", "Biyoloji Anatomisi"],
  ["🔬", "Fen Avı"],
  ["🔤", "Kelime Avı"],
  ["🏛️", "Tarihi Bul"],
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_35%),radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl gap-16 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:pb-28 lg:pt-24">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              KPSS · YKS · LGS · AGS
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Sınava hazırlanmanın
              <span className="block text-emerald-600">
                daha akıllı bir yolu.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              KampüsCep; konu özetleri, podcast, zihin haritaları, testler,
              eğitici oyunlar ve ilerleme takibini tek bir çalışma deneyiminde
              bir araya getirir.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/ozellikler"
                className="rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Özellikleri keşfet
              </Link>

              <Link
                href="/sinavlar"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                Sınavları incele
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>✓ Konu çalış</span>
              <span>✓ Dinleyerek tekrar et</span>
              <span>✓ Test çöz</span>
              <span>✓ İlerlemeni takip et</span>
            </div>
          </div>

          {/* =====================================================
              PREMIUM PHONE MOCKUP
          ====================================================== */}

          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Decorative background */}
            <div className="absolute h-[430px] w-[430px] rounded-full bg-emerald-100/60 blur-3xl" />

            <div className="absolute -right-4 top-20 h-24 w-24 rounded-full bg-blue-100/70 blur-2xl" />

            <div className="absolute -left-6 bottom-16 h-28 w-28 rounded-full bg-emerald-100/70 blur-2xl" />

            {/* Phone */}
            <div className="relative z-10 h-[620px] w-[310px] rounded-[48px] border-[9px] border-slate-950 bg-slate-950 p-[5px] shadow-[0_35px_80px_rgba(15,23,42,0.25)]">
              {/* Side buttons */}
              <div className="absolute -left-[12px] top-28 h-12 w-[4px] rounded-l-full bg-slate-800" />
              <div className="absolute -left-[12px] top-44 h-20 w-[4px] rounded-l-full bg-slate-800" />
              <div className="absolute -right-[12px] top-36 h-20 w-[4px] rounded-r-full bg-slate-800" />

              {/* Screen */}
              <div className="relative h-full overflow-hidden rounded-[40px] bg-[#f7f8fa]">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-2 z-50 h-[28px] w-[104px] -translate-x-1/2 rounded-full bg-slate-950" />

                {/* Status bar */}
                <div className="flex h-12 items-end justify-between px-6 pb-2 text-[10px] font-semibold text-slate-500">
                  <span>09:41</span>

                  <div className="flex items-center gap-1.5">
                    <span>●●●</span>
                    <span>WiFi</span>
                    <span>▮</span>
                  </div>
                </div>

                {/* App header */}
                <div className="bg-slate-950 px-5 pb-6 pt-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400">
                        GÜNAYDIN 👋
                      </p>

                      <h2 className="mt-1 text-[22px] font-extrabold tracking-tight">
                        KampüsCep
                      </h2>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm">
                      🔔
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between rounded-2xl bg-white/10 p-3">
                    <div>
                      <p className="text-[9px] text-slate-400">
                        SEÇİLİ SINAV
                      </p>

                      <p className="mt-1 text-sm font-bold">KPSS</p>
                    </div>

                    <span className="rounded-lg bg-emerald-500 px-2.5 py-1 text-[9px] font-bold">
                      DEVAM EDİYOR
                    </span>
                  </div>
                </div>

                {/* App content */}
                <div className="space-y-4 px-4 py-4">
                  {/* Progress card */}
                  <div className="rounded-[22px] border border-slate-100 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-semibold text-slate-400">
                          BUGÜNKÜ İLERLEMEN
                        </p>

                        <p className="mt-1 text-[17px] font-extrabold text-slate-900">
                          %75 tamamlandı
                        </p>
                      </div>

                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                        <div className="absolute inset-1 rounded-full border-[4px] border-emerald-500" />

                        <span className="relative text-[10px] font-bold text-emerald-600">
                          3/4
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-3/4 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  {/* Today's topic */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-[11px] font-bold text-slate-800">
                        Bugünkü Konu
                      </p>

                      <span className="text-[9px] font-semibold text-emerald-600">
                        Tümünü gör
                      </span>
                    </div>

                    <div className="rounded-[22px] bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
                      <div className="flex gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-2xl">
                          ⚖️
                        </div>

                        <div className="min-w-0">
                          <p className="text-[9px] font-semibold text-slate-400">
                            KPSS · VATANDAŞLIK
                          </p>

                          <p className="mt-1 truncate text-sm font-bold text-slate-900">
                            Temel Hukuk Bilgileri
                          </p>

                          <div className="mt-2 flex items-center gap-2">
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                              <div className="h-full w-3/5 rounded-full bg-amber-400" />
                            </div>

                            <span className="text-[9px] font-semibold text-slate-400">
                              60%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Learning steps */}
                  <div>
                    <p className="mb-2 text-[11px] font-bold text-slate-800">
                      Çalışma Adımları
                    </p>

                    <div className="space-y-2">
                      {[
                        ["📖", "Konu Özeti", true],
                        ["🎧", "Podcast", true],
                        ["🧠", "Zihin Haritası", true],
                        ["✏️", "Test Soruları", false],
                      ].map(([icon, title, completed]) => (
                        <div
                          key={String(title)}
                          className="flex items-center gap-3 rounded-[17px] border border-slate-100 bg-white px-3 py-2.5 shadow-[0_5px_20px_rgba(15,23,42,0.03)]"
                        >
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm ${
                              completed
                                ? "bg-emerald-50"
                                : "bg-slate-50"
                            }`}
                          >
                            {icon}
                          </div>

                          <span className="flex-1 text-[10px] font-semibold text-slate-700">
                            {String(title)}
                          </span>

                          {completed ? (
                            <span className="text-[11px] font-bold text-emerald-500">
                              ✓
                            </span>
                          ) : (
                            <span className="rounded-lg bg-slate-950 px-2 py-1 text-[8px] font-bold text-white">
                              BAŞLA
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom card */}
                  <div className="rounded-[20px] bg-emerald-600 p-4 text-white shadow-lg shadow-emerald-600/20">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                        🔥
                      </div>

                      <div>
                        <p className="text-[8px] font-medium text-emerald-100">
                          ÇALIŞMA SERİSİ
                        </p>

                        <p className="mt-0.5 text-sm font-extrabold">
                          7 gün üst üste!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom navigation */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 bg-white/95 px-3 pb-4 pt-3 backdrop-blur">
                  <div className="grid grid-cols-4 text-center">
                    <div>
                      <div className="text-sm">⌂</div>
                      <p className="mt-1 text-[8px] font-bold text-emerald-600">
                        Ana Sayfa
                      </p>
                    </div>

                    <div>
                      <div className="text-sm">📚</div>
                      <p className="mt-1 text-[8px] text-slate-400">
                        Konular
                      </p>
                    </div>

                    <div>
                      <div className="text-sm">🎮</div>
                      <p className="mt-1 text-[8px] text-slate-400">
                        Oyunlar
                      </p>
                    </div>

                    <div>
                      <div className="text-sm">👤</div>
                      <p className="mt-1 text-[8px] text-slate-400">
                        Profil
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXAMS
      ========================================================== */}

      <section className="border-y border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              Sınavını seç
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Hedefin ne olursa olsun, çalışma alanın hazır.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Farklı sınavlara yönelik konu, ders ve çalışma içeriklerini tek
              bir deneyim içerisinde keşfet.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {exams.map((exam) => (
              <Link
                key={exam.title}
                href="/sinavlar"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-2xl transition group-hover:bg-emerald-50">
                  {exam.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {exam.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {exam.description}
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold text-emerald-600">
                  İncele →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          LEARNING SYSTEM
      ========================================================== */}

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              KampüsCep sistemi
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Bir konuyu sadece okumakla bırakma.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              KampüsCep&apos;te her konu farklı çalışma adımlarıyla desteklenebilir.
              Böylece öğrenme, tekrar ve soru çözme sürecini tek bir akışta
              takip edebilirsin.
            </p>

            <Link
              href="/ozellikler"
              className="mt-7 inline-flex rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white"
            >
              Sistemi incele
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {learningSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-black text-emerald-600">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================== */}

      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              Özellikler
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Çalışma yöntemlerini çeşitlendir.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Tek bir çalışma yöntemine bağlı kalmadan farklı öğrenme
              araçlarını aynı platformda kullan.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          GAMES
      ========================================================== */}

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              Oyunlaştırılmış öğrenme
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Öğrenmeyi biraz daha eğlenceli hale getir.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Haritalar, biyoloji anatomisi ve farklı mini oyunlarla çalışma
              deneyimini çeşitlendir. Amaç sadece soru çözmek değil,
              öğrendiklerini farklı yollarla tekrar edebilmek.
            </p>

            <Link
              href="/ozellikler"
              className="mt-7 inline-flex rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Tüm özellikleri gör
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {games.map(([icon, title]) => (
              <div
                key={title}
                className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
              >
                <span className="text-3xl">{icon}</span>

                <span className="mt-3 text-sm font-semibold text-slate-700">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRESS
      ========================================================== */}

      <section className="bg-emerald-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-emerald-700">
                İlerlemeni gör
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Çalıştığın konu yarım kalmasın.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bir konunun çalışma adımlarını tamamladıkça ilerlemeni takip
                edebilirsin. 4 adımın tamamı bittiğinde konu tamamlanmış olarak
                görüntülenebilir.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">
                    KONU İLERLEMESİ
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    Türkiye&apos;nin Coğrafi Bölgeleri
                  </h3>
                </div>

                <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-600">
                  4/4
                </span>
              </div>

              <div className="mt-7 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-full rounded-full bg-emerald-500" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "✓ Konu Özeti",
                  "✓ Podcast",
                  "✓ Zihin Haritası",
                  "✓ Test Soruları",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-emerald-50 px-3 py-3 text-sm font-semibold text-emerald-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-14 text-center text-white sm:px-12">
          <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">
            KampüsCep
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Çalışma deneyimini daha düzenli hale getirmeye hazır mısın?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            KampüsCep&apos;in özelliklerini keşfet ve sınavına uygun çalışma
            alanlarını incele.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/ozellikler"
              className="rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Özellikleri keşfet
            </Link>

            <Link
              href="/destek"
              className="rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Destek merkezi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}