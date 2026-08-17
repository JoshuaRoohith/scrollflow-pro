import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BlinkLogo } from "./blink-logo";

const nav = [
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div
        className={`mx-auto flex max-w-6xl items-center gap-4 rounded-full bg-card/85 px-4 py-2.5 backdrop-blur-xl transition-all duration-500 sm:gap-8 sm:px-7 sm:py-3 ${
          scrolled ? "shadow-glow" : "shadow-soft"
        }`}
        style={{ boxShadow: scrolled ? undefined : "var(--shadow-soft)" }}
      >
        <Link to="/" className="shrink-0" aria-label="Blink home">
          <BlinkLogo />
        </Link>

        <nav className="ml-auto hidden min-w-0 items-center gap-8 text-sm font-medium md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-secondary-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:origin-left hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 md:ml-0">
          <Link
            to="/login"
            className="rounded-full px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent sm:px-5"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 sm:px-6"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <nav className="mx-auto mt-2 flex max-w-6xl items-center justify-center gap-6 text-xs font-semibold tracking-wide md:hidden">
        {nav.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="rounded-full bg-card/80 px-3 py-1.5 text-secondary-foreground backdrop-blur-xl transition-colors hover:text-primary"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
