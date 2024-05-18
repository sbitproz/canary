import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ConfigProvider, theme } from 'antd';
import { BrandColors, colors } from '../styles/colors';
import { useTheme } from './useTheme';
import { PropsWithChildren } from 'react';

interface WithEmotionTheme {
  brandColors: BrandColors;
}

const WithEmotionTheme = ({
  brandColors,
  children,
}: PropsWithChildren<WithEmotionTheme>) => {
  const { token: antTheme } = theme.useToken();
  return (
    <EmotionThemeProvider theme={{ theme: antTheme, colors, brandColors }}>
      {children}
    </EmotionThemeProvider>
  );
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, brandColors } = useTheme();
  return (
    <ConfigProvider theme={theme}>
      <WithEmotionTheme brandColors={brandColors}>{children}</WithEmotionTheme>
    </ConfigProvider>
  );
};
