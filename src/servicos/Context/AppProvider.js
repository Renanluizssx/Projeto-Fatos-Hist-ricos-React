import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [fato, setFato] = useState([]);
  const [espera, setEspera] = useState(false);
  const [error, setError] = useState(null);

  const contextValue = {
    fato,
    setFato,
    espera,
    setEspera,
    error,
    setError,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};
