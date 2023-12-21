import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Dashboard from "../layout/Dashboard";
import TaskManager from "../page/TaskManager";
import ErrorPage from "../page/ErrorPage";
import CreateTask from "../page/CreateTask";
import ManageTask from "../page/ManageTask";
import Login from "../page/Login";
import Register from "../page/Register";
import Auth from "../layout/Auth";
import Main from "../layout/Main";
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

export default router;
