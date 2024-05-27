import { createBrowserRouter } from "react-router-dom";
import BaseLayout from './layouts/BaseLayout'

export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout/>,
    },
]);