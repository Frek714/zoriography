"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import heroImage from "@/resources/images/wave-haikei-edit-2.png";
import instagramImage from "@/resources/images/me.webp";
import behanceImage from "@/resources/images/site-photos-thumb/photo31.webp";
import channelPlaceholderImage from "@/resources/images/site-photos-thumb/photo73.webp";

const socialCards = [
  {
    title: "Instagram",
    description:
      "Dietro le quinte, storie quotidiane e anteprime dei progetti in corso.",
    href: "https://www.instagram.com/zoriography/",
    linkLabel: "Seguimi su Instagram",
    image: instagramImage,
    imageAlt: "Fotografo di spalle davanti a una montagna autunnale",
    imageClassName: "object-cover object-[center_58%]",
  },
  {
    title: "Behance",
    description:
      "Case study completi e serie fotografiche curate in ogni dettaglio.",
    href: "https://www.behance.net/federicodursi",
    linkLabel: "Guarda su Behance",
    image: behanceImage,
    imageAlt: "Paesaggio notturno con cielo stellato e una torre in primo piano",
  },
  {
    title: "Nuovo canale",
    description:
      "Sto valutando quale piattaforma affiancare a Instagram e Behance senza aprire un canale che poi resti fermo.",
    image: channelPlaceholderImage,
    imageAlt: "Persona che cammina in una stazione metropolitana illuminata",
  },
];

const contactMethods = [
  {
    label: "Email",
    value: "hello@zoriography.com",
    href: "mailto:hello@zoriography.com",
  },
  {
    label: "Telefono",
    value: "+39 340 000 0000",
    href: "tel:+393400000000",
  },
  {
    label: "Instagram",
    value: "@zoriography",
    href: "https://www.instagram.com/zoriography",
  },
];

const containerClass = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

const ContactPage = () => (
  <div className="pb-32">
    <section className="relative -mt-32 h-[60vh] min-h-[620px] w-full overflow-hidden z-20">
      <Image
        src={heroImage}
        alt="Texture astratta con onde per il portfolio"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={95}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" /> */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 pt-0 text-center sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm uppercase tracking-[0.4em] text-white/60"
        >
          Parliamo
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-10 font-display text-6xl text-brand-light tracking-[0.08em] uppercase sm:text-7xl"
          style={{ textShadow: "4px 4px 3px rgba(0,0,0,0.8)" }}
        >
          Contatti
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

    <section className="z-10 mt-72">
      <div className={`${containerClass} grid gap-8 md:grid-cols-3`}>
        {socialCards.map((card, index) => (
          <motion.article
            key={card.title}
            className="flex flex-col overflow-hidden rounded border border-white/10 bg-white/5 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
              delay: index * 0.08,
            }}
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className={card.imageClassName ?? "object-cover"}
                placeholder="blur"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <span className="absolute left-5 bottom-4 text-xs uppercase tracking-[0.3em] text-white/80">
                {card.title}
              </span>
            </div>
            <div className="flex h-full flex-col px-6 pb-6 pt-5">
              <p className="text-sm leading-relaxed text-white/70">
                {card.description}
              </p>
              {card.href && card.linkLabel ? (
                <Link
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto pt-6 inline-flex items-center text-sm font-medium uppercase tracking-[0.3em] text-brand-light transition hover:text-white"
                >
                  {card.linkLabel}
                </Link>
              ) : (
                <span className="mt-auto pt-6 inline-flex items-center text-sm font-medium uppercase tracking-[0.3em] text-white/35">
                  In definizione
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="mt-72">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-sm uppercase tracking-[0.4em] text-white/40"
        >
          Contatti diretti
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
          className="mt-6 font-display text-4xl text-brand-light"
        >
          Vuoi chiedermi qualcosa?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.16 }}
          className="mt-4 text-base leading-relaxed text-white/70"
        >
          Scrivimi una email, mandami un messaggio su Instagram o su WhatsApp.
          Sar&ograve; felice di risponderti il prima possibile. <br />
          Se posso esserti utile in qualche modo, lo far&ograve; con piacere.
        </motion.p>
        <div className="mt-12 flex flex-col items-center gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="flex flex-col items-center"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                {method.label}
              </p>
              <Link
                href={method.href}
                className="mt-2 text-lg text-white transition hover:text-brand-light"
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {method.value}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ContactPage;
