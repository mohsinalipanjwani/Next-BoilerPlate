declare module "@mui/material/styles" {
  interface Theme {
    additionalColors?: {
      lightGrey: string;
      primaryBlack: string;
      secondryBlack: string;
      primaryTranslucent: string;
    };
    borderRadius: {
      radius1: string;
      radius2: string;
      radius3: string;
    };
    height: {
      barHeight: string;
      tabHeight: string;
    };
    shadow: {
      boxShadow: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    additionalColors?: {
      lightGrey: string;
      primaryBlack: string;
      secondryBlack: string;
      primaryTranslucent: string;
    };
    borderRadius?: {
      radius1?: string;
      radius2?: string;
      radius3?: string;
    };
    height?: {
      barHeight: string;
      tabHeight: string;
    };
    shadow?: {
      boxShadow?: string;
    };
  }
}

export {};
