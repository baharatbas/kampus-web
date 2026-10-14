import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Özellikler | KampüsCep",
  description:
    "KampüsCep'in konu özetleri, podcast, zihin haritaları, testler, eğitici oyunlar ve ilerleme takibi gibi özelliklerini keşfedin.",
};

const mainFeatures = [
  {
    icon: "📚",
    title: "Konu Özetleri",
    description:
      "Sınavlara göre düzenlenen konu içerikleriyle çalışmak istediğin konuya daha kolay ulaş.",
    detail:
      "Konu çalışırken temel bilgileri tek bir yerde görerek çalışma sürecini daha düzenli hale getir.",
  },
  {
    icon: "🎧",
    title: "Podcast",
    description:
      "Konuları dinleyerek tekrar et ve çalışma rutinine farklı bir öğrenme yöntemi ekle.",
    detail:
      "Çalışma masasında olmadığın zamanlarda bile konu tekrarlarını sürdürebilmen için sesli içerik deneyimi.",
  },
  {
    icon: "🧠",
    title: "Zihin Haritaları",
    description:
      "Konular arasındaki bağlantıları görsel olarak keşfet ve önemli bilgileri daha düzenli şekilde tekrar et.",
    detail:
      "Özellikle kavramlar ve bilgiler arasındaki ilişkileri görmek istediğin konularda görsel öğrenme deneyimi sunar.",
  },
  {
    icon: "📝",
    title: "Test ve Soru Çözümü",
    description:
      "Çalıştığın konuyu sorularla pekiştir ve öğrendiklerini uygulayarak kendini kontrol et.",
    detail:
      "Konu çalışmasının ardından test aşamasına geçerek öğrenme sürecini tamamlamaya yardımcı olur.",
  },
  {
    icon: "🎮",
    title: "Eğitici Oyunlar",
    description:
      "Farklı ders ve konulara yönelik oyunlarla öğrenme deneyimini daha etkileşimli hale getir.",
    detail:
      "Harita, biyoloji, kelime ve eşleştirme gibi farklı oyun mekanikleriyle tekrar yap.",
  },
  {
    icon: "📈",
    title: "İlerleme Takibi",
    description:
      "Tamamladığın öğrenme adımlarını takip ederek hangi konularda ilerlediğini gör.",
    detail:
      "Her konu için oluşturulan 4 aşamalı ilerleme sistemi çalışma sürecini daha görünür hale getirir.",
  },
];

const learningFlow = [
  {
    number: "01",
    title: "Konu Özeti",
    text: "Önce konuyu öğren.",
  },
  {
    number: "02",
    title: "Podcast",
    text: "Dinleyerek tekrar et.",
  },
  {
    number: "03",
    title: "Zihin Haritası",
    text: "Bilgiler arasındaki bağlantıları keşfet.",
  },
  {
    number: "04",
    title: "Test Soru",
    text: "Öğrendiklerini sorularla pekiştir.",
  },
];

const games = [
  {
    icon: "📍",
    title: "Şehri Bul",
    description:
      "Harita bilgilerini interaktif bir oyun deneyimiyle tekrar et.",
  },
  {
    icon: "🗺️",
    title: "Bölgeler",
    description:
      "Türkiye'nin bölgelerini ve coğrafi bilgileri oyunlaştırılmış şekilde çalış.",
  },
  {
    icon: "🌾",
    title: "Tarım Haritası",
    description:
      "Tarım ve coğrafya bilgilerini harita üzerinden tekrar et.",
  },
  {
    icon: "⛏️",
    title: "Maden Avı",
    description:
      "Madenlerle ilgili bilgileri keşfet ve tekrarlarını oyunlaştır.",
  },
  {
    icon: "🧬",
    title: "Biyoloji Anatomisi",
    description:
      "Biyoloji konularını görsel ve etkileşimli içeriklerle çalış.",
  },
  {
    icon: "⚡",
    title: "Mini Oyunlar",
    description:
      "Farklı sınav gruplarına yönelik kısa ve etkileşimli öğrenme deneyimleri.",
  },
];

