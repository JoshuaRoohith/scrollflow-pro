import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  Handshake,
  Users,
  ShieldCheck,
  Zap,
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
import ctaHandshake from "../assets/cta-handshake.jpg";
import heroDashboard from "../assets/hero-dashboard.jpg";
import meshGradient from "../assets/mesh-gradient.jpg";
import teamCollab from "../assets/team-collab.jpg";
import networkNodes from "../assets/network-nodes.jpg";
import waveDivider from "../assets/wave-divider.jpg";
import vendorBuilding from "../assets/Vendor-building.jpg";
import procurereBuilding from "../assets/Procurere-building.jpg";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

const featureAccents = [
  "ring-accent-violet",
  "ring-accent-teal",
  "ring-accent-coral",
  "ring-accent-sky",
  "ring-accent-amber",
  "ring-accent-violet",
];

const featureImages = [
  meshGradient,
  networkNodes,
  heroDashboard,
  meshGradient,
  networkNodes,
  heroDashboard,
];

const steps = [
  {
    n: "1",
    title: "REGISTER TO CREATE A PROFILE",
    body: "Create your BLINK supplier profile with your company details, capabilities, certifications, and required compliance documentation.",
  },
  {
    n: "2",
    title: "MANAGE YOUR PROFILE",
    body: "Keep your business information and compliance credentials up to date, showcase your capabilities, and manage your supplier profile from one place.",
  },
  {
    n: "3",
    title: "APPLY FOR OPPORTUNITIES",
    body: "Explore public and private opportunities, connect with potential buyers, and submit your responses directly through BLINK.",
  },
];

const platformHighlights = [
  {
    title: "Secure & Compliant",
    body: "Enterprise-grade security you can trust.",
    Icon: ShieldCheck,
  },
  {
    title: "Built for Performance",
    body: "Fast, reliable and ready to scale.",
    Icon: Zap,
  },
  {
    title: "For Procurers and Suppliers",
    body: "Empowering both sides of the supply chain.",
    Icon: Users,
  },
  {
    title: "Scalable For Any Business",
    body: "From small teams to enterprise operations.",
    Icon: ShieldCheck,
  },
];

const stepTint = ["text-primary/20", "text-teal/30", "text-coral/30"];

const tickerWords = [
  "VENDOR ONBOARDING",
  "COMPLIANCE",
  "PROCURE-TO-PAY",
  "DASHBOARDS",
  "OPPORTUNITIES",
  "KPI TRACKING",
  "MARKETPLACE",
  "CONTRACTS",
];

function ScrollRail() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{ scaleX: width, background: "var(--gradient-brand)" }}
    />
  );
}

function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-primary/10 bg-card py-4">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {[...tickerWords, ...tickerWords].map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap text-xs font-semibold tracking-[0.35em] text-primary/60"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-coral/70" />
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--color-card) 0%, transparent 12%, transparent 88%, var(--color-card) 100%)",
        }}
      />
    </div>
  );
}

