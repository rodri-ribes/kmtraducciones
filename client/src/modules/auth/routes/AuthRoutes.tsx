import { CiLogin } from "react-icons/ci";
import { type RouteObject } from "react-router-dom";
import { Signin, Signup } from '../components';


export const AuthRoutes: RouteObject[] = [
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/signin",
    element: <Signin/>
  },
]

export const AuthLinks = [
  {
    title: "Inciar Sesión",
    path: "/signin",
    Icon: CiLogin,
  },
  {
    title: "Crear Cuenta",
    path: "/signup",
    Icon: CiLogin,
  }
]