"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2015",
    title: "Gli inizi analogici",
    description:
      "Scopro la camera oscura e mi innamoro della magia lenta della pellicola, studiando composizione e luce naturale.",
  },
  {
    year: "2018",
    title: "Narrazione per brand",
    description:
      "Collaboro con case di moda indipendenti e artisti emergenti, costruendo campagne fotografiche complete.",
  },
  {
    year: "2022",
    title: "Zoriography Studio",
    description:
      "Apro il mio spazio creativo a Milano per portare avanti progetti personali e produzioni per clienti internazionali.",
  },
];

const offerings = [
  {
    title: "Natura",
    description:
      "La fotografia naturalistica è il punto di partenza del mio percorso. Mi piace raccontare la forza e la calma della natura nei suoi dettagli più semplici.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1080&auto=format&fit=crop",
  },
  {
    title: "Paesaggistica",
    description:
      "Nei paesaggi cerco equilibrio, profondità e luce. Ogni luogo ha un ritmo diverso, e fotografarlo significa imparare ad ascoltarlo.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1080&auto=format&fit=crop",
  },
  {
    title: "Wildlife",
    description:
      "Mi affascina la vita selvatica e l’imprevedibilità dei suoi momenti. Ogni scatto è il risultato di pazienza, rispetto e attenzione.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1080&auto=format&fit=crop",
  },
  {
    title: "Viaggi",
    description:
      "Nei viaggi trovo nuovi modi di guardare. Mi interessa cogliere la luce, le persone e le atmosfere che rendono unico ogni posto.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080&auto=format&fit=crop",
  },
  {
    title: "Astrofotografia",
    description:
      "La notte è un territorio da esplorare. Nell’astrofotografia cerco la bellezza lontana delle stelle e la precisione del tempo che le accompagna.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1080&auto=format&fit=crop",
  },
];

const gearList = [
  {
    name: "Nikon D7500",
    description:
      "Reflex APS-C robusta che porto ovunque: sensore affidabile e tenuta ISO che mi permettono di sperimentare senza troppi pensieri.",
  },
  {
    name: "Nikkor 80-400mm f/4.5-6.5",
    description:
      "Zoom tele per faunistica e paesaggi compressi; mi regala reach extra quando cerco dettagli lontani o quando cerco di catturare un uccellino svolazzante.",
  },
  {
    name: "Tamron SP 20-70mm f/2.8",
    description:
      "Grandangolo luminoso per raccontare ambienti con prospettive ampie, perfetto anche in interni grazie all'apertura costante f/2.8.",
  },
  {
    name: "SkyWatcher 200/800 f/3.9",
    description:
      "Il mio compagno affidabile quando punto il cielo, con la montatura equatoriale Skywatcher AzEq 6-Gt registro nebulose e galassie che non vedrei a occhio nudo. A volte ossero anche senza scattare",
  },
];

const futureFocus = [
  {
    title: "Camera a 360 gradi",
    description:
      "Possiedo una Insta360 X3 e mi piacerebbe esplorare la fotografia immersiva per paesaggi e magari qualche time-laps con la 360.",
  },
  {
    title: "Astrofotografia planetaria",
    description:
      "Per ora mi limito ad oggetti di profondo cielo, ma mi piacerebbe provare a fotografare i pianeti ma dovrò ampliare il mio setup.",
  },
  {
    title: "Obiettivo tilt-shift",
    description:
      "Mi piacerrebbe giocare con piani di fuoco selettivi ed esplorare nuovi modi di fotografare, chissà magari un giorno potrei cambiare tipologia di scatti.",
  },
];

