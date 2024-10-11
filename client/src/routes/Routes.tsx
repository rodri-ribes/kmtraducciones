import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../layout/Layout";
import { LandingPage } from "../pages";

export const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "*",
          element: <LandingPage />
        },
      ]
    },
]);
