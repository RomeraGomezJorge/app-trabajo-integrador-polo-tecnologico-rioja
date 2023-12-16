import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0543dc",
    },
  },
  components: {
    MuiTab:{
      styleOverrides:{
        root:{
          textTransform: "none",
          fontWeight: "bold"
        }
      }

    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      defaultProps: {
        size: "large",
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#f2f2f2",
        },
      },
     },
    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true
      },
     },
  },
});
