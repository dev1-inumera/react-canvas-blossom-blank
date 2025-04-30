
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Expertise from "./pages/Expertise";
import Pricing from "./pages/Pricing";
import VousEtes from "./pages/VousEtes";
import References from "./pages/References";
import Contact from "./pages/Contact";
import Devis from "./pages/Devis";
import NotFound from "./pages/NotFound";
import Faq from "./pages/Faq";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/vous-etes" element={<VousEtes />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
