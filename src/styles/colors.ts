export const colors = {
  white100: '#FFFFFF',
  white150: '#F6F9FF',
  black100: '#000000',
  black120: '#262626',
  grey50: '#E9EFFF',
  grey100: '#2E2E2E',
  grey120: '#444444',
  grey125: '#606369',
  grey130: '#757575',
  grey150: '#828282',
  grey180: '#9F9F9F',
  grey185: '#D9D9D9',
  grey187: 'rgba(5, 5, 5, 0.06)',
  grey190: '#f9f9f9',
  red100: '#ff4d4f',
  purple100: '#9747FF',
  yellow100: '#FCBE25',
  green100: '#389E0D',
  blue200: '#16358C',
  darkGreen100: 'rgba(38, 50, 56, 1)',
};

export interface BrandColors {
  primary50: string;
  primary100: string;
  primary120: string;
  primary140: string;
  primary190: string;
  primary195: string;
  primary200: string;
  background100: string;
  footer100: string;
  panelBg100: string;
  text100: string;
  inverseText100: string;
  disabled100: string;
}

export const darkColors: BrandColors = {
  primary50: '#FFBC00',
  primary100: '#FFBC00',
  primary120: '#FFBC00',
  primary140: '#FFEDBB',
  primary190: '#f5f8fd',
  primary195: '#E9EFFF',
  primary200: '#092B00',
  background100: 'linear-gradient(#2b271f, #0a0700);',
  footer100: '#896500',
  panelBg100: colors.white100,
  text100: colors.black100,
  inverseText100: colors.white100,
  disabled100: '#896500',
};

export const lightColors: BrandColors = {
  primary50: '#FFBC00',
  primary100: '#FFBC00',
  primary120: '#FFBC00',
  primary140: '#FFEDBB',
  primary190: '#f5f8fd',
  primary195: '#E9EFFF',
  primary200: '#092B00',
  background100: 'linear-gradient(#ffffff, #faecd8)',
  footer100: colors.grey100,
  panelBg100: '#ffffff87',
  text100: colors.white100,
  inverseText100: colors.black100,
  disabled100: '#d9d9d9',
};
