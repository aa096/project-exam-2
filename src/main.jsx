import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/fonts.css";
import "./styles/calender.css";
import Theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import { router } from "./router/index.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>
);
