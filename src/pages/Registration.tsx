
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
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence>
            {!showForm ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="landing"
              >
                {/* Left side - Main content */}
                <div className="p-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1 className="text-4xl font-bold mb-4">
                      <span className="text-red-600">i</span>
                      <span className="text-darkblue-800">-numa</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
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
                  </motion.div>
                </div>

                {/* Right side - Promotional content */}
                <div className="bg-darkblue-900 text-white p-10 rounded-lg">
                  <PromotionCarousel />
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                key="form"
              >
                {/* Door opening animation */}
                <div className="w-full max-w-4xl relative overflow-hidden bg-white rounded-lg shadow-lg">
                  <motion.div 
                    className="absolute inset-0 bg-slate-100 origin-left"
                    initial={{ scaleX: 0.5, x: 0 }}
                    animate={{ scaleX: 0, x: '-50%' }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-slate-100 origin-right"
                    initial={{ scaleX: 0.5, x: '100%' }}
                    animate={{ scaleX: 0, x: '150%' }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  />
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="p-8"
                  >
                    <button 
                      onClick={() => setShowForm(false)}
                      className="mb-4 text-darkblue-600 hover:text-darkblue-800 transition-colors flex items-center"
                    >
                      ← Retour
                    </button>
                    <h2 className="text-2xl font-bold mb-6 text-center text-darkblue-900">Inscription</h2>
                    <RegistrationForm />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
