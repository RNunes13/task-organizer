import { render } from "@/tests";
import { Layout } from "../Layout";

const setup = () => render(<Layout />);

describe("Layout component", () => {
  it("should render the `Header` component", () => {
    const { getByTestId } = setup();
    expect(getByTestId("header")).toBeInTheDocument();
  });

  it("should render the `Container` component", () => {
    const { getByTestId } = setup();
    expect(getByTestId("layout-container")).toBeInTheDocument();
  });

  it("should render the `Footer` component", () => {
    const { getByTestId } = setup();
    expect(getByTestId("footer")).toBeInTheDocument();
  });
});
