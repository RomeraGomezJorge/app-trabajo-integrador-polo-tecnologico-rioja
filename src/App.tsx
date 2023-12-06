import "./App.css";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { AppRouter } from "./routes/AppRouter";

const defaultTheme = createTheme();

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
      >
        <CssBaseline />
        <AppRouter />
      </SnackbarProvider>
    </ThemeProvider>
  );
}
