import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Pages/Layout";
import Statistics from "./Pages/Statistics/Statistics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default router;
