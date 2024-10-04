import { createBrowserRouter } from "react-router-dom";
// import { AuthRoutes, AuthLinks } from '../modules/auth'


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

// export const links = {
//   services: [
//     {
//       title: "Diseño Web",
//       path: "/services/web-design",
//       Icon: Icon.Rocket,
//     },
//     {
//       title: "Aplicaciòn Movil",
//       path: "/services/app-design",
//       Icon: Icon.Rocket,
//     },
//     {
//       title: "Mantenimiento",
//       path: "/services/maintenance",
//       Icon: Icon.Rocket,
//     },
//   ],
//   all: [
//     {
//       title: "Contacto",
//       path: "/contact",
//       Icon: Icon.Phone,
//     },
//     ...AuthLinks
//   ]
 
// }