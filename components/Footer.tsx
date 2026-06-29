import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gruen-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gruen-700 rounded-lg flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-white"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22V12M12 12C12 7 7 3 2 4c0 5 3 9 7 10M12 12c0-5 5-9 10-8-1 5-5 8-10 8" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-[17px] leading-tight">Grünwerk</div>
                <div className="text-[11px] text-gruen-300 leading-tight tracking-wide uppercase">
                  Gartenbau
                </div>
              </div>
            </div>
            <p className="text-gruen-300 text-sm leading-relaxed">
              Professionelle Gartengestaltung und -pflege in Wien und Umgebung – seit 2009.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-semibold text-sm mb-4 text-gruen-100 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm text-gruen-300">
              {[
                { href: "/", label: "Startseite" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/prozesse", label: "Unsere Prozesse" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-sm mb-4 text-gruen-100 uppercase tracking-wider">
              Kontakt
            </div>
            <address className="not-italic text-sm text-gruen-300 space-y-1.5">
              <p>Musterstraße 12</p>
              <p>1020 Wien, Österreich</p>
              <p className="mt-3">
                <a href="tel:+43123456789" className="hover:text-white transition-colors">
                  +43 1 234 56 789
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@gruenwerk-gartenbau.at"
                  className="hover:text-white transition-colors"
                >
                  info@gruenwerk-gartenbau.at
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gruen-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gruen-500">
          <p>© 2024 Grünwerk Gartenbau GmbH. Alle Rechte vorbehalten.</p>
          <p>
            Betriebsoptimierung durch{" "}
            <a
              href="https://pichler-advisory.at"
              className="text-gruen-300 hover:text-white font-medium transition-colors"
            >
              Pichler Advisory
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
