/* eslint-disable @typescript-eslint/no-empty-interface */
import { IThemeProps } from "@/theme";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends IThemeProps {}
}
