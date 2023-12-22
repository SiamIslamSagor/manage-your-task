import { HiDotsVertical } from "react-icons/hi";
import useTask from "../hooks/useTask";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxios";
import toast from "react-hot-toast";
import { Draggable, Droppable } from "react-beautiful-dnd";

const ManageTask = () => {
  // state
  const [clickedTaskData, setClickedTaskData] = useState("");

  // hooks
  const axiosPublic = useAxiosPublic();

  const { allTaskData, refetch } = useTask();
  console.log(allTaskData);

  // handler
  const handleDetails = id => {
    document.getElementById("my_modal_3").showModal();
    console.log(id);
    const clickedTask = allTaskData.find(task => task._id === id);
    setClickedTaskData(clickedTask);
    console.log(clickedTask);
  };

  const handleDeleteTask = id => {
    const toastId = toast.loading("processing...");

    console.log(id);
    // delete task from database
    axiosPublic
      .delete(`/task/delete/${id}`)
      .then(res => {
        console.log(res);
        refetch();
        toast.success("task deleted successfully.", {
          id: toastId,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // handler

  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <h1 className="text-4xl text-center font-bold  mb-10">ManageTask</h1>
      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8 lg:gap-10 h-full w-full">
        <Droppable droppableId="todoList">
          {provided => (
            <div
              ref={provided?.innerRef}
              {...provided?.droppableProps}
              className="max-w-xs border min-h-60 min-w-80 rounded-xl"
            >
              <h3 className="mb-3 text-center bg-green-600 text-2xl font-medium text-white rounded-xl leading-10">
                To-Do
              </h3>
              {/* todo box */}
              <div className="mx-2">
                <ul>
                  {allTaskData &&
                    allTaskData?.map((task, index) => (
                      <Draggable
                        draggableId={task?._id}
                        index={index}
                        key={task._id}
                      >
                        {provided => (
                          <li
                            {...provided?.draggableProps}
                            {...provided?.dragHandleProps}
                            ref={provided?.innerRef}
                            className={`${
                              task.status === "todo" ? "flex" : "hidden"
                            } flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium`}
                          >
                            {task.title}
                            <span>
                              <HiDotsVertical
                                onClick={() => handleDetails(task._id)}
                                className="btn btn-xs cursor-pointer btn-ghost btn-circle"
                              />
                            </span>
                          </li>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </ul>
              </div>
            </div>
          )}
        </Droppable>

        <Droppable droppableId="ongoingList">
          {provided => (
            <div
              ref={provided?.innerRef}
              {...provided?.droppableProps}
              className="max-w-xs border min-h-60 min-w-80 rounded-xl"
            >
              <h3 className="mb-3 text-center bg-green-600 text-2xl font-medium text-white rounded-xl leading-10">
                Ongoing
              </h3>
              {/* ongoing box */}
              <div className="mx-2">
                <ul>
                  {allTaskData &&
                    allTaskData?.map((task, index) => (
                      <Draggable
                        draggableId={task?._id}
                        index={index}
                        key={task?._id}
                      >
                        {provided => (
                          <li
                            {...provided?.draggableProps}
                            {...provided?.dragHandleProps}
                            ref={provided?.innerRef}
                            key={task._id}
                            className={`${
                              task.status === "ongoing" ? "flex" : "hidden"
                            } flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium`}
                          >
                            {task.title}
                            <span>
                              <HiDotsVertical
                                onClick={() => handleDetails(task._id)}
                                className="btn btn-xs cursor-pointer btn-ghost btn-circle"
                              />
                            </span>
                          </li>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </ul>
              </div>
            </div>
          )}
        </Droppable>

        <Droppable droppableId="completedList">
          {provided => (
            <div
              ref={provided?.innerRef}
              {...provided?.droppableProps}
              className="max-w-xs border min-h-60 min-w-80 rounded-xl"
            >
              <h3 className="mb-3 text-center bg-green-600 text-2xl font-medium text-white rounded-xl leading-10">
                Completed
              </h3>
              {/* completed box */}
              <div className="mx-2">
                <ul>
                  {allTaskData &&
                    allTaskData?.map((task, index) => (
                      <Draggable
                        draggableId={task?._id}
                        index={index}
                        key={task?._id}
                      >
                        {provided => (
                          <li
                            {...provided?.draggableProps}
                            {...provided?.dragHandleProps}
                            ref={provided?.innerRef}
                            key={task._id}
                            className={`${
                              task.status === "completed" ? "flex" : "hidden"
                            } flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium`}
                          >
                            {task.title}
                            <span>
                              <HiDotsVertical
                                onClick={() => handleDetails(task._id)}
                                className="btn btn-xs cursor-pointer btn-ghost btn-circle"
                              />
                            </span>
                          </li>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </ul>
              </div>
            </div>
          )}
        </Droppable>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Title: {clickedTaskData?.title}</h3>
          <p className="py-2">Description: {clickedTaskData?.description}</p>
          <p className="py-1">Deadline : {clickedTaskData?.deadlines}</p>
          <p className="py-1">Status : {clickedTaskData?.status}</p>
          <p>_id is : {clickedTaskData?._id}</p>
          <div className="flex justify-end gap-5 mt-5">
            <Link to={`/dashboard/update/${clickedTaskData?._id}`}>
              <button className="btn btn-sm btn-neutral px-5">Update</button>
            </Link>

            <button
              onClick={() => handleDeleteTask(clickedTaskData?._id)}
              className="btn btn-sm btn-warning px-5"
            >
              Delete
            </button>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              type="submit"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageTask;
