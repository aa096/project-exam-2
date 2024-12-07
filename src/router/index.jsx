import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages";
import Venues from "../pages/Venues";
import { MainLayout } from "../layouts";
import { Venue } from "../pages";
import RegisterTemplate from "../components/templates/Register";
import LoginTemplate from "../components/templates/LoginTemplate";
import ProfilePage from "../hooks/auth/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/venues",
        element: <Venues />,
      },
      {
        path: "/venues/:id",
        element: <Venue />,
      },
      {
        path: "/register",
        element: <RegisterTemplate />,
      },
      {
        path: "/login",
        element: <LoginTemplate />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export { router };
