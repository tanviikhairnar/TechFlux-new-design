import { createBrowserRouter } from "react-router-dom";
import type { ComponentType } from "react";
import ScrollToTop from "./components/ScrollToTop";

type LazyImport = () => Promise<{ default: ComponentType }>;

const lazyPage = (importer: LazyImport) => async () => {
  const mod = await importer();
  return { Component: mod.default };
};

export const router = createBrowserRouter([
  {
    Component: ScrollToTop,
    children: [
      {
        path: "/",
        lazy: lazyPage(() => import("./pages/Home")),
      },
      {
        path: "/book-strategy-call",
        lazy: lazyPage(() => import("./pages/BookStrategyCall")),
      },
      {
        path: "/get-estimate",
        lazy: lazyPage(() => import("./pages/GetEstimate")),
      },
      {
        path: "/become-partner",
        lazy: lazyPage(() => import("./pages/BecomePartner")),
      },
      {
        path: "/services/white-label-partnership",
        lazy: lazyPage(() => import("./pages/WhiteLabelPartnership")),
      },
      {
        path: "/services/white-lable-partnership",
        lazy: lazyPage(() => import("./pages/WhiteLabelPartnership")),
      },
      {
        path: "/contact",
        lazy: lazyPage(() => import("./pages/Contact")),
      },
      {
        path: "/saas-development",
        lazy: lazyPage(() => import("./pages/SaaSDevelopment")),
      },
      {
        path: "/ai-solutions",
        lazy: lazyPage(() => import("./pages/AISolutions")),
      },
      {
        path: "/on-demand-solutions",
        lazy: lazyPage(() => import("./pages/OnDemandSolutions")),
      },
      {
        path: "/unity-game-development",
        lazy: lazyPage(() => import("./pages/UnityGameDevelopment")),
      },
      {
        path: "/e-commerce-solutions",
        lazy: lazyPage(() => import("./pages/EcommerceSolutions")),
      },
      {
        path: "/case-studies",
        lazy: lazyPage(() => import("./pages/CaseStudies")),
      },
      {
        path: "/case-studies/servyo",
        lazy: lazyPage(() => import("./pages/ServyoCaseStudy")),
      },
      {
        path: "/case-studies/dine-right",
        lazy: lazyPage(() => import("./pages/DineRightCaseStudy")),
      },
      {
        path: "/case-studies/allstar-premier-auto",
        lazy: lazyPage(() => import("./pages/AllstarPremierAutoCaseStudy")),
      },
      {
        path: "/case-studies/myobscur",
        lazy: lazyPage(() => import("./pages/MyObscurCaseStudy")),
      },
      {
        path: "/case-studies/leave-certificate",
        lazy: lazyPage(() => import("./pages/LeaveCertificateCaseStudy")),
      },
      {
        path: "/case-studies/fuztech",
        lazy: lazyPage(() => import("./pages/FuzTechCaseStudy")),
      },
      {
        path: "/case-studies/etern8",
        lazy: lazyPage(() => import("./pages/Etern8CaseStudy")),
      },
      {
        path: "/case-studies/studio-new-media",
        lazy: lazyPage(() => import("./pages/StudioNewMediaCaseStudy")),
      },
      {
        path: "/blog",
        lazy: lazyPage(() => import("./pages/Blog")),
      },
      {
        path: "/careers",
        lazy: lazyPage(() => import("./pages/Careers")),
      },
      {
        path: "/careers/:slug",
        lazy: lazyPage(() => import("./pages/CareerDetails")),
      },
      {
        path: "/careers/apply",
        lazy: lazyPage(() => import("./pages/CareerApply")),
      },
      {
        path: "/blog/ai-integration-services-structured-approach",
        lazy: lazyPage(() => import("./pages/SaaSStartupChallengesArticle")),
      },
      {
        path: "/blog/saas-mvp-development-2026",
        lazy: lazyPage(() => import("./pages/SaaSMVPIn60DaysArticle")),
      },
      {
        path: "/blog/white-label-saas-development-strategic-infrastructure",
        lazy: lazyPage(() => import("./pages/OnDemandAppChallengesArticle")),
      },
    ],
  },
]);
