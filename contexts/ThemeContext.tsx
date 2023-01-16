import { useContext, createContext } from "react";
import { useDarkMode } from "hooks/useDarkMode";

const ThemeContext = createContext({}) as any;

export function useThemeContext() {
  return useContext(ThemeContext) as any;
}

export default function ThemeContextProvider(props: { children: any }) {
  const [theme, mode, changeTheme] = useDarkMode();
  return (
    <ThemeContext.Provider value={{ theme, mode, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
