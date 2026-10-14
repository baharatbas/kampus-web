"use client";

import { useEffect, useMemo, useState } from "react";
import { SupportCard } from "@/components/support/support-card";
import { supportCategories } from "@/lib/support";

export function SupportSearch() {
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!mounted || !value) return supportCategories;
    return supportCategories.filter(
      (item) =>
        item.title.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value),
    );
  }, [mounted, query]);

  return (
    <div>
      <label className="block max-w-2xl">
        <span className="sr-only">Destek ara</span>
        <span className="relative block">
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            autoComplete="off"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Sorununuzu veya bir kategori yazın"
            className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 shadow-sm shadow-slate-200/70 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:ring-4 focus:ring-teal-50"
          />
        </span>
      </label>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((item) => (
          <SupportCard
            key={item.id}
            title={item.title}
            description={item.description}
            href={"href" in item && item.href ? item.href : `#${item.id}`}
          />
        ))}
      </div>

      {results.length === 0 ? (
        <p className="mt-6 rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-5 py-6 text-sm text-slate-600">
          Bu aramaya uyan bir kategori yok. İletişim formundan talep oluşturabilirsiniz.
        </p>
      ) : null}
    </div>
  );
}
