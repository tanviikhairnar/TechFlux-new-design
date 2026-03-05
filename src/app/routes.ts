import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BookStrategyCall from "./pages/BookStrategyCall";
import GetEstimate from "./pages/GetEstimate";
import BecomePartner from "./pages/BecomePartner";
import WhiteLabelPartnership from "./pages/WhiteLabelPartnership";
import Contact from "./pages/Contact";
import SaaSDevelopment from "./pages/SaaSDevelopment";
import AiSolutions from "./pages/AiSolutions";
import OnDemandSolutions from "./pages/OnDemandSolutions";
import UnityGameDevelopment from "./pages/UnityGameDevelopment";
import EcommerceSolutions from "./pages/EcommerceSolutions";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import AIIntegrationServicesArticle from "./pages/AIIntegrationServicesArticle";
import SaaSMVPDevelopmentArticle from "./pages/SaaSMVPDevelopmentArticle";
import WhiteLabelSaaSDevelopmentArticle from "./pages/WhiteLabelSaaSDevelopmentArticle";
import ServyoCaseStudy from "./pages/ServyoCaseStudy";
import DineRightCaseStudy from "./pages/DineRightCaseStudy";
import AllstarPremierAutoCaseStudy from "./pages/AllstarPremierAutoCaseStudy";
import MyObscurCaseStudy from "./pages/MyObscurCaseStudy";
import LeaveCertificateCaseStudy from "./pages/LeaveCertificateCaseStudy";
import FuzTechCaseStudy from "./pages/FuzTechCaseStudy";
import Etern8CaseStudy from "./pages/Etern8CaseStudy";
import StudioNewMediaCaseStudy from "./pages/StudioNewMediaCaseStudy";
import ScrollToTop from "./components/ScrollToTop";

export const router = createBrowserRouter([
  {
    Component: ScrollToTop,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/book-strategy-call",
        Component: BookStrategyCall,
      },
      {
        path: "/get-estimate",
        Component: GetEstimate,
      },
      {
        path: "/become-partner",
        Component: BecomePartner,
      },
      {
        path: "/services/white-label-partnership",
        Component: WhiteLabelPartnership,
      },
      {
        path: "/services/white-lable-partnership",
        Component: WhiteLabelPartnership,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/saas-development",
        Component: SaaSDevelopment,
      },
      {
        path: "/ai-solutions",
        Component: AiSolutions,
      },
      {
        path: "/on-demand-solutions",
        Component: OnDemandSolutions,
      },
      {
        path: "/unity-game-development",
        Component: UnityGameDevelopment,
      },
      {
        path: "/e-commerce-solutions",
        Component: EcommerceSolutions,
      },
      {
        path: "/case-studies",
        Component: CaseStudies,
      },
      {
        path: "/case-studies/servyo",
        Component: ServyoCaseStudy,
      },
      {
        path: "/case-studies/dine-right",
        Component: DineRightCaseStudy,
      },
      {
        path: "/case-studies/allstar-premier-auto",
        Component: AllstarPremierAutoCaseStudy,
      },
      {
        path: "/case-studies/myobscur",
        Component: MyObscurCaseStudy,
      },
      {
        path: "/case-studies/leave-certificate",
        Component: LeaveCertificateCaseStudy,
      },
      {
        path: "/case-studies/fuztech",
        Component: FuzTechCaseStudy,
      },
      {
        path: "/case-studies/etern8",
        Component: Etern8CaseStudy,
      },
      {
        path: "/case-studies/studio-new-media",
        Component: StudioNewMediaCaseStudy,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/careers",
        Component: Careers,
      },
      {
        path: "/blog/ai-integration-services-structured-approach",
        Component: AIIntegrationServicesArticle,
      },
      {
        path: "/blog/saas-mvp-development-2026",
        Component: SaaSMVPDevelopmentArticle,
      },
      {
        path: "/blog/white-label-saas-development-strategic-infrastructure",
        Component: WhiteLabelSaaSDevelopmentArticle,
      },
    ],
  },
]);
