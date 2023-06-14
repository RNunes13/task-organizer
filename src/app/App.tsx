import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./App.routes";
import { AppProvider } from "./App.provider";
import GlobalStyle from "@/theme/globalStyles";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
