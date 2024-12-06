import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages";
import Venues from "../pages/Venues";
import { MainLayout } from "../layouts";
import { Venue } from "../pages";
import RegisterTemplate from "../components/templates/Register";

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
        path: "/profile",
        element: <RegisterTemplate />,
      },
    ],
  },
]);

export { router };
