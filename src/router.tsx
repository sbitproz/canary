import { Layout } from "@/domains/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { Swap } from "./domains/Swap/Swap";
import { ErrorBoundary } from "./common/components/ErrorBoundary/ErrorBoundary";

const ROUTE_CONFIG = {
  USER_LIST: {
    route: "/",
    title: "Swap",
  },
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTE_CONFIG.USER_LIST.route,
        element: <Swap />,
      },
    ],
    errorElement: <ErrorBoundary label="Something went wrong..." />,
  },
]);
