"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { NAV_ITEMS } from "@/components/site-header";
import type { SitePhoto } from "@/resources/images/site-photos";
import {
  SITE_MAIN_PHOTO_ID,
  sitePhotos as sitePhotoCollection,
} from "@/resources/images/site-photos";

type StageLayout = {
  id: string;
  sizeClass: string;
  initialOffset: { x: string; y: string };
  finalOffset: { x: string; y: string };
  enterRange: [number, number];
  initialScale: number;
  finalScale?: number;
  zIndex?: string;
};

type StagePhoto = StageLayout & {
  asset: SitePhoto;
};

const stageLayout: StageLayout[] = [
  {
    id: "main",
    // sizeClass: "w-[42vw] h-[40vh] sm:w-[36vw] sm:h-[51vh] md:w-[36vw] md:h-[51vh] lg:w-[36vw] lg:h-[51vh]",
    sizeClass: "w-[36vw] h-[51vh]",
    initialOffset: { x: "0vw", y: "30vh" }, finalOffset: { x: "0vw", y: "4vh" },
    enterRange: [0, 0.45],
    initialScale: 2.8,
    finalScale: 1,
    zIndex: "z-30",
  },
  {
    id: "top-left",
    // sizeClass: "w-[24vw] h-[14vh] sm:w-[31vw] sm:h-[28vh] md:w-[31vw] md:h-[28vh] lg:w-[31vw] lg:h-[28vh]",
    sizeClass: "w-[31vw] h-[28vh]",
    initialOffset: { x: "-90vw", y: "-60vh" }, finalOffset: { x: "-34vw", y: "-26.5vh" },
    enterRange: [0.18, 0.48],
    initialScale: 0.75,
  },
  {
    id: "top-right",
    // sizeClass: "w-[24vw] h-[14vh] sm:w-[31vw] sm:h-[28vh] md:w-[31vw] md:h-[28vh] lg:w-[31vw] lg:h-[28vh]",
    sizeClass: "w-[31vw] h-[28vh]",
    initialOffset: { x: "90vw", y: "-60vh" }, finalOffset: { x: "34vw", y: "-26.5vh" },
    enterRange: [0.22, 0.5],
    initialScale: 0.75,
  },
  {
    id: "left",
    // sizeClass: "w-[26vw] h-[20vh] sm:w-[31vw] sm:h-[31vh] md:w-[31vw] md:h-[31vh] lg:w-[31vw] lg:h-[31vh]",
    sizeClass: "w-[31vw] h-[31vh]",
    initialOffset: { x: "-100vw", y: "0vh" }, finalOffset: { x: "-34vw", y: "4vh" },
    enterRange: [0.28, 0.58],
    initialScale: 0.8,
  },
  {
    id: "right",
    // sizeClass: "w-[26vw] h-[20vh] sm:w-[31vw] sm:h-[31vh] md:w-[31vw] md:h-[31vh] lg:w-[31vw] lg:h-[31vh]",
    sizeClass: "w-[31vw] h-[31vh]",
    initialOffset: { x: "100vw", y: "0vh" }, finalOffset: { x: "34vw", y: "4vh" },
    enterRange: [0.32, 0.62],
    initialScale: 0.8,
  },
  {
    id: "bottom-left",
    // sizeClass: "w-[24vw] h-[14vh] sm:w-[31vw] sm:h-[28vh] md:w-[31vw] md:h-[28vh] lg:w-[31vw] lg:h-[29vh]",
    sizeClass: "w-[31vw] h-[29vh]",
    initialOffset: { x: "-80vw", y: "70vh" }, finalOffset: { x: "-34vw", y: "35vh" },
    enterRange: [0.36, 0.66],
    initialScale: 0.8,
  },
  {
    id: "bottom-right",
    // sizeClass: "w-[24vw] h-[14vh] sm:w-[31vw] sm:h-[28vh] md:w-[31vw] md:h-[28vh] lg:w-[31vw] lg:h-[29vh]",
    sizeClass: "w-[31vw] h-[29vh]",
    initialOffset: { x: "80vw", y: "70vh" }, finalOffset: { x: "34vw", y: "35vh" },
    enterRange: [0.4, 0.7],
    initialScale: 0.8,
  },
  {
    id: "top-center",
    // sizeClass: "w-[20vw] h-[11vh] sm:w-[36vw] sm:h-[18vh] md:w-[36vw] md:h-[18vh] lg:w-[36vw] lg:h-[18vh]",
    sizeClass: "w-[36vw] h-[18vh]",
    initialOffset: { x: "0vw", y: "-90vh" }, finalOffset: { x: "0vw", y: "-31.5vh" },
    enterRange: [0.24, 0.54],
    initialScale: 0.7,
    zIndex: "z-20",
  },
  {
    id: "bottom-center",
    // sizeClass: "w-[20vw] h-[11vh] sm:w-[36vw] sm:h-[18vh] md:w-[36vw] md:h-[18vh] lg:w-[36vw] lg:h-[18vh]",
    sizeClass: "w-[36vw] h-[18vh]",
    initialOffset: { x: "0vw", y: "90vh" }, finalOffset: { x: "0vw", y: "40vh" },
    enterRange: [0.44, 0.74],
    initialScale: 0.7,
    zIndex: "z-10",
  },
];

