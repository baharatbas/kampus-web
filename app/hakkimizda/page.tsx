import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Hakkımızda | KampüsCep",
  description:
    "KampüsCep; KPSS, YKS, LGS ve AGS'ye hazırlanan öğrenciler için konu özeti, podcast, zihin haritası, test ve eğitici oyunları bir araya getiren sınava hazırlık platformudur.",
};

const learningSteps = [
  {
    number: "01",
    title: "Konu Özeti",
    description:
      "Çalıştığın konunun temel bilgilerini düzenli ve anlaşılır bir yapıda öğren.",
  },
  {
    number: "02",
    title: "Podcast",
    description:
      "Konuları yalnızca okuyarak değil, dinleyerek de tekrar et ve çalışma rutinine farklı bir öğrenme yöntemi ekle.",
  },
  {
    number: "03",
    title: "Zihin Haritası",
    description:
      "Bilgiler arasındaki bağlantıları görselleştirerek konuları daha kolay hatırlamaya çalış.",
  },
  {
    number: "04",
    title: "Test Soru",
    description:
      "Öğrendiklerini sorularla pekiştir ve hangi konularda daha fazla çalışman gerektiğini takip et.",
  },
];

const features = [
  {
    icon: "📚",
    title: "Konu Özetleri",
    description:
      "Sınavlara göre düzenlenmiş konu içerikleriyle çalışmanı daha düzenli hale getir.",
  },
  {
    icon: "🎧",
    title: "Podcast",
    description:
      "Konuları dinleyerek tekrar et ve çalışma deneyimine farklı bir öğrenme biçimi ekle.",
  },
  {
    icon: "🧠",
    title: "Zihin Haritaları",
    description:
      "Konu içerisindeki önemli bilgileri ve bağlantıları daha görsel bir şekilde keşfet.",
  },
  {
    icon: "📝",
    title: "Soru Çözümü",
    description:
      "Çalıştığın konuları testlerle pekiştir ve ilerlemeni adım adım takip et.",
  },
  {
    icon: "🎮",
    title: "Eğitici Oyunlar",
    description:
      "Haritalar, biyoloji ve farklı derslere yönelik oyunlarla öğrenme sürecini daha etkileşimli hale getir.",
  },
  {
    icon: "📈",
    title: "İlerleme Takibi",
    description:
      "Tamamladığın konu çalışmalarını takip ederek çalışma sürecini daha görünür hale getir.",
  },
];

const exams = [
  {
    title: "KPSS",
    description:
      "Genel Yetenek, Genel Kültür ve ilgili konu alanlarında düzenli çalışmayı destekleyen içerikler.",
  },
  {
    title: "YKS",
    description:
      "TYT ve AYT hazırlığında farklı dersleri tek bir çalışma deneyimi içerisinde takip et.",
  },
  {
    title: "LGS",
    description:
      "Türkçe, Matematik, Fen Bilimleri, İnkılap Tarihi, Din Kültürü ve İngilizce çalışmalarını tek yerde yönet.",
  },
  {
    title: "AGS",
    description:
      "AGS hazırlığında konu çalışma, tekrar, test ve ilerleme deneyimini tek platformda bir araya getir.",
  },
];

const games = [
  "Şehri Bul",
  "Bölgeler",
  "Tarım Haritası",
  "Maden Avı",
  "Biyoloji Anatomisi",
  "Fen Avı",
  "Kelime Avı",
  "Tarihi Bul",
  "İngilizce Eşleştir",
];

