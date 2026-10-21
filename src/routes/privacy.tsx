import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy & Cookie Policy | Il Castello di Alberico" },
      {
        name: "description",
        content:
          "Informativa sulla privacy e sull'uso dei cookie del sito Il Castello di Alberico, Cotignola (RA).",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Privacy & Cookie Policy | Il Castello di Alberico" },
      {
        property: "og:description",
        content:
          "Come trattiamo i dati personali e quali cookie utilizza il sito Il Castello di Alberico.",
      },
      {
        property: "og:url",
        content: "https://ilcastellodialberico.lovable.app/privacy",
      },
    ],
    links: [{ rel: "canonical", href: "https://ilcastellodialberico.lovable.app/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream text-charcoal font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <Link
          to="/"
          className="text-[11px] tracking-[0.3em] uppercase text-terracotta hover:text-gold transition-colors"
        >
          ← Torna alla home
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl mt-6 mb-3 leading-tight">
          Privacy &amp; Cookie Policy
        </h1>
        <p className="text-charcoal/60 text-sm mb-12">
          Ultimo aggiornamento:{" "}
          {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long" })}
        </p>

        <section className="space-y-4 mb-10">
          <h2 className="font-serif text-2xl">1. Titolare del trattamento</h2>
          <p className="text-charcoal/80 leading-relaxed">
            Il Castello di Alberico — Via Gesuita, 29, 48033 Cotignola (RA), Italia. Il titolare
            tratta i dati personali degli utenti nel rispetto del Regolamento (UE) 2016/679 (GDPR) e
            della normativa italiana applicabile.
          </p>
          <p className="text-charcoal/80 leading-relaxed">
            Per informazioni o richieste relative ai dati personali, scrivi a{" "}
            <a
              className="underline hover:text-terracotta"
              href="mailto:ilcastellodialberico@gmail.com"
            >
              ilcastellodialberico@gmail.com
            </a>{" "}
            oppure chiama il{" "}
            <a className="underline hover:text-terracotta" href="tel:+393714427228">
              +39 371 442 7228
            </a>
            .
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="font-serif text-2xl">2. Dati raccolti</h2>
          <p className="text-charcoal/80 leading-relaxed">
            Il sito non include moduli di contatto: i collegamenti a telefono ed email aprono
            l'applicazione corrispondente sul tuo dispositivo. Le prenotazioni su Booking.com e le
            richieste inviate al sito ufficiale sono gestite dai rispettivi servizi esterni, secondo
            le loro informative. Il servizio di hosting può trattare dati tecnici delle richieste e
            segnalazioni di errore per erogare e proteggere il sito.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="font-serif text-2xl">3. Cookie</h2>
          <p className="text-charcoal/80 leading-relaxed">
            Il sito non integra strumenti di analisi, pubblicità o profilazione e non imposta cookie
            di marketing. I contenuti e i caratteri tipografici sono serviti dal sito stesso; non è
            incorporata una mappa interattiva.
          </p>
          <p className="text-charcoal/80 leading-relaxed">
            Il link alle indicazioni apre Google Maps solo se lo selezioni. Anche i link a
            Booking.com e al sito ufficiale portano a servizi esterni: quando li visiti, si
            applicano le rispettive informative sulla privacy.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="font-serif text-2xl">4. Sicurezza</h2>
          <p className="text-charcoal/80 leading-relaxed">
            Il sito è servito interamente tramite connessione cifrata HTTPS. Adottiamo misure
            tecniche e organizzative adeguate per proteggere i dati eventualmente raccolti.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="font-serif text-2xl">5. Diritti dell'interessato</h2>
          <p className="text-charcoal/80 leading-relaxed">
            Ai sensi degli artt. 15-22 del GDPR, l'utente ha diritto di accedere, rettificare,
            cancellare i propri dati, limitarne o opporsi al trattamento e alla portabilità. Per
            esercitare tali diritti è possibile contattare il titolare presso l'indirizzo sopra
            indicato.
          </p>
        </section>

        <section className="space-y-4 mb-10">
          <h2 className="font-serif text-2xl">6. Modifiche</h2>
          <p className="text-charcoal/80 leading-relaxed">
            La presente informativa può essere aggiornata nel tempo. Le modifiche saranno pubblicate
            su questa pagina con la relativa data di aggiornamento.
          </p>
        </section>

        <p className="mt-16 text-[10px] uppercase tracking-[0.25em] text-charcoal/40">
          © {new Date().getFullYear()} Il Castello di Alberico · Tutti i diritti riservati
        </p>
      </div>
    </main>
  );
}
