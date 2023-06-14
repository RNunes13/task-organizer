import { createContext, useContext, useMemo, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { AppStateReducer } from "./App.reducer";
import { getTheme } from "@/theme";
import { db } from "@/database";
import type { AppContextProps } from "./App.interfaces";

export interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextProps>({
  db,
  themeMode: "dark",
  searchTerm: null,
  dispatch: () => null,
});

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [appState, dispatch] = useReducer(AppStateReducer, {
    themeMode: "dark",
    searchTerm: "",
  });

  const theme = useMemo(
    () => getTheme(appState.themeMode),
    [appState.themeMode]
  );

  const contextValue = { ...appState, db, dispatch };

  return (
    <AppContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
