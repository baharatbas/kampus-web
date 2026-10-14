export function PricingCard({
  name,
  cadence,
  price,
  monthlyEquivalent,
  saving,
  badge,
  note,
  featured = false,
}: {
  name: string;
  cadence: string;
  price: string;
  monthlyEquivalent?: string;
  saving?: string;
  badge?: string;
  note: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/80 ${
        featured
          ? "border-teal-300 shadow-slate-200/70 ring-2 ring-teal-100"
          : "border-slate-200 shadow-slate-200/50"
      }`}
    >
      <div className="flex min-h-6 items-center">
        {badge ? (
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              featured ? "bg-teal-700 text-white" : "bg-slate-100 text-slate-700"
            }`}
          >
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="mt-3 text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-500">{cadence}</p>
      <p className="mt-6 text-3xl font-semibold tracking-tight text-slate-900">{price}</p>
      <p className="mt-2 min-h-6 text-sm text-slate-500">{monthlyEquivalent}</p>
      {saving ? (
        <p className="mt-3 inline-flex w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
          {saving}
        </p>
      ) : null}
      <p className="mt-auto pt-6 text-sm leading-6 text-slate-600">{note}</p>
    </article>
  );
}
