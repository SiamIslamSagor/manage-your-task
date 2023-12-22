import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
import router from "./routes/routes";
import { DragDropContext } from "react-beautiful-dnd";

const onDragEnd = result => {
  // console.log(result);
  const { source, destination, draggableId } = result;
  if (!destination) {
    return;
  }
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }
  console.log(
    "this item",
    draggableId,
    "go too",
    destination.droppableId,
    "and prev location  is",
    source.droppableId
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <DragDropContext onDragEnd={onDragEnd}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </DragDropContext>
    </HelmetProvider>
  </React.StrictMode>
);
