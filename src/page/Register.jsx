import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import useDataContext from "../hooks/useDataContext";

const Register = () => {
  // state
  const [isPasswordType, setIsPasswordType] = useState(true);

  // context data
  const { createUser, googleLogin, updateUserData, setLoading, loading } =
    useDataContext();

  // hooks
  const navigate = useNavigate();

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handler
  const onSubmit = data => {
    console.log(data);

    const toastId = toast.loading("processing...");

    const { name, email, photoUrl, password } = data;
    console.log(Object.keys(data).join(","));
    ///////////

    createUser(email, password)
      .then(res => {
        console.log(res.user);
        updateUserData(name, photoUrl)
          .then(() => {
            // post user data to database
            console.log("profile updated");
            reset();
            setLoading(!loading);
            navigate("/auth/login");
          })
          .catch(() => {
            toast.error("Failed to create account.", { id: toastId });
          });
        toast.success("Account created successfully.", {
          id: toastId,
        });
      })
      .catch(() => {
        toast.error("Failed to create account.", { id: toastId });
      });
  };

  const handleGoogleLogin = () => {
    const toastId = toast.loading("processing...");

    googleLogin()
      .then(res => {
        const userData = {
          email: res?.user?.email,
          name: res?.user?.displayName,
        };

        console.log("login done, now send this data to backend", userData);

        toast.success("Log In successfully.", { id: toastId });
        navigate("/auth/login");
      })
      .catch(() => {
        toast.error("Failed to login.", { id: toastId });
      });
  };

  return (
    <div className="flex flex-col item-center justify-center border p-5">
      <div className="mt-20 ">
        <Helmet>
          <title>Task Manager | SignUp</title>
        </Helmet>

        <Toaster></Toaster>

        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl inline-block border-l-8 border-dp-color text-ds-color px-2 font-bold ">
              {" "}
              Sign Up
            </h1>
          </div>
          <div>
            <div className="max-w-lg mx-auto p-10">
              <div className="overflow-hidden">
                <div>
                  <form
                    className="flex flex-col items-center justify-center"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">Your Name</span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered hover:input-info ease-in-out duration-500 focus:ring w-full max-w-sm"
                        {...register("name", {
                          required: "Name is required *",
                        })}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.name?.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">Your Email</span>
                      </label>

                      <input
                        type="email"
                        className="input input-bordered hover:input-info ease-in-out duration-500 focus:ring w-full max-w-sm"
                        {...register("email", {
                          required: "Email Address is required *",
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.email?.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">Your Photo URL</span>
                      </label>

                      <input
                        type="url"
                        className="input input-bordered hover:input-info ease-in-out duration-500 focus:ring w-full max-w-sm"
                        {...register("photoUrl", {
                          required: "Photo URL is required *",
                        })}
                        aria-invalid={errors.photoUrl ? "true" : "false"}
                      />
                      {errors.photoUrl && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.photoUrl?.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full max-w-sm">
                      <label className="label">
                        <span className="label-text">Your Password</span>
                      </label>

                      <div className="relative">
                        <input
                          type={isPasswordType ? "password" : "text"}
                          className="input input-bordered hover:input-info ease-in-out duration-500 focus:ring w-full max-w-sm pr-10"
                          {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 32,
                            pattern:
                              /(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])(?=.*[a-z])/,
                          })}
                          aria-invalid={errors.password ? "true" : "false"}
                        />
                        {isPasswordType ? (
                          <IoMdEyeOff
                            onClick={() => setIsPasswordType(!isPasswordType)}
                            className="cursor-pointer text-2xl absolute top-[12px] right-2"
                          ></IoMdEyeOff>
                        ) : (
                          <IoEyeSharp
                            onClick={() => setIsPasswordType(!isPasswordType)}
                            className="cursor-pointer text-2xl absolute top-[12px] right-2"
                          ></IoEyeSharp>
                        )}
                      </div>
                      {errors.password?.type === "required" && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.password && (
                            <p className="text-sm text-red-600 mt-1">
                              Password is required *
                            </p>
                          )}
                        </p>
                      )}
                      {errors.password?.type === "minLength" && (
                        <p className="text-sm text-red-600 mt-1">
                          Password must be 6 characters *
                        </p>
                      )}
                      {errors.password?.type === "maxLength" && (
                        <p className="text-sm text-red-600 mt-1">
                          Password must be 20 characters *
                        </p>
                      )}
                      {errors?.password?.type === "pattern" && (
                        <p className="text-sm text-red-600 mt-1">
                          password at least 6 char long & at most 32 char long.
                          spacial char, digit, uppercase, lowercase required *
                        </p>
                      )}
                    </div>

                    <div className="my-8 w-full max-w-sm rounded-full">
                      <button className="btn btn-neutral w-full">
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <div className="divider max-w-sm mx-auto">or</div>
                  <div className="max-w-sm mx-auto text-center">
                    <button
                      onClick={handleGoogleLogin}
                      className="btn rounded-full w-full md:text-base"
                    >
                      Sign up with google <FaGoogle></FaGoogle>
                    </button>
                  </div>
                  <p className="text-center mt-4">
                    Already Have an account?{" "}
                    <span className="text-blue-700 font-medium">
                      <Link to="/auth/login">Login</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
