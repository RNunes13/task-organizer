import { createElement } from "react";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

jest.mock('@/constants/envs', () => ({
  DB_NAME: 'task_org_test',
}));

jest.mock("@/components/Icon/Icon", () => ({
  Icon: (props: any = {}) =>
    createElement("svg", {
      ...props,
      "data-testid": `icon_${(props?.icon ?? "").replace(":", "_")}`,
    }),
}));
