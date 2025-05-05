
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/registration/RegistrationForm';
import PromotionCarousel from '@/components/registration/PromotionCarousel';

const Registration = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegistrationClick = () => {
    setShowForm(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left side with form or main content */}
          <div className="flex items-center justify-center p-6 md:p-10 min-h-screen">
            <AnimatePresence>
              {!showForm ? (
                <motion.div 
                  className="w-full max-w-md"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key="landing"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center md:text-left"
                  >
                    <h1 className="text-4xl font-bold mb-4">
                      <span className="text-red-600">i</span>
                      <span className="text-darkblue-800">-numa</span>
                    </h1>
                    <p className="text-gray-600 mb-8">
                      Solutions innovantes pour votre transformation digitale
                    </p>
                    <motion.button
                      className="w-full bg-red-600 text-white py-3 px-6 rounded-md font-medium hover:bg-red-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleRegistrationClick}
                    >
                      S'inscrire
                    </motion.button>
                    
                    <div className="mt-8 text-sm text-gray-500 text-center">
                      <p>Développé par i-numera</p>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div 
                  className="w-full max-w-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  key="form"
                >
                  <button 
                    onClick={() => setShowForm(false)}
                    className="mb-4 text-darkblue-600 hover:text-darkblue-800 transition-colors flex items-center"
                  >
                    ← Retour
                  </button>
                  <h2 className="text-2xl font-bold mb-6 text-darkblue-900">Inscription</h2>
                  <RegistrationForm />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Right side with dark background and promotional content */}
          <div className="hidden md:block bg-darkblue-900 text-white relative">
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <div className="w-full max-w-md">
                <div className="space-y-8">
                  <div className="flex items-start space-x-2">
                    <span className="text-red-500 text-xl">◆</span>
                    <div>
                      <h2 className="text-3xl font-bold mb-4">Expertise technique</h2>
                      <p className="text-white/80">
                        Nos équipes d'experts vous accompagnent dans tous vos projets numériques, du développement à la maintenance en passant par la sécurisation de vos données.
                      </p>
                    </div>
                  </div>
                  
                  <div className="h-1 w-24 bg-red-600"></div>
                  
                  <div className="grid grid-cols-3 gap-10 text-center">
                    <div>
                      <p className="text-3xl font-bold text-red-500">99%</p>
                      <p className="text-sm text-gray-300">Satisfaction client</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-red-500">24/7</p>
                      <p className="text-sm text-gray-300">Support technique</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-red-500">500+</p>
                      <p className="text-sm text-gray-300">Projets réalisés</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-2 mt-16">
                    <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