const HOME_PRIORITY_LIMIT = 27;

type HomePhotoSets = {
  stagePhotos: StagePhoto[];
  trailingPhotos: SitePhoto[];
};

// Produce deterministic home photo sets prioritising the first 28 frames.
const buildHomePhotoSets = (): HomePhotoSets => {
  const mainPhoto =
    sitePhotoCollection.find((photo) => photo.id === SITE_MAIN_PHOTO_ID) ??
    sitePhotoCollection[0];

  const nonMainPhotos = sitePhotoCollection.filter(
    (photo) => photo.id !== mainPhoto.id
  );
  const priorityPhotos = nonMainPhotos.filter((photo) => {
    const index = Number.parseInt(photo.id.replace("photo", ""), 10);
    return Number.isFinite(index) && index <= HOME_PRIORITY_LIMIT;
  });
  const remainingPhotos = nonMainPhotos.filter((photo) => {
    const index = Number.parseInt(photo.id.replace("photo", ""), 10);
    return !Number.isFinite(index) || index > HOME_PRIORITY_LIMIT;
  });

  const prioritizedPool = [...priorityPhotos];
  const fallbackPool = [...remainingPhotos];

  const stagePhotos = stageLayout.map((layoutItem) => {
    const asset =
      layoutItem.id === "main"
        ? mainPhoto
        : prioritizedPool.shift() ?? fallbackPool.shift() ?? mainPhoto;

    return {
      ...layoutItem,
      asset,
    };
  });

  const usedIds = new Set(stagePhotos.map((item) => item.asset.id));
  const trailingSource =
    prioritizedPool.length > 0 ? prioritizedPool : fallbackPool;
  const trailingPhotos = trailingSource.filter(
    (photo) => !usedIds.has(photo.id)
  );

  return {
    stagePhotos,
    trailingPhotos,
  };
};

