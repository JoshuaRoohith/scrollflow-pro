import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  ChevronDown,
  Handshake,
  Users,
  Trophy,
  Share2,
  FileCheck2,
  LineChart,
  BadgeCheck,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { Reveal } from "../components/reveal";
import { features } from "../lib/features-data";
import waveDivider from "../assets/wave-divider.jpg";
import ctaHandshake from "../assets/cta-handshake.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blink — Procurement, Simplified" },
      {
        name: "description",
        content:
          "BLINK is a procurement and vendor management portal built for South African businesses — streamline supplier interactions, track compliance, and evaluate vendor performance all in one place.",
      },
      { property: "og:title", content: "Blink — Procurement, Simplified" },
      {
        property: "og:description",
        content:
          "A modular procurement and vendor management platform for procurers and suppliers.",
      },
    ],
  }),
  component: Landing,
});

const featureIcons: Record<string, typeof Trophy> = {
  trophy: Trophy,
  network: Share2,
  "file-check": FileCheck2,
  chart: LineChart,
  vendors: BadgeCheck,
  handshake: Handshake,
};

const steps = [
  {
    n: "1",
    title: "REGISTER TO CREATE A PROFILE",
    body: "Complete a simple form to load out your company details and upload compliance documents.",
  },
  {
    n: "2",
    title: "MANAGE YOUR PROFILE",
    body: "Submit invoices, quotes and orders, manage compliance and pick the modules for your business.",
  },
  {
    n: "3",
    title: "APPLY FOR OPPORTUNITIES",
    body: "Access exclusive private and public tenders and get onboarded as a registered supplier.",
  },
];

function Landing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative isolate px-6 pt-36 pb-24 sm:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 45% at 15% 0%, oklch(0.955 0.03 288) 0%, transparent 70%), radial-gradient(50% 40% at 90% 15%, oklch(0.96 0.03 250) 0%, transparent 70%)",
          }}
        />
        <motion.div
          aria-hidden
          className="animate-float pointer-events-none absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "var(--gradient-brand)", opacity: 0.12 }}
        />
        <motion.div style={{ y: heroY, opacity: heroFade }} className="mx-auto max-w-6xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-1.5 text-xs font-semibold tracking-wide text-primary shadow-soft">
              BUILT FOR SOUTH AFRICAN BUSINESSES
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] text-primary sm:text-6xl">
              Procurement, <span className="text-brand-gradient">Simplified</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              BLINK is a procurement and vendor management portal built for South African
              businesses — streamline supplier interactions, track compliance, and evaluate
              vendor performance all in one place.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal delay={0.22}>
              <article className="surface-card group h-full p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <Handshake className="h-10 w-10 text-primary" />
                <h2 className="mt-5 text-2xl font-bold text-primary-soft">
                  Vendor Self-Service
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Manage your profile & apply to public and private opportunities.
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:gap-4 hover:brightness-110 sm:w-auto"
                >
                  Sign up <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>

            <Reveal delay={0.3}>
              <article className="surface-card group h-full p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <Users className="mx-auto h-10 w-10 text-primary" />
                <h2 className="mt-5 text-2xl font-bold text-primary-soft">
                  Supply Chain Management
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Digitise your supply chain with vendor onboarding, management &amp;
                  verification, procurement processes, opportunities, dashboards &amp;
                  reports, Procure-to-Pay and Contract &amp; Service Management.
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-card px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:gap-4 hover:bg-accent"
                >
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          </div>
        </motion.div>

        <a
          href="#about"
          className="mx-auto mt-16 flex w-fit flex-col items-center gap-1 text-xs font-semibold tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          KEEP SCROLLING
          <ChevronDown className="animate-scroll-hint h-5 w-5" />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 pb-0 pt-6 text-center">
        <Reveal>
          <span className="inline-block rounded-full border border-primary/30 bg-card px-6 py-2 text-sm font-bold text-primary shadow-soft">
            TWO SIDES, ONE MODULAR PLATFORM!
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Built for procurers and suppliers, whether you're managing a supply chain or
            growing your business. BLINK gives you the flexibility to choose the modules
            that best suit your business, so you can build a platform around your specific
            needs.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book a Demo
            </a>
            <a
              href="#features"
              className="rounded-full border border-primary/25 bg-card px-7 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
            >
              How it works
            </a>
          </div>
        </Reveal>
        <img
          src={waveDivider}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={600}
          className="mt-12 h-40 w-full object-cover sm:h-56"
        />
      </section>

      {/* FEATURES */}
      <section id="features" className="band-lavender px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Platform Capabilities
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Built specifically for the Governance landscape with enterprise-grade
              features
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = featureIcons[feature.icon] ?? Trophy;
              return (
                <Reveal key={feature.slug} delay={i * 0.07}>
                  <article className="surface-card group flex h-full flex-col p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                    <Icon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                    <h3 className="mt-5 text-lg font-bold text-primary">
                      {feature.cardTitle}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.cardBlurb}
                    </p>
                    <Link
                      to="/features/$slug"
                      params={{ slug: feature.slug }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-14 text-center">
            <a
              href="#contact"
              className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
            >
              Request a Demo
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl shadow-lift">
            <img
              src={ctaHandshake}
              alt="Two business professionals shaking hands"
              loading="lazy"
              width={1600}
              height={704}
              className="h-[320px] w-full scale-105 object-cover transition-transform duration-[1200ms] hover:scale-110 sm:h-[380px]"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.24 0.03 278 / 0.35), oklch(0.24 0.03 278 / 0.75))",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <h2 className="text-2xl font-extrabold text-primary-foreground sm:text-4xl">
                Take your business to next level.
              </h2>
              <p className="mt-3 max-w-lg text-sm text-primary-foreground/85 sm:text-base">
                End-to-end management and procurement in a Single Solution. Meet the right
                platform to Elevate Your Business.
              </p>
              <a
                href="#contact"
                className="mt-7 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ONBOARDING */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Simple Three Step Onboarding
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
              No complex setup. No implementation fees. Start managing vendors in under 10
              minutes.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12} className="group relative text-center">
                <span className="block text-[7rem] font-extrabold leading-none text-accent transition-colors duration-500 group-hover:text-primary/25 sm:text-[9rem]">
                  {step.n}
                </span>
                <h3 className="mt-2 text-xs font-bold tracking-widest text-secondary-foreground">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BAND CTA */}
      <section className="band-lavender px-6 py-14">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-xl font-extrabold text-primary sm:text-2xl">
              Stay ahead of your industry, procurement on another level
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Contact us TODAY for tailored packages and features for your business.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              We'd love to hear from you. Reach out to us for any inquiries or to schedule
              a demo
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <Reveal className="surface-card space-y-5 p-8">
              {[
                { Icon: MapPin, lines: ["315 Rivonia Road, Sandton", "Johannesburg, 2031, South Africa"] },
                { Icon: Phone, lines: ["+27 12 345 6789"] },
                { Icon: Mail, lines: ["admin@procurementco.at"] },
              ].map(({ Icon, lines }) => (
                <div key={lines[0]} className="flex min-w-0 items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 text-sm text-muted-foreground">
                    {lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl shadow-soft">
                <iframe
                  title="Blink office location in Sandton, Johannesburg"
                  src="https://www.google.com/maps?q=315%20Rivonia%20Road%20Sandton%20Johannesburg&output=embed"
                  loading="lazy"
                  className="h-[360px] w-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
