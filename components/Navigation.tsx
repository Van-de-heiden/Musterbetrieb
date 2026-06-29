"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/prozesse", label: "Unsere Prozesse" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-sand-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
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
              <div className="font-bold text-gruen-800 text-[17px] leading-tight">
                Grünwerk
              </div>
              <div className="text-[11px] text-gray-400 leading-tight tracking-wide uppercase">
                Gartenbau
              </div>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gruen-700"
                    : "text-gray-600 hover:text-gruen-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+43123456789"
              className="bg-gruen-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gruen-800 transition-colors"
            >
              Jetzt anrufen
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1 pb-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-2 py-2 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? "text-gruen-700 bg-gruen-50"
                    : "text-gray-700 hover:text-gruen-700 hover:bg-gruen-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="tel:+43123456789"
                className="block bg-gruen-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold text-center"
              >
                Jetzt anrufen
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
