import { createContext, useEffect, useState } from "react";
import { getUserLogged, putAccessToken } from "../utils/network-data";

// DEFAULT DATA
const DEFAULT_AUTH_DATA = { loading: true, user: null };

const AppContext = createContext({
  authData: DEFAULT_AUTH_DATA,
  onLogout: () => {},
  refreshAuth: () => {},
});

export function AppContextProvider({ children }) {
  const [authData, setAuthData] = useState(DEFAULT_AUTH_DATA);

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

  useEffect(() => {
    refreshAuth();
  }, []);

  return (
    <AppContext.Provider value={{ authData, onLogout, refreshAuth }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
