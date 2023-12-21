import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./page/Home";
import Dashboard from "./layout/Dashboard";
import TaskManager from "./page/TaskManager";
import ErrorPage from "./page/ErrorPage";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/task-manager",
        element: <TaskManager />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
