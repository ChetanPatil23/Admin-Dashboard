import { createContext, useContext, useReducer } from "react";
import darkModeReducer from "./darkModeReducer";

const initialState = {
  darkMode: false,
};

const AppContext = createContext(initialState);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
