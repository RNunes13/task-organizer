import { COLORS } from "@/theme";
import { renderWithTheme } from "@/tests";
import { Text } from "../Text";
import { TextProps } from "../Text.interfaces";

const defaulProps: TextProps = {
  children: "Text",
};

const getComponent = (props: Partial<TextProps> = {}) =>
  renderWithTheme(<Text {...defaulProps} {...props} />).toJSON();

describe("Text component", () => {
  it("renders correctly", () => {
    const tree = getComponent({
      tag: "p",
      styleAs: "bodyMediumRegular",
      color: COLORS.primary,
    });
    expect(tree).toMatchSnapshot();
  });

  it("renders heading 1", () => {
    const tree = getComponent({
      tag: "h1",
    });
    expect(tree).toMatchSnapshot();
  });

  it("renders heading 2 styled as heading 3", () => {
    const tree = getComponent({
      tag: "h2",
      styleAs: "h3",
    });
    expect(tree).toMatchSnapshot();
  });

  it("renders heading 3, styled as heading 4, and primaryGradientMedium color", () => {
    const tree = getComponent({
      tag: "h3",
      styleAs: "h4",
      color: COLORS.primaryGradientMedium,
    });
    expect(tree).toMatchSnapshot();
  });

  it("renders heading 4, styled as heading 5, primary color, and aligned to the right", () => {
    const tree = getComponent({
      tag: "h4",
      styleAs: "h5",
      color: COLORS.primary,
      align: "right",
    });
    expect(tree).toMatchSnapshot();
  });
});
