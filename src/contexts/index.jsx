import { createContext, useEffect, useState } from "react";
import { getUserLogged, putAccessToken } from "../utils/network-data";

// DEFAULT DATA
const DEFAULT_AUTH_DATA = { loading: true, user: null };

const AppContext = createContext({
  authData: DEFAULT_AUTH_DATA,
  locale: "en",
  onLogout: () => {},
  refreshAuth: () => {},
  theme: "dark",
  toggleLocale: () => {},
  toggleTheme: () => {},
});

export function AppContextProvider({ children }) {
  const [authData, setAuthData] = useState(DEFAULT_AUTH_DATA);
  const [theme, setTheme] = useState("dark");
  const [locale, setLocale] = useState("en");

  async function refreshAuth() {
    try {
      const { data } = await getUserLogged();
      setAuthData((p) => ({ ...p, user: data, loading: false }));
    } catch (error) {
      setAuthData((p) => ({ ...p, user: null, loading: false }));
    }
  }

  function onLogout() {
    setAuthData((p) => ({ ...p, user: null }));
    putAccessToken("");
  }

  function toggleTheme() {
    const currentTheme = theme;
    setTheme((p) => (p === "light" ? "dark" : "light"));
    localStorage.setItem("theme", currentTheme === "light" ? "dark" : "light");
  }

  function toggleLocale() {
    const currentLocale = locale;
    setLocale((p) => (p === "en" ? "id" : "en"));
    localStorage.setItem("locale", currentLocale === "en" ? "id" : "en");
  }

  useEffect(() => {
    refreshAuth();
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
    if (localStorage.getItem("locale")) {
      setLocale(localStorage.getItem("locale"));
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  return (
    <AppContext.Provider
      value={{
        authData,
        locale,
        onLogout,
        refreshAuth,
        theme,
        toggleLocale,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
