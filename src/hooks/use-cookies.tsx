
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { useCallback } from "react";

interface CookieOptions {
  expires?: number; // Days until expiration
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  category: 'necessary' | 'preferences' | 'analytics' | 'marketing';
}

export const useCookies = () => {
  const { cookieConsent } = useCookieConsent();

  // Set a cookie if the category is allowed
  const setCookie = useCallback((name: string, value: string, options: CookieOptions) => {
    const { category, ...cookieOptions } = options;
    
    // Check if this cookie category is allowed
    if (!cookieConsent[category]) {
      console.warn(`Cookie '${name}' not set because '${category}' cookies are not accepted.`);
      return false;
    }
    
    // Calculate expiration date
    let expires = '';
    if (cookieOptions.expires) {
      const date = new Date();
      date.setTime(date.getTime() + (cookieOptions.expires * 24 * 60 * 60 * 1000));
      expires = `; expires=${date.toUTCString()}`;
    }
    
    // Build cookie string
    const path = cookieOptions.path ? `; path=${cookieOptions.path}` : '; path=/';
    const domain = cookieOptions.domain ? `; domain=${cookieOptions.domain}` : '';
    const secure = cookieOptions.secure ? '; secure' : '';
    const sameSite = cookieOptions.sameSite ? `; samesite=${cookieOptions.sameSite}` : '; samesite=lax';
    
    document.cookie = `${name}=${value}${expires}${path}${domain}${secure}${sameSite}`;
    return true;
  }, [cookieConsent]);
  
  // Get a cookie by name
  const getCookie = useCallback((name: string) => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }, []);
  
  // Remove a cookie by name
  const removeCookie = useCallback((name: string, options?: Omit<CookieOptions, 'category'>) => {
    const path = options?.path ? `; path=${options.path}` : '; path=/';
    const domain = options?.domain ? `; domain=${options.domain}` : '';
    
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC${path}${domain}`;
  }, []);
  
  return {
    setCookie,
    getCookie,
    removeCookie,
    cookieConsent
  };
};
