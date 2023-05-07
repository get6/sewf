import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Home from "./routes/home";
import LoadingPage from "./pages/loading-page";
import AuthProvider from "./providers/auth";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <AuthProvider>
        <RouterProvider router={router} fallbackElement={<LoadingPage />} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