export default function Page() {
  return (
    <main className="overflow-hidden">
      <PageHeader
        eyebrow="Hakkımızda"
        title="Sınava hazırlanma deneyimini yeniden düşün."
        description="KampüsCep; KPSS, YKS, LGS ve AGS'ye hazırlanan öğrencilerin konu çalışmasından soru çözümüne kadar ihtiyaç duyduğu farklı öğrenme deneyimlerini tek bir platformda bir araya getirmek için tasarlandı."
      />

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              KampüsCep
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Öğren, tekrar et, test et, ilerle.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Sınava hazırlanırken farklı kaynaklar, notlar, videolar,
                sorular ve tekrar yöntemleri arasında dağılmak çalışma
                sürecini zorlaştırabilir.
              </p>

              <p>
                KampüsCep bu süreci daha düzenli ve takip edilebilir hale
                getirmek için farklı öğrenme araçlarını tek bir deneyimde
                buluşturur.
              </p>

              <p>
                Amacımız öğrencinin yalnızca içerik tükettiği bir uygulama
                oluşturmak değil; çalıştığı konuyu öğrenmesini, tekrar
                etmesini, uygulamasını ve ilerlemesini destekleyen bir çalışma
                düzeni sunmaktır.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["📚", "Konu", "Öğren"],
                  ["🎧", "Podcast", "Dinle"],
                  ["🧠", "Zihin Haritası", "Hatırla"],
                  ["📝", "Test", "Pekiştir"],
                ].map(([icon, title, subtitle]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="text-2xl">{icon}</div>
                    <div className="mt-4 font-semibold text-slate-950">
                      {title}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning flow */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Öğrenme akışı
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Tek bir konuyu farklı yollarla çalış.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              KampüsCep&apos;te bir konuyu yalnızca okuyup bırakmak yerine,
              öğrenme sürecinin farklı aşamalarını takip edebilirsin.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {learningSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-teal-700">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Progress */}
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-teal-700">
                  Konu ilerlemesi
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  4 adım, tek bir ilerleme göstergesi.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Konu Özeti, Podcast, Zihin Haritası ve Test Soru adımlarını
                  tamamladıkça ilerlemeni takip edebilirsin.
                </p>
              </div>

              <div className="min-w-[220px]">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-600">
                    Konu tamamlanma
                  </span>
                  <span className="font-bold text-slate-950">4/4</span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-full rounded-full bg-teal-700" />
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Tüm öğrenme adımları tamamlandı.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
            Neler sunuyor?
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Çalışma deneyimini tek yerde toparla.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            KampüsCep&apos;in temel özellikleri, farklı çalışma alışkanlıklarını
            aynı sınava hazırlık deneyimi içerisinde bir araya getirir.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Exams */}
      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
              Sınavlar
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Hedeflediğin sınava göre çalış.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              KampüsCep farklı sınav gruplarına yönelik çalışma içeriklerini
              tek bir uygulama deneyiminde buluşturmayı hedefler.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {exams.map((exam) => (
              <div
                key={exam.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-bold">{exam.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {exam.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Oyunlaştırılmış öğrenme
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Öğrenmeyi biraz daha etkileşimli hale getir.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Bazı bilgileri tekrar tekrar okumak yerine, onları etkileşimli
              deneyimlerle çalışmak öğrenme sürecini çeşitlendirebilir.
              KampüsCep bu nedenle farklı ders ve konu alanlarına yönelik
              eğitici oyunlar ve mini oyunlar sunmayı hedefler.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {games.map((game) => (
              <span
                key={game}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700"
              >
                {game}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Yaklaşımımız
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Daha düzenli. Daha etkileşimli. Öğrenci odaklı.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              KampüsCep&apos;in temel yaklaşımı, sınava hazırlık sürecini
              gereksiz karmaşıklıktan uzaklaştırarak öğrencinin çalışmasına,
              tekrar etmesine ve ilerlemesini görmesine yardımcı olmaktır.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "01",
                title: "Düzenli",
                description:
                  "İçerikleri sınav ve konu yapısına göre daha düzenli bir çalışma akışı içerisinde sunmayı hedefler.",
              },
              {
                icon: "02",
                title: "Etkileşimli",
                description:
                  "Podcast, zihin haritası, test ve oyun gibi farklı öğrenme yöntemlerini bir araya getirir.",
              },
              {
                icon: "03",
                title: "Öğrenci Odaklı",
                description:
                  "Çalışma sürecinin anlaşılır, takip edilebilir ve günlük kullanıma uygun olmasına odaklanır.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-teal-700">
                  {item.icon}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-teal-700 px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-100">
              Geleceğe bakış
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Sınava hazırlık sürecini daha erişilebilir hale getirmek.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-teal-50">
              KampüsCep&apos;i geliştirirken öğrencilerin çalışma alışkanlıklarını,
              geri bildirimlerini ve ihtiyaçlarını merkeze alıyoruz. Hedefimiz,
              zaman içerisinde daha fazla öğrenme yöntemi ve daha iyi bir
              çalışma deneyimi sunabilen bir platform oluşturmak.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ozellikler"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
              >
                Özellikleri keşfet
              </Link>

              <Link
                href="/destek"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Destek merkezine git
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}