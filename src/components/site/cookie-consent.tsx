import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "cda-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consenso cookie"
      className="fixed inset-x-4 bottom-4 z-[70] md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <div className="bg-cream text-charcoal rounded-sm shadow-2xl ring-1 ring-black/10 p-5 md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-terracotta mb-2">
          Cookie
        </p>
        <p className="text-sm leading-relaxed text-charcoal/80">
          Usiamo solo cookie tecnici necessari al funzionamento del sito. Nessun
          cookie di profilazione o marketing viene impostato senza il tuo consenso.
          Leggi la nostra{" "}
          <Link to="/privacy" className="underline hover:text-terracotta">
            Privacy &amp; Cookie Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => decide("accepted")}
            className="bg-gold hover:bg-gold/90 text-cream text-[12px] font-medium tracking-wide px-5 py-2.5 rounded-full transition-colors"
          >
            Accetta
          </button>
          <button
            onClick={() => decide("rejected")}
            className="border border-charcoal/20 hover:border-charcoal/50 text-charcoal text-[12px] font-medium tracking-wide px-5 py-2.5 rounded-full transition-colors"
          >
            Rifiuta
          </button>
        </div>
      </div>
    </div>
  );
}