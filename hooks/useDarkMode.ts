import { useEffect, useState } from "react";
import LocalStorage from "localforage";

const THEME_KEY = "theme";

function getDarkThemeMQ() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}

function isDarkTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export const useDarkMode = () => {
  const [mode, setMode] = useState("system");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const setUITheme = (value: any) => {
    LocalStorage.setItem(THEME_KEY, value);
    let themeValue = value;
    if (value === "system") {
      themeValue = isDarkTheme() ? "dark" : "light";
    }
    setMode(value);
    setTheme(themeValue);
  };

  const changeTheme = (value: "light" | "dark") => setUITheme(value);

  const setModeFromLocal = async () => {
    const localMode = await LocalStorage.getItem(THEME_KEY);
    if (localMode) {
      setMode(localMode as "light" | "dark");
      return;
    }
    if (mode === "system") {
      setTheme(isDarkTheme() ? "dark" : "light");
    }
  };

  const handler = (e: any) => {
    if (e.matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    let darkThemeMq: any = null;
    if (mode === "system") {
      darkThemeMq = getDarkThemeMQ();
      darkThemeMq.addEventListener("change", handler);
      setTheme(darkThemeMq.matches ? "dark" : "light");
    } else {
      setTheme(mode as "light" | "dark");
    }
    return () =>
      darkThemeMq ? darkThemeMq.removeEventListener("change", handler) : null;
  }, [mode]);

  useEffect(() => {
    setModeFromLocal();
  }, []);

  return [theme, mode, changeTheme];
};
