import { useState } from "react";
import textLogo from "../assets/taskText.png";
import { Squash as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const lgRoutes = (
    <>
      <div className="nav-div lg:text-xl xl:text-2xl 2xl:text-3xl lg:mx-3 xl:mx-5 2xl:mx-8 font-medium">
        <NavLink className="text-ds-color" to={"/"}>
          Home
        </NavLink>
      </div>

      <div className="nav-div lg:text-xl xl:text-2xl 2xl:text-3xl lg:mx-3 xl:mx-5 2xl:mx-8 font-medium">
        <NavLink className="text-ds-color" to={"/sadf"}>
          Add Task
        </NavLink>
      </div>

      <div className="nav-div lg:text-xl xl:text-2xl 2xl:text-3xl lg:mx-3 xl:mx-5 2xl:mx-8 font-medium">
        <NavLink className="text-ds-color" to={"/dfg"}>
          Manage Task
        </NavLink>
      </div>

      <div className="nav-div lg:text-xl xl:text-2xl 2xl:text-3xl lg:mx-3 xl:mx-5 2xl:mx-8 font-medium">
        <NavLink className="text-ds-color" to={"/dfg"}>
          Dashboard
        </NavLink>
      </div>

      <div className="nav-div lg:text-xl xl:text-2xl 2xl:text-3xl lg:mx-3 xl:mx-5 2xl:mx-8 font-medium">
        <NavLink className="text-ds-color" to={"/dfg"}>
          Login
        </NavLink>
      </div>
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
          to={"/sjdkl"}
        >
          Add Task
        </NavLink>
      </div>

      <div className="nav-div flex item-center justify-center border p-5 my-2">
        <NavLink
          className="text-ds-color text-4xl text-center font-bold"
          to={"/sjdkl"}
        >
          Manage Task
        </NavLink>
      </div>

      <div className="nav-div flex item-center justify-center border p-5 my-2">
        <NavLink
          className="text-ds-color text-4xl text-center font-bold"
          to={"/sjdkl"}
        >
          Dashboard
        </NavLink>
      </div>

      <div className="nav-div flex item-center justify-center border p-5 my-2">
        <NavLink
          className="text-ds-color text-4xl text-center font-bold"
          to={"/sjdkl"}
        >
          Login
        </NavLink>
      </div>
    </>
  );

  return (
    <div className=" ">
      <div className="max-h-14 ">
        <nav className="relative z-10">
          <div className="navbar bg-ls-color">
            {/* logo */}
            <div className="flex-1">
              <a href="/" className="cursor-pointer">
                <img className="w-36 lg:w-44 " src={textLogo} alt="" />
              </a>
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
