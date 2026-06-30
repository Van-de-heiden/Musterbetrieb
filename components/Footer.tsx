import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gruen-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/gruenwerk-logo.png"
                alt="Grünwerk Gartenbau"
                width={48}
                height={48}
                className="h-12 w-12 object-contain brightness-0 invert"
              />
              <div>
                <div className="font-bold text-white text-base leading-none">Grünwerk</div>
                <div className="text-xs font-semibold tracking-widest text-gruen-400 uppercase mt-1">Gartenbau</div>
              </div>
            </div>
            <p className="text-gruen-300 text-sm leading-relaxed">
              Professionelle Gartengestaltung und -pflege in der Ostschweiz – seit 2009.
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
              <p>Gewerbestrasse 4</p>
              <p>9240 Uzwil, Schweiz</p>
              <p className="mt-3">
                <a href="tel:+41719501234" className="hover:text-white transition-colors">
                  +41 71 950 12 34
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@gruenwerk-gartenbau.ch"
                  className="hover:text-white transition-colors"
                >
                  info@gruenwerk-gartenbau.ch
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
              href="https://pichler-advisory.ch"
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
