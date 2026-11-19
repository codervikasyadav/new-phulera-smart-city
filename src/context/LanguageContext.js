import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default to English, with full bilingual support
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('portal_lang') || 'en';
  });

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'hi' : 'en';
    setLanguage(nextLang);
    localStorage.setItem('portal_lang', nextLang);
  };

  useEffect(() => {
    document.documentElement.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return { language: 'en', toggleLanguage: () => {} };
  }
  return context;
};
