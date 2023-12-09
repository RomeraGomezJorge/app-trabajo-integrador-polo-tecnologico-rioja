import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0543dc",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#f2f2f2",
        },
      },
      defaultProps: {
        size: 'small'
      },
    },
  },
});
