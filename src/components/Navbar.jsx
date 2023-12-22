import { useState } from "react";
import textLogo from "../assets/taskText.png";
import { Squash as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import useDataContext from "../hooks/useDataContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Navbar = () => {
  // state
  const [isOpen, setOpen] = useState(false);

  // context data
  const { user, logOut } = useDataContext();

  // handler

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be log out this account form this device!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out.",
    }).then(result => {
      if (result.isConfirmed) {
        // hit delete api in server side by specific id;
        // ////////////////
        const toastId = toast.loading("processing...");
        console.log("clicked");
        logOut()
          .then(() => {
            toast.success("Log out successfully.", { id: toastId });
          })
          .catch(() => {
            toast.error("Log out Failed.", { id: toastId });
          });
      }
    });
  };

  const lgRoutes = (
    <>
      <div className="nav-div lg:text-xl xl:text-2xl 2xl:text-3xl lg:mx-3 xl:mx-5 2xl:mx-8 font-medium">
        <NavLink className="text-ds-color" to={"/"}>
          Home
        </NavLink>
      </div>

      <div className="nav-div lg:text-xl xl:text-2xl 2xl:text-3xl lg:mx-3 xl:mx-5 2xl:mx-8 font-medium">
        <NavLink className="text-ds-color" to={"/dashboard/create-task"}>
          Add Task
        </NavLink>
      </div>

      <div className="nav-div lg:text-xl xl:text-2xl 2xl:text-3xl lg:mx-3 xl:mx-5 2xl:mx-8 font-medium">
        <NavLink className="text-ds-color" to={"/dashboard/manage-task"}>
          Manage Task
        </NavLink>
      </div>

      <div className="nav-div lg:text-xl xl:text-2xl 2xl:text-3xl lg:mx-3 xl:mx-5 2xl:mx-8 font-medium">
        <NavLink className="text-ds-color" to={"/dashboard/task-manager"}>
          Dashboard
        </NavLink>
      </div>

      {user ? (
        <div className="nav-div lg:text-xl xl:text-2xl 2xl:text-3xl lg:mx-3 xl:mx-5 2xl:mx-8 font-medium">
          <button
            onClick={handleLogOut}
            className="text-ds-color"
            to={"/auth/login"}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="nav-div lg:text-xl xl:text-2xl 2xl:text-3xl lg:mx-3 xl:mx-5 2xl:mx-8 font-medium">
          <NavLink className="text-ds-color" to={"/auth/login"}>
            Login
          </NavLink>
        </div>
      )}
    </>
  );

  const maxLgRoutes = (
    <>
      <div className="nav-div flex item-center justify-center border p-5 my-2">
        <NavLink
          className="text-ds-color text-4xl text-center font-bold"
          to={"/"}
        >
          Home
        </NavLink>
      </div>

      <div className="nav-div flex item-center justify-center border p-5 my-2">
        <NavLink
          className="text-ds-color text-4xl text-center font-bold"
          to={"/dashboard/create-task"}
        >
          Add Task
        </NavLink>
      </div>

      <div className="nav-div flex item-center justify-center border p-5 my-2">
        <NavLink
          className="text-ds-color text-4xl text-center font-bold"
          to={"/dashboard/manage-task"}
        >
          Manage Task
        </NavLink>
      </div>

      <div className="nav-div flex item-center justify-center border p-5 my-2">
        <NavLink
          className="text-ds-color text-4xl text-center font-bold"
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
      </div>

      {user ? (
        <div className="nav-div flex item-center justify-center border p-5 my-2">
          <button
            onClick={handleLogOut}
            className="text-ds-color text-4xl text-center font-bold"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="nav-div flex item-center justify-center border p-5 my-2">
          <NavLink
            className="text-ds-color text-4xl text-center font-bold"
            to={"/auth/login"}
          >
            Login
          </NavLink>
        </div>
      )}
    </>
  );

  return (
    <div className="fixed w-full z-[11] drop-shadow-lg shadow-xl">
      <div className="max-h-14 ">
        <nav className="relative z-10">
          <div className="navbar bg-ls-color">
            {/* logo */}
            <div className="flex-1">
              <a href="/" className="cursor-pointer">
                <img className="w-36 lg:w-44 " src={textLogo} alt="" />
              </a>
              {user && (
                <div className="w-16 mask mask-squircle">
                  <img className="" src={user?.photoURL} alt="" />
                </div>
              )}
            </div>

            {/* lg routes , thats show when display > lg */}
            <div className="max-lg:hidden">{lgRoutes}</div>

            {/* hamburger , thats hidden when screen is lg  */}
            <div className="lg:hidden">
              <div className="">
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* max-lg routes , thats show when display < lg */}
      <div
        className={`lg:hidden absolute w-full max-lg:flex flex-col duration-500 ease-in bg-slate-200 z-[9] ${
          isOpen ? "top-16" : "-top-[100vh]"
        } `}
      >
        {maxLgRoutes}
      </div>
    </div>
  );
};

export default Navbar;
