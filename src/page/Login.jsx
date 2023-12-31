import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { IoMdEyeOff } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa6";
import useDataContext from "../hooks/useDataContext";

const Login = () => {
  // state
  const [isPasswordType, setIsPasswordType] = useState(true);

  // context data
  const { logIn, googleLogin } = useDataContext();

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

    const { email, password } = data;
    console.log(data);
    console.log(email, password);
    logIn(email, password)
      .then(res => {
        console.log(res);
        reset();
        toast.success("Log In successfully.", { id: toastId });
        navigate("/dashboard");
      })
      .catch(() => {
        toast.error("Failed to login.", { id: toastId });
      });
  };

  const handleGoogleLogin = () => {
    const toastId = toast.loading("processing...");

    googleLogin()
      .then(() => {
        console.log("google login successfully in login page.");

        //  post user data to database

        toast.success("Log In successfully.", { id: toastId });
        navigate("/dashboard");
      })
      .catch(() => {
        toast.error("Failed to login.", { id: toastId });
      });
  };

  return (
    <div className="mt-20 ">
      <Helmet>
        <title>Task Manager | Log In</title>
      </Helmet>

      <Toaster></Toaster>
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl inline-block border-l-8 border-dp-color text-ds-color px-2 font-bold ">
            {" "}
            Log In
          </h1>
        </div>
        <div className="max-w-lg mx-auto p-10">
          <div className="overflow-hidden">
            <div>
              <form
                className="flex flex-col items-center justify-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/*  */}
                {/*  */}

                <div className="w-full max-w-sm">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>

                  <input
                    type="email"
                    className="input input-bordered hover:input-info ease-in-out duration-500 focus:ring  w-full max-w-sm"
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
                    <span className="label-text">Your Password</span>
                  </label>

                  <div className="relative">
                    <input
                      type={isPasswordType ? "password" : "text"}
                      className="input input-bordered hover:input-info ease-in-out duration-500 focus:ring  w-full max-w-sm pr-10"
                      {...register("password", {
                        required: "Password is required *",
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
                  {errors.password && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.password?.message}
                    </p>
                  )}
                </div>

                <div className="my-8 w-full max-w-sm rounded-full">
                  <button className="btn btn-neutral w-full">Log In</button>
                </div>
              </form>
              <div className="divider max-w-sm mx-auto">or</div>
              <div className="max-w-sm mx-auto text-center">
                <button
                  onClick={handleGoogleLogin}
                  className="btn rounded-full w-full md:text-base"
                >
                  continue with google <FaGoogle></FaGoogle>
                </button>
              </div>
              <p className="text-center mt-4">
                New Here?{" "}
                <span className="text-blue-700 font-medium">
                  <Link to="/auth/register">Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
