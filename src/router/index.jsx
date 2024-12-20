import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages";
import Venues from "../pages/Venues";
import { MainLayout } from "../layouts";
import { Venue } from "../pages";
import RegisterPage from "../pages/Register";
import LoginTemplate from "../components/templates/LoginTemplate";
import ProfilePage from "../hooks/auth/profilePage";
import RentOutPage from "../pages/RentOut";
import UpdateProfilePage from "../pages/updateProfilePage";
import Profile from "../pages/profile";

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
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginTemplate />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/rentout",
        element: <RentOutPage />,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfilePage />,
      },
    ],
  },
]);

export { router };
