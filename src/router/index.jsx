import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages";
import Venues from "../pages/Venues";
import { MainLayout } from "../layouts";
import { Venue } from "../pages";

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
    ],
  },
]);

export { router };
