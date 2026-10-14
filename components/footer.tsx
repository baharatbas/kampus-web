import Link from "next/link";

const columns = [
  {
    title: "KampüsCep",
    links: [
      { href: "/hakkimizda", label: "Hakkımızda" },
      { href: "/ozellikler", label: "Özellikler" },
      { href: "/sinavlar", label: "Sınavlar" },
      { href: "/indir", label: "Uygulamayı Keşfet" },
    ],
  },
  {
    title: "Destek",
    links: [
      { href: "/destek", label: "Destek Merkezi" },
      { href: "/iletisim", label: "İletişim" },
      { href: "/abonelik", label: "Abonelik" },
      { href: "/iade-politikasi", label: "İade Politikası" },
      { href: "/veri-silme", label: "Hesap / Veri Silme" },
    ],
  },
  {
    title: "Yasal",
    links: [
      { href: "/gizlilik", label: "Gizlilik Politikası" },
      { href: "/gizlilik-tercihleri", label: "Gizlilik Tercihleri" },
      { href: "/kullanim-kosullari", label: "Kullanım Koşulları" },
      { href: "/kvkk", label: "KVKK" },
      { href: "/cerez-politikasi", label: "Çerez Politikası" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-700 text-sm font-bold text-white">
                K
              </span>
              <span className="font-semibold text-slate-900">KampüsCep</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              KPSS, YKS, LGS ve AGS hazırlığını konu özetleri, soru çözümü,
              podcast ve zihin haritalarıyla daha düzenli hale getirir.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold text-slate-900">{column.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link className="transition hover:text-teal-800" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 KampüsCep · Bahar Atbaş (BATEK). Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/gizlilik">Gizlilik</Link>
            <Link href="/kullanim-kosullari">Koşullar</Link>
            <Link href="/iletisim">İletişim</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
