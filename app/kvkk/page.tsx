import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında KampüsCep aydınlatma metni: işlenen veriler, amaçlar, hukuki sebepler ve haklarınız.",
};

const SUPPORT_EMAIL = "destekkampus1@gmail.com";

const rights = [
  "Kişisel verilerinizin işlenip işlenmediğini öğrenme,",
  "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,",
  "Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,",
  "Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,",
  "Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,",
  "Kanunda öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,",
  "Düzeltme, silme veya yok edilme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
  "İşlenen verilerin münhasıran otomatik sistemler aracılığıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,",
  "Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.",
];

const dataRows = [
  {
    data: "E-posta adresi",
    purpose: "Hesap oluşturma, oturum açma ve destek yazışmaları",
  },
  {
    data: "Kullanıcı adı",
    purpose: "Hesabın tanımlanması ve uygulama içi kullanım",
  },
  {
    data: "Şifre",
    purpose: "Hesap güvenliği ve kimlik doğrulama",
  },
  {
    data: "Çalışma programı ve ilerleme bilgileri",
    purpose:
      "Bireysel çalışma programının oluşturulması ve ilerlemenin hesapla ilişkilendirilmesi",
  },
];

export default function Page() {
  return (
    <main>
      <PageHeader
        eyebrow="Yasal"
        title="KVKK aydınlatma metni"
        description="6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi kapsamında, kişisel verilerinizin KampüsCep tarafından nasıl işlendiğine ilişkin bilgilendirme."
      >
        <p className="text-sm font-medium text-slate-500">
          Son güncelleme: 14 Ekim 2026
        </p>
      </PageHeader>

      <section className="mx-auto max-w-3xl space-y-10 px-4 py-14 text-slate-600 sm:px-6">
        <section>
          <h2 className="text-xl font-bold text-slate-900">1. Veri sorumlusu</h2>
          <p className="mt-3 leading-8">
            Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu
            (“Kanun”) uyarınca veri sorumlusu sıfatıyla, KampüsCep
            uygulamasının geliştiricisi <strong>Bahar Atbaş</strong> (BATEK
            adıyla) tarafından işlenmektedir.
          </p>
          <dl className="mt-5 space-y-3 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <dt className="font-semibold text-slate-900 sm:w-28 sm:shrink-0">
                Veri sorumlusu
              </dt>
              <dd>Bahar Atbaş (BATEK)</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <dt className="font-semibold text-slate-900 sm:w-28 sm:shrink-0">
                Adres
              </dt>
              <dd>İstanbul, Türkiye</dd>
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <dt className="font-semibold text-slate-900 sm:w-28 sm:shrink-0">
                E-posta
              </dt>
              <dd>
                <a
                  className="font-medium text-teal-800 underline"
                  href={`mailto:${SUPPORT_EMAIL}`}
                >
                  {SUPPORT_EMAIL}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            2. İşlenen kişisel veriler ve işleme amaçları
          </h2>
          <p className="mt-3 leading-8">
            KampüsCep&apos;te hesap oluşturduğunuzda aşağıdaki kişisel verileriniz
            işlenir. Bunların dışında hesabınızla ilişkili başka bir kişisel
            veri toplanmaz.
          </p>
          <ul className="mt-5 divide-y divide-slate-100 rounded-3xl border border-slate-200 bg-white px-6">
            {dataRows.map((row) => (
              <li
                key={row.data}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6"
              >
                <span className="font-semibold text-slate-900 sm:w-48 sm:shrink-0">
                  {row.data}
                </span>
                <span className="text-sm leading-7">{row.purpose}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 leading-8">
            Bu veriler, kişiye özel bireysel çalışma programı oluşturabilmeniz,
            uygulama içi ilerlemenizin hesabınızla ilişkilendirilebilmesi ve
            tarafınıza destek sağlanabilmesi amaçlarıyla işlenir. Verileriniz
            reklam veya pazarlama amacıyla kullanılmaz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            3. Toplama yöntemi ve hukuki sebep
          </h2>
          <p className="mt-3 leading-8">
            Kişisel verileriniz, uygulamadaki kayıt ve giriş ekranları
            aracılığıyla, otomatik olmayan yöntemlerle, doğrudan sizden
            toplanır.
          </p>
          <p className="mt-4 leading-8">
            Verileriniz Kanun&apos;un 5. maddesinin 2. fıkrası uyarınca;{" "}
            <strong>“bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya
            ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel
            verilerin işlenmesinin gerekli olması”</strong> (c bendi) ve{" "}
            <strong>“ilgili kişinin temel hak ve özgürlüklerine zarar
            vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri
            işlenmesinin zorunlu olması”</strong> (f bendi) hukuki sebeplerine
            dayanılarak işlenir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            4. Verilerin aktarılması
          </h2>
          <p className="mt-3 leading-8">
            Kişisel verileriniz üçüncü kişilere satılmaz, kiralanmaz ve
            pazarlama amacıyla paylaşılmaz. Verileriniz, veri tabanı
            altyapısını sağlayan hizmet sağlayıcı (MongoDB) nezdinde
            barındırılır; bu hizmet sağlayıcı verileri yalnızca KampüsCep adına
            ve hizmetin sunulması amacıyla işler. Yasal bir yükümlülük
            doğması hâlinde, yetkili kamu kurum ve kuruluşlarına mevzuatın
            öngördüğü ölçüde bilgi verilebilir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            5. Saklama süresi
          </h2>
          <p className="mt-3 leading-8">
            Verileriniz, hesabınızı silene kadar saklanır. Hesabınızı
            sildiğinizde hesabınızla ilişkili kişisel verileriniz de silinir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">
            6. Kanun&apos;un 11. maddesi kapsamındaki haklarınız
          </h2>
          <p className="mt-3 leading-8">
            Veri sahibi olarak Kanun&apos;un 11. maddesi uyarınca aşağıdaki haklara
            sahipsiniz:
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-8">
            {rights.map((right) => (
              <li key={right}>{right}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900">7. Başvuru yöntemi</h2>
          <p className="mt-3 leading-8">
            Yukarıdaki haklarınıza ilişkin taleplerinizi, hesabınızı
            oluştururken kullandığınız e-posta adresinden{" "}
            <a
              className="font-medium text-teal-800 underline"
              href={`mailto:${SUPPORT_EMAIL}?subject=KVKK%20ba%C5%9Fvurusu`}
            >
              {SUPPORT_EMAIL}
            </a>{" "}
            adresine iletebilirsiniz. Başvurunuzda kullanıcı adınızı ve talebinizin
            konusunu açıkça belirtmeniz, kimliğinizin doğrulanabilmesi için
            gereklidir.
          </p>
          <p className="mt-4 leading-8">
            Başvurularınız, talebin niteliğine göre en kısa sürede ve en geç
            otuz gün içinde sonuçlandırılır. Başvurunuza verilen cevabı
            yetersiz bulmanız veya süresinde cevap verilmemesi hâlinde,
            Kanun&apos;un 14. maddesi uyarınca Kişisel Verileri Koruma Kurulu&apos;na
            şikâyette bulunma hakkınız saklıdır.
          </p>
          <p className="mt-4 leading-8">
            Hesabınızın ve verilerinizin silinmesini talep etmek için{" "}
            <Link className="font-medium text-teal-800 underline" href="/veri-silme">
              Hesap ve veri silme
            </Link>{" "}
            sayfasını kullanabilirsiniz. Verilerinizin işlenmesine ilişkin
            genel bilgi için{" "}
            <Link className="font-medium text-teal-800 underline" href="/gizlilik">
              Gizlilik Politikası
            </Link>
            &apos;nı inceleyebilirsiniz.
          </p>
        </section>
      </section>
    </main>
  );
}