const StagePhotoCard = ({
  progress,
  photo,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  photo: StagePhoto;
}) => {
  const {
    asset,
    enterRange,
    initialScale,
    finalScale = 1,
    initialOffset,
    finalOffset,
    sizeClass,
    zIndex,
  } = photo;
  const isMainPhoto = photo.id === "main";
  const appearStart = Math.max(0, enterRange[0] - 0.08);
  const appearEnd = enterRange[1];
  const loadActivationPoint = Math.max(0, appearStart - 0.08);
  const [shouldLoad, setShouldLoad] = useState(isMainPhoto);
  const stageImage = asset.image;
  const stageSizes = isMainPhoto
    ? "36vw"
    : "31vw";

  useEffect(() => {
    if (shouldLoad) return;
    if (progress.get() >= loadActivationPoint) {
      setShouldLoad(true);
    }
  }, [shouldLoad, loadActivationPoint, progress]);

  useMotionValueEvent(progress, "change", (value) => {
    if (shouldLoad) return;
    if (value >= loadActivationPoint) {
      setShouldLoad(true);
    }
  });

  const opacity = useTransform(
    progress,
    [appearStart, enterRange[0], appearEnd],
    [0, 0.4, 1]
  );
  const scale = useTransform(
    progress,
    [appearStart, enterRange[0], enterRange[1]],
    [initialScale, initialScale, finalScale]
  );
  const x = useTransform(
    progress,
    [appearStart, enterRange[0], enterRange[1], 1],
    [initialOffset.x, initialOffset.x, finalOffset.x, finalOffset.x]
  );
  const y = useTransform(
    progress,
    [appearStart, enterRange[0], enterRange[1], 1],
    [initialOffset.y, initialOffset.y, finalOffset.y, finalOffset.y]
  );
  const transform = useMotionTemplate`translate3d(calc(-50% + ${x}), calc(-50% + ${y}), 0) scale(${scale})`;
  const borderRadiusProgress = useTransform(
    progress,
    [enterRange[0], enterRange[1], Math.min(1, enterRange[1] + 0.2)],
    ["0px", "24px", "36px"]
  );
  const boxShadowProgress = useTransform(
    progress,
    [enterRange[0], Math.min(1, enterRange[1] + 0.4)],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 40px 120px rgba(0,0,0,0.45)"]
  );

  const borderRadius = isMainPhoto ? borderRadiusProgress : undefined;
  const boxShadow = isMainPhoto ? boxShadowProgress : undefined;

  return (
    <motion.div
      aria-hidden
      style={{ opacity, transform, boxShadow }}
      className={`pointer-events-none absolute left-1/2 top-1/2 overflow-hidden rounded-lg border border-white/10 bg-black/40 ${sizeClass} ${
        zIndex ?? "z-20"
      }`}
    >
      {shouldLoad ? (
        <Image
          src={stageImage}
          alt={asset.alt}
          fill
          sizes={stageSizes}
          className="object-cover"
          loading={isMainPhoto ? "eager" : "lazy"}
          priority={isMainPhoto}
          placeholder="blur"
          quality={isMainPhoto ? 82 : 76}
        />
      ) : null}
    </motion.div>
  );
};

const HomePage = () => {
  const transitionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

  const { stagePhotos, trailingPhotos } = useMemo(
    () => buildHomePhotoSets(),
    []
  );

  return (
    <div className="-mt-32 text-white">
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-10 px-0 text-center">
        <div className="flex w-4/5 sm:w-full flex-wrap items-center justify-center gap-6 text-base uppercase tracking-[0.35em] text-white/50">
          {NAV_ITEMS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white text-xxs sm:text-sm md:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <motion.h1
          className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.18em] uppercase leading-[0.9] transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          Zoriography
        </motion.h1>
        <motion.p
          className="text-xs sm:text-sm md:text-base uppercase tracking-[0.6em] text-white/40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          Federico D&apos;Ursi
        </motion.p>
        <motion.div
          className="absolute bottom-12 text-xs uppercase tracking-[0.35em] text-white/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 8 }}
            transition={{
              duration: 0.35,
              repeat: 100,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            scroll down
          </motion.div>
        </motion.div>
      </section>

      <section ref={transitionRef} className="relative h-[320vh]">
        <div className="sticky top-0 flex h-screen w-screen items-center justify-center overflow-visible">
          <div className="relative h-[82vh] w-[96vw] max-w-none">
            {stagePhotos.map((photo) => (
              <StagePhotoCard
                key={photo.id}
                progress={scrollYProgress}
                photo={photo}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-0 pb-32">
        <div className="flex w-full flex-col gap-12 p-3">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {trailingPhotos.map((photo, index) => {
              const isLargeCard = index % 7 === 0;
              const gridImage = isLargeCard ? photo.image : photo.thumb;

              return (
                <motion.div
                  key={photo.id}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 ${
                    isLargeCard ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                <Image
                  src={gridImage}
                  alt={photo.alt}
                  fill
                  sizes={
                      isLargeCard
                        ? "(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 50vw"
                        : "(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  }
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  quality={isLargeCard ? 82 : 76}
                />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