const AboutPage = () => (
  <div>
    <div className="grid gap-16 md:grid-cols-6 md:items-start max-w-[2048px] mx-auto px-4 sm:px-6 lg:px-8 mt-32">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="col-span-4 max-w-5xl"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">
          Chi sono
        </p>
        <h1 className="mt-12 font-display text-6xl text-brand-light tracking-[0.05em]">
          Catturare quel che sfugge tra luce e tempo
        </h1>
        <p className="mt-24 text-base leading-relaxed text-white/70 tracking-[0.05em]">
          La fotografia per me &egrave; un modo per osservare il mondo con
          calma.
          <br />
          Mi piace aspettare il momento giusto, quello in cui la luce cambia e
          qualcosa si rivela per un istante soltanto.
        </p>
        <p className="mt-8 text-base leading-relaxed text-white/70 tracking-[0.05em]">
          Scatto nella natura, in viaggio e tra le strade delle citt&agrave;,
          cercando scene che raccontino emozioni reali senza bisogno di parole.
        </p>
        <p className="mt-8 text-base leading-relaxed text-white/70 tracking-[0.05em]">
          Mi affascinano gli ambienti silenziosi, i paesaggi che mutano
          lentamente e i cieli notturni che sembrano infiniti.
        </p>
        <p className="mt-8 text-base leading-relaxed text-white/70 tracking-[0.05em]">
          Ogni immagine nasce dal desiderio di conservare quella sensazione
          precisa che, a occhio nudo, svanisce in un attimo.
        </p>
      </motion.section>

      <motion.div
        className="relative h-full w-full col-span-2 overflow-hidden rounded border border-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=920&auto=format&fit=crop"
          alt="Ritratto della fotografa Zoe Ricci in studio"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>

    <div className="max-w-[2048px] mx-auto px-4 sm:px-6 lg:px-8 mt-72">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">
          Cosa faccio
        </p>
        <p className="mt-4 text-base leading-relaxed text-white/70 tracking-[0.05em]">
          Ogni scatto nasce in un contesto diverso.
          <br />
          Queste sono le categorie che meglio rappresentano ci&ograve; che amo
          fotografare.
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {offerings.map((item) => (
          <motion.article
            key={item.title}
            className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-56 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 50vw, 275px"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="font-display text-lg text-brand-light tracking-[0.08em] uppercase">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>

    <div className="max-w-[2048px] mx-auto px-4 sm:px-6 lg:px-8 mt-72">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-10 lg:grid-cols-2 lg:items-start"
      >
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">
            Dietro l'obiettivo
          </p>
          <h2 className="font-display text-3xl text-brand-light tracking-[0.08em] uppercase">
            Una fotografia che nasce dal tempo libero
          </h2>
          <p className="text-base leading-relaxed text-white/70 tracking-[0.05em]">
            Scatto per passione, non per commissione. La macchina fotografica mi
            segue nei fine settimana, nei viaggi lenti e nelle passeggiate senza
            meta: &egrave; il mio modo di ricordare le sensazioni che mi fanno
            stare bene.
          </p>
          <p className="text-base leading-relaxed text-white/70 tracking-[0.05em]">
            Amo la luce naturale e i momenti di quiete, i dettagli che spesso
            passano inosservati. Ogni sessione nasce dalla curiosit&agrave; e
            dall'esigenza di raccontare il mio punto di vista, anche quando la
            storia &egrave; fatta solo di piccoli gesti quotidiani.
          </p>
        </div>
        <div className="space-y-6 rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm mt-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Piccole ispirazioni
          </p>
          <ul className="space-y-3 text-sm leading-relaxed text-white/70 tracking-[0.04em]">
            <li>
              - Le mia musica preferia nelle cuffie mentre sviluppo gli scatti.
            </li>
            <li>
              - L'Amore per gli animali e per la natura mi danno lo spunto per
              immortalarli.
            </li>
            <li>
              - Perdersi durante le passeggiate al tramonto, è la migliore
              ispirazione.
            </li>
            <li>
              - La passione per l'astronomia e per l'infinito e l'ignoto che
              circonda il nostro piccolo mondo.
            </li>
          </ul>
        </div>
      </motion.section>
    </div>

    <div className="max-w-[2048px] mx-auto px-4 sm:px-6 lg:px-8 mt-36">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">
          Cosa porto nello zaino
        </p>
        <h2 className="mt-10 font-display text-3xl text-brand-light tracking-[0.08em] uppercase">
          Gli strumenti che mi accompagnano
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/70 tracking-[0.05em] max-w-3xl">
          Non ho un setup infinito, ma pochi strumenti scelti per
          affidabilit&agrave;. Mi piace conoscerli bene e spingerli oltre il
          quotidiano, senza rincorrere l'ultima novit&agrave; tecnologica.
        </p>
        <p className="mt-6 text-base leading-relaxed text-white/70 tracking-[0.05em] max-w-3xl">
          Non è tutto. ho altra strumentazione, ma questa &egrave; quella che
          uso pi&ugrave; spesso.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {gearList.map((gear) => (
            <div
              key={gear.name}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 text-white/70 transition hover:border-white/30"
            >
              <h3 className="text-lg text-brand-light tracking-[0.08em] uppercase">
                {gear.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed tracking-[0.04em]">
                {gear.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>

    <div className="max-w-[2048px] mx-auto px-4 sm:px-6 lg:px-8 mt-36 mb-32">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-lg border border-white/10 bg-white/5 p-10 backdrop-blur-sm"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">
          Uno sguardo al futuro
        </p>
        <h2 className="mt-10 font-display text-3xl text-brand-light tracking-[0.08em] uppercase">
          Idee da esplorare con calma
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/70 tracking-[0.05em] max-w-3xl">
          Questo spazio rimane un hobby che cresce insieme a me. Mi piace
          immaginare nuovi progetti, tecniche e strumenti, senza la pressione di
          consegne o commissioni, infatti tutto nasce dal desiderio di
          sperimentare.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {futureFocus.map((item) => (
            <div
              key={item.title}
              className="rounded border border-white/10 p-6 text-white/70"
            >
              <h3 className="font-display text-lg text-brand-light tracking-[0.08em] uppercase">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed tracking-[0.04em]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  </div>
);

export default AboutPage;
