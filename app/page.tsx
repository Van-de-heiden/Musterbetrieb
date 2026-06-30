import Link from "next/link";
import Image from "next/image";
import KontaktFormular from "@/components/KontaktFormular";

const leistungen = [
  {
    icon: <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM9 22V12h6v10" />,
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
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
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
  { zahl: "15+", label: "Jahre Erfahrung", icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /> },
  { zahl: "150+", label: "Zufriedene Kunden", icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></> },
  { zahl: "100%", label: "Qualitätsgarantie", icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></> },
];

const projekte = [
  { src: "/projekt-blumen.png", label: "Blumenbeet & Staudenpflanzung" },
  { src: "/projekt-brunnen.png", label: "Wasserelement & Brunnen" },
  { src: "/projekt-sitzplatz.png", label: "Terrassengestaltung" },
  { src: "/projekt-treppe.png", label: "Gartentreppe & Wege" },
  { src: "/projekt-2.png", label: "Neuanlage Hausgarten" },
  { src: "/rasen.png", label: "Rasenpflege & Neuanlage" },
];

export default function Startseite() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[520px] max-h-[780px] flex items-center overflow-hidden">
        <Image
          src="/sitzplatz.png"
          alt="Professionell gestalteter Garten mit Terasse"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gruen-900/85 via-gruen-900/60 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-gruen-100 text-xs font-semibold px-4 py-2 rounded-full mb-8 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-gruen-300 animate-pulse" />
              Gartengestaltung · Ostschweiz
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
              Ihr Garten in{" "}
              <span className="text-gruen-300">besten Händen</span>
            </h1>
            <p className="text-lg text-gruen-100/90 leading-relaxed mb-10 max-w-lg">
              Professionelle Gartengestaltung, zuverlässige Pflege und nachhaltige Lösungen –
              seit über 15 Jahren im Einsatz für Kunden in Uzwil, Wil, Flawil und Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/leistungen"
                className="bg-gruen-400 hover:bg-gruen-300 text-gruen-900 font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg text-center"
              >
                Leistungen ansehen
              </Link>
              <a
                href="tel:+41719501234"
                className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/30 transition-all backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Kennzahlen */}
      <section className="bg-white border-b border-sand-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-4">
            {vorteile.map((v) => (
              <div key={v.label} className="flex flex-col items-center text-center py-4 px-2 rounded-2xl hover:bg-gruen-50 transition-colors group">
                <div className="w-10 h-10 bg-gruen-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-gruen-200 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gruen-600">
                    {v.icon}
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gruen-700 mb-0.5">{v.zahl}</div>
                <div className="text-xs md:text-sm text-gray-500 font-medium">{v.label}</div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leistungen.map((l) => (
              <div
                key={l.title}
                className="bg-white rounded-2xl p-6 border border-sand-200 hover:shadow-lg hover:border-gruen-300 hover:-translate-y-1 transition-all duration-200 group cursor-default"
              >
                <div className="w-12 h-12 bg-gruen-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-gruen-700 transition-colors duration-200">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-gruen-700 group-hover:text-white transition-colors duration-200"
                  >
                    {l.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-gruen-900 mb-2 text-[15px]">{l.title}</h3>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sand-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gruen-900 mb-4">
              Unsere Projekte
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Einblicke in abgeschlossene Gartenprojekte aus der Ostschweiz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projekte.map((p, i) => (
              <div key={i} className="relative h-56 rounded-2xl overflow-hidden group">
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-white bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-sand-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Links: Infos */}
            <div>
              <div className="text-gruen-600 text-sm font-semibold uppercase tracking-wider mb-3">Kontakt</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gruen-900 mb-5">
                Kostenlose Erstberatung anfragen
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Schreiben Sie uns kurz, was Sie brauchen – wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gruen-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gruen-600">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gruen-900 text-sm">Telefon</div>
                    <a href="tel:+41719501234" className="text-gray-500 text-sm hover:text-gruen-700 transition-colors">+41 71 950 12 34</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gruen-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gruen-600">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gruen-900 text-sm">E-Mail</div>
                    <a href="mailto:info@gruenwerk-gartenbau.ch" className="text-gray-500 text-sm hover:text-gruen-700 transition-colors">info@gruenwerk-gartenbau.ch</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gruen-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gruen-600">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gruen-900 text-sm">Standort</div>
                    <span className="text-gray-500 text-sm">Gewerbestrasse 4, 9240 Uzwil</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rechts: Formular */}
            <KontaktFormular />
          </div>
        </div>
      </section>
    </>
  );
}
