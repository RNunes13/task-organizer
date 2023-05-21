import { createElement } from "react";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

jest.mock("@/components/Icon/Icon", () => ({
  Icon: (props: any = {}) =>
    createElement("svg", {
      ...props,
      "data-testid": `icon_${(props?.icon ?? "").replace(":", "_")}`,
    }),
}));
