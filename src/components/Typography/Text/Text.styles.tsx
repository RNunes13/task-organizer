import styled from "styled-components";
import * as Typographies from "@/theme/mixins/Typography";
import type { TextProps, TYPOGRAPHIES } from "./Text.interfaces";
import type { TypographyType } from "@/theme/mixins/Typography";

export const TextComponent = styled.p<TextProps & { $styleAs?: TYPOGRAPHIES }>`
  margin: 0;
  font: inherit;

  ${({ $styleAs, tag }) => {
    const mixins: Record<string, TypographyType> = Typographies;

    if ($styleAs && mixins[$styleAs]) {
      return mixins[$styleAs]();
    }

    if (tag && mixins[tag]) {
      return mixins[tag];
    }

    return mixins.bodyMediumRegular;
  }}

  text-align: ${({ align }) => align};
  color: ${({ color, theme }) => (color && theme.colors[color]) || "inherit"};
`;
