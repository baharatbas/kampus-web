import type { Metadata } from "next";
import Link from "next/link";
import { FAQList } from "@/components/support/faq-item";
import { PageHeader } from "@/components/page-header";
import { PricingCard } from "@/components/support/pricing-card";
import { SupportCategory } from "@/components/support/support-category";
import { SupportNav } from "@/components/support/support-nav";
import { abonelikFaqs, pricingPlans } from "@/lib/support";

export const metadata: Metadata = {
  title: "Abonelik",
  description:
    "KampüsCep Premium planları, fiyatları, otomatik yenileme koşulları ve aboneliğin App Store ve Google Play üzerinden nasıl iptal edileceği.",
};

const SUPPORT_EMAIL = "destekkampus1@gmail.com";

const terms = [
  "Haftalık, Aylık, 3 Aylık ve Yıllık planlar abonelik olarak satılır ve seçtiğin sürenin sonunda otomatik yenilenir.",
  "Ödeme, satın alma onayında App Store veya Google Play hesabından tahsil edilir.",
  "Abonelik, mevcut dönemin bitiminden en az 24 saat önce iptal edilmediği sürece aynı süre ve ücretle yenilenir.",
  "Yenileme ücreti, dönem bitiminden önceki 24 saat içinde hesabından tahsil edilebilir.",
  "Ömür Boyu plan tek seferlik bir ödemedir. Abonelik değildir, otomatik yenilenmez ve iptal edilecek bir aboneliği yoktur.",
  "Fiyatlar Türk lirası cinsindendir. Satın alma ekranında mağazanın gösterdiği tutar geçerlidir.",
];

const stores = [
  {
    name: "App Store (iPhone / iPad)",
    manage:
      "Ayarlar → Apple Kimliğin → Abonelikler bölümünden KampüsCep aboneliğini seçip yönetebilir veya iptal edebilirsin.",
    refund: (
      <>
        İade talebini{" "}
        <a
          className="font-medium text-teal-800 underline"
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          reportaproblem.apple.com
        </a>{" "}
        adresinden iletebilirsin.
      </>
    ),
  },
  {
    name: "Google Play (Android)",
    manage:
      "Play Store → Profil simgesi → Ödemeler ve abonelikler → Abonelikler bölümünden KampüsCep aboneliğini seçip yönetebilir veya iptal edebilirsin.",
    refund: (
      <>
        İade talebini Google Play&apos;in{" "}
        <a
          className="font-medium text-teal-800 underline"
          href="https://support.google.com/googleplay/answer/2479637"
          target="_blank"
          rel="noopener noreferrer"
        >
          iade yardım sayfasındaki
        </a>{" "}
        adımlarla iletebilirsin.
      </>
    ),
  },
];

export default function Page() {
  return (
    <main>
      <PageHeader
        eyebrow="Abonelik"
        title="KampüsCep Premium"
        description="Tüm ders ve özelliklere sınırsız erişim. Planları, fiyatları ve aboneliğinin nasıl çalıştığını burada bulabilirsin."
      />
      <SupportNav />

      <section className="mx-auto max-w-6xl space-y-14 px-4 py-14 sm:px-6 sm:py-16">
        <SupportCategory id="planlar" title="Abonelik planları">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                cadence={plan.cadence}
                price={plan.price}
                monthlyEquivalent={plan.monthlyEquivalent}
                saving={plan.saving}
                badge={plan.badge}
                note={plan.note}
                featured={plan.featured}
              />
            ))}
          </div>
        </SupportCategory>

        <SupportCategory id="nasil-calisir" title="Abonelik nasıl çalışır?">
          <ul className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
            {terms.map((term) => (
              <li key={term} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </SupportCategory>

        <SupportCategory id="magaza" title="Aboneliği nasıl iptal eder veya iade alırım?">
          <div className="grid gap-4 md:grid-cols-2">
            {stores.map((store) => (
              <div
                key={store.name}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-semibold text-slate-900">{store.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  <span className="font-semibold text-slate-800">İptal ve yönetim: </span>
                  {store.manage}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  <span className="font-semibold text-slate-800">İade: </span>
                  {store.refund}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Satın alımlar App Store veya Google Play üzerinden yapıldığı için
            ödeme, iptal ve iade işlemlerini ilgili mağaza yönetir.
            Uygulamayı yeniden yüklediysen veya cihaz değiştirdiysen,
            uygulamadaki “Satın alımları geri yükle” seçeneğiyle satın
            aldığın planı geri alabilirsin.
          </p>
        </SupportCategory>

        <SupportCategory id="odeme-sorunlari" title="Ödeme ile ilgili sorunlar">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
            Ödemen alındığı hâlde Premium özellikleri açılmadıysa önce
            uygulamada “Satın alımları geri yükle” seçeneğini dene. Sorun
            sürerse{" "}
            <a
              className="font-medium text-teal-800 underline"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>{" "}
            adresine kayıtlı e-posta adresin ve satın alma bilgilerinle yaz.
          </div>
        </SupportCategory>

        <SupportCategory id="sss" title="Sık sorulan sorular">
          <FAQList items={abonelikFaqs} />
        </SupportCategory>

        <p className="text-sm leading-7 text-slate-500">
          Satın alarak{" "}
          <Link className="font-medium text-teal-800 underline" href="/kullanim-kosullari">
            Kullanım Koşulları
          </Link>
          &apos;nı kabul etmiş olursun. Verilerinin nasıl işlendiğini{" "}
          <Link className="font-medium text-teal-800 underline" href="/gizlilik">
            Gizlilik Politikası
          </Link>
          &apos;nda inceleyebilirsin.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/iade-politikasi"
            className="inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
          >
            İade politikası
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800"
          >
            Destek ile iletişime geç
          </Link>
        </div>
      </section>
    </main>
  );
}
