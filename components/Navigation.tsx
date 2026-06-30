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
    <nav className="bg-white sticky top-0 z-50 border-b border-sand-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 relative flex-shrink-0">
              <Image
                src="/gruenwerk-logo.png"
                alt="Grünwerk Gartenbau Logo"
                width={56}
                height={56}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-gruen-900 text-lg leading-none group-hover:text-gruen-700 transition-colors">
                Grünwerk
              </div>
              <div className="text-xs font-semibold tracking-widest text-gruen-600 uppercase mt-0.5">
                Gartenbau
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  pathname === link.href
                    ? "text-gruen-700"
                    : "text-gray-600 hover:text-gruen-700"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gruen-500 rounded-full" />
                )}
              </Link>
            ))}
            <a
              href="tel:+41719501234"
              className="flex items-center gap-2 bg-gruen-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gruen-800 transition-all hover:shadow-md"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +41 71 950 12 34
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-sand-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-sand-100 py-4 space-y-1 pb-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gruen-700 bg-gruen-50"
                    : "text-gray-700 hover:text-gruen-700 hover:bg-gruen-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-1">
              <a
                href="tel:+41719501234"
                className="flex items-center justify-center gap-2 bg-gruen-700 text-white px-4 py-3 rounded-xl text-sm font-semibold"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                +41 71 950 12 34
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
