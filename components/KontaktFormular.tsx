"use client";

import { useState } from "react";

const WEBHOOK_URL = "https://hook.eu1.make.com/e1b993rvhyz515ekr6y124qkt64vw0h3";

const leistungen = [
  "Neuanlage & Gartengestaltung",
  "Gartenpflege & Wartung",
  "Rasenpflege & Bewässerung",
  "Heckenschnitt",
  "Saisonarbeiten",
  "Anderes",
];

type Status = "idle" | "loading" | "success" | "error";

export default function KontaktFormular() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefon: "",
    leistung: "",
    nachricht: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          quelle: "Website Grünwerk Gartenbau",
          zeitstempel: new Date().toISOString(),
        }),
      });
      setStatus("success");
      setForm({ name: "", email: "", telefon: "", leistung: "", nachricht: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-10 border border-gruen-200 text-center shadow-sm">
        <div className="w-16 h-16 bg-gruen-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gruen-600">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gruen-900 mb-2">Nachricht erhalten!</h3>
        <p className="text-gray-500 text-sm max-w-sm mx-auto">
          Vielen Dank, {form.name || ""}. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm space-y-5">
      {/* Name + Telefon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
            Name <span className="text-gruen-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Max Mustermann"
            className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gruen-400 focus:border-transparent transition placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
            Telefon
          </label>
          <input
            type="tel"
            name="telefon"
            value={form.telefon}
            onChange={handleChange}
            placeholder="+41 71 000 00 00"
            className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gruen-400 focus:border-transparent transition placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* E-Mail */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
          E-Mail <span className="text-gruen-600">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="max@beispiel.ch"
          className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gruen-400 focus:border-transparent transition placeholder:text-gray-400"
        />
      </div>

      {/* Leistung */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
          Gewünschte Leistung
        </label>
        <select
          name="leistung"
          value={form.leistung}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gruen-400 focus:border-transparent transition appearance-none"
        >
          <option value="">Bitte wählen…</option>
          {leistungen.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      {/* Nachricht */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
          Nachricht <span className="text-gruen-600">*</span>
        </label>
        <textarea
          name="nachricht"
          required
          rows={4}
          value={form.nachricht}
          onChange={handleChange}
          placeholder="Beschreiben Sie kurz, was Sie benötigen…"
          className="w-full px-4 py-2.5 rounded-xl border border-sand-200 bg-sand-50 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gruen-400 focus:border-transparent transition resize-none placeholder:text-gray-400"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm bg-red-50 rounded-xl px-4 py-2.5 border border-red-200">
          Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gruen-700 hover:bg-gruen-800 disabled:bg-gruen-400 text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-md disabled:cursor-not-allowed text-sm tracking-wide"
      >
        {status === "loading" ? "Wird gesendet…" : "Nachricht senden"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Wir melden uns innerhalb von 24 Stunden · Keine Weitergabe Ihrer Daten
      </p>
    </form>
  );
}
