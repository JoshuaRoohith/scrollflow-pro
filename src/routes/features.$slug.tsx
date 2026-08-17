import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Reveal } from "../components/reveal";
import { ProductScreenshots } from "../components/product-screenshots";
import { features, getFeature } from "../lib/features-data";

const screenshotProductSlugs = new Set([
  "marketplace",
  "blinknet-and-chat",
  "dashboards-and-reports",
  "vendor-management",
  "procure-to-pay",
]);

export const Route = createFileRoute("/features/$slug")({
  loader: ({ params }) => {
    const feature = getFeature(params.slug);
    if (!feature) throw notFound();
    return { feature };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — Blink" }, { name: "robots", content: "noindex" }],
      };
    }
    const { title, tagline } = loaderData.feature;
    return {
      meta: [
        { title: `${title} — Blink` },
        { name: "description", content: tagline },
        { property: "og:title", content: `${title} — Blink` },
        { property: "og:description", content: tagline },
      ],
    };
  },
  component: FeatureDetail,
});

function FeatureDetail() {
  const { feature } = Route.useLoaderData();
  const index = features.findIndex((f) => f.slug === feature.slug);
  const prev = features[(index - 1 + features.length) % features.length]!;
  const next = features[(index + 1) % features.length]!;
  const hasScreenshots = screenshotProductSlugs.has(feature.slug);

  return (
    <main className="overflow-x-hidden">
      <section className="landing-section band-lavender pb-12 pt-28 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h1 className="text-3xl font-extrabold text-primary-soft sm:text-5xl">
              {feature.title}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {feature.tagline}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-6 w-full max-w-[100rem] sm:mt-7">
          <div className="surface-card p-4 sm:p-6">
            {hasScreenshots && <ProductScreenshots slug={feature.slug} title={feature.title} />}
            <div className={hasScreenshots ? "mt-5 border-t border-primary/10 pt-5" : undefined}>
              {feature.columns ? (
                <div className="grid gap-10 md:grid-cols-2 md:divide-x md:divide-border">
                  {feature.columns.map((col) => (
                    <div key={col.heading} className="md:px-6">
                      <h2 className="text-xl font-bold text-secondary-foreground">{col.heading}</h2>
                      <h3 className="mt-1 text-lg font-bold text-primary">{col.subheading}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {col.intro}
                      </p>
                      <p className="mt-5 text-sm font-semibold text-secondary-foreground">
                        Key Features:
                      </p>
                      <ul className="mt-2 space-y-2.5">
                        {col.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {feature.bullets?.map((b, i) => (
                    <li
                      key={b}
                      className="flex gap-3 rounded-2xl bg-muted/60 p-4 text-sm leading-relaxed text-muted-foreground transition-transform duration-300 hover:-translate-y-1"
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-8 flex w-full max-w-[100rem] flex-wrap items-center justify-between gap-4">
          <Link
            to="/features/$slug"
            params={{ slug: prev.slug }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" /> {prev.title}
          </Link>
          <Link
            to="/"
            hash="features"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <Link
            to="/features/$slug"
            params={{ slug: next.slug }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            {next.title} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
