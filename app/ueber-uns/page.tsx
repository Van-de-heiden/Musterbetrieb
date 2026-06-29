import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns – Grünwerk Gartenbau",
  description: "Das Team hinter Grünwerk Gartenbau: Unsere Geschichte, Werte und Mitarbeiter.",
};

const werte = [
  {
    title: "Qualität",
    text: "Wir arbeiten sorgfältig und sauber – jedes Projekt, egal wie groß oder klein, bekommt dieselbe Aufmerksamkeit.",
    icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  },
  {
    title: "Verlässlichkeit",
    text: "Termine werden eingehalten. Wir erscheinen pünktlich, kommunizieren klar und halten, was wir versprechen.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    title: "Nachhaltigkeit",
    text: "Wir setzen auf standortgerechte Pflanzen, ressourcenschonende Bewässerung und umweltfreundliche Arbeitsweisen.",
    icon: (
      <path d="M12 22V12M12 12C12 7 7 3 2 4c0 5 3 9 7 10M12 12c0-5 5-9 10-8-1 5-5 8-10 8" />
    ),
  },
];

const team = [
  {
    name: "Klaus Berger",
    rolle: "Geschäftsführer & Gartenmeister",
    text: "Klaus gründete Grünwerk 2009 nach 10 Jahren als leitender Gärtner in einem Wiener Gartenbaubetrieb. Sein Credo: Kein Garten gleicht dem anderen.",
  },
  {
    name: "Sandra Holzer",
    rolle: "Projektleitung & Kundenbetreuung",
    text: "Sandra koordiniert alle laufenden Projekte und ist erste Ansprechpartnerin für unsere Kunden. Sie sorgt dafür, dass alles reibungslos läuft.",
  },
  {
    name: "Marek Dvorak",
    rolle: "Gartengestalter",
    text: "Marek hat Landschaftsarchitektur studiert und bringt kreative Ideen für Neuanlagen und Umgestaltungen. Er liebt es, wenn ein Entwurf zum Leben erwacht.",
  },
  {
    name: "Julia Kerschner",
    rolle: "Büroleitung & Administration",
    text: "Julia hält den Laden am Laufen – von Angeboten über Rechnungen bis zur Dienstplanung. Seit der Einführung digitaler Prozesse hat sie doppelt so viel Zeit fürs Wesentliche.",
  },
];

export default function UeberUns() {
  return (
    <>
      {/* Header */}
      <section className="bg-gruen-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-gruen-300 text-sm font-medium mb-3">Wer wir sind</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Über uns</h1>
          <p className="text-gruen-200 text-lg max-w-xl">
            Ein Familienbetrieb aus Wien mit Leidenschaft für Gärten und dem Anspruch, jeden Kunden langfristig zu begeistern.
          </p>
        </div>
      </section>

      {/* Geschichte */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-gruen-600 text-sm font-semibold uppercase tracking-wider mb-3">
              Unsere Geschichte
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gruen-900 mb-6">
              Seit 2009 wachsen wir mit unseren Kunden
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Was 2009 mit einem Kleintransporter, drei Mitarbeitern und einem klaren Versprechen begann – faire Preise, handwerkliche Qualität, persönlicher Service – ist heute ein eingespieltes Team von zwölf Fachleuten.
              </p>
              <p>
                Grünwerk Gartenbau betreut heute mehr als 400 Privat- und Gewerbekunden in Wien und dem angrenzenden Niederösterreich. Viele davon sind seit dem ersten Jahr dabei.
              </p>
              <p>
                2023 haben wir gemeinsam mit <strong className="text-gruen-700">Pichler Advisory</strong> unsere Abläufe konsequent digitalisiert – von der Auftragserfassung bis zur Rechnungsstellung. Das Ergebnis: mehr Zeit für das, was zählt – die Arbeit im Garten.
              </p>
            </div>
          </div>

          {/* Bild Platzhalter */}
          <div className="h-80 bg-gruen-100 rounded-2xl flex items-center justify-center border border-gruen-200 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 30% 70%, #5B9A2B 0%, transparent 60%)",
              }}
            />
            <div className="text-center relative">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="w-20 h-20 text-gruen-300 mx-auto mb-3"
              >
                <path d="M12 22V12M12 12C12 7 7 3 2 4c0 5 3 9 7 10M12 12c0-5 5-9 10-8-1 5-5 8-10 8" />
              </svg>
              <p className="text-gruen-500 text-sm">Foto folgt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sand-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gruen-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Drei Grundsätze, nach denen wir täglich arbeiten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {werte.map((w) => (
              <div
                key={w.title}
                className="bg-white rounded-2xl p-8 border border-sand-200 text-center"
              >
                <div className="w-14 h-14 bg-gruen-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-gruen-700"
                  >
                    {w.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-gruen-900 text-lg mb-3">{w.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gruen-900 mb-4">
              Das Team
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Personen mit Erfahrung, Herz und dem richtigen Werkzeug.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-2xl p-6 border border-sand-200 hover:shadow-md transition-all"
              >
                {/* Avatar Platzhalter */}
                <div className="w-16 h-16 rounded-full bg-gruen-100 flex items-center justify-center mb-4 border-2 border-gruen-200">
                  <span className="text-gruen-700 font-bold text-lg">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="font-bold text-gruen-900 mb-0.5">{person.name}</div>
                <div className="text-xs text-gruen-600 font-medium mb-3">{person.rolle}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{person.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gruen-50 border-t border-gruen-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gruen-900 mb-4">
            Neugierig, wie wir arbeiten?
          </h2>
          <p className="text-gray-500 mb-8">
            Sehen Sie, welche Prozesse und Tools wir dank Pichler Advisory eingeführt haben.
          </p>
          <Link
            href="/prozesse"
            className="inline-block bg-gruen-700 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-gruen-800 transition-colors"
          >
            Unsere Prozesse ansehen
          </Link>
        </div>
      </section>
    </>
  );
}
