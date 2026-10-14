import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Gizlilik Tercihleri",
  description:
    "KampüsCep'te hangi verilerin işlendiği ve verileriniz üzerindeki kontrolünüz hakkında bilgi.",
};

const SUPPORT_EMAIL = "destekkampus1@gmail.com";

const items = [
  {
    title: "Çerezler",
    status: "Kullanılmıyor",
    text: "Web sitesi ve uygulama çerez kullanmaz; yönetmeniz gereken bir çerez tercihi yoktur.",
  },
  {
    title: "Analiz ve reklam",
    status: "Kullanılmıyor",
    text: "Kullanımınızı izleyen analiz, reklam veya pazarlama araçları entegre edilmemiştir.",
  },
  {
    title: "Hesap verileri",
    status: "Yalnızca hesap için",
    text: "E-posta adresi, kullanıcı adı ve şifre; yalnızca hesabınızı oluşturmak ve çalışma programınızı kişiselleştirmek için kullanılır.",
  },
];

export default function Page() {
  return (
    <main>
      <PageHeader
        eyebrow="Gizlilik"
        title="Gizlilik Tercihleri"
        description="KampüsCep'te verileriniz üzerinde kontrol sizdedir. Burada hangi verilerin işlendiğini ve bunları nasıl yönetebileceğinizi özetledik."
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-semibold text-slate-900">{item.title}</h2>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white">
          <h2 className="text-xl font-bold">Verilerinizi yönetin</h2>
          <p className="mt-3 leading-7 text-slate-300">
            Hesabınızı ve verilerinizi istediğiniz zaman sildirebilirsiniz.
            Sorularınız için{" "}
            <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>{" "}
            adresine yazabilirsiniz.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link
              className="rounded-full bg-white px-5 py-3 text-slate-900"
              href="/veri-silme"
            >
              Hesap ve veri silme
            </Link>
            <Link
              className="rounded-full border border-slate-600 px-5 py-3 text-white"
              href="/gizlilik"
            >
              Gizlilik politikası
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
