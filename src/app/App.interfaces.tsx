import type { ThemeModeType } from "@/theme";

export interface AppContextProps {
  themeMode: ThemeModeType;
  searchTerm: string | null;
  dispatch: React.Dispatch<AppReducerActions<StateActions>>;
}

export interface AppReducerActions<T> {
  type: T;
  payload?: any;
}

export interface AppState {
  themeMode: ThemeModeType;
  searchTerm: string;
}

export type StateActions = "all" | "theme" | "search";
