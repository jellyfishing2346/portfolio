"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          FK<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
