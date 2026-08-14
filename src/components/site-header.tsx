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
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full bg-card/85 px-5 py-3 backdrop-blur-xl transition-all duration-500 sm:px-8 ${
          scrolled ? "shadow-glow" : "shadow-soft"
        }`}
        style={{ boxShadow: scrolled ? undefined : "var(--shadow-soft)" }}
      >
        <Link to="/" className="shrink-0" aria-label="Blink home">
          <BlinkLogo />
        </Link>
        <nav className="flex min-w-0 items-center gap-5 text-sm font-medium sm:gap-9 sm:text-base">
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
      </div>
    </header>
  );
}
