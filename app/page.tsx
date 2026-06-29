import Link from "next/link";

const leistungen = [
  {
    icon: (
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM9 22V12h6v10" />
    ),
    title: "Neuanlage & Planung",
    text: "Vom leeren Grundstück zum Traumgarten – wir planen und gestalten Ihren Außenbereich von Grund auf.",
  },
  {
    icon: (
      <>
        <path d="M17 8C8 10 5.9 16.17 3.82 22" />
        <path d="M11.75 8C11.75 8 11 16 3 22" />
        <path d="M20 6c0 0-3-2-7-1" />
      </>
    ),
    title: "Gartenpflege & Wartung",
    text: "Regelmäßige Pflege, Rasenmähen, Heckenschnitt und Saisonvorbereitung – damit Ihr Garten immer top aussieht.",
  },
  {
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    title: "Rasen & Bewässerung",
    text: "Professionelle Rasenpflege und die Planung effizienter Bewässerungsanlagen für einen grünen Garten auch im Sommer.",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </>
    ),
    title: "Saisonarbeiten",
    text: "Frühjahrsputz, Wintervorbereitung, Laubentsorgung – wir begleiten Ihren Garten durch alle Jahreszeiten.",
  },
];

const vorteile = [
  { zahl: "15+", label: "Jahre Erfahrung" },
  { zahl: "400+", label: "Zufriedene Kunden" },
  { zahl: "100%", label: "Qualitätsgarantie" },
];

export default function Startseite() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gruen-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gruen-900 via-gruen-800 to-gruen-700 opacity-95" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #7ABF38 0%, transparent 50%), radial-gradient(circle at 80% 20%, #5B9A2B 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gruen-700/60 text-gruen-200 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-gruen-600">
              <span className="w-1.5 h-1.5 rounded-full bg-gruen-300" />
              Wien &amp; Umgebung
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ihr Garten in{" "}
              <span className="text-gruen-300">besten Händen</span>
            </h1>
            <p className="text-lg text-gruen-200 leading-relaxed mb-10 max-w-xl">
              Grünwerk Gartenbau steht für professionelle Gartengestaltung,
              zuverlässige Pflege und nachhaltige Lösungen – seit über 15 Jahren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/leistungen"
                className="bg-gruen-400 hover:bg-gruen-300 text-gruen-900 font-bold px-7 py-3.5 rounded-xl transition-colors text-center"
              >
                Leistungen ansehen
              </Link>
              <Link
                href="/ueber-uns"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 transition-colors text-center"
              >
                Über uns
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Kennzahlen */}
      <section className="bg-white border-b border-sand-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 divide-x divide-sand-200">
            {vorteile.map((v) => (
              <div key={v.label} className="text-center px-6 py-4">
                <div className="text-3xl md:text-4xl font-bold text-gruen-700 mb-1">
                  {v.zahl}
                </div>
                <div className="text-sm text-gray-500">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen Vorschau */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gruen-900 mb-4">
              Was wir für Sie tun
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Von der Planung bis zur Pflege – Grünwerk bietet alles aus einer Hand.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leistungen.map((l) => (
              <div
                key={l.title}
                className="bg-white rounded-2xl p-6 border border-sand-200 hover:shadow-md hover:border-gruen-200 transition-all group"
              >
                <div className="w-11 h-11 bg-gruen-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gruen-200 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-gruen-700"
                  >
                    {l.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-gruen-900 mb-2">{l.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{l.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/leistungen"
              className="inline-flex items-center gap-2 text-gruen-700 font-semibold hover:text-gruen-800 transition-colors"
            >
              Alle Leistungen ansehen
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Galerie Platzhalter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sand-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gruen-900 mb-4">
              Unsere Projekte
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Einblicke in abgeschlossene Gartenprojekte aus Wien und Umgebung.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Gartenneuanlage, 1190 Wien" },
              { label: "Terrassengestaltung, 1130 Wien" },
              { label: "Rasen & Bewässerung, 1220 Wien" },
              { label: "Heckenschnitt & Pflege, 1140 Wien" },
              { label: "Frühjahrsputz, 1180 Wien" },
              { label: "Neuanlage Vorgarten, 1150 Wien" },
            ].map((p, i) => (
              <div
                key={i}
                className="h-52 bg-gruen-100 rounded-2xl flex items-end p-4 overflow-hidden relative border border-gruen-200"
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(ellipse at ${i % 2 === 0 ? "30%" : "70%"} ${i < 3 ? "70%" : "30%"}, #5B9A2B 0%, transparent 60%)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="w-16 h-16 text-gruen-300"
                  >
                    <path d="M12 22V12M12 12C12 7 7 3 2 4c0 5 3 9 7 10M12 12c0-5 5-9 10-8-1 5-5 8-10 8" />
                  </svg>
                </div>
                <span className="relative text-xs font-medium text-gruen-800 bg-white/80 px-2.5 py-1 rounded-lg">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gruen-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihren Traumgarten?
          </h2>
          <p className="text-gruen-200 text-lg mb-8">
            Kontaktieren Sie uns für eine kostenlose Erstberatung – wir melden uns innerhalb von 24 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+43123456789"
              className="bg-white text-gruen-800 font-bold px-7 py-3.5 rounded-xl hover:bg-gruen-50 transition-colors"
            >
              +43 1 234 56 789
            </a>
            <a
              href="mailto:info@gruenwerk-gartenbau.at"
              className="bg-gruen-600 text-white font-semibold px-7 py-3.5 rounded-xl border border-gruen-500 hover:bg-gruen-500 transition-colors"
            >
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