const progressItems = [
  "Konu Özeti",
  "Podcast",
  "Zihin Haritası",
  "Test Soru",
];

export default function Page() {
  return (
    <main className="overflow-hidden">
      <PageHeader
        eyebrow="Özellikler"
        title="Çalışma deneyimin, tek bir yerde."
        description="KampüsCep; konu çalışmasından soru çözümüne, podcastlerden zihin haritalarına ve eğitici oyunlara kadar sınava hazırlık sürecinin farklı aşamalarını bir araya getirir."
      />

      {/* Feature overview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mainFeatures.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl transition group-hover:bg-teal-50">
                {feature.icon}
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-950">
                {feature.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="text-sm leading-6 text-slate-500">
                  {feature.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Learning system */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                4 aşamalı öğrenme
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Her konu için net bir çalışma akışı.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                KampüsCep&apos;te konuları farklı yöntemlerle çalışabilir,
                tamamladığın her adımı ilerleme sisteminde görebilirsin.
              </p>

              <div className="mt-7">
                <Link
                  href="/sinavlar"
                  className="inline-flex items-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Sınavları keşfet
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {learningFlow.map((item, index) => (
                <div
                  key={item.number}
                  className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-sm font-bold text-teal-700">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      {item.text}
                    </p>
                  </div>

                  {index < learningFlow.length - 1 && (
                    <div className="hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Progress card */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1fr_0.8fr]">
              <div className="p-7 sm:p-9">
                <span className="text-sm font-semibold text-teal-700">
                  Konu ilerlemesi
                </span>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  1 konu = 4 tamamlanabilir adım
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                  Konu Özeti, Podcast, Zihin Haritası ve Test Soru adımlarını
                  tamamladıkça ilerleme göstergen güncellenir.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {progressItems.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 p-4"
                    >
                      <div className="text-xs font-bold text-teal-700">
                        {index + 1}/4
                      </div>

                      <div className="mt-2 text-sm font-semibold text-slate-800">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center border-t border-slate-200 bg-slate-50 p-7 lg:border-l lg:border-t-0 sm:p-9">
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">
                      İlerleme
                    </span>

                    <span className="text-sm font-bold text-slate-950">
                      4/4
                    </span>
                  </div>

                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-full rounded-full bg-teal-700" />
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-teal-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100">
                      ✓
                    </span>
                    Konu tamamlandı
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            Eğitici oyunlar
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Tekrarı oyunlaştır.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            KampüsCep&apos;te bazı konu ve bilgileri yalnızca okuyarak değil,
            etkileşimli oyunlarla da tekrar edebilirsin.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <div
              key={game.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl">
                {game.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {game.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {game.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Exam ecosystem */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                Tek platform
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Farklı sınavlar, aynı çalışma yaklaşımı.
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                KampüsCep; KPSS, YKS, LGS ve AGS gibi farklı sınavlara
                hazırlanan öğrencilerin kendi sınavlarına yönelik içerikleri
                takip edebilmesini hedefler.
              </p>

              <Link
                href="/sinavlar"
                className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Sınavları incele
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["KPSS", "YKS", "LGS", "AGS"].map((exam) => (
                <div
                  key={exam}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="text-2xl font-bold">{exam}</div>

                  <p className="mt-2 text-sm text-slate-400">
                    Sınava özel çalışma içerikleri
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-12 text-center sm:px-10 lg:px-16">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            KampüsCep
          </span>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Çalışma sürecini daha düzenli hale getir.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Konu çalış, dinle, görselleştir, soru çöz ve ilerlemeni takip et.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/hakkimizda"
              className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              KampüsCep hakkında
            </Link>

            <Link
              href="/destek"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Destek merkezi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}