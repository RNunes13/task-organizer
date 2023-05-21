import { IMixinProps } from '@/theme';

export type TypographyType = () => (props: IMixinProps) => string;

export const h0: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.secondaryFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 60px;
`;

export const h1: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.secondaryFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
`;

export const h2: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.secondaryFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const h3: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.secondaryFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;

export const h4: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const h5: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
`;

export const bodyLargeBold: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`;

export const bodyLargeRegular: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`;

export const bodyMediumBold: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const bodyMediumRegular: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const bodySmallBold: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const bodySmallRegular: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const ctaBold: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
`;

export const ctaSemi: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
`;

export const caption: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const captionBold: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;

export const captionUppercase: TypographyType = () => (props: IMixinProps) => `
  font-family: ${props.theme.fonts.baseFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
`;
