import { HiDotsVertical } from "react-icons/hi";
import useTask from "../hooks/useTask";
import { useState } from "react";

const ManageTask = () => {
  // state
  const [clickedTaskData, setClickedTaskData] = useState("");
  // hooks
  const { allTaskData } = useTask();
  console.log(allTaskData);

  // handler
  const handleDetails = id => {
    document.getElementById("my_modal_3").showModal();
    console.log(id);
    const clickedTask = allTaskData.find(task => task._id === id);
    setClickedTaskData(clickedTask);
    console.log(clickedTask);
  };

  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <h1 className="text-4xl text-center font-bold  mb-10">ManageTask</h1>
      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8 lg:gap-10 h-full w-full">
        <div className="max-w-xs border min-h-60 min-w-80 rounded-xl">
          <h3 className="mb-3 text-center bg-green-600 text-2xl font-medium text-white rounded-xl leading-10">
            To-Do
          </h3>
          {/* todo box */}
          <div className="mx-2">
            <ul>
              {allTaskData &&
                allTaskData?.map(task => (
                  <li
                    key={task._id}
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
                ))}
            </ul>
          </div>
        </div>
        <div className="max-w-xs border min-h-60 min-w-80 rounded-xl">
          <h3 className="mb-3 text-center bg-green-600 text-2xl font-medium text-white rounded-xl leading-10">
            Ongoing
          </h3>
          {/* ongoing box */}
          <div className="mx-2">
            <ul>
              {allTaskData &&
                allTaskData?.map(task => (
                  <li
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
                ))}
            </ul>
          </div>
        </div>
        <div className="max-w-xs border min-h-60 min-w-80 rounded-xl">
          <h3 className="mb-3 text-center bg-green-600 text-2xl font-medium text-white rounded-xl leading-10">
            Completed
          </h3>
          {/* completed box */}
          <div className="mx-2">
            <ul>
              {allTaskData &&
                allTaskData?.map(task => (
                  <li
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
                ))}
            </ul>
          </div>
        </div>
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
          <div className="flex justify-end gap-5">
            <button className="btn btn-sm btn-neutral px-5">Update</button>
            <button className="btn btn-sm btn-warning px-5">Delete</button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ManageTask;
