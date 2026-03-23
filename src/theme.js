import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2e7d32",   // deep green (food/nature)
      light: "#4caf50",
      dark: "#1b5e20"
    },

    secondary: {
      main: "#ff6f00"    // amber accent
    },

    background: {
      default: "#f5f5f5",
      paper: "#ffffff"
    }
  },

  typography: {
    fontFamily: '"DM Sans", "Roboto", "Helvetica", "Arial", sans-serif',

    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 }
  },

  shape: {
    borderRadius: 12
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",   // removes ALL CAPS
          fontWeight: 600
        }
      }
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
        }
      }
    }
  }
})

export default theme