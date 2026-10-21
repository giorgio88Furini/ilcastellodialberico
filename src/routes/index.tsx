import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Wifi,
  Car,
  Coffee,
  Bike,
  CigaretteOff,
  Star,
  Menu,
  X,
  ArrowRight,
  BadgeCheck,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Link } from "@tanstack/react-router";
import heroCasale from "@/assets/hero-courtyard-tower.webp.asset.json";
import storyInterior from "@/assets/story-interior.jpg";
import roomMatrimoniale from "@/assets/room-matrimoniale.jpg";
import roomFrancese from "@/assets/room-francese.jpg";
import roomTripla from "@/assets/room-tripla.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import exploreCycling from "@/assets/explore-cycling.webp.asset.json";
import exploreArt from "@/assets/explore-art.webp.asset.json";
import exploreCoast from "@/assets/explore-coast.webp.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Il Castello di Alberico | Bed & Breakfast a Cotignola, Romagna" },
      {
        name: "description",
        content:
          "B&B a Cotignola in una dimora storica di fine Seicento. Camere confortevoli, colazione a buffet, giardino e ospitalità familiare nella Bassa Romagna.",
      },
      {
        property: "og:title",
        content: "Il Castello di Alberico | Bed & Breakfast a Cotignola, Romagna",
      },
      {
        property: "og:description",
        content:
          "B&B a Cotignola in una dimora storica di fine Seicento. Camere confortevoli, colazione a buffet, giardino e ospitalità familiare nella Bassa Romagna.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ilcastellodialberico.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://ilcastellodialberico.lovable.app/" }],
  }),
});

const BOOKING_URL = "https://www.booking.com/hotel/it/il-castello-di-alberico.it.html";
const OFFICIAL_SITE_URL = "https://bebilcastellodialberico.it/";
const PHONE_NUMBER = "+393714427228";
const EMAIL_ADDRESS = "ilcastellodialberico@gmail.com";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Il+Castello+di+Alberico%2C+Via+Gesuita+29%2C+Cotignola";

