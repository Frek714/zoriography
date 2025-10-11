'use client';

import { motion } from "framer-motion";
import Link from "next/link";

const contactMethods = [
  {
    label: "Email",
    value: "hello@zoriography.com",
    href: "mailto:hello@zoriography.com"
  },
  {
    label: "Telefono",
    value: "+39 340 000 0000",
    href: "tel:+393400000000"
  },
  {
    label: "Instagram",
    value: "@zoriography",
    href: "https://www.instagram.com/zoriography"
  }
];

const ContactPage = () => (
  <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <p className="text-sm uppercase tracking-[0.4em] text-white/40">Contatti</p>
      <h1 className="mt-6 font-display text-4xl text-brand-light">Creiamo qualcosa insieme.</h1>
      <p className="mt-4 text-base leading-relaxed text-white/70">
        Raccontami il tuo progetto: tipo di produzione, location, tempistiche e qualsiasi riferimento
        visivo. Possiamo incontrarci a Milano oppure organizzare una call per progettare la prossima
        sessione fotografica.
      </p>

      <div className="mt-12 space-y-6">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            className="border-b border-white/10 pb-4"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">{method.label}</p>
            <Link
              href={method.href}
              className="mt-1 block text-lg text-white transition hover:text-brand-light"
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {method.value}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>

    <motion.section
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
    >
      <h2 className="font-display text-2xl text-brand-light">Brief veloce</h2>
      <p className="mt-2 text-sm text-white/60">
        Compila il form per ricevere una proposta personalizzata entro 48 ore.
      </p>
      <form className="mt-8 space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs uppercase tracking-[0.3em] text-white/40">
            Nome / Organizzazione
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-full border border-white/10 bg-black/60 px-5 py-3 text-sm text-white focus:border-brand focus:outline-none"
            placeholder="Chi sei?"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs uppercase tracking-[0.3em] text-white/40">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-full border border-white/10 bg-black/60 px-5 py-3 text-sm text-white focus:border-brand focus:outline-none"
            placeholder="dove posso scriverti?"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-white/40">
            Dettagli del progetto
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-3xl border border-white/10 bg-black/60 px-5 py-3 text-sm text-white focus:border-brand focus:outline-none"
            placeholder="Parlami dell'idea, della location e delle tempistiche."
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full border border-brand px-6 py-3 text-sm uppercase tracking-[0.3em] transition hover:border-white hover:text-white"
        >
          Invia il brief
        </button>
      </form>
    </motion.section>
  </div>
);

export default ContactPage;
