import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Link } from "@tanstack/react-router";
import { CookieConsent } from "@/components/site/cookie-consent";
import heroCasale from "@/assets/hero-courtyard-tower.webp.asset.json";
import storyInterior from "@/assets/story-interior.jpg";
import roomMatrimoniale from "@/assets/room-matrimoniale.jpg";
import roomFrancese from "@/assets/room-francese.jpg";
import roomTripla from "@/assets/room-tripla.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import ravennaImg from "@/assets/ravenna.jpg";
import cotignolaImg from "@/assets/cotignola.jpg";
import mirabilandiaImg from "@/assets/mirabilandia.jpg";
import cyclingImg from "@/assets/cycling.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Il Castello di Alberico | Bed & Breakfast a Cotignola, Romagna" },
      {
        name: "description",
        content:
          "B&B di charme in un casale del 1700 a Cotignola. Colazione all'italiana, camere eleganti, ospitalità autentica romagnola. 9.0/10 su Booking.",
      },
      { property: "og:title", content: "Il Castello di Alberico | Bed & Breakfast a Cotignola, Romagna" },
      {
        property: "og:description",
        content:
          "B&B di charme in un casale del 1700 a Cotignola. Colazione all'italiana, camere eleganti, ospitalità autentica romagnola. 9.0/10 su Booking.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ilcastellodialberico.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://ilcastellodialberico.lovable.app/" }],
  }),
});

const BOOKING_URL = "https://www.booking.com/hotel/it/il-castello-di-alberico.it.html";

const NAV_LINKS = [
  { href: "#storia", label: "Storia" },
  { href: "#camere", label: "Camere" },
  { href: "#colazione", label: "Colazione" },
  { href: "#recensioni", label: "Recensioni" },
];

const REVIEWS = [
  {
    name: "Matilde",
    flag: "🇮🇹",
    quote:
      "La signora Fabiana è una forza della natura. Le camere sono pulitissime e accoglienti, ma il sorriso della padrona di casa è la cosa più bella!",
  },
  {
    name: "Rosangela",
    flag: "🇮🇹",
    quote:
      "Struttura completamente ristrutturata, pulita, dotata di tutti i confort. Giardino esterno molto curato. Fabiana persona squisita, una perfetta padrona di casa.",
  },
  {
    name: "Martin",
    flag: "🇩🇪",
    quote:
      "Ti senti come a casa. Si percepisce da subito l'amore e la cura che ci mette nel farti sentire a tuo agio.",
  },
  {
    name: "Annalisa",
    flag: "🇮🇹",
    quote:
      "Se si potesse darei 10 stelle!! Camere pulite e profumate, la proprietaria poi... gentile, discreta e disponibile. Ci siamo sentiti accolti e coccolati.",
  },
  {
    name: "Rosangela",
    flag: "🇮🇹",
    quote: "Ci siamo sentiti in famiglia.",
  },
  {
    name: "Arcangelo",
    flag: "🇮🇹",
    quote: "Tutto quello che si cerca in un B&B lo trovi qui. Non puoi sbagliarti.",
  },
  {
    name: "Alberto B.",
    flag: "🇮🇹",
    quote:
      "Un casale d'epoca arredato con mobili di grande pregio. La signora Fabiana lo dirige con gentilezza e passione per il lavoro.",
  },
  {
    name: "Mafalda",
    flag: "🇮🇹",
    quote: "5 stelle sono pure poche… per me ne meriterebbe di più.",
  },
  {
    name: "Samantha",
    flag: "🇮🇹",
    quote:
      "Accoglienza meravigliosa, tutto comodo e pulito. Un peccato andare via… ci torneremo sicuramente.",
  },
  {
    name: "Irina",
    flag: "🇷🇴",
    quote: "Ospitalità sincera e grande cortesia. Un posto che ti fa sentire a casa tua.",
  },
];

const RATINGS = [
  { label: "Ospitalità", value: 9.6 },
  { label: "Pulizia", value: 9.7 },
  { label: "Comfort", value: 9.7 },
  { label: "Servizi", value: 9.5 },
  { label: "Qualità-Prezzo", value: 9.0 },
  { label: "Posizione", value: 8.8 },
  { label: "WiFi", value: 9.4 },
];

