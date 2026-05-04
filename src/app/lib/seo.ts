import { getCareerRoleBySlug } from "../data/careers";

export const SITE_URL = "https://techflux.in";
export const SITE_NAME = "Techflux Solutions";
export const DEFAULT_OG_IMAGE = "https://techflux.in/public/assets/images/AI%20(1).webp";
export const COMPANY_LOGO = "https://techflux.in/favicon.png";

type SchemaKind =
  | "none"
  | "service"
  | "article"
  | "case-study"
  | "collection"
  | "job";

type SeoEntry = {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  ogType?: "website" | "article";
  breadcrumbLabel?: string;
  schemaKind?: SchemaKind;
  section?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type ResolvedSeoData = SeoEntry & {
  canonicalPath: string;
  canonicalUrl: string;
  pageUrl: string;
  image: string;
  isAlias: boolean;
  robots: string;
  breadcrumbItems: BreadcrumbItem[];
};

const aliases: Record<string, string> = {
  "/ai-development": "/ai-solutions",
  "/on-demand-development": "/on-demand-solutions",
  "/portfolio": "/case-studies",
  "/services/white-lable-partnership": "/services/white-label-partnership",
};

const pages: Record<string, SeoEntry> = {
  "/": {
    title: "AI, SaaS & Custom Software Development Company in Nashik, India | Techflux",
    description:
      "Techflux Solutions is a Nashik, India software company building AI products, SaaS platforms, on-demand apps, and custom software for startups and brands.",
    keywords:
      "AI development company Nashik, SaaS development company India, custom software development Nashik, on-demand app development India, Techflux Solutions",
    image: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbLabel: "Home",
    schemaKind: "none",
  },
  "/book-strategy-call": {
    title: "Book a Software Strategy Call in Nashik, India | Techflux",
    description:
      "Book a strategy call with Techflux in Nashik, India to review your SaaS, AI, or custom software idea, define priorities, and map a clear practical roadmap.",
    keywords:
      "software strategy call Nashik, SaaS consultation India, AI product consultation Nashik, software discovery call Techflux",
    image: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbLabel: "Book Strategy Call",
    schemaKind: "none",
  },
  "/get-estimate": {
    title: "Get a Software Project Estimate in Nashik, India | Techflux",
    description:
      "Request a clear project estimate from Techflux in Nashik, India for SaaS, AI, e-commerce, or on-demand software with timeline, budget, and scope guidance.",
    keywords:
      "software project estimate Nashik, SaaS cost estimate India, AI app quotation Nashik, custom software proposal Techflux",
    image: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbLabel: "Get Estimate",
    schemaKind: "none",
  },
  "/become-partner": {
    title: "Agency Partnership for White-Label Development | Techflux",
    description:
      "Partner with Techflux in Nashik, India for white-label development that helps agencies expand service capacity, ship faster, and grow recurring revenue.",
    keywords:
      "white-label development partner India, agency development partnership Nashik, software outsourcing partner Techflux, reseller software development",
    image: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbLabel: "Become a Partner",
    schemaKind: "none",
  },
  "/services/white-label-partnership": {
    title: "White-Label Software Development in Nashik, India | Techflux",
    description:
      "Techflux offers white-label software development from Nashik, India, helping agencies deliver SaaS, AI, apps, support, and execution under their own brand.",
    keywords:
      "white-label software development Nashik, agency development partner India, white-label SaaS development, outsourced app development Techflux",
    image: "https://techflux.in/public/assets/images/Macbook%20Pro%20-%20FREE%20(1).webp",
    ogType: "website",
    breadcrumbLabel: "White-Label Partnership",
    schemaKind: "service",
  },
  "/contact": {
    title: "Contact Techflux Solutions in Nashik, India",
    description:
      "Contact Techflux Solutions in Nashik, India for SaaS, AI, e-commerce, on-demand, and custom software projects, and get fast project guidance from our team.",
    keywords:
      "contact Techflux Solutions, software company Nashik contact, SaaS development consultation India, AI app development contact",
    image: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbLabel: "Contact",
    schemaKind: "none",
  },
  "/saas-development": {
    title: "SaaS Product Development Company in Nashik, India | Techflux",
    description:
      "Techflux builds scalable SaaS products from MVP to growth-ready platforms with multi-tenant architecture, billing, and secure cloud delivery in India.",
    keywords:
      "SaaS product development company Nashik, SaaS MVP development India, multi-tenant SaaS platform development, Techflux SaaS services",
    image: "https://techflux.in/public/assets/images/senterpriseSaaS%20development.webp",
    ogType: "website",
    breadcrumbLabel: "SaaS Development",
    schemaKind: "service",
  },
  "/ai-solutions": {
    title: "AI Development Services Company in Nashik, India | Techflux",
    description:
      "Techflux delivers AI development services in Nashik, India, from GPT chatbots and automation to ML-powered products, analytics, and workflow intelligence.",
    keywords:
      "AI development company Nashik, GPT chatbot development India, machine learning services Nashik, AI automation solutions Techflux",
    image: "https://techflux.in/public/assets/images/AI%20(1).webp",
    ogType: "website",
    breadcrumbLabel: "AI Solutions",
    schemaKind: "service",
  },
  "/on-demand-solutions": {
    title: "On-Demand App Development Company in Nashik, India | Techflux",
    description:
      "Techflux builds on-demand apps in Nashik, India for marketplaces, delivery, booking, and service platforms with real-time tracking, payments, and admin tools.",
    keywords:
      "on-demand app development company Nashik, marketplace app development India, booking platform development Nashik, delivery app development Techflux",
    image: "https://techflux.in/public/assets/images/On%20Demand%20platforms.webp",
    ogType: "website",
    breadcrumbLabel: "On-Demand Solutions",
    schemaKind: "service",
  },
  "/unity-game-development": {
    title: "Unity Game Development Company in Nashik, India | Techflux",
    description:
      "Techflux provides Unity game development in Nashik, India for mobile, multiplayer, AR/VR, and cross-platform products with scalable gameplay systems worldwide.",
    keywords:
      "Unity game development company Nashik, mobile game development India, AR VR Unity developer Nashik, multiplayer game development Techflux",
    image: "https://techflux.in/public/assets/images/AI%20(1).webp",
    ogType: "website",
    breadcrumbLabel: "Unity Game Development",
    schemaKind: "service",
  },
  "/e-commerce-solutions": {
    title: "E-Commerce Development Company in Nashik, India | Techflux",
    description:
      "Techflux creates e-commerce platforms in Nashik, India with custom storefronts, secure checkout, catalog management, and growth-focused user journeys.",
    keywords:
      "e-commerce development company Nashik, custom ecommerce website India, online store development Nashik, checkout optimization Techflux",
    image: "https://techflux.in/public/assets/images/smiling-models-posing-clothing-shop.webp",
    ogType: "website",
    breadcrumbLabel: "E-Commerce Solutions",
    schemaKind: "service",
  },
  "/case-studies": {
    title: "Case Studies | SaaS, AI & Custom Software Projects | Techflux",
    description:
      "Explore Techflux case studies from Nashik, India covering SaaS, AI, marketplaces, e-commerce, and custom software projects delivered for growing brands.",
    keywords:
      "software case studies Nashik, SaaS development portfolio India, AI project case studies, Techflux client success stories",
    image: "https://techflux.in/public/assets/images/servyoCollage.webp",
    ogType: "website",
    breadcrumbLabel: "Case Studies",
    schemaKind: "collection",
  },
  "/case-studies/servyo": {
    title: "Servyo Case Study | Service Marketplace Platform | Techflux",
    description:
      "See how Techflux built Servyo, a scalable service marketplace with bookings, subscriptions, and multi-role workflows for modern service teams and operations.",
    keywords:
      "Servyo case study, marketplace app development case study, booking platform portfolio, Techflux SaaS marketplace project",
    image: "https://techflux.in/public/assets/images/servyoCollage.webp",
    ogType: "article",
    breadcrumbLabel: "Servyo Case Study",
    schemaKind: "case-study",
    section: "Case Study",
  },
  "/case-studies/dine-right": {
    title: "Dine Right Case Study | Restaurant Platform Development | Techflux",
    description:
      "Review the Dine Right case study to see how Techflux delivered a restaurant discovery and dining operations platform with polished UX and scalable flows.",
    keywords:
      "Dine Right case study, restaurant app development case study, food platform portfolio, Techflux hospitality software project",
    image: "https://techflux.in/public/assets/images/dineright.webp",
    ogType: "article",
    breadcrumbLabel: "Dine Right Case Study",
    schemaKind: "case-study",
    section: "Case Study",
  },
  "/case-studies/allstar-premier-auto": {
    title: "Allstar Premier Auto Case Study | Automotive Platform | Techflux",
    description:
      "See how Techflux improved inventory management, analytics, and lead generation for Allstar Premier Auto with a custom automotive platform built for growth.",
    keywords:
      "Allstar Premier Auto case study, automotive software project, dealership platform development, Techflux custom web application",
    image: "https://techflux.in/public/assets/images/car.webp",
    ogType: "article",
    breadcrumbLabel: "Allstar Premier Auto Case Study",
    schemaKind: "case-study",
    section: "Case Study",
  },
  "/case-studies/myobscur": {
    title: "MyObscur Case Study | Fashion E-Commerce Platform | Techflux",
    description:
      "Discover how Techflux built MyObscur, a fashion e-commerce platform with personalization, logistics integration, and streamlined checkout flows for growth.",
    keywords:
      "MyObscur case study, fashion ecommerce development case study, personalized shopping platform, Techflux ecommerce project",
    image: "https://techflux.in/public/assets/images/MyObscur.webp",
    ogType: "article",
    breadcrumbLabel: "MyObscur Case Study",
    schemaKind: "case-study",
    section: "Case Study",
  },
  "/case-studies/leave-certificate": {
    title: "Leave Certificate Case Study | Education SaaS Platform | Techflux",
    description:
      "See how Techflux built Leave Certificate, an education SaaS platform for secure records, approvals, certificate workflows, and institution-wide access.",
    keywords:
      "Leave Certificate case study, education SaaS case study, digital records platform India, Techflux SaaS project",
    image: "https://techflux.in/public/assets/images/iPad%20Pro%2012%20-%20FREE.webp",
    ogType: "article",
    breadcrumbLabel: "Leave Certificate Case Study",
    schemaKind: "case-study",
    section: "Case Study",
  },
  "/case-studies/fuztech": {
    title: "FuzTech Case Study | Repair Booking Platform | Techflux",
    description:
      "Explore how Techflux delivered FuzTech, a Dutch repair booking platform with instant pricing, scheduling, localization, payments, and service workflows.",
    keywords:
      "FuzTech case study, repair booking platform case study, service booking software portfolio, Techflux marketplace project",
    image: "https://techflux.in/public/assets/images/repair.webp",
    ogType: "article",
    breadcrumbLabel: "FuzTech Case Study",
    schemaKind: "case-study",
    section: "Case Study",
  },
  "/case-studies/etern8": {
    title: "Etern8 Case Study | AI Wellness Platform | Techflux",
    description:
      "Review how Techflux built Etern8, an AI wellness platform using wearable data, personalization, health insights, and engagement-focused product flows.",
    keywords:
      "Etern8 case study, AI wellness platform case study, wearable app development portfolio, Techflux AI product project",
    image: "https://techflux.in/public/assets/images/3649760.webp",
    ogType: "article",
    breadcrumbLabel: "Etern8 Case Study",
    schemaKind: "case-study",
    section: "Case Study",
  },
  "/case-studies/studio-new-media": {
    title: "Studio New Media Case Study | Multi-Tenant SaaS CMS | Techflux",
    description:
      "See how Techflux built a multi-tenant SaaS CMS for Studio New Media with white-label dashboards, migrations, centralized hosting control, and partner workflows.",
    keywords:
      "Studio New Media case study, multi-tenant SaaS CMS, white-label dashboard project, Techflux PHP CodeIgniter platform",
    image: "https://techflux.in/public/assets/images/Macbook%20Pro%20-%20FREE%20(1).webp",
    ogType: "article",
    breadcrumbLabel: "Studio New Media Case Study",
    schemaKind: "case-study",
    section: "Case Study",
  },
  "/blog": {
    title: "Blog | SaaS, AI & Product Engineering Insights | Techflux",
    description:
      "Read Techflux insights from Nashik, India on SaaS development, AI implementation, product strategy, architecture, and scalable software delivery for startups.",
    keywords:
      "Techflux blog, SaaS development insights India, AI product engineering blog, software architecture articles Nashik",
    image: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbLabel: "Blog",
    schemaKind: "collection",
  },
  "/careers": {
    title: "Careers at Techflux | Software Jobs in Nashik, India",
    description:
      "Explore Techflux careers in Nashik, India across software development, design, QA, marketing, and business roles building digital products for clients.",
    keywords:
      "Techflux careers, software jobs Nashik, developer jobs Nashik India, design and QA careers Techflux",
    image: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbLabel: "Careers",
    schemaKind: "collection",
  },
  "/careers/apply": {
    title: "Apply for Careers at Techflux | Nashik, India",
    description:
      "Apply for Techflux jobs in Nashik, India and share your experience, resume, and portfolio for software, design, QA, and growth roles across our teams.",
    keywords:
      "apply for software jobs Nashik, Techflux job application, developer career application India, design and QA jobs Nashik",
    image: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbLabel: "Apply",
    schemaKind: "none",
  },
  "/blog/ai-integration-services-structured-approach": {
    title: "7 Major Problems SaaS Startups Face (And Practical Ways to Solve Them) | Techflux",
    description:
      "Learn the most common SaaS startup risks, from feature creep to weak architecture, and how to solve them with practical product and growth strategy advice.",
    keywords:
      "SaaS startup challenges, SaaS product strategy article, startup architecture advice, Techflux SaaS blog",
    image: "https://techflux.in/public/assets/images/AI%20(1).webp",
    ogType: "article",
    breadcrumbLabel: "7 Major Problems SaaS Startups Face",
    schemaKind: "article",
    section: "SaaS Strategy",
    publishedTime: "2026-02-15",
    modifiedTime: "2026-02-15",
  },
  "/blog/saas-mvp-development-2026": {
    title: "How to Build a SaaS MVP in 60 Days (A Practical Guide for Startups) | Techflux",
    description:
      "Learn how to plan, design, build, test, and launch a SaaS MVP in 60 days without overbuilding, delaying validation, or wasting early startup budget needlessly.",
    keywords:
      "how to build SaaS MVP, SaaS MVP development guide, startup MVP roadmap, Techflux SaaS article",
    image: "https://techflux.in/public/assets/images/fuztech.webp",
    ogType: "article",
    breadcrumbLabel: "How to Build a SaaS MVP in 60 Days",
    schemaKind: "article",
    section: "SaaS Development",
    publishedTime: "2026-02-06",
    modifiedTime: "2026-02-06",
  },
  "/blog/white-label-saas-development-strategic-infrastructure": {
    title: "On-Demand Applications: Common Challenges in Development and How to Solve Them | Techflux",
    description:
      "Understand the biggest on-demand app development challenges and how strong architecture, payments, scalability, and operations planning solve them early.",
    keywords:
      "on-demand app development challenges, marketplace architecture article, booking platform strategy, Techflux on-demand blog",
    image: "https://techflux.in/public/assets/images/On%20Demand%20platforms.webp",
    ogType: "article",
    breadcrumbLabel: "On-Demand App Development Challenges",
    schemaKind: "article",
    section: "On-Demand Applications",
    publishedTime: "2026-03-03",
    modifiedTime: "2026-03-03",
  },
};

const defaultSeo: SeoEntry = {
  title: "Techflux Solutions | AI, SaaS & Custom Software Development in Nashik, India",
  description:
    "Techflux Solutions builds AI products, SaaS platforms, custom software, and digital experiences for startups and growing businesses in Nashik, India.",
  keywords:
    "Techflux Solutions, software development company Nashik, SaaS development India, AI development services India",
  image: DEFAULT_OG_IMAGE,
  ogType: "website",
  breadcrumbLabel: "Page",
  schemaKind: "none",
};

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

function toAbsoluteUrl(value?: string) {
  if (!value) return DEFAULT_OG_IMAGE;
  if (/^https?:\/\//i.test(value)) return value;
  return new URL(value, SITE_URL).toString();
}

function getCareerSeo(pathname: string): SeoEntry | null {
  const match = pathname.match(/^\/careers\/([^/]+)$/);
  if (!match || match[1] === "apply") return null;

  const role = getCareerRoleBySlug(match[1]);
  if (!role) return null;

  return {
    title: `${role.title} Job in Nashik, India | Techflux Careers`,
    description: `${role.title} opening at Techflux in Nashik, India. ${role.summary} Apply for this work-from-office role and grow with a product-focused team.`,
    keywords: `${role.title} job Nashik, Techflux careers, ${role.department} jobs India, software jobs Nashik`,
    image: DEFAULT_OG_IMAGE,
    ogType: "website",
    breadcrumbLabel: role.title,
    schemaKind: "job",
  };
}

function getSeoEntry(pathname: string) {
  return getCareerSeo(pathname) ?? pages[pathname] ?? defaultSeo;
}

function buildBreadcrumbItems(canonicalPath: string, entry: SeoEntry): BreadcrumbItem[] {
  if (canonicalPath === "/") {
    return [{ name: "Home", path: "/" }];
  }

  if (canonicalPath.startsWith("/case-studies/")) {
    return [
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-studies" },
      { name: entry.breadcrumbLabel ?? "Case Study", path: canonicalPath },
    ];
  }

  if (canonicalPath.startsWith("/blog/")) {
    return [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: entry.breadcrumbLabel ?? "Article", path: canonicalPath },
    ];
  }

  if (canonicalPath.startsWith("/careers/") && canonicalPath !== "/careers/apply") {
    return [
      { name: "Home", path: "/" },
      { name: "Careers", path: "/careers" },
      { name: entry.breadcrumbLabel ?? "Role", path: canonicalPath },
    ];
  }

  return [
    { name: "Home", path: "/" },
    { name: entry.breadcrumbLabel ?? "Page", path: canonicalPath },
  ];
}

export function resolveSeoData(pathname: string): ResolvedSeoData {
  const pagePath = normalizePath(pathname);
  const canonicalPath = aliases[pagePath] ?? pagePath;
  const entry = getSeoEntry(canonicalPath);
  const isAlias = canonicalPath !== pagePath;

  return {
    ...entry,
    image: toAbsoluteUrl(entry.image),
    pageUrl: `${SITE_URL}${pagePath}`,
    canonicalPath,
    canonicalUrl: `${SITE_URL}${canonicalPath}`,
    isAlias,
    robots: isAlias
      ? "noindex, follow, max-image-preview:large"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    breadcrumbItems: buildBreadcrumbItems(canonicalPath, entry),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildPrimarySchema(data: ResolvedSeoData) {
  switch (data.schemaKind) {
    case "service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.breadcrumbLabel,
        serviceType: data.breadcrumbLabel,
        description: data.description,
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Place", name: "Nashik, Maharashtra, India" },
        ],
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: COMPANY_LOGO,
        },
        url: data.canonicalUrl,
        image: data.image,
      };
    case "article":
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data.title,
        description: data.description,
        image: data.image,
        mainEntityOfPage: data.canonicalUrl,
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime ?? data.publishedTime,
        articleSection: data.section,
        author: {
          "@type": "Organization",
          name: SITE_NAME,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: COMPANY_LOGO,
          },
        },
      };
    case "case-study":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.description,
        image: data.image,
        mainEntityOfPage: data.canonicalUrl,
        articleSection: data.section ?? "Case Study",
        author: {
          "@type": "Organization",
          name: SITE_NAME,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          logo: {
            "@type": "ImageObject",
            url: COMPANY_LOGO,
          },
        },
      };
    case "collection":
      return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: data.title,
        description: data.description,
        url: data.canonicalUrl,
      };
    case "job": {
      const role = getCareerRoleBySlug(data.canonicalPath.split("/").pop() ?? "");
      if (!role) return null;

      return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: role.title,
        description: role.summary,
        employmentType: role.mode === "Work From Office" ? "FULL_TIME" : "OTHER",
        hiringOrganization: {
          "@type": "Organization",
          name: SITE_NAME,
          sameAs: SITE_URL,
          logo: COMPANY_LOGO,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nashik",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
        },
        industry: role.department,
        qualifications: role.requiredSkills.join(", "),
        responsibilities: role.responsibilities.join(" "),
        url: data.canonicalUrl,
      };
    }
    default:
      return null;
  }
}
