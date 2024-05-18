import { brandColorsConfig, brandThemeConfig } from './theme.constants';
import { BrandColors } from '../styles/colors';
import { ThemeConfig } from 'antd';
import { useAppSelector } from '@/store/hooks';
import { selectTheme } from '@/store/selectors/swap.selectors';

export const useTheme = (): {
  theme: ThemeConfig;
  brandColors: BrandColors;
} => {
  const theme = useAppSelector(selectTheme);

  const resolvedTheme = theme;

  return {
    theme: brandThemeConfig[resolvedTheme],
    brandColors: brandColorsConfig[resolvedTheme],
  };
};
