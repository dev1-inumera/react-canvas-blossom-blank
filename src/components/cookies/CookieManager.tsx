
import React from "react";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const CookieManager = () => {
  const { openCookieManager } = useCookieConsent();

  return (
    <Button
      variant="ghost"
      onClick={openCookieManager}
      className="flex items-center gap-2 text-sm group transition-colors hover:text-indigo-600"
    >
      <Cookie className="h-4 w-4 group-hover:text-indigo-600 transition-colors" />
      <span>Gérer les cookies</span>
    </Button>
  );
};

export default CookieManager;
