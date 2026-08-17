import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

type AuthShellProps = {
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  wide?: boolean;
};

export function AuthShell({ title, subtitle, children, footer, wide }: AuthShellProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 pb-24 pt-32 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 band-lavender"
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -left-40 top-24 -z-10 h-[30rem] w-[30rem] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.53 0.21 285 / 0.28), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -right-32 top-60 -z-10 h-[24rem] w-[24rem] rounded-full blur-[100px]"
        style={{
          animationDelay: "-6s",
          background:
            "radial-gradient(circle at 60% 40%, oklch(0.72 0.13 190 / 0.28), transparent 65%)",
        }}
      />

      <div className={`mx-auto ${wide ? "max-w-5xl" : "max-w-md"}`}>
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-primary/20 bg-card transition-colors group-hover:bg-accent">
            <ChevronLeft className="h-4 w-4" />
          </span>
          Back
        </Link>

        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="surface-card mt-10 p-7 sm:p-9">{children}</div>

        {footer ? (
          <p className="mt-6 text-center text-sm text-muted-foreground">{footer}</p>
        ) : null}
      </div>
    </main>
  );
}

export function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-secondary-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

export const inputClass =
  "w-full rounded-full border border-input bg-muted/60 px-5 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary/40 focus:bg-card focus:ring-4 focus:ring-primary/12";

export const submitClass =
  "w-full rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5";
