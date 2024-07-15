import { createBrowserRouter } from "react-router-dom";
import BaseLayout from './layouts/BaseLayout'
import { AuthPage } from "@/pages/auth";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);