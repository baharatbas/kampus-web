import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Sınavlar | KampüsCep",
  description:
    "KampüsCep ile KPSS, YKS, LGS ve AGS sınavlarına yönelik konu, tekrar, podcast, zihin haritası ve test çalışmalarını keşfedin.",
};

const exams = [
  {
    id: "kpss",
    title: "KPSS",
    subtitle: "Kamu Personeli Seçme Sınavı",
    description:
      "KPSS hazırlık sürecinde farklı konu alanlarını düzenli şekilde çalış, tekrar et ve soru çözerek bilgilerini pekiştir.",
    color: "bg-amber-50",
    border: "border-amber-200",
    badge: "text-amber-700",
    icon: "🏛️",
    areas: [
      "Genel Yetenek",
      "Genel Kültür",
      "Türkçe",
      "Matematik",
      "Tarih",
      "Coğrafya",
      "Vatandaşlık",
    ],
  },
  {
    id: "yks",
    title: "YKS",
    subtitle: "Yükseköğretim Kurumları Sınavı",
    description:
      "TYT ve AYT çalışmalarını farklı dersler ve öğrenme yöntemleri üzerinden tek bir çalışma deneyiminde takip et.",
    color: "bg-blue-50",
    border: "border-blue-200",
    badge: "text-blue-700",
    icon: "🎓",
    areas: [
      "TYT",
      "AYT",
      "Matematik",
      "Türkçe",
      "Fen Bilimleri",
      "Sosyal Bilimler",
      "Alan Dersleri",
    ],
  },
  {
    id: "lgs",
    title: "LGS",
    subtitle: "Liselere Geçiş Sistemi",
    description:
      "LGS'ye hazırlık sürecinde temel dersleri konu, test ve etkileşimli öğrenme deneyimleriyle çalış.",
    color: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "text-emerald-700",
    icon: "🏫",
    areas: [
      "Türkçe",
      "Matematik",
      "Fen Bilimleri",
      "İnkılap Tarihi",
      "Din Kültürü",
      "İngilizce",
    ],
  },
  {
    id: "ags",
    title: "AGS",
    subtitle: "Akademi Giriş Sınavı",
    description:
      "AGS hazırlığında konu çalışma, tekrar, soru çözümü ve ilerleme takibini tek bir çalışma düzeninde bir araya getir.",
    color: "bg-violet-50",
    border: "border-violet-200",
    badge: "text-violet-700",
    icon: "📖",
    areas: [
      "Sözel Yetenek",
      "Sayısal Yetenek",
      "Tarih",
      "Coğrafya",
      "Eğitim Bilimleri",
      "Alan Bilgisi",
    ],
  },
];

const studyMethods = [
  {
    icon: "📚",
    title: "Konu Çalış",
    description:
      "Sınavına yönelik konuları düzenli bir çalışma akışı içerisinde incele.",
  },
  {
    icon: "🎧",
    title: "Dinleyerek Tekrar Et",
    description:
      "Podcast içerikleriyle konu tekrarlarını farklı bir öğrenme yöntemiyle destekle.",
  },
  {
    icon: "🧠",
    title: "Zihin Haritası Kullan",
    description:
      "Önemli bilgileri ve konu bağlantılarını görsel olarak tekrar et.",
  },
  {
    icon: "📝",
    title: "Test Çöz",
    description:
      "Öğrendiklerini sorularla uygulayarak konu çalışmanı pekiştir.",
  },
];

const lgsSubjects = [
  ["📚", "Türkçe"],
  ["📐", "Matematik"],
  ["🔬", "Fen Bilimleri"],
  ["🌍", "T.C. İnkılap Tarihi"],
  ["☪️", "Din Kültürü"],
  ["🇬🇧", "İngilizce"],
];

const yksGroups = [
  {
    title: "TYT",
    description:
      "Temel Yeterlilik Testi kapsamında farklı derslerde konu ve soru çalışmalarını takip et.",
    subjects: [
      "Türkçe",
      "Matematik",
      "Sosyal Bilimler",
      "Fen Bilimleri",
    ],
  },
  {
    title: "AYT",
    description:
      "Alan Yeterlilik Testi kapsamında seçtiğin alana yönelik ders ve konu çalışmalarını düzenle.",
    subjects: [
      "Matematik",
      "Fizik",
      "Kimya",
      "Biyoloji",
      "Türk Dili ve Edebiyatı",
      "Tarih",
      "Coğrafya",
    ],
  },
];

