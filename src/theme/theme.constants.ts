import { colors, darkColors, lightColors, BrandColors } from '../styles/colors';
import { ThemeConfig } from 'antd';

export enum ThemeOptions {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export const standardBoxShadow = 'rgb(149 157 165 / 13%) -1px 6px 16px;';

export const screen = {
  minWidth: 1100,
};

export const commonTheme: ThemeConfig = {
  token: {
    fontFamily:
      'Roboto, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  components: {
    Typography: {
      fontSizeHeading1: 34,
    },
    Statistic: {
      titleFontSize: 12,
    },
  },
};

export const lightTheme: ThemeConfig = {
  token: {
    ...commonTheme.token,
    colorPrimary: lightColors.primary100,
  },
  components: {
    ...commonTheme.components,
    Button: {
      primaryColor: colors.white100,
    },
    Menu: {
      colorBgContainer: lightColors.primary100,
      colorText: colors.white100,
    },
    Layout: {
      headerBg: lightColors.primary100,
      colorBgLayout: colors.white100,
    },
  },
};

export const darkTheme: ThemeConfig = {
  token: {
    ...commonTheme.token,
    colorPrimary: darkColors.primary100,
  },
  components: {
    ...commonTheme.components,
    Button: {
      primaryColor: colors.black100,
    },
    Menu: {
      colorBgContainer: darkColors.primary100,
      colorText: colors.white100,
    },
    Layout: {
      headerBg: darkColors.primary100,
      colorBgLayout: colors.grey100,
    },
  },
};

export const brandThemeConfig: Record<ThemeOptions, ThemeConfig> = {
  [ThemeOptions.LIGHT]: lightTheme,
  [ThemeOptions.DARK]: darkTheme,
};

export const brandColorsConfig: Record<ThemeOptions, BrandColors> = {
  [ThemeOptions.LIGHT]: lightColors,
  [ThemeOptions.DARK]: darkColors,
};
