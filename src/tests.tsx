import userEvent from "@testing-library/user-event";
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "@/app/App.provider";
import { theme } from "@/theme";
import type { AppContextProps } from "@/app/App.interfaces";

interface ProvidersProps {
  children: React.ReactElement;
  appContext?: Partial<AppContextProps>;
}

interface RenderProviderProps {
  wrapperProps?: Omit<ProvidersProps, "children">;
}

const defaultAppContext: AppContextProps = {
  searchTerm: null,
  themeMode: "dark",
  dispatch: jest.fn(),
};

const Providers: React.FC<ProvidersProps> = ({
  children,
  appContext = defaultAppContext,
}) => (
  <AppContext.Provider value={{ ...defaultAppContext, ...appContext }}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  </AppContext.Provider>
);

export async function actWait(amount = 0) {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, amount));
  });
}

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions & RenderProviderProps
) => {
  const { wrapperProps = {}, ...rest } = options || {};

  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: ({ children }) => (
        <Providers {...wrapperProps}>{children}</Providers>
      ),
      ...rest,
    }),
  };
};

export const renderWithTheme = (component: any): ReactTestRenderer => (
  renderer.create(<Providers>{component}</Providers>)
);

export * from "@testing-library/react";
export { customRender as render };
