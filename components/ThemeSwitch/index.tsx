import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useThemeContext } from "contexts/ThemeContext";

export default function ThemeSwitcher() {
  const { changeTheme, theme } = useThemeContext();

  return (
    <IconButton
      onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
      sx={{ mr: 1 }}
    >
      {theme === "dark" ? <DarkModeOutlined /> : <LightModeOutlined />}
    </IconButton>
  );
}
