import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unsere Prozesse – Grünwerk Gartenbau",
  description: "Wie Grünwerk Gartenbau mit Pichler Advisory Abläufe digitalisiert und optimiert hat.",
};

const prozesse = [
  {
    nr: "01",
    title: "Digitale Auftragserfassung",
    problem: "Früher wurden Aufträge per Telefon aufgenommen, auf Papier notiert und manchmal dabei wichtige Details vergessen.",
    loesung:
      "Heute erfassen Mitarbeiter jeden Auftrag direkt per Tablet vor Ort – strukturiert, vollständig und sofort im System.",
    ergebnis: "Keine Informationsverluste, Aufträge sofort für alle sichtbar",
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </>
    ),
  },
  {
    nr: "02",
    title: "Angebots- & Rechnungsstellung",
    problem: "Angebote wurden manuell in Word erstellt, ausgedruckt und per Post verschickt. Ein Angebot dauerte früher bis zu einer Stunde.",
    loesung:
      "Standardisierte digitale Vorlagen, automatisch befüllt aus dem Kundenprofil. Angebot erstellt, geprüft, verschickt – in unter 10 Minuten.",
    ergebnis: "80 % weniger Zeit pro Angebot, weniger Fehler, schnellere Abschlüsse",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </>
    ),
  },
  {
    nr: "03",
    title: "Kundenverwaltung (CRM)",
    problem: "Kundendaten lagen in Excel-Tabellen, E-Mails und Notizzetteln verteilt. Wer wann was gemacht hat, war kaum nachvollziehbar.",
    loesung:
      "Ein zentrales CRM für alle Kundendaten, Kontaktverläufe, Auftragshistorie und Wiedervorlage-Termine. Jeder Mitarbeiter sieht den aktuellen Stand.",
    ergebnis: "Vollständige Kundenhistorie auf einen Blick, keine doppelte Datenpflege",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </>
    ),
  },
  {
    nr: "04",
    title: "Mitarbeitereinsatzplanung",
    problem: "Dienstpläne wurden per WhatsApp kommuniziert. Kurzfristige Änderungen führten zu Verwirrung, Doppelbuchungen und unnötigen Telefonaten.",
    loesung:
      "Digitale Wochenplanung mit automatischer Benachrichtigung. Jeder Mitarbeiter sieht seinen Plan per App, Änderungen kommen sofort an.",
    ergebnis: "50 % weniger Koordinationsaufwand, keine Missverständnisse mehr",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  },
  {
    nr: "05",
    title: "Dokumentation & Abnahme",
    problem: "Nach Projektabschluss gab es keine systematische Dokumentation. Kundenfeedback blieb mündlich, Mängel wurden nicht strukturiert erfasst.",
    loesung:
      "Digitale Abnahmeprotokolle direkt beim Kunden unterzeichnet, inklusive Fotos und Notizen. Alles wird automatisch der Kundenakte zugeordnet.",
    ergebnis: "Rechtssichere Abnahmen, klare Nachweise, mehr Vertrauen beim Kunden",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </>
    ),
  },
];

const kennzahlen = [
  { wert: "3×", label: "schnellere Angebotserstellung" },
  { wert: "−60%", label: "Verwaltungsaufwand" },
  { wert: "100%", label: "digitale Kundenakten" },
  { wert: "0", label: "Papier-Auftragszettel" },
];

