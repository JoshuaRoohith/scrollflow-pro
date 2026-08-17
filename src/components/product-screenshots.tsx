import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import marketplace1 from "../assets/Marketplace-1.jpg";
import marketplace2 from "../assets/marketplace-2.jpg";
import marketplace3 from "../assets/marketplace-3.jpg";
import marketplace4 from "../assets/marketplace-4.jpg";
import blinknet1 from "../assets/Blinknet-1.jpg";
import blinknet2 from "../assets/Blinknet-2.jpg";
import blinknet3 from "../assets/Blinknet-3.jpg";
import reports1 from "../assets/Reports-1.jpg";
import reports2 from "../assets/Reports-2.jpg";
import reports3 from "../assets/Reports-3.jpg";
import reports4 from "../assets/Reports-4.jpg";
import reports5 from "../assets/Reports-5.jpg";
import vms1 from "../assets/VMS-1.jpg";
import vms2 from "../assets/VMS-2.jpg";
import vms3 from "../assets/VMS-3.jpg";
import p2p1 from "../assets/P2P-1.jpg";
import p2p2 from "../assets/P2P-2.jpg";
import p2p3 from "../assets/P2P-3.jpg";
import p2p4 from "../assets/P2P-4.jpg";
import p2p5 from "../assets/P2P-5.jpg";
import p2p6 from "../assets/P2P-6.jpg";
import p2p7 from "../assets/P2P-7.jpg";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel";

const productScreenshots = {
  marketplace: [marketplace1, marketplace2, marketplace3, marketplace4],
  "blinknet-and-chat": [blinknet1, blinknet2, blinknet3],
  "dashboards-and-reports": [reports1, reports2, reports3, reports4, reports5],
  "vendor-management": [vms1, vms2, vms3],
  "procure-to-pay": [p2p1, p2p2, p2p3, p2p4, p2p5, p2p6, p2p7],
} as const;

type ProductSlug = keyof typeof productScreenshots;

type ProductScreenshotsProps = {
  slug: string;
  title: string;
};

function hasProductScreenshots(slug: string): slug is ProductSlug {
  return slug in productScreenshots;
}

function ProductCarousel({
  screenshots,
  title,
}: {
  screenshots: readonly string[];
  title: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setActiveSlide(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const timer = window.setTimeout(() => api.scrollNext(), 5000);
    return () => window.clearTimeout(timer);
  }, [api, activeSlide]);

  return (
    <Carousel setApi={setApi} opts={{ loop: true }}>
      <CarouselContent>
        {screenshots.map((src, index) => (
          <CarouselItem key={src}>
            <div className="overflow-hidden rounded-[1.25rem] border border-primary/10 bg-muted/40 p-1.5 sm:p-2">
              <img
                src={src}
                alt={`${title} product interface, screen ${index + 1}`}
                loading="lazy"
                className="block h-auto w-full rounded-[0.9rem] object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div
        className="mt-3 flex items-center justify-between gap-4 px-1"
        aria-label="Carousel controls"
      >
        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={() => api?.scrollPrev()}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/15 bg-card text-primary shadow-soft transition-colors hover:bg-accent"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex justify-center gap-2" aria-label="Carousel slide selection">
          {screenshots.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`Show screenshot ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === index ? "w-7 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/45"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next screenshot"
          onClick={() => api?.scrollNext()}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/15 bg-card text-primary shadow-soft transition-colors hover:bg-accent"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </Carousel>
  );
}

export function ProductScreenshots({ slug, title }: ProductScreenshotsProps) {
  if (!hasProductScreenshots(slug)) return null;

  const screenshots = productScreenshots[slug];

  return <ProductCarousel screenshots={screenshots} title={title} />;
}
