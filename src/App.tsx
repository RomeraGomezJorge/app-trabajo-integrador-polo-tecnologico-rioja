import "./App.css";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { SnackbarProvider } from "notistack";
import { AppRouter } from "./routes/AppRouter";
import { theme } from "./theme";



export function App() {
  return (
    <ThemeProvider theme={theme}>
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