export default function Prozesse() {
  return (
    <>
      {/* Header – Pichler Advisory Branding */}
      <section className="bg-gruen-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, #7ABF38 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gruen-700/50 text-gruen-200 text-xs font-medium px-3 py-1.5 rounded-full mb-5 border border-gruen-600">
            Umgesetzt mit
            <span className="text-white font-semibold">Pichler Advisory</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Prozesse</h1>
          <p className="text-gruen-200 text-lg max-w-xl">
            Wie Grünwerk Gartenbau 2023 seine Abläufe von Grund auf digitalisiert hat – und was das im Alltag bedeutet.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-sand-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gruen-900 mb-4">
              Die Ausgangslage
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Grünwerk Gartenbau war ein gut funktionierender Betrieb – aber mit einem Problem, das viele Handwerksbetriebe kennen: Die handwerkliche Qualität war top, die Abläufe dahinter aber noch nicht.
              </p>
              <p>
                Aufträge auf Papier, Angebote in Word, Kundendaten in Excel, Dienstpläne per WhatsApp. Das kostet Zeit, erzeugt Fehler und macht Wachstum schwer.
              </p>
              <p>
                Gemeinsam mit <strong className="text-gruen-700">Pichler Advisory</strong> wurden in drei Monaten die zentralen Prozesse analysiert, vereinfacht und digitalisiert – ohne den laufenden Betrieb zu unterbrechen.
              </p>
            </div>
          </div>

          {/* Vorher/Nachher Badge */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <div className="text-red-500 font-bold text-sm mb-3 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <circle cx="12" cy="12" r="10" /><path d="M15 9l-6 6M9 9l6 6" />
                </svg>
                Vorher
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Papier-Auftragszettel</li>
                <li>Word-Angebote</li>
                <li>Excel-Kundenlisten</li>
                <li>WhatsApp-Dienstplan</li>
                <li>Keine Abnahmedoku</li>
              </ul>
            </div>
            <div className="bg-gruen-50 border border-gruen-100 rounded-2xl p-5">
              <div className="text-gruen-700 font-bold text-sm mb-3 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
                </svg>
                Nachher
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Tablet-Auftragserfassung</li>
                <li>Automatische Angebote</li>
                <li>Zentrales CRM</li>
                <li>Digitale Einsatzplanung</li>
                <li>Digitale Abnahme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prozess-Schritte */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gruen-900 mb-4">
              Was umgesetzt wurde
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Fünf Bereiche, fünf Verbesserungen – konkret und messbar.
            </p>
          </div>

          <div className="space-y-6">
            {prozesse.map((p, i) => (
              <div
                key={p.nr}
                className={`bg-white rounded-2xl border border-sand-200 overflow-hidden hover:shadow-md transition-all`}
              >
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0">
                  {/* Nummer + Icon */}
                  <div className={`flex flex-col items-center justify-center p-8 ${i % 2 === 0 ? "bg-gruen-700" : "bg-gruen-800"} text-white min-w-[120px]`}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 mb-3 text-gruen-200"
                    >
                      {p.icon}
                    </svg>
                    <span className="text-2xl font-bold text-gruen-200">{p.nr}</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="font-bold text-gruen-900 text-xl mb-4">{p.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
                          Herausforderung
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{p.problem}</p>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-gruen-600 mb-2">
                          Lösung
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{p.loesung}</p>
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-sand-100 flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="w-4 h-4 text-gruen-500 shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-sm font-medium text-gruen-700">{p.ergebnis}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kennzahlen */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gruen-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Das Ergebnis in Zahlen
            </h2>
            <p className="text-gruen-300 max-w-lg mx-auto">
              Sechs Monate nach der Umstellung – die wichtigsten Kennzahlen auf einen Blick.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kennzahlen.map((k) => (
              <div
                key={k.label}
                className="bg-gruen-700/50 rounded-2xl p-6 text-center border border-gruen-600"
              >
                <div className="text-4xl font-bold text-gruen-300 mb-2">{k.wert}</div>
                <div className="text-sm text-gruen-200">{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pichler Advisory CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sand-50 border-t border-sand-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-gruen-100 text-gruen-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-gruen-200">
            Musterbetrieb von Pichler Advisory
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gruen-900 mb-4">
            Das ist möglich – auch für Ihren Betrieb
          </h2>
          <p className="text-gray-500 text-lg mb-3 max-w-2xl mx-auto">
            Grünwerk Gartenbau ist ein Beispiel dafür, was Pichler Advisory in einem handwerklichen Betrieb umsetzt. Keine Theorie – konkrete Lösungen, die im Alltag funktionieren.
          </p>
          <p className="text-gray-400 text-sm mb-10">
            Angebotserstellung, CRM, Einsatzplanung, Dokumentation – individuell auf Ihren Betrieb abgestimmt.
          </p>
          <a
            href="https://pichler-advisory.at"
            className="inline-block bg-gruen-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-gruen-800 transition-colors text-lg"
          >
            Jetzt mit Pichler Advisory sprechen
          </a>
        </div>
      </section>
    </>
  );
}
