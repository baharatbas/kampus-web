import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Destek Merkezi",
  description:
    "KampüsCep hesap, abonelik, satın alma, hesap silme ve teknik sorunlar için yardım ve iletişim bilgileri.",
};

const SUPPORT_EMAIL = "destekkampus1@gmail.com";

const categories = [
  {
    icon: "🚀",
    title: "Başlangıç",
    description: "Uygulamayı kullanmaya başlama ve temel özellikler.",
    href: "/ozellikler",
  },
  {
    icon: "👤",
    title: "Hesap",
    description: "Hesap oluşturma, giriş ve hesap silme işlemleri.",
    href: "/veri-silme",
  },
  {
    icon: "💳",
    title: "Abonelik",
    description: "Premium planları, iptal ve iade bilgileri.",
    href: "/abonelik",
  },
  {
    icon: "🛠️",
    title: "Teknik destek",
    description: "Uygulamada karşılaştığın sorunlar için bize yaz.",
    href: "/iletisim",
  },
];

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "KampüsCep hangi sınavları destekliyor?",
    answer:
      "KampüsCep; KPSS, YKS, LGS ve AGS sınavlarına hazırlanan kullanıcılara konu özetleri, soru çözümü, podcast, zihin haritaları ve eğitici oyunlarla çalışma imkânı sunar.",
  },
  {
    question: "Uygulamayı kullanmak için hesap gerekiyor mu?",
    answer:
      "Evet. Kişiye özel bireysel çalışma programı oluşturabilmen ve ilerlemeni takip edebilmen için e-posta adresi, kullanıcı adı ve şifre ile hesap oluşturman gerekir.",
  },
  {
    question: "Hesabımı ve verilerimi nasıl silebilirim?",
    answer: (
      <>
        Hesap ve veri silme talebini{" "}
        <Link className="font-medium text-teal-800 underline" href="/veri-silme">
          Hesap ve veri silme
        </Link>{" "}
        sayfasındaki adımlarla iletebilirsin. Silme tamamlandığında hesabınla
        ilişkili tüm veriler kalıcı olarak kaldırılır.
      </>
    ),
  },
  {
    question: "Premium planlar ve fiyatlar neler?",
    answer: (
      <>
        Haftalık, Aylık, 3 Aylık, Yıllık ve Ömür Boyu planlar bulunur. Güncel
        fiyatlar ve koşullar için{" "}
        <Link className="font-medium text-teal-800 underline" href="/abonelik">
          Abonelik
        </Link>{" "}
        sayfasına bakabilirsin.
      </>
    ),
  },
  {
    question: "Aboneliğimi nasıl iptal ederim?",
    answer: (
      <>
        Abonelikler App Store veya Google Play üzerinden yönetilir. İptal
        adımlarını{" "}
        <Link className="font-medium text-teal-800 underline" href="/iade-politikasi">
          İade Politikası
        </Link>{" "}
        sayfasında bulabilirsin. Hesabını silmek aboneliği otomatik iptal
        etmez; aboneliği mağazadan ayrıca iptal etmen gerekir.
      </>
    ),
  },
  {
    question: "Satın aldığım Premium plan görünmüyor, ne yapmalıyım?",
    answer: (
      <>
        Uygulamadaki “Satın alımları geri yükle” seçeneğini dene ve satın
        almayı yaptığın App Store veya Google Play hesabıyla giriş yaptığından
        emin ol. Sorun sürerse{" "}
        <a className="font-medium text-teal-800 underline" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{" "}
        adresine kayıtlı e-posta adresin ve satın alma bilgilerinle yaz.
      </>
    ),
  },
  {
    question: "Teknik bir sorun yaşarsam ne yapmalıyım?",
    answer: (
      <>
        Önce uygulamanın en güncel sürümünü kullandığından emin ol. Sorun
        devam ederse{" "}
        <a className="font-medium text-teal-800 underline" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>{" "}
        adresine cihaz modelini, işletim sistemi sürümünü ve sorunun kısa bir
        açıklamasını yaz.
      </>
    ),
  },
  {
    question: "Kişisel verilerim nasıl korunuyor?",
    answer: (
      <>
        Hangi verileri neden topladığımızı{" "}
        <Link className="font-medium text-teal-800 underline" href="/gizlilik">
          Gizlilik Politikası
        </Link>{" "}
        ve{" "}
        <Link className="font-medium text-teal-800 underline" href="/kvkk">
          KVKK aydınlatma metninde
        </Link>{" "}
        açıkça anlattık.
      </>
    ),
  },
];

export default function Page() {
  return (
    <main>
      <PageHeader
        eyebrow="Destek Merkezi"
        title="Yardıma mı ihtiyacın var?"
        description="KampüsCep kullanımı, hesap, abonelik ve teknik konularla ilgili yardım al."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-3xl">{category.icon}</div>
              <h2 className="mt-5 font-bold text-slate-900">
                {category.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık sorulan sorular
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  {faq.question}
                </summary>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
          <p className="text-sm font-semibold text-emerald-300">
            BİZE ULAŞ
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Sorunun cevabını bulamadın mı?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Bize{" "}
            <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>{" "}
            adresinden ulaşabilirsin.
          </p>

          <Link
            href="/iletisim"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-slate-900"
          >
            İletişim sayfası
          </Link>
        </div>
      </section>
    </main>
  );
}
