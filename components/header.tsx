"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/ozellikler", label: "Özellikler" },
  { href: "/sinavlar", label: "Sınavlar" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/destek", label: "Destek" },
];

const supportPaths = [
  "/destek",
  "/iletisim",
  "/abonelik",
  "/iade-politikasi",
  "/veri-silme",
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-teal-700 text-sm font-bold text-white shadow-sm shadow-teal-900/20">
            K
          </span>
          <span className="min-w-0">
            <span className="block font-semibold tracking-tight text-slate-900">
              KampüsCep
            </span>
            <span className="hidden text-[11px] text-slate-500 lg:block">
              Sınava hazırlan, geleceğini şekillendir
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {navItems.map((item) => {
            const active =
              ready &&
              (item.href === "/"
                ? pathname === "/"
                : item.href === "/destek"
                  ? supportPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`))
                  : pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-teal-50 text-teal-800"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/indir"
            className="hidden rounded-full bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-teal-900/15 transition hover:bg-teal-800 lg:inline-flex"
          >
            Uygulamayı Keşfet
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Kapat" : "Menü"}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobil menü"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/indir"
              className="mt-2 rounded-xl bg-teal-700 px-3 py-3 text-center text-base font-semibold text-white"
            >
              Uygulamayı Keşfet
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