const NAV_LINKS = [
  { href: "#storia", label: "Storia" },
  { href: "#camere", label: "Camere" },
  { href: "#colazione", label: "Colazione" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#contatti", label: "Contatti" },
];

const REVIEWS = [
  {
    name: "Massimo",
    flag: "🇮🇹",
    quote: "Un ambiente meraviglioso e persone gentilissime. Ci siamo sentiti a casa.",
  },
  {
    name: "Roberta",
    flag: "🇮🇹",
    quote: "Struttura elegante e molto accogliente, personale gentile.",
  },
  {
    name: "Elena",
    flag: "🇮🇹",
    quote: "Colazione completa all'italiana con tante piccole attenzioni.",
  },
  {
    name: "Matteo",
    flag: "🇮🇹",
    quote:
      "Stanza molto accogliente e spaziosa con letto comodo, bagno dotato di ogni necessario...",
  },
  {
    name: "Rosangela",
    flag: "🇮🇹",
    quote:
      "Struttura completamente ristrutturata, pulita dotata di tutti i confort. Giardino esterno molto curato.",
  },
  {
    name: "Annalisa",
    flag: "🇮🇹",
    quote:
      "Ivano, è stato super accogliente e disponibile alle nostre richieste, ambiente molto carino e ricco di dettagli...",
  },
];

const RATINGS = [
  { label: "Staff & accoglienza", value: 9.7 },
  { label: "Pulizia", value: 9.7 },
  { label: "Comfort", value: 9.7 },
  { label: "Strutture", value: 9.4 },
  { label: "Rapporto qualità-prezzo", value: 9.2 },
  { label: "Posizione", value: 8.8 },
  { label: "Wi-Fi", value: 9.4 },
];

const TRUST_ITEMS = [
  { icon: Wifi, label: "Wi-Fi gratuito" },
  { icon: Car, label: "Parcheggio gratuito" },
  { icon: Coffee, label: "Colazione a buffet" },
  { icon: Bike, label: "Biciclette gratuite" },
  { icon: CigaretteOff, label: "Camere non fumatori" },
];

const ROOMS = [
  {
    name: "Matrimoniale con cucinotto",
    image: roomMatrimoniale,
    desc: "Ingresso interno ed esterno, bagno privato e cucinotto attrezzato. Al piano terra; fino a 2 ospiti.",
  },
  {
    name: "Matrimoniale con bagno esterno",
    image: roomFrancese,
    desc: "Una soluzione raccolta per 2 ospiti. Il bagno si trova all'esterno della camera; chiedi i dettagli in fase di prenotazione.",
  },
  {
    name: "Camera tripla",
    image: roomTripla,
    desc: "Sono disponibili configurazioni con letto matrimoniale e singolo oppure tre letti singoli. Verifica la camera e il piano al momento della prenotazione.",
  },
];

const EXPLORE = [
  {
    image: exploreCycling.url,
    title: "Ciclismo & Natura",
    desc: "La struttura mette a disposizione biciclette gratuite: un modo piacevole per scoprire Cotignola e la campagna della Bassa Romagna.",
  },
  {
    image: exploreArt.url,
    title: "Arte e Borghi Storici",
    desc: "Dedica una giornata ai mosaici di Ravenna, alla ceramica di Faenza o ai borghi storici della Romagna.",
  },
  {
    image: exploreCoast.url,
    title: "Mirabilandia e Costa",
    desc: "Per una giornata in famiglia o al mare, puoi includere Mirabilandia e le spiagge della costa romagnola nel tuo itinerario.",
  },
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuDialogRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const nextScrolled = window.scrollY > 40;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
      return;
    }
    previousFocusRef.current = menuButtonRef.current;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !menuDialogRef.current) return;
      const focusable = menuDialogRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-gold/30 selection:text-charcoal">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-cream focus:px-4 focus:py-3 focus:text-charcoal focus:shadow-lg"
      >
        Salta al contenuto
      </a>
      {/* NAV */}
      <nav
        inert={menuOpen}
        aria-label="Navigazione principale"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-charcoal/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#top"
            className={`font-serif text-xl md:text-2xl italic tracking-tight transition-colors ${
              scrolled ? "text-charcoal" : "text-cream"
            }`}
          >
            Il Castello di Alberico
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  scrolled
                    ? "text-charcoal/70 hover:text-terracotta"
                    : "text-cream/90 hover:text-gold"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-charcoal px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide hover:bg-gold/90 ring-1 ring-gold/60 transition-all hover:scale-[1.03] shadow-sm"
            >
              Prenota
            </a>
          </div>
          <button
            type="button"
            className={`flex size-11 items-center justify-center rounded-full md:hidden ${scrolled ? "text-charcoal" : "text-cream"}`}
            aria-label="Apri il menu"
            ref={menuButtonRef}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        ref={menuDialogRef}
        id="mobile-menu"
        role="dialog"
        aria-modal={menuOpen}
        aria-label="Menu di navigazione"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-0 z-[60] bg-cream transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-charcoal/10">
          <span className="font-serif text-xl italic">Il Castello di Alberico</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Chiudi il menu"
            ref={closeButtonRef}
            className="flex size-11 items-center justify-center"
          >
            <X className="size-6" />
          </button>
        </div>
        <div className="flex flex-col items-start gap-6 px-8 py-12 font-serif text-3xl">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-terracotta transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-gold text-charcoal px-8 py-4 rounded-full text-base font-sans font-semibold"
          >
            Verifica disponibilità
          </a>
        </div>
      </div>

      <main id="main" inert={menuOpen} className="pb-20 md:pb-0">
        {/* HERO */}
        <header
          id="top"
          className="relative h-[100svh] min-h-[640px] w-full flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full">
            <img
              src={heroCasale.url}
              alt="Il Castello di Alberico — cortile fiorito con vista sul campanile"
              width={1148}
              height={1454}
              fetchPriority="high"
              decoding="async"
              className="w-full h-[115%] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/25 to-charcoal/60" />
          </div>

          <div
            className="relative z-10 mx-4 max-w-2xl text-center rounded-2xl px-8 py-14 md:px-16 md:py-20 shadow-2xl ring-1 ring-white/20 reveal"
            style={{
              background: "rgba(250, 246, 240, 0.14)",
              backdropFilter: "blur(18px)",
            }}
          >
            <p className="text-[11px] tracking-[0.35em] uppercase text-cream/80 mb-6">
              Bed &amp; Breakfast · Cotignola · Romagna
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-cream font-medium leading-[0.98] mb-6 text-balance">
              Il Castello di Alberico
            </h1>
            <p className="font-serif italic text-lg md:text-2xl text-cream/90 mb-10 text-pretty">
              Una dimora di fine Seicento, l'ospitalità della Romagna
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 bg-gold hover:bg-gold/90 text-charcoal px-8 py-4 rounded-full text-base font-semibold tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
            >
              Verifica disponibilità
              <ArrowRight className="size-4" />
            </a>
            <p className="mt-8 text-[11px] tracking-[0.3em] uppercase text-cream/70">
              Via Gesuita, 29 · Cotignola (RA) · Italia
            </p>
          </div>

          <a
            href={`${BOOKING_URL}#tab-reviews`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leggi le recensioni su Booking.com: 9,1 su 10, 42 recensioni"
            className="absolute top-20 right-6 md:right-10 z-10 bg-cream/95 backdrop-blur px-4 py-3 rounded-xl ring-1 ring-black/5 shadow-xl hidden sm:block reveal hover:-translate-y-1 transition-transform"
            data-delay="200"
          >
            <div className="flex items-center gap-2">
              <Star className="size-4 fill-gold text-gold" />
              <span className="font-semibold text-charcoal">9,1</span>
              <span className="text-sm text-charcoal/80">Eccellente</span>
            </div>
            <p className="text-[10px] text-charcoal/50 uppercase tracking-widest mt-1">
              42 recensioni · Booking.com
            </p>
          </a>
        </header>

        {/* TRUST BAR */}
        <section className="bg-cream border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center justify-center md:justify-between gap-6">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-charcoal/70">
                <Icon className="size-5 text-gold" strokeWidth={1.5} />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em]">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* STORIA */}
        <section id="storia" className="bg-cream py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="reveal">
              <img
                src={storyInterior}
                alt="Interno del casale con travi in legno"
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl"
              />
            </div>
            <div className="flex flex-col gap-8 reveal" data-delay="150">
              <span className="text-[11px] tracking-[0.35em] uppercase text-terracotta font-medium">
                La Nostra Storia
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium leading-[1.1] text-balance">
                Una dimora di fine Seicento,{" "}
                <em className="text-terracotta not-italic">restaurata con cura</em>
              </h2>
              <p className="text-charcoal/75 text-lg leading-relaxed max-w-[56ch]">
                Nel cuore della Bassa Romagna, una dimora storica conserva il fascino della sua
                origine e accoglie gli ospiti con comfort moderni. Le travi in legno e i dettagli
                d'epoca fanno da cornice a un soggiorno tranquillo, tra giardino e campagna. Qui
                l'ospitalità è personale e familiare.
              </p>
              <blockquote className="pl-6 border-l-2 border-gold/60 italic font-serif text-xl text-charcoal/80">
                "Un ambiente meraviglioso e persone gentilissime. Ci siamo sentiti a casa."
                <cite className="not-italic block mt-3 text-[11px] font-sans font-medium tracking-[0.25em] uppercase text-charcoal/50">
                  — Massimo
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CAMERE */}
        <section id="camere" className="bg-[#f4efe6] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto reveal">
              <span className="text-[11px] tracking-[0.35em] uppercase text-terracotta font-medium">
                Le Camere
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4 leading-tight">
                Cinque camere, ognuna con la sua atmosfera
              </h2>
              <p className="text-charcoal/60 text-lg">
                Dalla matrimoniale con cucinotto alle camere triple. Per conoscere disponibilità e
                dotazioni precise, consulta le opzioni di prenotazione.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {ROOMS.map((room, i) => (
                <article
                  key={room.name}
                  className="group bg-cream rounded-sm overflow-hidden ring-1 ring-black/5 hover:ring-gold/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl reveal"
                  data-delay={i * 120}
                >
                  <div className="overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl leading-tight mb-4">{room.name}</h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed mb-8">{room.desc}</p>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-charcoal hover:text-terracotta group-hover:gap-3 transition-all"
                    >
                      Scopri e prenota <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COLAZIONE */}
        <section id="colazione" className="bg-olive/10 py-24 md:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="order-2 md:order-1 flex flex-col gap-8 reveal">
              <span className="text-[11px] tracking-[0.35em] uppercase text-olive font-medium">
                La Colazione
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-balance">
                Una colazione{" "}
                <em className="text-terracotta not-italic">che ti fa sentire a casa</em>
              </h2>
              <p className="text-charcoal/75 text-lg leading-relaxed max-w-[56ch]">
                Ogni mattina trovi una colazione a buffet con prodotti freschi e locali, succhi e
                cibi di stagione. Un inizio di giornata semplice e curato, nello spirito
                dell'ospitalità romagnola.
              </p>
              <div className="bg-cream p-6 shadow-lg border-l-4 border-gold max-w-md">
                <p className="italic font-serif text-lg text-charcoal/80 leading-relaxed">
                  "Colazione completa all'italiana con tante piccole attenzioni."
                </p>
                <span className="mt-3 block text-[11px] font-medium uppercase tracking-[0.25em] text-charcoal/50">
                  — Elena
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2 reveal" data-delay="150">
              <img
                src={breakfastImg}
                alt="Colazione all'italiana"
                width={1400}
                height={1000}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* RECENSIONI */}
        <section id="recensioni" className="bg-cream py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 max-w-2xl reveal">
              <span className="text-[11px] tracking-[0.35em] uppercase text-terracotta font-medium">
                Recensioni degli ospiti
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4 leading-tight">
                I nostri ospiti dicono
              </h2>
              <p className="text-charcoal/60 text-lg">
                9,1 su 10 su Booking.com, sulla base di 42 recensioni. Il punteggio può variare nel
                tempo.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
              {/* Ratings column */}
              <aside className="lg:col-span-1 flex flex-col gap-5 reveal">
                {RATINGS.map((r) => (
                  <div key={r.label}>
                    <div className="flex justify-between text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/70 mb-2">
                      <span>{r.label}</span>
                      <span className="text-charcoal font-semibold">{r.value.toFixed(1)}</span>
                    </div>
                    <div
                      role="meter"
                      aria-label={`${r.label}: ${r.value.toFixed(1)} su 10`}
                      aria-valuemin={0}
                      aria-valuemax={10}
                      aria-valuenow={r.value}
                      className="h-[3px] w-full bg-charcoal/10 rounded-full overflow-hidden"
                    >
                      <div
                        className="rating-bar h-full bg-gold rounded-full"
                        style={{ ["--final-width" as string]: `${(r.value / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="mt-6 pt-6 border-t border-charcoal/10">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-6xl text-terracotta font-medium">9,1</span>
                    <div>
                      <p className="font-semibold">Eccellente</p>
                      <p className="text-xs text-charcoal/60">42 recensioni su Booking.com</p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Reviews grid */}
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
                {REVIEWS.map((r, i) => (
                  <div
                    key={i}
                    className="bg-[#f4efe6] p-6 rounded-sm ring-1 ring-black/5 flex flex-col reveal"
                    data-delay={(i % 4) * 100}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                        {r.name} <span aria-hidden>{r.flag}</span>
                      </span>
                      <BadgeCheck className="size-4 text-olive" aria-hidden="true" />
                    </div>
                    <p className="font-serif italic text-lg leading-snug text-charcoal/85 text-pretty flex-1">
                      "{r.quote}"
                    </p>
                    <a
                      href={`${BOOKING_URL}#tab-reviews`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex min-h-11 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-olive hover:text-charcoal transition-colors"
                      aria-label={`Leggi la recensione di ${r.name} su Booking.com`}
                    >
                      <BadgeCheck className="size-3.5" aria-hidden="true" /> Recensione verificata
                      su Booking.com
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ESPLORA */}
        <section className="bg-[#1f1d1a] text-cream py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <span className="text-[11px] tracking-[0.35em] uppercase text-gold font-medium">
                Cosa Fare
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">
                Esplora la Romagna
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {EXPLORE.map((e, i) => (
                <article key={e.title} className="group reveal" data-delay={i * 100}>
                  <div className="overflow-hidden rounded-sm mb-5">
                    <img
                      src={e.image}
                      alt={e.title}
                      width={900}
                      height={1100}
                      loading="lazy"
                      className="w-full aspect-[3/4] object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms]"
                    />
                  </div>
                  <h3 className="font-serif text-2xl mb-2">{e.title}</h3>
                  <p className="text-sm text-cream/60 leading-relaxed">{e.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section id="contatti" className="bg-[#f4efe6] py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <span className="text-[11px] tracking-[0.35em] uppercase text-terracotta font-medium">
                Contatti &amp; informazioni
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-5 leading-tight text-balance">
                Ti aiutiamo a organizzare il soggiorno
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed max-w-[56ch] mb-8">
                Per informazioni su camere, disponibilità o esigenze particolari, puoi contattare
                direttamente la struttura. Per date e tariffe, consulta le opzioni aggiornate
                online.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex min-h-16 items-center gap-4 bg-cream p-4 ring-1 ring-black/5 hover:ring-gold/60 transition-all"
                >
                  <Phone className="size-5 shrink-0 text-terracotta" aria-hidden="true" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-charcoal/50">
                      Telefono
                    </span>
                    <span className="font-medium text-charcoal">+39 371 442 7228</span>
                  </span>
                </a>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex min-h-16 items-center gap-4 bg-cream p-4 ring-1 ring-black/5 hover:ring-gold/60 transition-all"
                >
                  <Mail className="size-5 shrink-0 text-terracotta" aria-hidden="true" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-charcoal/50">
                      Email
                    </span>
                    <span className="font-medium text-charcoal break-all">{EMAIL_ADDRESS}</span>
                  </span>
                </a>
              </div>
            </div>

            <div
              className="bg-cream p-7 md:p-9 shadow-lg ring-1 ring-black/5 reveal"
              data-delay="120"
            >
              <div className="flex items-start gap-4">
                <MapPin className="size-5 shrink-0 text-terracotta mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-2xl mb-2">Dove siamo</h3>
                  <address className="not-italic text-charcoal/75 leading-relaxed">
                    Via Gesuita, 29
                    <br />
                    48033 Cotignola (RA), Italia
                  </address>
                </div>
              </div>
              <div className="mt-7 pt-6 border-t border-charcoal/10 flex items-start gap-4">
                <Clock className="size-5 shrink-0 text-terracotta mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-xl mb-2">Orari indicativi</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Check-in: 14:00–21:00
                    <br />
                    Check-out: 08:00–10:30
                  </p>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-charcoal hover:bg-gold/90 transition-colors"
                >
                  Apri le indicazioni <ArrowRight className="size-4" />
                </a>
                <a
                  href={OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-charcoal/20 px-5 py-3 text-sm font-medium text-charcoal hover:border-charcoal/50 transition-colors"
                >
                  Sito ufficiale
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden py-24 md:py-32 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8f482f] via-[#984b32] to-[#753821]" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-cream reveal">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8">
              Pronto a vivere un'esperienza indimenticabile?
            </h2>
            <p className="text-cream/85 text-lg mb-12 max-w-xl mx-auto">
              Lasciati coccolare dall'ospitalità autentica romagnola. La tua casa in Emilia-Romagna
              ti aspetta.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 bg-cream hover:bg-white text-charcoal px-10 py-4 rounded-full font-semibold shadow-xl hover:scale-[1.03] transition-all"
            >
              Verifica disponibilità su Booking.com <ArrowRight className="size-4" />
            </a>
            <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-cream/70">
              Check-in 14:00–21:00 · Check-out entro le 10:30
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer inert={menuOpen} className="bg-[#1f1d1a] text-cream/70 py-16 pb-28 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="font-serif italic text-2xl text-cream mb-6">Il Castello di Alberico</h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-12">
            <a href="#storia" className="hover:text-gold transition-colors">
              Storia
            </a>
            <a href="#camere" className="hover:text-gold transition-colors">
              Camere
            </a>
            <a href="#colazione" className="hover:text-gold transition-colors">
              Colazione
            </a>
            <a href="#recensioni" className="hover:text-gold transition-colors">
              Recensioni
            </a>
            <a href="#contatti" className="hover:text-gold transition-colors">
              Contatti
            </a>
            <Link to="/privacy" className="hover:text-gold transition-colors">
              Privacy &amp; Cookie
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm mb-8">
            <a href={`tel:${PHONE_NUMBER}`} className="hover:text-gold transition-colors">
              +39 371 442 7228
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-gold transition-colors">
              {EMAIL_ADDRESS}
            </a>
            <a
              href={OFFICIAL_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Sito ufficiale
            </a>
          </div>
          <div className="pt-6 border-t border-cream/10 text-[10px] uppercase tracking-[0.25em] text-cream/40">
            <p>© {new Date().getFullYear()} Il Castello di Alberico · Tutti i diritti riservati</p>
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-cream/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-charcoal shadow-sm"
        >
          Verifica disponibilità <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
