import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Non è stato possibile caricare la pagina
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Si è verificato un problema. Puoi riprovare o tornare alla home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Riprova
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Torna alla home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Il Castello di Alberico | Bed & Breakfast a Cotignola, Romagna" },
      {
        name: "description",
        content:
          "B&B a Cotignola in una dimora storica di fine Seicento. Camere confortevoli, colazione a buffet, giardino e ospitalità familiare nella Bassa Romagna.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Il Castello di Alberico" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:title",
        content: "Il Castello di Alberico | Bed & Breakfast a Cotignola, Romagna",
      },
      {
        name: "twitter:title",
        content: "Il Castello di Alberico | Bed & Breakfast a Cotignola, Romagna",
      },
      {
        property: "og:description",
        content:
          "B&B a Cotignola in una dimora storica di fine Seicento. Camere confortevoli, colazione a buffet, giardino e ospitalità familiare nella Bassa Romagna.",
      },
      {
        name: "twitter:description",
        content:
          "B&B a Cotignola in una dimora storica di fine Seicento. Camere confortevoli, colazione a buffet, giardino e ospitalità familiare nella Bassa Romagna.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/ae6e34c0-8ad0-4206-8a2a-98483f67b978",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/ae6e34c0-8ad0-4206-8a2a-98483f67b978",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "preload",
        href: "/fonts/cormorant-garamond-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/inter-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BedAndBreakfast",
          name: "Il Castello di Alberico",
          description:
            "Bed & Breakfast a Cotignola in una dimora storica di fine Seicento, nel cuore della Bassa Romagna.",
          url: "https://bebilcastellodialberico.it/",
          telephone: "+39 371 442 7228",
          email: "ilcastellodialberico@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Gesuita, 29",
            addressLocality: "Cotignola",
            addressRegion: "RA",
            postalCode: "48033",
            addressCountry: "IT",
          },
          sameAs: [
            "https://www.booking.com/hotel/it/il-castello-di-alberico.it.html",
            "https://www.facebook.com/p/B-B-Il-Castello-di-Alberico-Cotignola-100063986021415/",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
