import { COLORS } from "@/theme";
import * as typographies from "@/theme/mixins/Typography";

export type ALIGNMENTS  = "left" | "center" | "right";

export type TYPOGRAPHIES = keyof typeof typographies;

export interface TextProps {
  align?: ALIGNMENTS;
  as?: any;
  children?: any;
  className?: string;
  color?: COLORS;
  tag?: string;
  styleAs?: TYPOGRAPHIES;
}
