import React, {useState, useEffect, createContext, useContext} from "react";

const defaultState = {
  theme: "light",
  toggleTheme: () => {}
}

export const ThemeContext = createContext(defaultState);

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState("light");
  
  useEffect(function(){
    const theme = localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : "light";
    setTheme(theme);
    if (theme == "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [])

  function toggleTheme(){
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme == "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(newTheme));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
}