
import React, { createContext, useContext, useState, useEffect } from "react";

// Define cookie categories
export type CookieCategory = "necessary" | "preferences" | "analytics" | "marketing";

// Define cookie consent state
export interface CookieConsentState {
  necessary: boolean; // Always true, can't be disabled
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  consentGiven: boolean; // Whether the user has made any choice at all
}

// Define context type
interface CookieConsentContextType {
  cookieConsent: CookieConsentState;
  updateCookieConsent: (categories: Partial<CookieConsentState>) => void;
  saveConsent: () => void;
  openCookieManager: () => void;
  closeCookieManager: () => void;
  isCookieManagerOpen: boolean;
}

// Create the context
const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

// Default consent state
const defaultConsentState: CookieConsentState = {
  necessary: true, // Always required
  preferences: false,
  analytics: false,
  marketing: false,
  consentGiven: false,
};

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState<CookieConsentState>(defaultConsentState);
  const [isCookieManagerOpen, setIsCookieManagerOpen] = useState(false);

  // Load saved preferences from localStorage on first render
  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie-consent");
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setCookieConsent(parsedConsent);
      } catch (error) {
        console.error("Failed to parse saved cookie consent", error);
        setCookieConsent(defaultConsentState);
      }
    } else {
      // If no consent is saved, show the cookie banner
      setIsCookieManagerOpen(true);
    }
  }, []);

  // Update cookie consent state
  const updateCookieConsent = (categories: Partial<CookieConsentState>) => {
    setCookieConsent((prev) => ({
      ...prev,
      ...categories,
      // Ensure necessary is always true
      necessary: true,
    }));
  };

  // Save consent to localStorage
  const saveConsent = () => {
    const consentToSave = {
      ...cookieConsent,
      consentGiven: true,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consentToSave));
    setCookieConsent(consentToSave);
    setIsCookieManagerOpen(false);
  };

  // Open cookie manager
  const openCookieManager = () => {
    setIsCookieManagerOpen(true);
  };

  // Close cookie manager
  const closeCookieManager = () => {
    // Only close if consent has been given
    if (cookieConsent.consentGiven) {
      setIsCookieManagerOpen(false);
    }
  };

  return (
    <CookieConsentContext.Provider
      value={{
        cookieConsent,
        updateCookieConsent,
        saveConsent,
        openCookieManager,
        closeCookieManager,
        isCookieManagerOpen,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

// Hook to use the cookie consent context
export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
};
