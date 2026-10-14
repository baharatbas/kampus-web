import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Hesap ve Veri Silme",
  description:
    "KampüsCep hesabınızı ve hesabınızla ilişkili kişisel verilerinizi nasıl sildirebileceğinizi öğrenin.",
};

const SUPPORT_EMAIL = "destekkampus1@gmail.com";

const steps = [
  <>
    Hesabınızı oluştururken kullandığınız e-posta adresinden{" "}
    <a
      className="font-medium text-teal-800 underline"
      href={`mailto:${SUPPORT_EMAIL}?subject=Hesap%20ve%20veri%20silme%20talebi`}
    >
      {SUPPORT_EMAIL}
    </a>{" "}
    adresine e-posta gönderin.
  </>,
  <>
    Konu satırına <strong>“Hesap ve veri silme talebi”</strong> yazın ve
    mesajınızda KampüsCep kullanıcı adınızı belirtin.
  </>,
  <>
    Talebin size ait olduğunu doğruladıktan sonra hesabınızı ve ilişkili
    verilerinizi sileriz ve işlemin tamamlandığını e-posta ile bildiririz.
  </>,
];

export default function Page() {
  return (
    <main>
      <PageHeader
        eyebrow="Destek"
        title="Hesap ve veri silme"
        description="KampüsCep hesabınızı ve hesabınızla ilişkili kişisel verilerinizi istediğiniz zaman sildirebilirsiniz."
      />

      <section className="mx-auto max-w-3xl space-y-12 px-4 py-14 sm:px-6">
        <section>
          <h2 className="text-xl font-bold text-slate-900">Silme talebi nasıl iletilir?</h2>
          <ol className="mt-5 space-y-4">
            {steps.map((step, index) => (
              <li
                key={index}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 leading-7 text-slate-600"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">Hangi veriler silinir?</h2>
          <p className="mt-3 leading-8 text-slate-600">
            KampüsCep uygulamasında hesabınızla ilişkili tüm veriler silinir:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-8 text-slate-600">
            <li>E-posta adresi</li>
            <li>Kullanıcı adı</li>
            <li>Şifre</li>
            <li>Hesabınıza bağlı çalışma programı ve ilerleme kayıtları</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">Saklama süresi</h2>
          <p className="mt-3 leading-8 text-slate-600">
            Silme işlemi tamamlandığında bu veriler veri tabanımızdan kalıcı
            olarak kaldırılır ve geri getirilemez. Silinen veriler için ayrıca
            bir saklama süresi uygulanmaz.
          </p>
        </section>
      </section>
    </main>
  );
}
