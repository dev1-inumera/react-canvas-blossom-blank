
import React from "react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import CookiePreferences from "./CookiePreferences";

const CookieConsentBanner = () => {
  const {
    cookieConsent,
    saveConsent,
    updateCookieConsent,
    isCookieManagerOpen,
    closeCookieManager,
  } = useCookieConsent();

  const acceptAll = () => {
    updateCookieConsent({
      preferences: true,
      analytics: true,
      marketing: true,
    });
    saveConsent();
  };

  const acceptNecessary = () => {
    updateCookieConsent({
      preferences: false,
      analytics: false,
      marketing: false,
    });
    saveConsent();
  };

  return (
    <Dialog open={isCookieManagerOpen} onOpenChange={closeCookieManager}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Paramètres des cookies</DialogTitle>
          <DialogDescription>
            Ce site utilise des cookies pour améliorer votre expérience. Veuillez sélectionner les catégories de cookies que vous souhaitez accepter.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <CookiePreferences />
          
          <div className="flex flex-col sm:flex-row gap-2 justify-end mt-6">
            <Button variant="outline" onClick={acceptNecessary}>
              Cookies nécessaires uniquement
            </Button>
            <Button onClick={acceptAll}>
              Tout accepter
            </Button>
            <Button 
              onClick={saveConsent}
              variant="default"
            >
              Enregistrer les préférences
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsentBanner;
