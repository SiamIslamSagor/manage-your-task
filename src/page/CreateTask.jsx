import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import useDataContext from "../hooks/useDataContext";
import useAxiosPublic from "../hooks/useAxios";

const CreateTask = () => {
  // state
  const [priority, setPriority] = useState("high");

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

  // handler
  const onSubmit = data => {
    const toastId = toast.loading("processing...");

    const allData = {
      ...data,
      priority,
      status: "todo",
      email: user?.email,
      name: user?.displayName,
    };
    console.log(allData);

    // send data in server side
    axiosPublic
      .post("/create-task", allData)
      .then(res => {
        if (res.data.insertedId) {
          reset();
          console.log("task post done");
          toast.success("task created successfully.", {
            id: toastId,
          });
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

  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <h1 className="text-4xl text-center font-bold">CreateTask</h1>
      <div className="mt-20 ">
        <Helmet>
          <title>Task Manager | SignUp</title>
        </Helmet>

        <Toaster></Toaster>

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

                    <div className="lg:flex w-full max-w-sm mob:-ml-6 max-sm:px-2  gap-1 ">
                      <div className="lg:w-1/2 max-w-md w-full lg:max-w-lg">
                        <label className="label">
                          <span className="label-text">Task Deadlines</span>
                        </label>
                        <input
                          type="text"
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
    </div>
  );
};

export default CreateTask;
