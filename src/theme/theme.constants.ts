import { colors, funColors, simpleColors, BrandColors } from '../styles/colors';
import { ThemeConfig } from 'antd';

export enum ThemeOptions {
  SIMPLE = 'SIMPLE',
  FUN = 'FUN',
}

export const standardBoxShadow = 'rgba(149, 157, 165, 0.2) 0px 8px 24px';

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

export const simpleTheme: ThemeConfig = {
  token: {
    ...commonTheme.token,
    colorPrimary: simpleColors.primary100,
  },
  components: {
    ...commonTheme.components,
    Menu: {
      colorBgContainer: simpleColors.primary100,
      colorText: colors.white100,
      itemSelectedBg: 'red',
    },
    Layout: {
      headerBg: simpleColors.primary100,
      colorBgLayout: colors.white100,
    },
    Card: {
      paddingContentHorizontal: 100,
    },
  },
};

export const funTheme: ThemeConfig = {
  token: {
    ...commonTheme.token,
    colorPrimary: funColors.primary100,
  },
  components: {
    ...commonTheme.components,
    Menu: {
      colorBgContainer: funColors.primary100,
      colorText: colors.white100,
      itemSelectedColor: funColors.primary200,
    },
    Layout: {
      headerBg: funColors.primary100,
      colorBgLayout: colors.white100,
    },
  },
};

export const domainThemeMap = {
  SIMPLE: {
    theme: ThemeOptions.SIMPLE,
    match: ['aston'],
  },
  CHOPIN: {
    theme: ThemeOptions.FUN,
    match: ['chopin'],
  },
};

export const brandThemeConfig: Record<ThemeOptions, ThemeConfig> = {
  [ThemeOptions.SIMPLE]: simpleTheme,
  [ThemeOptions.FUN]: funTheme,
};

export const brandColorsConfig: Record<ThemeOptions, BrandColors> = {
  [ThemeOptions.SIMPLE]: simpleColors,
  [ThemeOptions.FUN]: funColors,
};
