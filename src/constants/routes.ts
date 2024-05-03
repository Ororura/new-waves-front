import { FC } from "react";
import Main from "../ui/pages/main/Main";
import LoginPage from "../ui/pages/login/LoginPage";

interface IRoutes {
  path: string;
  element: FC;
}

export const routes: IRoutes[] = [
  { path: "/", element: Main },
  { path: "/login", element: LoginPage },
];