const kpssAreas = [
  "Türkçe",
  "Matematik",
  "Tarih",
  "Coğrafya",
  "Vatandaşlık",
  "Genel Kültür",
  "Genel Yetenek",
];

const agsAreas = [
  "Sözel Yetenek",
  "Sayısal Yetenek",
  "Tarih",
  "Coğrafya",
  "Eğitim Bilimleri",
];

export default function Page() {
  return (
    <main className="overflow-hidden">
      <PageHeader
        eyebrow="Sınavlar"
        title="Hangi sınava hazırlanıyorsun?"
        description="KampüsCep; KPSS, YKS, LGS ve AGS hazırlık süreçlerini farklı öğrenme yöntemleriyle tek bir çalışma deneyiminde buluşturur."
      />

      {/* Exam cards */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {exams.map((exam) => (
            <article
              key={exam.id}
              className={`rounded-[2rem] border ${exam.border} ${exam.color} p-7 sm:p-8`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{exam.icon}</span>

                    <h2 className="text-3xl font-bold text-slate-950">
                      {exam.title}
                    </h2>
                  </div>

                  <p className={`mt-2 text-sm font-semibold ${exam.badge}`}>
                    {exam.subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-7 text-slate-600">
                {exam.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {exam.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Çalışma sistemi
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Sınavını seç, çalışma şeklini oluştur.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Hangi sınava hazırlanıyor olursan ol, KampüsCep&apos;in temel
              öğrenme akışı aynı mantıkla ilerler.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {studyMethods.map((method, index) => (
              <div
                key={method.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-xl">
                    {method.icon}
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-950">
                  {method.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPSS */}
      <section
        id="kpss"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              KPSS
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              KPSS hazırlığını düzenli bir çalışma akışına dönüştür.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Genel Yetenek ve Genel Kültür çalışmalarında farklı konu
              alanlarını takip et, öğrendiklerini tekrar et ve testlerle
              pekiştir.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {kpssAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  ✓
                </span>

                <span className="font-medium text-slate-800">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YKS */}
      <section
        id="yks"
        className="border-y border-slate-200 bg-slate-50 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              YKS
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              TYT ve AYT çalışmalarını tek yerde takip et.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              YKS hazırlığında temel yeterlilik ve alan çalışmalarını farklı
              dersler üzerinden düzenli şekilde ilerlet.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {yksGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-950">
                    {group.title}
                  </h3>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    YKS
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LGS */}
      <section
        id="lgs"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="grid gap-3 sm:grid-cols-2">
              {lgsSubjects.map(([icon, subject]) => (
                <div
                  key={subject}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="text-xl">{icon}</span>

                  <span className="font-medium text-slate-800">
                    {subject}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              LGS
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              LGS derslerini daha etkileşimli çalış.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              LGS&apos;de yer alan temel dersleri konu çalışması, test ve
              eğitici oyunlarla destekleyen bir öğrenme deneyimi oluştur.
            </p>

            <div className="mt-6 rounded-2xl bg-emerald-50 p-5">
              <p className="text-sm leading-7 text-emerald-900">
                Özellikle LGS tarafında Fen Avı, Kelime Avı, Tarihi Bul ve
                İngilizce Eşleştir gibi etkileşimli deneyimlerle çalışma
                sürecini çeşitlendirebilirsin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AGS */}
      <section
        id="ags"
        className="border-y border-slate-200 bg-slate-50 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
                AGS
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                AGS hazırlığını adım adım takip et.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Konu çalışma, tekrar, zihin haritası ve test aşamalarını
                bir arada kullanarak çalışma sürecini daha takip edilebilir
                hale getir.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {agsAreas.map((area, index) => (
                <div
                  key={area}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="text-xs font-bold text-violet-700">
                    0{index + 1}
                  </div>

                  <div className="mt-3 font-semibold text-slate-900">
                    {area}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progress CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-teal-700 px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-100">
                Çalışma sürecin
              </span>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Konunu seç, çalışmaya başla ve ilerlemeni takip et.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-teal-50">
                Hangi sınava hazırlanıyor olursan ol, KampüsCep&apos;in temel
                öğrenme araçlarını çalışma sürecinin farklı aşamalarında
                kullanabilirsin.
              </p>
            </div>

            <Link
              href="/ozellikler"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
            >
              Özellikleri keşfet
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}