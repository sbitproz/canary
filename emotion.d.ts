import '@emotion/react';
import { GlobalToken } from 'antd';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white100: string;
      black100: string;
      black120: string;
      grey100: string;
      grey120: string;
      grey150: string;
      grey180: string;
      grey185: string;
      red100: string;
      purple100: string;
      yellow100: string;
      green100: string;
    };
    brandColors: {
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
    };
    theme: GlobalToken;
  }
}
