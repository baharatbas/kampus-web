import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description:
    "KampüsCep uygulamasının ve web sitesinin kullanımına ilişkin koşullar.",
};

const SUPPORT_EMAIL = "destekkampus1@gmail.com";

const sections = [
  {
    title: "1. Hizmetin kapsamı",
    body: (
      <p>
        KampüsCep; KPSS, YKS, LGS ve AGS sınavlarına hazırlanan kullanıcılara
        konu özetleri, soru çözümü, podcast ve zihin haritaları gibi çalışma
        araçları sunan bir sınav hazırlık uygulamasıdır. Uygulamayı
        kullanarak bu koşulları kabul etmiş olursunuz.
      </p>
    ),
  },
  {
    title: "2. Kullanıcı hesabı",
    body: (
      <>
        <p>
          Kişiye özel çalışma programı oluşturabilmek için e-posta adresi,
          kullanıcı adı ve şifre ile hesap oluşturmanız gerekir. Hesap
          oluştururken doğru ve güncel bilgi vermeyi kabul edersiniz.
        </p>
        <p className="mt-4">
          Şifrenizin gizliliğinden ve hesabınız üzerinden yapılan işlemlerden
          siz sorumlusunuz. Hesabınızın izinsiz kullanıldığından
          şüphelenirseniz bize derhal bildirmeniz gerekir.
        </p>
      </>
    ),
  },
  {
    title: "3. Eğitim içerikleri",
    body: (
      <p>
        Uygulamadaki içerikler sınav hazırlığını desteklemek amacıyla sunulur.
        KampüsCep herhangi bir sınav sonucunu veya başarıyı garanti etmez.
      </p>
    ),
  },
  {
    title: "4. Kabul edilebilir kullanım",
    body: (
      <>
        <p>Uygulamayı kullanırken aşağıdakileri yapmamayı kabul edersiniz:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Başkasının hesabına izinsiz erişmeye çalışmak</li>
          <li>Uygulamanın işleyişini veya güvenliğini bozmaya çalışmak</li>
          <li>
            Uygulama içeriklerini izinsiz kopyalamak, çoğaltmak veya ticari
            amaçla dağıtmak
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Satın almalar ve abonelikler",
    body: (
      <>
        <p>
          Ücretli özellikler ve abonelikler, App Store veya Google Play
          üzerinden satın alınır. Ödeme, yenileme, iptal ve iade işlemleri
          ilgili mağazanın kurallarına tabidir.
        </p>
        <p className="mt-4">
          Haftalık, Aylık, 3 Aylık ve Yıllık planlar, iptal edilmediği sürece
          seçilen sürenin sonunda otomatik yenilenir. Ömür Boyu plan tek
          seferlik bir ödemedir ve yenilenmez. Hesabınızı silmek mağazadaki
          aboneliğinizi iptal etmez; aboneliği ayrıca mağazadan iptal etmeniz
          gerekir.
        </p>
        <p className="mt-4">
          Ayrıntılar için{" "}
          <Link className="font-medium text-teal-800 underline" href="/abonelik">
            Abonelik
          </Link>{" "}
          ve{" "}
          <Link
            className="font-medium text-teal-800 underline"
            href="/iade-politikasi"
          >
            İade Politikası
          </Link>{" "}
          sayfalarına bakabilirsiniz.
        </p>
      </>
    ),
  },
  {
    title: "6. Hesabın silinmesi",
    body: (
      <p>
        Hesabınızı ve verilerinizi istediğiniz zaman{" "}
        <Link className="font-medium text-teal-800 underline" href="/veri-silme">
          Hesap ve veri silme
        </Link>{" "}
        sayfasındaki adımlarla sildirebilirsiniz. Kişisel verilerin işlenmesi
        hakkında bilgi için{" "}
        <Link className="font-medium text-teal-800 underline" href="/gizlilik">
          Gizlilik Politikası
        </Link>
        &apos;nı inceleyebilirsiniz.
      </p>
    ),
  },
  {
    title: "7. Koşullarda değişiklik",
    body: (
      <p>
        Bu koşulları zaman zaman güncelleyebiliriz. Güncel metin her zaman bu
        sayfada yayımlanır ve sayfanın başındaki güncelleme tarihi değişir.
      </p>
    ),
  },
  {
    title: "8. İletişim",
    body: (
      <p>
        Bu koşullarla ilgili sorularınız için{" "}
        <a
          className="font-medium text-teal-800 underline"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
          {SUPPORT_EMAIL}
        </a>{" "}
        adresinden bize ulaşabilirsiniz.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <main>
      <PageHeader
        eyebrow="Yasal"
        title="Kullanım Koşulları"
        description="KampüsCep uygulamasının ve web sitesinin kullanımına ilişkin koşullar."
      >
        <p className="text-sm font-medium text-slate-500">
          Son güncelleme: 14 Ekim 2026
        </p>
      </PageHeader>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="space-y-10 text-slate-600">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-slate-900">
                {section.title}
              </h2>
              <div className="mt-3 leading-8">{section.body}</div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