const TRUST_ITEMS = [
  { icon: Wifi, label: "WiFi Gratuito" },
  { icon: Car, label: "Parcheggio Gratuito" },
  { icon: Coffee, label: "Colazione Inclusa" },
  { icon: Bike, label: "Biciclette Gratuite" },
  { icon: CigaretteOff, label: "Camere Non Fumatori" },
];

const ROOMS = [
  {
    name: "Camera Matrimoniale",
    image: roomMatrimoniale,
    desc: "Letto matrimoniale, bagno privato, aria condizionata, TV, frigorifero, bollitore tè/caffè.",
  },
  {
    name: "Matrimoniale con Bagno Esterno",
    image: roomFrancese,
    desc: "Letto matrimoniale alla francese, bagno privato esterno dedicato, tutti i comfort moderni.",
  },
  {
    name: "Camera Tripla",
    image: roomTripla,
    desc: "Ideale per famiglie. Letto singolo + matrimoniale alla francese (o 3 singoli), bagno privato.",
  },
];

const EXPLORE = [
  {
    image: mirabilandiaImg,
    title: "Mirabilandia",
    desc: "A soli 42 km, il parco divertimenti più amato d'Italia.",
  },
  {
    image: ravennaImg,
    title: "Ravenna",
    desc: "A 30 km, capitale dei mosaici bizantini, Patrimonio UNESCO.",
  },
  {
    image: cotignolaImg,
    title: "Cotignola",
    desc: "Un borgo autentico tra storia, gastronomia e tradizioni romagnole.",
  },
  {
    image: cyclingImg,
    title: "Ciclismo",
    desc: "Biciclette gratuite per esplorare la campagna circostante.",
  },
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setScrollY(window.scrollY);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans selection:bg-gold/30 selection:text-charcoal">
      {/* NAV */}
      <nav
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
              target="_self"
              rel="noopener noreferrer"
              className="bg-gold text-cream px-5 py-2.5 rounded-full text-[13px] font-medium tracking-wide hover:bg-gold/90 ring-1 ring-gold/60 transition-all hover:scale-[1.03] shadow-sm"
            >
              Prenota
            </a>
          </div>
          <button
            className={`md:hidden ${scrolled ? "text-charcoal" : "text-cream"}`}
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-cream transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-charcoal/10">
          <span className="font-serif text-xl italic">Il Castello di Alberico</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Chiudi">
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
            target="_self"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-gold text-cream px-8 py-4 rounded-full text-base font-sans font-medium"
          >
            Prenota il tuo soggiorno
          </a>
        </div>
      </div>

      {/* HERO */}
      <header id="top" className="relative h-[100svh] min-h-[640px] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
        >
          <img
            src={heroCasale.url}
            alt="Il Castello di Alberico — cortile fiorito con vista sul campanile"
            width={1148}
            height={1454}
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
          <h1 className="font-serif text-4xl md:text-6xl text-cream font-medium leading-[1.05] mb-6 text-balance">
            Il Castello di Alberico — Bed &amp; Breakfast in Romagna
          </h1>
          <p className="font-serif italic text-lg md:text-2xl text-cream/90 mb-10 text-pretty">
            Dove la storia ti accoglie come a casa
          </p>
          <a
            href={BOOKING_URL}
            target="_self"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold/90 text-cream px-8 py-4 rounded-full text-base font-medium tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
          >
            Prenota il tuo soggiorno
            <ArrowRight className="size-4" />
          </a>
          <p className="mt-8 text-[11px] tracking-[0.3em] uppercase text-cream/70">
            29 Via Gesuita · Cotignola (RA) · Italia
          </p>
        </div>

        <div className="absolute top-20 right-6 md:right-10 z-10 bg-cream/95 backdrop-blur px-4 py-3 rounded-xl ring-1 ring-black/5 shadow-xl hidden sm:block reveal" data-delay="200">
          <div className="flex items-center gap-2">
            <Star className="size-4 fill-gold text-gold" />
            <span className="font-semibold text-charcoal">9.0</span>
            <span className="text-sm text-charcoal/80">Eccellente</span>
          </div>
          <p className="text-[10px] text-charcoal/50 uppercase tracking-widest mt-1">
            40+ recensioni verificate
          </p>
        </div>
      </header>

      {/* TRUST BAR */}
      <section className="bg-cream border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center justify-center md:justify-between gap-6">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-charcoal/70">
              <Icon className="size-5 text-gold" strokeWidth={1.5} />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
                {label}
              </span>
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
              Un castello del 1700, <em className="text-terracotta not-italic">rinnovato con amore</em>
            </h2>
            <p className="text-charcoal/75 text-lg leading-relaxed max-w-[56ch]">
              Nelle tranquille strade di Cotignola, un antico casale del Settecento
              ritrova nuova vita. Le travi in legno, i letti in ferro battuto e i
              mobili di pregio raccontano storie di un tempo passato, mentre ogni
              comfort moderno è stato pensato per rendere il tuo soggiorno
              indimenticabile. Qui non sei un ospite — sei di casa.
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
              Rifugi di eleganza e tranquillità
            </h2>
            <p className="text-charcoal/60 text-lg">
              Ogni camera è pensata per il riposo più profondo, tra dettagli d'epoca e comfort moderno.
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
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="font-serif text-2xl leading-tight">{room.name}</h3>
                    <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.15em] bg-terracotta/10 text-terracotta px-2 py-1 rounded-sm">
                      Camere Limitate
                    </span>
                  </div>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-8">
                    {room.desc}
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_self"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-terracotta group-hover:gap-3 transition-all"
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
              Una colazione <em className="text-terracotta not-italic">che ti fa sentire a casa</em>
            </h2>
            <p className="text-charcoal/75 text-lg leading-relaxed max-w-[56ch]">
              Ogni mattina, Fabiana prepara una colazione all'italiana ricca e
              variegata: dolci fatti in casa, prodotti locali della Romagna, caffè
              fresco, e tante piccole attenzioni che rendono ogni inizio di giornata
              speciale. Servita nella sala da pranzo storica o, nelle giornate belle,
              nel giardino.
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
              Recensioni Verificate
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4 leading-tight">
              I nostri ospiti dicono
            </h2>
            <p className="text-charcoal/60 text-lg">
              Oltre 40 recensioni eccellenti — Punteggio medio 9.0 / 10
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
                  <div className="h-[3px] w-full bg-charcoal/10 rounded-full overflow-hidden">
                    <div
                      className="rating-bar h-full bg-gold rounded-full"
                      style={{ ["--final-width" as string]: `${(r.value / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-charcoal/10">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-6xl text-terracotta font-medium">9.0</span>
                  <div>
                    <p className="font-semibold">Eccellente</p>
                    <p className="text-xs text-charcoal/60">40+ recensioni verificate</p>
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
                    <span className="text-gold text-sm tracking-tight" aria-label="5 stelle">
                      ★★★★★
                    </span>
                  </div>
                  <p className="font-serif italic text-lg leading-snug text-charcoal/85 text-pretty flex-1">
                    "{r.quote}"
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-olive">
                    <BadgeCheck className="size-3.5" /> Verificato
                  </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPLORE.map((e, i) => (
              <article key={e.title} className="group cursor-pointer reveal" data-delay={i * 100}>
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


      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24 md:py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta via-terracotta to-[#a55b3d]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-cream reveal">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8">
            Pronto a vivere un'esperienza indimenticabile?
          </h2>
          <p className="text-cream/85 text-lg mb-12 max-w-xl mx-auto">
            Lasciati coccolare dall'ospitalità autentica romagnola. La tua casa in Emilia-Romagna ti aspetta.
          </p>
          <a
            href={BOOKING_URL}
            target="_self"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold/90 text-cream px-10 py-4 rounded-full font-medium shadow-xl hover:scale-[1.03] transition-all"
          >
            Prenota ora su Booking.com <ArrowRight className="size-4" />
          </a>
          <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-cream/70">
            Rimborsiamo le differenze di prezzo · Prenota con fiducia
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1f1d1a] text-cream/70 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="font-serif italic text-2xl text-cream mb-6">Il Castello di Alberico</h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-12">
            <a href="#storia" className="hover:text-gold transition-colors">Storia</a>
            <a href="#camere" className="hover:text-gold transition-colors">Camere</a>
            <a href="#colazione" className="hover:text-gold transition-colors">Colazione</a>
            <a href="#recensioni" className="hover:text-gold transition-colors">Recensioni</a>
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy &amp; Cookie</Link>
          </div>
          <div className="pt-6 border-t border-cream/10 text-[10px] uppercase tracking-[0.25em] text-cream/40">
            <p>© {new Date().getFullYear()} Il Castello di Alberico · Tutti i diritti riservati · All rights reserved</p>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
}


