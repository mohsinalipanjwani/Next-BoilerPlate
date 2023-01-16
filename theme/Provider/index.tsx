import * as React from "react";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { useThemeContext } from "contexts/ThemeContext";

import { getDesignTokens } from "../Configs";
import { createEmotionCache } from "./cache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const ThemeProvider: React.FC<any> = (props) => {
  const { emotionCache = clientSideEmotionCache, children } = props;
  const { theme: selectedTheme } = useThemeContext();
  const theme = React.useMemo(
    () => getDesignTokens(selectedTheme),
    [selectedTheme],
  );

  return (
    <CacheProvider value={emotionCache}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
