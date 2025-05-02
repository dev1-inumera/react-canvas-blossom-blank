
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import CookieConsentBanner from "@/components/cookies/CookieConsentBanner";
import { useEffect } from "react";
import Index from "./pages/Index";
import Expertise from "./pages/Expertise";
import Pricing from "./pages/Pricing";
import VousEtes from "./pages/VousEtes";
import Contact from "./pages/Contact";
import Devis from "./pages/Devis";
import NotFound from "./pages/NotFound";
import Faq from "./pages/Faq";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import IProspect from "./pages/IProspect";

// ScrollToTop component to handle scroll position on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CookieConsentProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/vous-etes" element={<VousEtes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/devis" element={<Devis />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/i-prospect" element={<IProspect />} />
            
            {/* Redirect legacy routes to appropriate pages */}
            <Route path="/web-development" element={<Navigate to="/expertise" />} />
            <Route path="/custom-apps" element={<Navigate to="/expertise" />} />
            <Route path="/quote" element={<Navigate to="/devis" />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsentBanner />
        </BrowserRouter>
      </CookieConsentProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
