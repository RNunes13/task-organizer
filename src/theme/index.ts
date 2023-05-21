export type ThemeModeType = "dark" | "light";

enum COLORS {
  /** Base */
  base_0 = "base_0",
  base_10 = "base_10",
  base_20 = "base_20",
  base_30 = "base_30",
  base_40 = "base_40",
  base_50 = "base_50",
  base_60 = "base_60",
  base_70 = "base_70",
  base_80 = "base_80",
  base_90 = "base_90",
  base_100 = "base_100",

  /** Background */
  bodyBg = "bodyBg",
  bodyColor = "bodyColor",

  /** Primary and its variations  */
  primary_5 = "primary_5",
  primary_10 = "primary_10",
  primary_20 = "primary_20",
  primary_30 = "primary_30",
  primary_40 = "primary_40",
  primary_50 = "primary_50",
  primary_60 = "primary_60",
  primary_70 = "primary_70",
  primary_80 = "primary_80",
  primary_90 = "primary_90",
  primary = "primary",
  primaryGradientDark = "primaryGradientDark",
  primaryGradientMedium = "primaryGradientMedium",
  primaryGradientLight = "primaryGradientLight",
}

interface IColorsProps {
  base_0: string;
  base_10: string;
  base_20: string;
  base_30: string;
  base_40: string;
  base_50: string;
  base_60: string;
  base_70: string;
  base_80: string;
  base_90: string;
  base_100: string;

  bodyBg: string;
  bodyColor: string;

  primary: string;
  primary_5: string;
  primary_10: string;
  primary_20: string;
  primary_30: string;
  primary_40: string;
  primary_50: string;
  primary_60: string;
  primary_70: string;
  primary_80: string;
  primary_90: string;

  primaryGradientDark: string;
  primaryGradientMedium: string;
  primaryGradientLight: string;
}

interface IRadiusProps {
  sm: string;
  md: string;
  lg: string;
}

interface ISpacingProps {
  quarck: string;
  nano: string;
  xxxs: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
  huge: string;
  giant: string;
}

interface IIconProps {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
}

interface IBreakpointsProps {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
}

interface IZindexProps {
  base: number;
  top: number;
  modal: number;
}

interface IFontsProps {
  baseFontFamily: string;
  secondaryFontFamily: string;
}

interface ITransitionsProps {
  standardEase: string;
  accelerateEase: string;
  decelerateEase: string;
}

interface IThemeProps {
  radius: IRadiusProps;
  colors: IColorsProps;
  spaces: ISpacingProps;
  icon: IIconProps;
  breakpoint: IBreakpointsProps;
  fonts: IFontsProps;
  index: IZindexProps;
  transitions: ITransitionsProps;
}

export { theme, COLORS };

export interface IMixinProps {
  theme: IThemeProps;
}

export type {
  IThemeProps,
  IColorsProps,
  ISpacingProps,
  IBreakpointsProps,
  IFontsProps,
};

const baseColors: IColorsProps = {
  base_100: '#17181F',
  base_90: '#2C2D34',
  base_80: '#42434B',
  base_70: '#595A63',
  base_60: '#72737B',
  base_50: '#8B8C95',
  base_40: '#A5A6B0',
  base_30: '#C1C1CB',
  base_20: '#DCDDE7',
  base_10: '#F9FAFF',
  base_0: '#FFFFFF',

  bodyBg: "#17181F",
  bodyColor: "#FFFFFF",

  primary: '#fc76a1',
  primary_5: "#fee3ec",
  primary_10: "#fed5e2",
  primary_20: "#fdc8d9",
  primary_30: "#fdacc6",
  primary_40: "#fc91b3",
  primary_50: "#fc76a1",
  primary_60: "#e26a90",
  primary_70: "#c95e80",
  primary_80: "#974660",
  primary_90: "#7e3b50",

  primaryGradientDark: '#ce69e0',
  primaryGradientMedium: '#f669aa',
  primaryGradientLight: '#fe9483',
};

const lightColors: Partial<IColorsProps> = {
  bodyBg: baseColors.base_10,
  bodyColor: baseColors.base_100,
};

const darkColors: Partial<IColorsProps> = {
  bodyBg: baseColors.base_100,
  bodyColor: baseColors.base_10,
};

const theme: IThemeProps = {
  colors: baseColors,
  radius: {
    sm: '8px',
    md: '12px',
    lg: '20px',
  },
  index: {
    base: 0,
    top: 10,
    modal: 100,
  },
  spaces: {
    quarck: '4px',
    nano: '8px',
    xxxs: '12px',
    xxs: '16px',
    xs: '20px',
    sm: '24px',
    md: '32px',
    lg: '40px',
    xl: '48px',
    xxl: '56px',
    xxxl: '64px',
    huge: '80px',
    giant: '96px',
  },
  breakpoint: {
    xsmall: "576px",
    small: "768px",
    medium: "992px",
    large: "1200px",
    xlarge: "1350px",
  },
  icon: {
    xsmall: "12px",
    small: "16px",
    medium: "24px",
    large: "32px",
    xlarge: "64px",
    xxlarge: "96px",
  },
  fonts: {
    secondaryFontFamily: "HirukoProBook",
    baseFontFamily:
      'Montserrat, "Helvetica Neue", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", BlinkMacSystemFont, -apple-system, sans-serif',
  },
  transitions: {
    standardEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    accelerateEase: 'cubic-bezier(0.4, 0, 1, 1)',
    decelerateEase: 'cubic-bezier(0, 0, 0.2, 1)',
  }
};

export function getTheme(themeMode: ThemeModeType): IThemeProps {
  const modeColors = themeMode === "dark" ? darkColors : lightColors;

  return {
    ...theme,
    colors: {
      ...theme.colors,
      ...modeColors,
    },
  };
}

export default theme;
