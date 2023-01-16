import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.

export let getDesignTokens = (mode: PaletteMode) => {
  let theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#0093E7",
              dark: "#404040",
              light: "#FFFFFF",
            },
            secondary: {
              main: "#0076BB",
              light: "#F4F4F4",
              dark: "#FFFFFF",
            },
            text: {
              primary: "#404040",
              secondary: "#FFFFFF",
            },
            background: {
              default: "#F4F4F4",
            },
            error: {
              main: "#ef5350",
              dark: "#FF4133",
            },
            success: {
              main: "#4CAF50",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: "#0093E7",
              dark: "#FFFFFF",
              light: "#404040",
            },
            secondary: {
              main: "#0076BB",
              light: "#303030",
              dark: "#FFFFFF",
            },
            text: {
              primary: "#FFFFFF",
              secondary: "#404040",
            },
            background: {
              default: "#303030",
            },
            error: {
              main: "#ef5350",
              dark: "#FF4133",
            },
            success: {
              main: "#4CAF50",
            },
          }),
    },
    additionalColors: {
      ...(mode === "light"
        ? {
            lightGrey: "#9EC6D8",
            primaryTranslucent: "#0093e766",
            primaryBlack: "rgba(255, 255, 255, 1)",
            secondryBlack: "rgba(0, 0, 0, 0.12)",
          }
        : {
            lightGrey: "#9EC6D8",
            primaryTranslucent: "#0093e766",
            primaryBlack: "rgba(0, 0, 0, 0.24)",
            secondryBlack: "rgba(0, 0, 0, 0.26)",
          }),
    },
    borderRadius: {
      radius1: "8px",
      radius2: "16px",
      radius3: "32px",
    },
    height: {
      barHeight: "58px",
      tabHeight: "43px",
    },
    shape: {
      borderRadius: 16,
    },
    shadow: {
      boxShadow: "0px 4px 48px rgba(0, 0, 0, 0.2)",
    },
    
  });

  theme = createTheme(theme, {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            minHeight: "100vh",
            minWidth: "100%",
          },
          body: {
            position: "absolute",
            minHeight: "100vh",
            minWidth: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            "#__next": {
              minHeight: "100%",
            },
            main: {
              minHeight: "100vh",
              marginBottom: "50px",
            },
            scrollbarColor: theme.palette.background,
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: theme.palette.background,
              width: "8px",
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: theme.palette.primary.dark,
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: theme.palette.primary.dark,
              },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: theme.palette.primary.dark,
              },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: theme.palette.primary.dark,
              },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: "100%",
            "& label": {
              color: theme.palette.text.primary,
            },
            "& label.Mui-focused": {
              color: theme.palette.primary.dark,
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              "& fieldset": {
                borderColor: theme.palette.primary.dark,
                borderRadius: "8px",
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.dark,
                borderWidth: "0.12rem",
              },

              "&.Mui-error fieldset": {
                borderColor: theme.palette.error.main,
              },
            },
          },
        },
        defaultProps: {
          variant: "outlined",
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            width: "100%",
            marginBottom: "0px !important",
            "& label": {
              color: theme.palette.text.primary,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          contained: {
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
            },
          },
        },
      },

    },
    typography: {
      h1: {
        fontSize: "40px",
        color: theme.palette.primary.main,
        fontWeight: 400,
        [theme.breakpoints.down("md")]: {
          fontSize: "32px",
        },
      },
    },
  });
  return theme;
};
