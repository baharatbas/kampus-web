"use client";

import { useState } from "react";
import { contactTopics } from "@/lib/support";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:ring-4 focus:ring-teal-50";

export function ContactForm({
  submitLabel = "Gönder",
  intro,
}: {
  submitLabel?: string;
  intro?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      {intro ? (
        <p className="mb-6 text-sm leading-6 text-slate-600">{intro}</p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-800">
          Ad Soyad
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Adınızı yazın"
            className={fieldClass}
          />
        </label>
        <label className="block text-sm font-medium text-slate-800">
          E-posta
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="E-posta adresiniz"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-slate-800">
        Destek kategorisi
        <select name="category" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Kategori seçin
          </option>
          {contactTopics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.title}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-5 block text-sm font-medium text-slate-800">
        Konu
        <input
          name="subject"
          type="text"
          placeholder="Kısa bir konu başlığı"
          className={fieldClass}
        />
      </label>

      <label className="mt-5 block text-sm font-medium text-slate-800">
        Mesaj
        <textarea
          name="message"
          rows={6}
          placeholder="Talebinizi bu alana yazın"
          className={`${fieldClass} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-teal-900/15 transition hover:bg-teal-800"
      >
        {submitLabel}
      </button>

      {submitted ? (
        <p className="mt-4 text-sm leading-6 text-teal-800" role="status">
          Form arayüzü hazır. Gönderim sistemi henüz bağlı değil; iletiler kaydedilmez.
        </p>
      ) : (
        <p className="mt-4 text-sm text-slate-500">
          Gönderim altyapısı sonraki aşamada eklenecek.
        </p>
      )}
    </form>
  );
}
