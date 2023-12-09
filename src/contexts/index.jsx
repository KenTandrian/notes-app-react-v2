import { createContext, useEffect, useState } from "react";
import { getUserLogged, putAccessToken } from "../utils/network-data";

// DEFAULT DATA
const DEFAULT_AUTH_DATA = { loading: true, user: null };

const AppContext = createContext({
  authData: DEFAULT_AUTH_DATA,
  onLogout: () => {},
  refreshAuth: () => {},
  theme: "dark",
  toggleTheme: () => {},
});

export function AppContextProvider({ children }) {
  const [authData, setAuthData] = useState(DEFAULT_AUTH_DATA);
  const [theme, setTheme] = useState("dark");

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

  useEffect(() => {
    refreshAuth();

    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{ authData, onLogout, refreshAuth, theme, toggleTheme }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
