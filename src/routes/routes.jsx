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
import PrivetRoute from "./PrivetRoute";
import UpdateTask from "../page/UpdateTask";
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
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: (
      <PrivetRoute>
        <Dashboard />
      </PrivetRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivetRoute>
            <TaskManager />
          </PrivetRoute>
        ),
      },
      {
        path: "create-task",
        element: (
          <PrivetRoute>
            <CreateTask />
          </PrivetRoute>
        ),
      },
      {
        path: "manage-task",
        element: (
          <PrivetRoute>
            <ManageTask />
          </PrivetRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivetRoute>
            <UpdateTask />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
