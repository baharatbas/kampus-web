import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Uygulamayı Keşfet",
  description:
    "KampüsCep ile KPSS, YKS, LGS ve AGS sınavlarına hazırlık deneyimini keşfet.",
};

const exams = [
  { name: "KPSS", icon: "🎯" },
  { name: "YKS", icon: "🎓" },
  { name: "LGS", icon: "📚" },
  { name: "AGS", icon: "🏫" },
];

const features = [
  {
    icon: "📖",
    title: "Konu Özetleri",
    description:
      "Sınav konularını düzenli ve anlaşılır içeriklerle çalış.",
  },
  {
    icon: "🎧",
    title: "Podcast",
    description:
      "Konu tekrarlarını dinleyerek çalışma rutinine farklı bir boyut ekle.",
  },
  {
    icon: "🧠",
    title: "Zihin Haritaları",
    description:
      "Bilgileri bağlantılar kurarak daha kolay tekrar etmeye yardımcı ol.",
  },
  {
    icon: "✏️",
    title: "Test ve Soru",
    description:
      "Çalıştığın konuları sorularla pekiştir ve ilerlemeni takip et.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHeader
        eyebrow="KampüsCep"
        title="Sınava hazırlık cebinde."
        description="KampüsCep'in çalışma sistemini keşfet. Konu çalış, dinle, haritala, test çöz ve ilerlemeni takip et."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
              KPSS · YKS · LGS · AGS
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tek bir uygulamada daha düzenli bir çalışma deneyimi.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KampüsCep; konu özetlerinden podcastlere, zihin haritalarından
              testlere ve eğitici oyunlara kadar farklı çalışma yöntemlerini
              tek bir deneyimde bir araya getirir.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {exams.map((exam) => (
                <span
                  key={exam.name}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {exam.icon} {exam.name}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/ozellikler"
                className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Özellikleri keşfet
              </Link>

              <Link
                href="/destek"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Destek merkezi
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative h-[560px] w-[280px] rounded-[42px] border-[8px] border-slate-900 bg-slate-100 p-3 shadow-2xl">
              <div className="absolute left-1/2 top-2 h-6 w-28 -translate-x-1/2 rounded-full bg-slate-900" />

              <div className="flex h-full flex-col overflow-hidden rounded-[30px] bg-white">
                <div className="bg-slate-900 px-5 pb-6 pt-12 text-white">
                  <p className="text-xs text-slate-300">Hoş geldin</p>
                  <h3 className="mt-1 text-xl font-bold">KampüsCep</h3>
                </div>

                <div className="space-y-4 p-5">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      SINAVIN
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      KPSS
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <p className="text-sm font-semibold text-emerald-800">
                      Bugünkü ilerlemen
                    </p>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-emerald-100">
                      <div className="h-full w-3/4 rounded-full bg-emerald-600" />
                    </div>

                    <p className="mt-2 text-xs text-emerald-700">
                      3 / 4 tamamlandı
                    </p>
                  </div>

                  {[
                    ["📖", "Konu Özeti"],
                    ["🎧", "Podcast"],
                    ["🧠", "Zihin Haritası"],
                    ["✏️", "Test Soruları"],
                  ].map(([icon, title], index) => (
                    <div
                      key={title}
                      className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <span>{icon}</span>
                        <span className="text-sm font-medium text-slate-700">
                          {title}
                        </span>
                      </div>

                      <span className="text-xs font-semibold text-emerald-600">
                        {index < 3 ? "✓" : "Başla"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-5 font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900">
          Sorunun mu var? Yardım için buradayız.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          Uygulama, abonelik veya hesabınla ilgili sorularını destek
          merkezimizde bulabilir ya da bize e-posta ile ulaşabilirsin.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/abonelik"
            className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Premium planları
          </Link>

          <Link
            href="/iletisim"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            İletişim
          </Link>
        </div>
      </section>
    </main>
  );
}