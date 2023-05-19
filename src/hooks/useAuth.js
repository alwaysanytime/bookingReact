import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [tokens, setTokens] = useLocalStorage("tokens", null);

  const login = async (tokens) => {
    setTokens(tokens);
  };

  const logout = () => {
    setTokens(null);
  };

  const value = useMemo(
    () => ({
      tokens,
      login,
      logout,
    }), // eslint-disable-next-line
    [tokens]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
