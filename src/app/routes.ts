import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BookStrategyCall from "./pages/BookStrategyCall";
import GetEstimate from "./pages/GetEstimate";
import BecomePartner from "./pages/BecomePartner";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
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
    path: "/contact",
    Component: Contact,
  },
]);
