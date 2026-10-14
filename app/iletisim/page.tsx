import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "KampüsCep destek, geri bildirim ve gizlilik talepleri için iletişim bilgileri.",
};

const SUPPORT_EMAIL = "destekkampus1@gmail.com";

export default function Page() {
  return (
    <main>
      <PageHeader
        eyebrow="İletişim"
        title="Bizimle iletişime geç."
        description="KampüsCep hakkında sorularını, önerilerini veya teknik destek taleplerini bize e-posta ile iletebilirsin."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="text-3xl">💬</div>

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Destek talebi
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Hesap işlemleri, giriş sorunları veya uygulamayla ilgili teknik
              konularda destek almak için bize yaz. Talebini hızlı
              çözebilmemiz için kayıtlı e-posta adresini ve kullanıcı adını
              mesajına eklemeni rica ederiz.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Destek e-posta adresi
              </p>

              <a
                className="mt-2 block break-all font-semibold text-teal-800 underline"
                href={`mailto:${SUPPORT_EMAIL}`}
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="text-3xl">🔒</div>

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Gizlilik ve veri talepleri
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Kişisel verilerinle ilgili sorularını ve hesap silme taleplerini
              aynı adrese iletebilirsin. Silme talepleri için ayrıntılı adımlar
              ilgili sayfada yer alır.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <Link
                className="rounded-full bg-teal-700 px-5 py-3 text-white hover:bg-teal-800"
                href="/veri-silme"
              >
                Hesap ve veri silme
              </Link>
              <Link
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-800"
                href="/gizlilik"
              >
                Gizlilik politikası
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          KampüsCep, Bahar Atbaş (BATEK) tarafından geliştirilmektedir · İstanbul, Türkiye
        </p>

        <div className="mt-8 rounded-3xl bg-emerald-50 p-8">
          <h2 className="text-xl font-bold text-emerald-900">
            Öneri ve geri bildirim
          </h2>
          <p className="mt-3 leading-7 text-emerald-800">
            KampüsCep&apos;in gelişmesinde kullanıcı geri bildirimleri önemli bir
            rol oynar. Yeni özellik önerilerini ve karşılaştığın sorunları aynı
            e-posta adresi üzerinden bizimle paylaşabilirsin.
          </p>
        </div>
      </section>
    </main>
  );
}
