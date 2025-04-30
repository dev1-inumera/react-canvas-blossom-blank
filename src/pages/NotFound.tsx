
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center">
        <div className="container px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-red-600 font-bold text-9xl mb-4 animate-fade-in">404</div>
            <h1 className="text-3xl font-bold text-darkblue-900 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Page non trouvée
            </h1>
            <p className="text-xl text-darkblue-600 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-darkblue-800 hover:bg-darkblue-900 transition-all font-medium hover:shadow-lg group animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
