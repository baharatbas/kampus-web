import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "KampüsCep web sitesi ve uygulaması çerez kullanmaz. Çerez ve benzeri teknolojiler hakkında bilgilendirme.",
};

const SUPPORT_EMAIL = "destekkampus1@gmail.com";

export default function Page() {
  return (
    <main>
      <PageHeader
        eyebrow="Çerezler"
        title="Çerez Politikası"
        description="KampüsCep, web sitesinde ve uygulamasında çerez kullanmaz."
      >
        <p className="text-sm font-medium text-slate-500">
          Son güncelleme: 14 Ekim 2026
        </p>
      </PageHeader>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl bg-teal-50 p-6 text-teal-900">
          <p className="font-semibold">
            KampüsCep çerez kullanmaz. Bu nedenle çerez onayı veya çerez
            tercihi yönetimi gerekmez.
          </p>
        </div>

        <div className="mt-12 space-y-10 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-slate-900">1. Çerez nedir?</h2>
            <p className="mt-3 leading-8">
              Çerezler, bir web sitesinin tercihlerinizi hatırlamak veya
              ziyaretinizi ölçmek için cihazınıza yerleştirdiği küçük veri
              dosyalarıdır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              2. KampüsCep&apos;te çerez kullanımı
            </h2>
            <p className="mt-3 leading-8">
              Web sitemiz ve uygulamamız; analiz, reklam, pazarlama veya
              kullanıcı takibi amacıyla çerez ya da benzeri bir teknoloji
              kullanmaz. Üçüncü taraf analiz veya reklam hizmetleri entegre
              edilmemiştir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              3. Kişisel veriler
            </h2>
            <p className="mt-3 leading-8">
              Hesabınız için topladığımız veriler ve bunların kullanımı{" "}
              <Link className="font-medium text-teal-800 underline" href="/gizlilik">
                Gizlilik Politikası
              </Link>
              &apos;nda açıklanmıştır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">4. İletişim</h2>
            <p className="mt-3 leading-8">
              Bu politika hakkındaki sorularınız için{" "}
              <a
                className="font-medium text-teal-800 underline"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              adresine yazabilirsiniz.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
