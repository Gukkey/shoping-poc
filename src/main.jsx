import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Test from "./pages/test/Test.jsx";
import { ThemeProvider } from "./contexts/ThemeContext";
import MainRoutes from "./routes/MainRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider>
  </StrictMode>
);
