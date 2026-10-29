import { useRouterState } from "@tanstack/react-router";
import { am } from "@/content/am";
import { en } from "@/content/en";
import { site } from "./site";

// Amharic is the default and lives at the root; English lives under /en. The
// language is read from the URL so server rendering, links and the language
// switch all agree.
export type Lang = "en" | "am";

const dictionaries = { en, am };

export const paths = {
  am: { home: "/", practice: "/practice", about: "/about", intake: "/intake", contact: "/contact" },
  en: { home: "/en", practice: "/en/practice", about: "/en/about", intake: "/en/intake", contact: "/en/contact" },
} as const;

export type PageKey = keyof (typeof paths)["am"];

const pageKeys = Object.keys(paths.am) as PageKey[];

export function langOf(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "am";
}

function pageOf(pathname: string): PageKey | null {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "").replace(/\/$/, "") || "/";
  return pageKeys.find((k) => paths.am[k] === bare) ?? null;
}

export function useLocale() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = langOf(pathname);
  return { lang, t: dictionaries[lang], page: pageOf(pathname), to: paths[lang] };
}

export function pageHead(lang: Lang, page: PageKey) {
  const { title, description } = dictionaries[lang].meta[page];
  const meta: Record<string, unknown>[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:locale", content: lang === "am" ? "am_ET" : "en_US" },
    { property: "og:url", content: site.url + paths[lang][page] },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (page === "home") {
    meta.push({
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: dictionaries[lang].common.firm,
        url: site.url + paths[lang].home,
        telephone: site.phone,
        address: { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressRegion: "Bole", addressCountry: "ET" },
        founder: { "@type": "Person", name: "Wendwosen Hirpo", jobTitle: "Advocate" },
        knowsLanguage: ["am", "en"],
      },
    });
  }
  return {
    meta,
    links: [
      ...(["am", "en"] as const).map((l) => ({ rel: "alternate", hrefLang: l, href: site.url + paths[l][page] })),
      { rel: "alternate", hrefLang: "x-default", href: site.url + paths.am[page] },
    ],
  };
}
