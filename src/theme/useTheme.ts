import {
  ThemeOptions,
  brandColorsConfig,
  brandThemeConfig,
} from "./theme.constants";
import { BrandColors } from "../styles/colors";
import { ThemeConfig } from "antd";

export const useTheme = (): {
  theme: ThemeConfig;
  brandColors: BrandColors;
} => {
  const resolvedTheme = ThemeOptions.SIMPLE ?? ThemeOptions.FUN;

  return {
    theme: brandThemeConfig[resolvedTheme],
    brandColors: brandColorsConfig[resolvedTheme],
  };
};
