"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
          <Link href="/" className="flex items-center">
            <Image
              src="/gruenwerk-logo.png"
              alt="Grünwerk Gartenbau"
              width={140}
              height={56}
              className="h-10 w-auto"
              priority
            />
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
              href="tel:+41719501234"
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
                href="tel:+41719501234"
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
