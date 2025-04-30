
import React from "react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CookiePreferences from "./CookiePreferences";
import { Cookie, ShieldCheck, Info } from "lucide-react";

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
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden rounded-xl border-none shadow-xl">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 flex items-center border-b">
          <Cookie className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-lg font-semibold text-indigo-900">Paramètres des cookies</h2>
        </div>
        
        <Tabs defaultValue="preferences" className="w-full">
          <TabsList className="grid grid-cols-3 p-0 h-12 rounded-none bg-white/80">
            <TabsTrigger value="preferences" className="data-[state=active]:bg-indigo-50 rounded-none border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:shadow-none transition-all flex items-center justify-center gap-1">
              <ShieldCheck className="h-4 w-4" />
              <span className="hidden sm:inline">Préférences</span>
            </TabsTrigger>
            <TabsTrigger value="about" className="data-[state=active]:bg-indigo-50 rounded-none border-b-2 data-[state=active]:border-indigo-500 data-[state=active]:shadow-none transition-all flex items-center justify-center gap-1">
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline">À propos</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="preferences" className="p-4 pt-6">
            <CookiePreferences />
            
            <div className="flex flex-col sm:flex-row gap-2 justify-end mt-6">
              <Button variant="outline" onClick={acceptNecessary} className="text-xs h-8">
                Cookies nécessaires
              </Button>
              <Button onClick={acceptAll} className="text-xs h-8 bg-indigo-600 hover:bg-indigo-700">
                Tout accepter
              </Button>
              <Button 
                onClick={saveConsent}
                variant="default"
                className="text-xs h-8 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
              >
                Enregistrer
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="about" className="p-4 space-y-3">
            <h3 className="font-medium text-sm">Qu'est-ce que les cookies?</h3>
            <p className="text-xs text-muted-foreground">
              Les cookies sont de petits fichiers textes stockés sur votre appareil. Ils nous aident à améliorer votre expérience sur notre site.
            </p>
            <h3 className="font-medium text-sm">Comment nous les utilisons</h3>
            <p className="text-xs text-muted-foreground">
              Nous utilisons différents types de cookies pour faire fonctionner notre site, analyser le trafic et personnaliser votre expérience.
            </p>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsentBanner;
