import Link from "next/link";

export function SupportCard({
  title,
  description,
  href,
  eyebrow,
}: {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lg hover:shadow-slate-200/80"
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-5 text-sm font-semibold text-teal-800 group-hover:underline">
        İncele
      </span>
    </Link>
  );
}
