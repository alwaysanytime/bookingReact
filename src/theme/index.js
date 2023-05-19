import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1a53ff",
      light: "#66a3ff",
      dark: "#1a75ff",
    },
    secondary: {
      main: "#82868b",
      light: "#9ca0a4",
      dark: "#696d71",
    },
    success: {
      main: "#28c76f",
      light: "#48da89",
      dark: "#1f9d57",
    },
    warning: {
      main: "#ff9f43",
      light: "#ffb976",
      dark: "#ff8510",
    },
    info: {
      main: "#00cfe8",
      light: "#1ce7ff",
      dark: "#00a1b5",
    },
    error: {
      main: "#ea5455",
      light: "#f08182",
      dark: "#e42728",
    },
    background: {
      default: "#F8F7FA",
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "rgba(47, 43, 61, 0.14) 0px 2px 6px 0px",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          height: 40,
        },
      },
    },
  },
});
