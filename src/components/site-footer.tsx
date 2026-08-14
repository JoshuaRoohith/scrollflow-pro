import { Linkedin } from "lucide-react";
import { BlinkLogo } from "./blink-logo";

const columns = [
  {
    title: "Company",
    items: ["About Us", "Contact Support", "Blog"],
  },
  {
    title: "Resources",
    items: ["Learner management", "Lexicon", "Free resources"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <BlinkLogo />
          <p className="mt-3 text-sm text-muted-foreground">Science of Yoga</p>
          <a
            href="https://www.linkedin.com"
            aria-label="Blink on LinkedIn"
            className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-110"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-primary">{col.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {col.items.map((item) => (
                <li key={item}>
                  <a href="/#contact" className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-sm font-semibold text-primary">Contact Us</h4>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>315 Rivonia Road, Sandton</li>
            <li>Johannesburg, 2031</li>
            <li>South Africa</li>
            <li>+27 12 345 6789</li>
            <li>admin@procurementco.at</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary">Business Hours</h4>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>Monday - Friday</li>
            <li>8:00 AM - 5:00 PM</li>
            <li className="pt-2 font-semibold text-secondary-foreground">
              Saturday - Sunday
            </li>
            <li>Closed</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        Copyright © Blink Africa 2026. All rights reserved.
      </div>
    </footer>
  );
}
