import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
import router from "./routes/routes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <DndProvider backend={HTML5Backend}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </DndProvider>
    </HelmetProvider>
  </React.StrictMode>
);
