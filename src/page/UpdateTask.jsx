import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useDataContext from "../hooks/useDataContext";
import useAxiosPublic from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const UpdateTask = () => {
  const { id } = useParams();
  console.log(id);

  //   /////////
  // state
  const [priority, setPriority] = useState("high");
  const [status, setStatus] = useState("todo");
  const [oldTask, setOldTask] = useState({});

  // context data
  const { user } = useDataContext();
  const axiosPublic = useAxiosPublic();

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  //   effect
  useEffect(() => {
    axiosPublic
      .get(`/task/${id}`)
      .then(res => {
        console.log(res.data);
        setOldTask(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [axiosPublic, id]);

  // handler
  const onSubmit = data => {
    const toastId = toast.loading("processing...");

    const updatedData = {
      ...data,
      priority,
      status,
    };
    console.log(updatedData);

    // send data in server side
    axiosPublic
      .patch(`/task/update/${id}`, updatedData)
      .then(res => {
        console.log(res);
        if (res.data.modifiedCount) {
          reset();
          console.log("task update done");
          toast.success("task updated successfully.", {
            id: toastId,
          });
          navigate("/dashboard/manage-task");
        }
      })
      .catch(err => {
        console.log(err);
      });

    ///////////
  };

  const handleChangeSelect = e => {
    setPriority(e.target.value);
  };
  const handleChangeStatus = e => {
    setStatus(e.target.value);
  };
  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <h1 className="text-4xl text-center font-bold">UpdateTask</h1>
      <p>id is: {id}</p>
      <div className="container mx-auto">
        <div>
          <div className="max-w-lg mx-auto p-10">
            <div className="overflow-hidden">
              <div>
                <form
                  className="flex flex-col items-center justify-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="w-full max-w-md px-2 lg:max-w-lg">
                    <label className="label">
                      <span className="label-text">Task Title</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={oldTask?.title}
                      className="input input-bordered hover:input-info ease-in-out duration-500 focus:ring w-full max-w-sm lg:max-w-lg lg:text-base"
                      {...register("title", {
                        required: "Title is required *",
                      })}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.title && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.title?.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full max-w-md px-2 lg:max-w-lg">
                    <label className="label">
                      <span className="label-text">Task Description</span>
                    </label>
                    <textarea
                      type="text"
                      defaultValue={oldTask?.description}
                      placeholder="Write a task  description..."
                      className="textarea hover:textarea-info border border-gray-300 ease-in-out duration-500 focus:ring w-full max-w-sm lg:max-w-lg lg:text-base"
                      name="description"
                      {...register("description", {
                        required: "Description is required *",
                      })}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.description && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.description?.message}
                      </p>
                    )}
                  </div>

                  <div className="lg:flex w-full max-w-sm mob:-ml-8 max-sm:px-2  gap-1 ">
                    <div className="lg:w-1/2 max-w-md w-full lg:max-w-lg">
                      <label className="label">
                        <span className="label-text">Task Deadlines</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={oldTask?.deadlines}
                        placeholder="Ex: today 7.59 pm"
                        className="max-sm:max-w-sm input input-bordered hover:input-info ease-in-out duration-500 focus:ring w-full max-w-sm lg:max-w-lg lg:text-base"
                        {...register("deadlines", {
                          required: "deadlines is required *",
                        })}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.deadlines && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.deadlines?.message}
                        </p>
                      )}
                    </div>
                    <div className="lg:w-1/2 max-w-md w-full lg:max-w-lg">
                      <label className="label">
                        <span className="label-text">Task Priority</span>
                      </label>
                      <select
                        onChange={handleChangeSelect}
                        className="input input-bordered hover:input-info ease-in-out duration-500 focus:ring w-full max-w-sm lg:max-w-lg lg:ml-7 lg:text-base"
                      >
                        <option value="high">high</option>
                        <option value="medium">medium</option>
                        <option value="low">low</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full max-w-md px-2 lg:max-w-lg">
                    <label className="label">
                      <span className="label-text">Task Status</span>
                    </label>
                    <select
                      onChange={handleChangeStatus}
                      className="input input-bordered hover:input-info ease-in-out duration-500 focus:ring w-full max-w-sm lg:max-w-lg lg:text-base"
                    >
                      <option value="todo">todo</option>
                      <option value="ongoing">ongoing</option>
                      <option value="completed">completed</option>
                    </select>
                  </div>

                  <div className="my-8 w-full max-w-md lg:max-w-lg px-2 rounded-full">
                    <button className="btn btn-neutral w-full max-w-sm lg:max-w-lg  lg:text-base">
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
