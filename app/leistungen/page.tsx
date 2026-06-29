import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen – Grünwerk Gartenbau",
  description: "Alle Gartendienstleistungen von Grünwerk Gartenbau: Neuanlagen, Gartenpflege, Rasen, Bewässerung und mehr.",
};

const leistungen = [
  {
    kategorie: "Planung & Gestaltung",
    items: [
      {
        title: "Gartenplanung & -design",
        text: "Individuelle Gartenkonzepte, die zu Ihrem Zuhause und Lebensstil passen. Wir erstellen einen detaillierten Entwurf inklusive Bepflanzungsplan.",
        details: ["3D-Visualisierung möglich", "Bepflanzungsplan", "Materialkalkulation"],
      },
      {
        title: "Neuanlage & Umbau",
        text: "Komplette Neugestaltung von Gartenflächen – vom Erdaushub bis zur fertigen Bepflanzung. Qualität, die man sieht und fühlt.",
        details: ["Gesamtprojektleitung", "Lieferung & Einbau", "Abnahmeprotokoll"],
      },
      {
        title: "Terrassen & Wege",
        text: "Naturstein, Betonplatten oder Holz – wir planen und verlegen Terrassen, Wege und Einfassungen nach Maß.",
        details: ["Naturstein & Pflaster", "Holzterrassen", "Beleuchtungsplanung"],
      },
    ],
  },
  {
    kategorie: "Pflege & Wartung",
    items: [
      {
        title: "Gartenpflege-Abo",
        text: "Regelmäßige Betreuung Ihres Gartens – monatlich, alle zwei Wochen oder wöchentlich. Sie entspannen, wir kümmern uns.",
        details: ["Flexible Intervalle", "Fixer Ansprechpartner", "Jahresbericht"],
      },
      {
        title: "Rasenmähen & Rasenpflege",
        text: "Professionelles Mähen, Vertikutieren, Nachsäen und Düngen für einen satten, gesunden Rasen das ganze Jahr.",
        details: ["Saisonales Programm", "Düngeplan", "Nachsaat bei Bedarf"],
      },
      {
        title: "Heckenschnitt & Baumpflege",
        text: "Formschnitte, Rückschnitte und Pflanzenschutz für Hecken, Sträucher und Bäume – fachgerecht und termingerecht.",
        details: ["Frühjahrs- & Herbstschnitt", "Kranke Äste entfernen", "Entsorgung inklusive"],
      },
    ],
  },
  {
    kategorie: "Technik & Sonderlösungen",
    items: [
      {
        title: "Bewässerungsanlagen",
        text: "Automatische Tropf- oder Versenkregner-Systeme, die Ihren Garten optimal versorgen und Wasser sparen.",
        details: ["Planung & Montage", "Winterfestmachung", "App-Steuerung möglich"],
      },
      {
        title: "Saisonarbeiten & Winterdienst",
        text: "Herbst- und Frühjahrsputz, Pflanzenschutz vor dem Winter sowie professioneller Schneeräumdienst für Einfahrten und Wege.",
        details: ["Laubentsorgung", "Pflanzenschutz", "Schneeräumung"],
      },
      {
        title: "Zäune & Sichtschutz",
        text: "Holz- oder Metallzäune, Sichtschutzelemente und Rankgitter – passgenaue Lösungen für Ihren Außenbereich.",
        details: ["Holz & Metall", "Maßanfertigung", "Pflege & Reparatur"],
      },
    ],
  },
];

export default function Leistungen() {
  return (
    <>
      {/* Header */}
      <section className="bg-gruen-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-gruen-300 text-sm font-medium mb-3">Was wir anbieten</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Leistungen</h1>
          <p className="text-gruen-200 text-lg max-w-xl">
            Alles aus einer Hand – von der Planung über die Anlage bis zur dauerhaften Pflege Ihres Gartens.
          </p>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {leistungen.map((gruppe) => (
            <div key={gruppe.kategorie}>
              <h2 className="text-xl font-bold text-gruen-700 mb-8 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-gruen-400 inline-block" />
                {gruppe.kategorie}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {gruppe.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-7 border border-sand-200 hover:shadow-md hover:border-gruen-200 transition-all"
                  >
                    <h3 className="font-bold text-gruen-900 text-lg mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.text}</p>
                    <ul className="space-y-1.5">
                      {item.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-xs text-gray-600"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="w-3.5 h-3.5 text-gruen-500 shrink-0"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Anfrage CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gruen-50 border-t border-gruen-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gruen-900 mb-4">
            Interesse geweckt?
          </h2>
          <p className="text-gray-500 mb-8">
            Wir erstellen Ihnen gerne ein kostenloses, unverbindliches Angebot. Einfach anrufen oder eine Nachricht schicken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+43123456789"
              className="bg-gruen-700 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-gruen-800 transition-colors"
            >
              +43 1 234 56 789
            </a>
            <Link
              href="/ueber-uns"
              className="bg-white text-gruen-700 font-semibold px-7 py-3.5 rounded-xl border border-gruen-200 hover:bg-gruen-50 transition-colors"
            >
              Mehr über uns
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
