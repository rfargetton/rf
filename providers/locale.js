import React, { useState, useEffect, createContext, useContext } from "react";

const defaultLocaleContext = {
  locale: "en"
}

const LocaleContext = createContext(defaultLocaleContext);

export function LocaleProvider({children}){
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    // local Locale prefs
    const localLocale = localStorage.getItem("locale");
    if (localLocale) {
      setLocale(localLocale);
    }

    // browser language
    const [browserLocale] = navigator.language.split("-");
    if (browserLocale) {
      setLocale(browserLocale);
    }

  }, [])

  return (
    <LocaleContext.Provider value={locale}>
      {children}
    </LocaleContext.Provider>
  )
}