function Landing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 120]);
  const artY = useTransform(heroProgress, [0, 1], [0, -70]);
  const artRotate = useTransform(heroProgress, [0, 1], [-3, 2]);

  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: galleryProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });
  const galleryX = useTransform(galleryProgress, [0, 1], ["6%", "-6%"]);

  return (
    <main className="overflow-x-hidden">
      <ScrollRail />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="landing-section grain-overlay relative isolate pb-20 pt-40 sm:pb-24 sm:pt-48"
      >
        <div
          aria-hidden
          className="hairline-grid pointer-events-none absolute inset-0 -z-20 opacity-70"
          style={{
            maskImage:
              "radial-gradient(120% 85% at 50% 25%, oklch(0 0 0) 0%, oklch(0 0 0 / 0.35) 55%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(120% 85% at 50% 25%, oklch(0 0 0) 0%, oklch(0 0 0 / 0.35) 55%, transparent 85%)",
          }}
        />
        <div
          aria-hidden
          className="animate-blob pointer-events-none absolute -left-40 top-24 -z-10 h-[34rem] w-[34rem] rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, oklch(0.53 0.21 285 / 0.35), transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="animate-blob pointer-events-none absolute -right-32 top-56 -z-10 h-[26rem] w-[26rem] rounded-full blur-[90px]"
          style={{
            animationDelay: "-6s",
            background:
              "radial-gradient(circle at 60% 40%, oklch(0.72 0.13 190 / 0.32), transparent 65%)",
          }}
        />

        <div className="landing-container">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div style={{ y: heroY }}>
              <Reveal>
                <span className="inline-flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.3em] text-primary">
                  <span className="h-px w-10 bg-primary/50" />
                  BUILT FOR AFRICAN BUSINESSES
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-7 text-[3.3rem] font-extrabold leading-[0.92] tracking-tight text-primary sm:text-[5.2rem]">
                  Procurement,
                  <span className="mt-1 block text-brand-gradient italic">Simplified</span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-8 flex gap-5">
                  <span
                    aria-hidden
                    className="mt-2 h-24 w-px shrink-0 bg-gradient-to-b from-primary/60 to-transparent"
                  />
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    BLINK is a procurement and vendor management platform designed to connect large
                    corporates with their supply chains simplifying supplier engagement,
                    streamlining procurement processes, monitoring compliance, and evaluating vendor
                    performance, all through one integrated platform.
                  </p>
                </div>
              </Reveal>
            </motion.div>

            <motion.div style={{ y: artY, rotate: artRotate }} className="relative">
              <div
                aria-hidden
                className="absolute -inset-8 -z-10 rounded-[3rem] blur-3xl"
                style={{
                  background:
                    "radial-gradient(45% 45% at 25% 25%, oklch(0.72 0.13 190 / 0.35), transparent 70%), radial-gradient(50% 50% at 80% 75%, oklch(0.53 0.21 285 / 0.4), transparent 70%)",
                }}
              />
              <img
                src={heroDashboard}
                alt="Blink procurement dashboard showing spend analytics and vendor performance cards"
                width={1280}
                height={1024}
                className="w-full rounded-[1.75rem] shadow-lift"
              />
              <div className="glass-card absolute -bottom-6 -left-6 hidden px-5 py-4 sm:block">
                <p className="text-[0.6rem] font-semibold tracking-[0.28em] text-primary/70">
                  MODULAR BY DESIGN
                </p>
                <p className="mt-1 text-2xl font-extrabold text-primary">FOR YOU</p>
              </div>
            </motion.div>
          </div>

          {/* dual entry cards */}
          <div className="mt-28 sm:mt-32">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[0.68rem] font-semibold tracking-[0.3em] text-muted-foreground">
                  TWO POWERFUL SOLUTIONS. ONE CONNECTED PLATFORM.
                </p>
                <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl">
                  Built for <span className="text-primary-soft">suppliers</span>. Designed for{" "}
                  <span className="text-teal">buyers</span>.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  BLINK connects businesses across the procurement ecosystem. Choose the experience
                  that&apos;s right for you.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
              <Reveal className="h-full">
                <article className="group relative flex h-full min-h-[37rem] flex-col overflow-hidden rounded-[1.75rem] border border-primary/15 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-9">
                  <div
                    aria-hidden
                    className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-primary/15 blur-3xl transition-opacity duration-500 group-hover:bg-primary/25"
                  />
                  <img
                    src={vendorBuilding}
                    alt="Supplier building illustration"
                    width={1536}
                    height={1024}
                    className="pointer-events-none absolute right-3 top-7 z-10 w-[36%] max-w-52 object-contain transition-transform duration-500 group-hover:scale-105 sm:right-5 sm:top-9 sm:max-w-60"
                  />
                  <div className="relative z-20 pr-[29%]">
                    <span className="ring-accent-violet grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6">
                      <Handshake className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                      I&apos;m a Supplier
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      Grow your business. Find opportunities. Connect with buyers and showcase your
                      capabilities.
                    </p>
                  </div>
                  <div className="relative z-20 mt-7 border-t border-primary/10 pt-6">
                    <p className="text-[0.65rem] font-semibold tracking-[0.26em] text-primary/70">
                      WHAT YOU CAN DO
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-snug text-foreground">
                      {[
                        "Create a professional supplier profile",
                        "Discover public and private opportunities",
                        "Connect with verified buyers",
                        "Submit quotes, proposals and bids online",
                        "Manage compliance and business documents",
                        "Build long-term business relationships",
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                            <BadgeCheck className="h-3.5 w-3.5" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-20 mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8">
                    <Link
                      to="/signup"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:gap-3"
                    >
                      Sign up <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href="#features"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 hover:gap-2.5"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={0.1} className="h-full">
                <article className="group relative flex h-full min-h-[37rem] flex-col overflow-hidden rounded-[1.75rem] border border-teal/25 bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:p-9">
                  <div
                    aria-hidden
                    className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-teal/20 blur-3xl transition-opacity duration-500 group-hover:bg-teal/30"
                  />
                  <img
                    src={procurereBuilding}
                    alt="Buyer procurement building illustration"
                    width={1536}
                    height={1024}
                    className="pointer-events-none absolute right-3 top-7 z-10 w-[36%] max-w-52 object-contain transition-transform duration-500 group-hover:scale-105 sm:right-5 sm:top-9 sm:max-w-60"
                  />
                  <div className="relative z-20 pr-[29%]">
                    <span className="ring-accent-teal grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:rotate-6">
                      <Users className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                      I&apos;m a Buyer
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      Streamline procurement. Manage suppliers. Drive value and ensure compliance.
                    </p>
                  </div>
                  <div className="relative z-20 mt-7 border-t border-teal/20 pt-6">
                    <p className="text-[0.65rem] font-semibold tracking-[0.26em] text-teal">
                      WHAT YOU CAN DO
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-snug text-foreground">
                      {[
                        "Manage suppliers and supplier information",
                        "Create and publish opportunities",
                        "Evaluate bids, quotes and proposals",
                        "Track supplier performance and manage contracts",
                        "Ensure compliance and governance",
                        "Access insights and reporting dashboards",
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-teal/20 text-teal">
                            <BadgeCheck className="h-3.5 w-3.5" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative z-20 mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-ink shadow-soft transition-all duration-300 hover:gap-3"
                    >
                      Book a Demo <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#features"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-all duration-300 hover:gap-2.5"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section id="about" className="landing-section relative py-14 sm:py-20">
        <div className="landing-container relative overflow-hidden rounded-[2rem] border border-primary/10 bg-card/70 px-6 py-9 shadow-soft sm:px-10 sm:py-12 lg:px-16 lg:py-16">
          <img
            src={waveDivider}
            alt=""
            aria-hidden
            loading="lazy"
            width={1920}
            height={600}
            className="pointer-events-none absolute -bottom-10 -left-20 h-[42%] w-[72%] max-w-none object-cover object-left-bottom opacity-75"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-[42%] top-1/4 h-80 w-80 rounded-full opacity-55 blur-3xl"
            style={{
              background: "radial-gradient(circle, oklch(0.68 0.14 283 / 0.18), transparent 68%)",
            }}
          />
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <Reveal>
              <div className="max-w-xl">
                <p className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.3em] text-primary">
                  <span className="rounded-md bg-accent px-3 py-2 text-[0.65rem]">01</span>
                  <span className="h-px w-4 bg-primary/60" />
                  THE PLATFORM
                </p>
                <h2 className="mt-8 text-5xl font-extrabold leading-[0.95] tracking-tight text-primary sm:text-6xl lg:text-7xl">
                  TWO SIDES,
                  <span className="block text-outline">ONE MODULAR</span>
                  <span className="block text-brand-gradient">PLATFORM!</span>
                </h2>
                <div aria-hidden className="rule-tick mt-8 h-2 w-52 opacity-75" />
                <p className="mt-8 max-w-lg text-base leading-relaxed text-secondary-foreground sm:text-lg">
                  Built for procurers and suppliers, whether you're managing a supply chain or
                  growing your business. BLINK gives you the flexibility to choose the modules that
                  best suit your business, so you can build a platform around your specific needs.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {platformHighlights.map(({ title, body, Icon }, index) => (
                <Reveal key={title} delay={0.08 + index * 0.06} className="h-full">
                  <article className="group relative flex h-full min-h-56 flex-col overflow-hidden rounded-[1.5rem] border border-primary/10 bg-card/90 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 opacity-50"
                      style={{
                        backgroundImage:
                          "radial-gradient(oklch(0.53 0.21 285 / 0.34) 1px, transparent 1.5px)",
                        backgroundSize: "9px 9px",
                      }}
                    />
                    <span className="ring-accent-violet grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-7 max-w-xs text-xl font-bold leading-tight tracking-tight text-primary">
                      {title}
                    </h3>
                    <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-secondary-foreground sm:text-base">
                      {body}
                    </p>
                    <span aria-hidden className="mt-auto pt-6 text-3xl leading-none text-primary">
                      —
                    </span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES: editorial index ────────────────────── */}
      <section id="features" className="landing-section band-aurora grain-overlay py-24 sm:py-32">
        <div className="landing-container">
          <Reveal>
            <p className="text-[0.68rem] font-semibold tracking-[0.3em] text-muted-foreground">
              02 — CAPABILITIES
            </p>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-4xl font-extrabold leading-[1] tracking-tight text-primary sm:text-6xl">
                Platform
                <span className="block text-brand-gradient italic">Capabilities</span>
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                Enterprise-ready capabilities that bring procurement, supplier management, and
                supply chain intelligence together in one platform
              </p>
            </div>
          </Reveal>

          <div ref={galleryRef} className="mt-16 border-t border-primary/15">
            {features.map((feature, i) => {
              const Icon = featureIcons[feature.icon] ?? Trophy;
              return (
                <Reveal key={feature.slug} delay={i * 0.05}>
                  <Link
                    to="/features/$slug"
                    params={{ slug: feature.slug }}
                    className="group relative grid grid-cols-1 items-start gap-4 border-b border-primary/15 py-8 transition-colors duration-500 sm:grid-cols-[4.5rem_1fr_auto] sm:gap-8 sm:py-10 hover:bg-card/70"
                  >
                    <span className="text-2xl font-extrabold tabular-nums text-primary/25 transition-colors duration-500 group-hover:text-primary/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-4">
                        <span
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform duration-500 group-hover:scale-110 ${featureAccents[i % featureAccents.length]}`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                          {feature.cardTitle}
                        </h3>
                      </div>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {feature.cardBlurb}
                      </p>
                    </div>

                    <span className="flex items-center gap-3 self-center">
                      <span className="hidden h-16 w-28 overflow-hidden rounded-xl opacity-0 transition-all duration-500 group-hover:opacity-100 lg:block">
                        <img
                          src={featureImages[i % featureImages.length]}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          width={640}
                          height={360}
                          className="h-full w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-100"
                        />
                      </span>
                      <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-4">
                        Read More <ArrowRight className="h-4 w-4" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER (full-bleed) ──────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <motion.img
          src={ctaHandshake}
          alt="Two business professionals shaking hands"
          loading="lazy"
          width={1600}
          height={704}
          style={{ x: galleryX }}
          className="h-[420px] w-[112%] max-w-none object-cover sm:h-[520px]"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.24 0.03 278 / 0.55), oklch(0.24 0.03 278 / 0.85))",
          }}
        />
        <div className="landing-section absolute inset-0 flex flex-col items-center justify-center text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl">
              Take your business to next level Onboard as a Procurer.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
              End-to-end management and procurement in a Single Solution. Meet the right platform to
              Elevate Your Business.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <Link
              to="/signup"
              className="mt-9 inline-block rounded-full bg-primary-foreground px-9 py-3.5 text-sm font-semibold text-primary shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book a Demo
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── ONBOARDING ───────────────────────────────────── */}
      <section className="landing-section py-24 sm:py-32">
        <div className="landing-container">
          <Reveal>
            <p className="text-[0.68rem] font-semibold tracking-[0.3em] text-muted-foreground">
              03 — GETTING STARTED
            </p>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-4xl font-extrabold leading-[1] tracking-tight text-primary sm:text-6xl">
                Simple Three Step
                <span className="block text-outline">Onboarding as a Vendor</span>
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                No complex setup. No implementation fees. Start your vendor Journey in under 10
                minutes.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-6 -z-10 rounded-[3rem] blur-3xl"
                  style={{
                    background:
                      "radial-gradient(45% 45% at 35% 35%, oklch(0.79 0.14 75 / 0.28), transparent 70%), radial-gradient(50% 50% at 70% 70%, oklch(0.53 0.21 285 / 0.3), transparent 70%)",
                  }}
                />
                <img
                  src={networkNodes}
                  alt="Isometric illustration of a connected supply chain network"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="w-full rounded-[1.75rem] shadow-soft"
                />
              </div>
            </Reveal>

            <div className="divide-y divide-primary/15 border-y border-primary/15">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.1}>
                  <div className="group flex items-start gap-6 py-7 transition-transform duration-500 hover:translate-x-1.5">
                    <span
                      className={`shrink-0 text-6xl font-extrabold leading-none transition-colors duration-500 sm:text-7xl ${stepTint[i % stepTint.length]}`}
                    >
                      {step.n}
                    </span>
                    <div className="min-w-0 pt-2">
                      <h3 className="text-xs font-bold tracking-[0.2em] text-secondary-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BAND CTA ─────────────────────────────────────── */}
      <section className="landing-section">
        <Reveal className="landing-container">
          <div className="ink-panel grain-overlay relative overflow-hidden rounded-[2rem] px-8 py-12 sm:px-14 sm:py-16">
            <div className="relative z-10 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0 max-w-2xl">
                <h2 className="text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl">
                  Stay ahead of your industry, procurement on another level
                </h2>
                <p className="mt-4 text-sm text-primary-foreground/75 sm:text-base">
                  Contact us TODAY for tailored packages and features for your business.
                </p>
              </div>
              <Link
                to="/signup"
                className="shrink-0 rounded-full bg-primary-foreground px-9 py-3.5 text-sm font-semibold text-primary shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── TEAM VISUAL ──────────────────────────────────── */}
      <section className="landing-section pt-24 sm:pt-28">
        <Reveal className="landing-container">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={teamCollab}
              alt="A corporate team collaborating around a laptop"
              loading="lazy"
              width={1280}
              height={960}
              className="h-[260px] w-full object-cover object-center sm:h-[340px]"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.24 0.03 278 / 0.6) 0%, oklch(0.53 0.21 285 / 0.25) 55%, transparent 100%)",
              }}
            />
          </div>
        </Reveal>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="landing-section py-24 sm:py-28">
        <div className="landing-container">
          <Reveal>
            <p className="text-[0.68rem] font-semibold tracking-[0.3em] text-muted-foreground">
              04 — CONTACT
            </p>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-4xl font-extrabold leading-[1] tracking-tight text-primary sm:text-6xl">
                Get in
                <span className="block text-brand-gradient italic">Touch</span>
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
                We'd love to hear from you. Reach out to us for any inquiries or to schedule a demo
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="surface-card divide-y divide-primary/10 p-2">
                {[
                  {
                    Icon: MapPin,
                    tint: "ring-accent-violet",
                    lines: ["315 Rivonia Road, Sandton", "Johannesburg, 2031, South Africa"],
                  },
                  { Icon: Phone, tint: "ring-accent-teal", lines: ["+27 12 345 6789"] },
                  { Icon: Mail, tint: "ring-accent-coral", lines: ["admin@procurementco.at"] },
                ].map(({ Icon, tint, lines }) => (
                  <div key={lines[0]} className="flex min-w-0 items-start gap-4 p-6">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tint}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 text-sm leading-relaxed text-muted-foreground">
                      {lines.map((l) => (
                        <p key={l}>{l}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-[1.75rem] shadow-soft">
                <iframe
                  title="Blink office location in Sandton, Johannesburg"
                  src="https://www.google.com/maps?q=315%20Rivonia%20Road%20Sandton%20Johannesburg&output=embed"
                  loading="lazy"
                  className="h-[420px] w-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
