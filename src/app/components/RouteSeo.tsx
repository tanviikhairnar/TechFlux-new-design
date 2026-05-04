import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  buildBreadcrumbSchema,
  buildPrimarySchema,
  resolveSeoData,
  SITE_NAME,
} from "../lib/seo";

function upsertMeta(attribute: "name" | "property", key: string, content?: string) {
  const selector = `meta[${attribute}="${key}"]`;
  const existing = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!content) {
    existing?.remove();
    return;
  }

  const element = existing ?? document.createElement("meta");
  element.setAttribute(attribute, key);
  element.setAttribute("data-route-seo", "true");
  element.content = content;

  if (!existing) {
    document.head.appendChild(element);
  }
}

function upsertLink(
  rel: string,
  href: string,
  options?: {
    hreflang?: string;
    key?: string;
  },
) {
  const lookup = options?.key
    ? `link[data-route-seo-key="${options.key}"]`
    : options?.hreflang
      ? `link[rel="${rel}"][hreflang="${options.hreflang}"]`
      : `link[rel="${rel}"]`;

  const existing = document.head.querySelector(lookup) as HTMLLinkElement | null;
  const element = existing ?? document.createElement("link");

  element.rel = rel;
  element.href = href;
  element.setAttribute("data-route-seo", "true");

  if (options?.hreflang) {
    element.hreflang = options.hreflang;
  } else {
    element.removeAttribute("hreflang");
  }

  if (options?.key) {
    element.setAttribute("data-route-seo-key", options.key);
  }

  if (!existing) {
    document.head.appendChild(element);
  }
}

function removeRouteSchemas() {
  document
    .querySelectorAll('script[data-route-seo="schema"]')
    .forEach((node) => node.parentNode?.removeChild(node));
}

function appendSchema(schema: unknown) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-route-seo", "schema");
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

export default function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const seo = resolveSeoData(location.pathname);

    document.title = seo.title;
    document.documentElement.lang = "en-IN";

    upsertMeta("name", "viewport", "width=device-width, initial-scale=1, viewport-fit=cover");
    upsertMeta("name", "title", seo.title);
    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "keywords", seo.keywords);
    upsertMeta("name", "robots", seo.robots);
    upsertMeta("name", "geo.region", "IN-MH");
    upsertMeta("name", "geo.placename", "Nashik, Maharashtra, India");
    upsertMeta("name", "geo.position", "19.997454;73.789803");
    upsertMeta("name", "ICBM", "19.997454, 73.789803");

    upsertMeta("property", "og:locale", "en_IN");
    upsertMeta("property", "og:type", seo.ogType ?? "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", seo.canonicalUrl);
    upsertMeta("property", "og:image", seo.image);
    upsertMeta("property", "og:image:alt", seo.title);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", seo.image);

    upsertMeta("property", "article:published_time", seo.publishedTime);
    upsertMeta("property", "article:modified_time", seo.modifiedTime);
    upsertMeta("property", "article:section", seo.section);

    upsertLink("canonical", seo.canonicalUrl, { key: "canonical" });
    upsertLink("alternate", seo.canonicalUrl, { hreflang: "en-IN", key: "hreflang-en-in" });
    upsertLink("alternate", seo.canonicalUrl, { hreflang: "en", key: "hreflang-en" });
    upsertLink("alternate", seo.canonicalUrl, { hreflang: "x-default", key: "hreflang-default" });

    removeRouteSchemas();
    appendSchema(buildBreadcrumbSchema(seo.breadcrumbItems));

    const primarySchema = buildPrimarySchema(seo);
    if (primarySchema) {
      appendSchema(primarySchema);
    }
  }, [location.pathname]);

  return null;
}
