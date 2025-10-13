'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import heroImage from "@/resources/images/wave-haikei-edit-2.png";

const editions = [
  {
    title: "Fine Art Prints",
    subtitle: "Tirature limitate e certificate",
    description:
      "Ogni stampa è realizzata su carta Hahnemühle Photo Rag 308 gsm, firmata e numerata a mano. Disponibile nei formati 30x40, 50x70 e 70x100 cm.",
    highlights: [
      "Tiratura limitata a 30 copie",
      "Signature e certificato di autenticità",
      "Packaging protettivo pronto per il framing"
    ],
    image:
      "https://images.unsplash.com/photo-1475359524104-d101d02b5d52?q=80&w=1080&auto=format&fit=crop",
    ctaLabel: "Richiedi il catalogo",
    ctaHref: "mailto:hello@zoriography.com?subject=Richiesta%20catalogo%20stampe"
  },
  {
    title: "Collector's Box",
    subtitle: "Serie curate in cofanetto",
    description:
      "Box in betulla naturale con stampa principale in formato 30x45 cm e tre stampe aggiuntive 20x30 cm. Ideale per collezionisti e brand storytelling.",
    highlights: [
      "Selezione di 4 immagini coordinate",
      "Carta cotton rag con inchiostri a pigmento",
      "Personalizzazione del cofanetto con incisione"
    ],
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1080&auto=format&fit=crop",
    ctaLabel: "Prenota una consulenza",
    ctaHref: "mailto:hello@zoriography.com?subject=Collector%20Box"
  },
  {
    title: "Licenze Digitali",
    subtitle: "Uso commerciale o editoriale",
    description:
      "Licenze personalizzate per campagne digitali, stampa editoriale e ambienti retail. Ogni utilizzo viene definito su esigenza del cliente.",
    highlights: [
      "Consulto per scegliere la serie ideale",
      "File ottimizzati per web o stampa offset",
      "Pacchetti dedicati per agenzie e studi creativi"
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080&auto=format&fit=crop",
    ctaLabel: "Parla con me",
    ctaHref: "mailto:hello@zoriography.com?subject=Licenze%20digitali"
  }
];

const processSteps = [
  {
    title: "Scegli la serie",
    description:
      "Condividi gli scatti che ti hanno colpito oppure raccontami lo spazio in cui vorresti inserirli."
  },
  {
    title: "Personalizza il formato",
    description:
      "Decidiamo insieme carta, cornice e finiture. Ogni ordine è preparato manualmente nel mio studio."
  },
  {
    title: "Consegna curata",
    description:
      "Packaging protetto, spedizione assicurata e certificati inclusi. Disponibile ritiro su appuntamento a Milano."
  }
];

const ctaLinks = [
  {
    label: "Richiedi la brochure",
    href: "mailto:hello@zoriography.com?subject=Richiesta%20brochure%20stampe"
  },
  {
    label: "Prenota un incontro",
    href: "mailto:hello@zoriography.com?subject=Prenota%20un%20incontro"
  }
];

const containerClass = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

const PurchasePage = () => (
  <div className="pb-32">
    <section className="relative -mt-32 h-[90vh] min-h-[620px] w-full overflow-hidden z-20">
      <Image
        src={heroImage}
        alt="Texture astratta con onde"
        fill
        priority
        className="object-cover"
      />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm uppercase tracking-[0.4em] text-white/60"
        >
          Serie Autoriali
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-10 font-display text-6xl uppercase tracking-[0.08em] text-brand-light sm:text-7xl"
          style={{ textShadow: "4px 4px 3px rgba(0,0,0,0.8)" }}
        >
          Acquista
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 max-w-2xl text-base leading-relaxed text-white/70"
        >
          Stampe fine art e licenze curate per chi cerca fotografie evocative da vivere ogni giorno.
          Ogni pezzo è prodotto su richiesta, numerato e accompagnato da certificato di autenticità.
        </motion.p>
      </div>
      <div
        id="header-hero-sentinel"
        className="absolute bottom-96 left-0 h-2 w-full"
        aria-hidden="true"
      />
    </section>

    <section className="z-10 mt-72">
      <div className={`${containerClass} grid gap-10 md:grid-cols-3`}>
        {editions.map((edition, index) => (
          <motion.article
            key={edition.title}
            className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1], delay: index * 0.1 }}
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={edition.image}
                alt={edition.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <span className="absolute left-5 bottom-4 text-xs uppercase tracking-[0.3em] text-white/80">
                {edition.subtitle}
              </span>
            </div>
            <div className="flex h-full flex-col px-6 pb-6 pt-6">
              <h3 className="font-display text-2xl text-brand-light">{edition.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{edition.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/60">
                {edition.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-light" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={edition.ctaHref}
                className="mt-auto inline-flex items-center justify-start text-sm font-medium uppercase tracking-[0.3em] text-brand-light transition hover:text-white"
              >
                {edition.ctaLabel}
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="mt-28">
      <div className={`${containerClass} rounded-3xl border border-white/10 bg-white/5 px-8 py-12 backdrop-blur`}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-sm uppercase tracking-[0.4em] text-white/40"
        >
          Come funziona
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
          className="mt-6 max-w-2xl font-display text-4xl text-brand-light"
        >
          Un processo in tre step, costruito su misura.
        </motion.h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: index * 0.08 }}
              className="flex flex-col"
            >
              <span className="text-sm uppercase tracking-[0.4em] text-white/40">
                Step {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="mt-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-4xl text-brand-light"
        >
          Portiamo le immagini nella tua storia.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          className="mt-6 text-base leading-relaxed text-white/70"
        >
          Scrivimi per ricevere una selezione curata di immagini in base al tuo spazio, al brand o al
          progetto che stai sviluppando. Posso supportarti nella scelta delle cornici o nel coordinato
          con il tuo interior designer.
        </motion.p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {ctaLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full border border-brand px-8 py-3 text-sm uppercase tracking-[0.3em] text-brand-light transition hover:border-white hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default PurchasePage;
