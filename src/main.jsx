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
import CreateTask from "./page/CreateTask";
import ManageTask from "./page/ManageTask";
import Auth from "./layout/Auth";
import Login from "./page/Login";
import Register from "./page/Register";

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
    path: "/auth",
    errorElement: <ErrorPage />,
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
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
      {
        path: "/dashboard/create-task",
        element: <CreateTask />,
      },
      {
        path: "/dashboard/manage-task",
        element: <ManageTask />,
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
