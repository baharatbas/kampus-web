import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "KampüsCep'in hangi kişisel verileri neden topladığını, nasıl sakladığını ve silme haklarınızı açıklayan gizlilik politikası.",
};

const SUPPORT_EMAIL = "destekkampus1@gmail.com";

const dataItems = [
  {
    type: "E-posta adresi",
    purpose: "Hesap oluşturma, oturum açma ve destek yazışmaları",
  },
  {
    type: "Kullanıcı adı",
    purpose: "Hesabın tanımlanması ve uygulama içi kullanım",
  },
  {
    type: "Şifre",
    purpose: "Hesap güvenliği ve kimlik doğrulama",
  },
  {
    type: "Çalışma programı ve ilerleme",
    purpose:
      "Bireysel çalışma programınızın oluşturulması ve ilerlemenizin hesabınızla ilişkilendirilmesi",
  },
];

const sections = [
  {
    title: "1. Toplanan veriler",
    body: (
      <>
        <p>
          KampüsCep, hesabınızı oluşturmak ve hizmeti sunmak için yalnızca
          aşağıdaki verileri toplar:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>E-posta adresi</li>
          <li>Kullanıcı adı</li>
          <li>Şifre</li>
          <li>
            Uygulama içinde oluşturduğunuz çalışma programı ve ilerleme
            bilgileriniz
          </li>
        </ul>
        <p className="mt-4">
          Bunların dışında başka bir kişisel veri toplanmaz.
        </p>
      </>
    ),
  },
  {
    title: "2. Verilerin kullanım amacı",
    body: (
      <>
        <p>
          KampüsCep&apos;te kişiye özel bir çalışma deneyimi sunabilmek için kullanıcı
          hesabı gereklidir. Hesap bilgileriniz; bireysel çalışma programınızı
          oluşturmak, ilerlemenizi kayıt altında tutmak ve bu verilere
          yalnızca sizin erişebilmenizi sağlamak amacıyla kullanılır.
        </p>
        <p className="mt-4">
          Verileriniz bu amaçlar dışında kullanılmaz; satılmaz veya
          kiralanmaz.
        </p>
      </>
    ),
  },
  {
    title: "3. Verilerin saklanması",
    body: (
      <p>
        Hesap bilgileriniz MongoDB veri tabanında saklanır. Verileriniz,
        hesabınızı silene kadar saklanmaya devam eder.
      </p>
    ),
  },
  {
    title: "4. Saklama süresi ve silme",
    body: (
      <>
        <p>
          Verileriniz hesabınız aktif olduğu sürece saklanır. Hesabınızı
          sildiğinizde, hesabınızla ilişkili kişisel verileriniz de
          silinir.
        </p>
        <p className="mt-4">
          Hesap ve veri silme talebinizi{" "}
          <Link className="font-medium text-teal-800 underline" href="/veri-silme">
            Hesap ve veri silme
          </Link>{" "}
          sayfasındaki adımlarla iletebilirsiniz.
        </p>
      </>
    ),
  },
  {
    title: "5. Haklarınız",
    body: (
      <>
        <p>
          Kişisel verilerinize ilişkin silme talebinde bulunma hakkına
          sahipsiniz. Ayrıca 6698 sayılı Kişisel Verilerin Korunması Kanunu
          kapsamındaki diğer haklarınız için{" "}
          <Link className="font-medium text-teal-800 underline" href="/kvkk">
            KVKK aydınlatma metnini
          </Link>{" "}
          inceleyebilirsiniz.
        </p>
      </>
    ),
  },
  {
    title: "6. İletişim",
    body: (
      <p>
        KampüsCep, Bahar Atbaş (BATEK) tarafından geliştirilmekte ve
        işletilmektedir. Veri sorumlusunun iletişim bilgileri{" "}
        <Link className="font-medium text-teal-800 underline" href="/kvkk">
          KVKK aydınlatma metninde
        </Link>{" "}
        yer alır. Gizlilik politikamız, verileriniz veya destek
        talepleriniz için bize{" "}
        <a
          className="font-medium text-teal-800 underline"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
          {SUPPORT_EMAIL}
        </a>{" "}
        adresinden ulaşabilirsiniz.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <main>
      <PageHeader
        eyebrow="Yasal"
        title="Gizlilik politikası"
        description="KampüsCep'te hangi verileri neden topladığımızı, nasıl sakladığımızı ve verileriniz üzerindeki haklarınızı burada açıkça bulabilirsiniz."
      >
        <p className="text-sm font-medium text-slate-500">
          Son güncelleme: 14 Ekim 2026
        </p>
      </PageHeader>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900">Özet</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Aşağıdaki tablo, hesabınız için topladığımız verileri ve kullanım
            amaçlarını özetler.
          </p>

          <ul className="mt-6 divide-y divide-slate-100">
            {dataItems.map((item) => (
              <li
                key={item.type}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-start sm:gap-6"
              >
                <span className="font-semibold text-slate-900 sm:w-56 sm:shrink-0">
                  {item.type}
                </span>
                <span className="text-sm leading-7 text-slate-600">
                  {item.purpose}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl bg-teal-50 p-5 text-sm leading-7 text-teal-900">
            Verileriniz hesabınızı silene kadar saklanır. Silme talebinde
            bulunma hakkına sahipsiniz.
          </div>
        </div>

        <div className="mt-12 space-y-10 text-slate-600">
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
