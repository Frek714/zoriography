"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import heroImage from "@/resources/images/wave-haikei-edit-2.png";

type FeatureSection = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  align: "left" | "right";
};

type GalleryItem = {
  title: string;
  image: string;
};

const featureSections: FeatureSection[] = [
  {
    title: "Natura",
    subtitle: "Fermarsi ad osservare",
    description:
      "La fotografia naturalistica è il punto di partenza del mio percorso. Mi piace raccontare la forza e la calma della natura nei suoi dettagli più semplici.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1080&auto=format&fit=crop",
    align: "left",
  },
  {
    title: "Paesaggistica",
    subtitle: "Assaporare il momento",
    description:
      "Nei paesaggi cerco equilibrio, profondità e luce. Ogni luogo ha un ritmo diverso, e fotografarlo significa imparare ad ascoltarlo.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1080&auto=format&fit=crop",
    align: "right",
  },
  {
    title: "Wildlife",
    subtitle: "Cogliere l'attimo",
    description:
      "Mi affascina la vita selvatica e l’imprevedibilità dei suoi momenti. Ogni scatto è il risultato di pazienza, rispetto e attenzione.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1080&auto=format&fit=crop",
    align: "left",
  },
  {
    title: "Viaggi",
    subtitle: "Divertirsi a scoprire",
    description:
      "Nei viaggi trovo nuovi modi di guardare. Mi interessa cogliere la luce, le persone e le atmosfere che rendono unico ogni posto.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080&auto=format&fit=crop",
    align: "right",
  },
  {
    title: "Astrofotografia",
    subtitle: "osservare lontano",
    description:
      "La notte è un territorio da esplorare. Nell’astrofotografia cerco la bellezza lontana delle stelle e la precisione del tempo che le accompagna.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1080&auto=format&fit=crop",
    align: "left",
  },
];

const galleryItems: GalleryItem[] = [
  {
    title: "Nebbia blu",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Linee parallele",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Sentiero verde",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Onda statica",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Dettagli metallici",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Luce d'inverno",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Frame analogico",
    image:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Nebbia blu",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Linee parallele",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Sentiero verde",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Onda statica",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Dettagli metallici",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Luce d'inverno",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Frame analogico",
    image:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Nebbia blu",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Linee parallele",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Sentiero verde",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Onda statica",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Dettagli metallici",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Luce d'inverno",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Frame analogico",
    image:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Dettagli metallici",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Luce d'inverno",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Frame analogico",
    image:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Dettagli metallici",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  },
];

const storiesContainer = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const galleryContainer = "mx-auto w-full max-w-[2048px] px-4 sm:px-6 lg:px-8";

type GalleryCardProps = {
  item: GalleryItem;
  onSelect: (item: GalleryItem) => void;
};

const GalleryCard = ({ item, onSelect }: GalleryCardProps) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 20 });

  const handleMouseMove = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const normalizedX = offsetX / rect.width - 0.5;
    const normalizedY = offsetY / rect.height - 0.5;

    rotateY.set(normalizedX * 14);
    rotateX.set(normalizedY * -14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(item)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-square overflow-hidden rounded border border-white p-0 text-left shadow-lg shadow-black/20 transition-colors"
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: "900px",
      }}
    >
      <div className="absolute inset-0 rounded bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 1024px) 50vw, 20vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 rounded bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span
        className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.3em] text-white/80"
        style={{ textShadow: "4px 4px 3px rgba(0,0,0,0.8)" }}
      >
        {item.title}
      </span>
    </motion.button>
  );
};

const PortfolioPage = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selectedItem) return;

    const originalOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [selectedItem]);

  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  return (
    <div className="pb-32">
      <section className="relative -mt-32 h-[90vh] min-h-[620px] w-full overflow-hidden z-20">
        <Image
          src={heroImage}
          alt="Texture astratta con onde per il portfolio"
          fill
          priority
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" /> */}
        <div className="relative flex h-full flex-col items-center justify-center px-6 pt-0 text-center sm:px-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm uppercase tracking-[0.4em] text-white/60"
          >
            Fotografia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-10 font-display text-6xl text-brand-light tracking-[0.08em] uppercase sm:text-7xl"
            style={{ textShadow: "4px 4px 3px rgba(0,0,0,0.8)" }}
          >
            Portfolio
          </motion.h1>
          {/* <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 max-w-2xl text-base leading-relaxed text-white/70"
          >
            Collezione di serie personali, studi sulla luce e appunti di viaggio. Ogni immagine
            nasce dal tempo libero e dalla curiosit&agrave; di osservare il mondo con calma.
          </motion.p> */}
        </div>
        <div
          id="header-hero-sentinel"
          className="absolute bottom-96 left-0 h-2 w-full"
          aria-hidden="true"
        />
      </section>

      <section className="mt-72 z-10">
        <div className={`${storiesContainer} space-y-40`}>
          {featureSections.map((section) => {
            const isImageLeft = section.align === "left";

            return (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                className={`flex flex-col gap-8 md:items-center md:gap-12 ${
                  isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    isImageLeft ? "md:pr-6" : "md:pl-6"
                  }`}
                >
                  <div className="relative aspect-square w-[400px] overflow-hidden rounded border border-white bg-white/5 shadow-xl shadow-black/25">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div
                  className={`w-full md:w-1/2 ${
                    isImageLeft ? "md:pl-6" : "md:pr-6"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                    {section.subtitle}
                  </p>
                  <h2 className="mt-6 font-display text-3xl text-brand-light tracking-[0.08em] uppercase">
                    {section.title}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-white/70 tracking-[0.05em]">
                    {section.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mt-72">
        <div className={`${galleryContainer} text-center`}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl text-brand-light tracking-[0.08em] uppercase"
          >
            Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70"
          >
            Una selezione di scatti, i miei preferiti. <br />
            Momenti di vita, viaggi o passioni ritratte in modo artistico
            secondo la mia personale visione.
          </motion.p>

          <div className="mt-16 grid gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {galleryItems.map((item) => (
              <GalleryCard
                key={item.title}
                item={item}
                onSelect={setSelectedItem}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center glassed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Chiudi la visualizzazione"
              className="absolute right-10 top-10 z-[95] rounded-full border border-white/30 bg-black/50 w-10 h-10 text-sm uppercase font-bold text-white/80 transition hover:border-white hover:text-white"
            >
              X
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="relative w-[80vw] h-[80vh]"
            >
              <div className="flex h-full flex-col gap-10 overflow-hidden rounded border border-white/10 bg-black/70 p-8 text-left text-white md:flex-row md:gap-14 md:p-6">
                <div className="relative flex-[0.7] min-h-[320px] w-full overflow-hidden rounded border border-white/10 bg-black/30">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 700px"
                  />
                </div>
                <div className="flex w-full flex-[0.3] flex-col justify-between mt-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                      Frame selezionato
                    </p>
                    <h3 className="mt-5 font-display text-3xl text-brand-light tracking-[0.08em] uppercase">
                      {selectedItem.title}
                    </h3>
                    <p className="mt-20 text-sm leading-relaxed text-white/80">
                      Scatto appartenente alla mia collezione personale, nato
                      durante esplorazioni fotografiche senza commissioni. Mi
                      piace fermarmi sulle texture e sulle geometrie che
                      emergono quando la luce cambia, lasciando che
                      l'inquadratura racconti da sola la sensazione del momento.
                    </p>
                  </div>
                  <div>
                    <p className="mt-5 text-sm leading-relaxed text-white/60">
                      Premi ESC o la X in alto a destra per chiudere e tornare
                      alla raccolta.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;
