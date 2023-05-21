import type {
  AppReducerActions,
  AppState,
  StateActions,
} from "./App.interfaces";

export function AppStateReducer(
  state: AppState,
  { type, payload }: AppReducerActions<StateActions>
): AppState {
  switch (type) {
    case "all":
      return { ...state, ...payload };
    case "theme":
      return { ...state, themeMode: payload };
    case "search":
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}
