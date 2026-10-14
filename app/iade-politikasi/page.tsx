import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "İade Politikası",
  description:
    "KampüsCep satın alma, abonelik iptali ve iade süreçlerinin App Store ve Google Play üzerinden nasıl yürütüldüğü.",
};

const SUPPORT_EMAIL = "destekkampus1@gmail.com";

const stores = [
  {
    name: "App Store (iPhone / iPad)",
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
        adresinden Apple hesabınızla giriş yaparak iletebilirsiniz.
      </>
    ),
    cancel:
      "Ayarlar → Apple Kimliğiniz → Abonelikler bölümünden KampüsCep aboneliğinizi seçip iptal edebilirsiniz.",
  },
  {
    name: "Google Play (Android)",
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
        adımlarla iletebilirsiniz.
      </>
    ),
    cancel:
      "Play Store → Profil simgesi → Ödemeler ve abonelikler → Abonelikler bölümünden KampüsCep aboneliğinizi seçip iptal edebilirsiniz.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHeader
        eyebrow="Politikalar"
        title="İade Politikası"
        description="KampüsCep'teki satın alma, abonelik iptali ve iade işlemlerinin nasıl yürütüldüğünü burada bulabilirsin."
      >
        <p className="text-sm font-medium text-slate-500">
          Son güncelleme: 14 Ekim 2026
        </p>
      </PageHeader>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="space-y-10 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              1. Satın almalar mağaza üzerinden yapılır
            </h2>
            <p className="mt-3 leading-8">
              KampüsCep&apos;te ücretli özellikler ve abonelikler yalnızca App Store
              veya Google Play üzerinden satın alınır. Ödeme, faturalandırma,
              abonelik yenileme ve iade işlemlerini ilgili mağaza yönetir; bu
              nedenle iade kararını da Apple veya Google verir.
            </p>
            <p className="mt-4 leading-8">
              Haftalık, Aylık, 3 Aylık ve Yıllık planlar otomatik yenilenen
              aboneliklerdir. Ömür Boyu plan ise tek seferlik bir ödemedir;
              abonelik değildir ve yenilenmez. Güncel planlar ve fiyatlar için{" "}
              <Link className="font-medium text-teal-800 underline" href="/abonelik">
                Abonelik
              </Link>{" "}
              sayfasına bakabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              2. Abonelik iptali ve iade
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {stores.map((store) => (
                <div
                  key={store.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="font-bold text-slate-900">{store.name}</h3>
                  <p className="mt-3 text-sm leading-7">
                    <span className="font-semibold text-slate-800">İptal: </span>
                    {store.cancel}
                  </p>
                  <p className="mt-3 text-sm leading-7">
                    <span className="font-semibold text-slate-800">İade: </span>
                    {store.refund}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 leading-8">
              Aboneliğinizi yenileme tarihinden önce iptal etmezseniz mağaza
              aboneliği otomatik olarak yeniler. Hesabınızı silmek, mağazadaki
              aboneliğinizi kendiliğinden iptal etmez; aboneliği ayrıca iptal
              etmeniz gerekir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              3. Yardıma mı ihtiyacınız var?
            </h2>
            <p className="mt-3 leading-8">
              Satın alma işleminizle ilgili bir sorun yaşarsanız{" "}
              <a
                className="font-medium text-teal-800 underline"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              adresine yazabilirsiniz. Abonelik hakkında genel bilgi için{" "}
              <Link className="font-medium text-teal-800 underline" href="/abonelik">
                Abonelik
              </Link>{" "}
              sayfasına bakabilirsiniz.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
