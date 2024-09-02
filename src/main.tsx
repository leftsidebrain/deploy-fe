import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import { StoreProvider } from "./store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider>
        <App />
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} draggable theme="light" />
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);
