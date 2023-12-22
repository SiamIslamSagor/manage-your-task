import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/taskText.png";

const Dashboard = () => {
  return (
    <div className=" flex  ">
      <Toaster />

      <div className="bg-gray-700 text-white max-w-[260px] h-screen w-full fixed max-md:hidden px-2">
        <div>
          <img className="w-full p-5" src={logo} alt="" />
        </div>

        {/* <ul>
          <li>
            <NavLink to={"/dashboard"}>Task Manager</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/create-task"}>Create Task</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/manage-task"}>Manage Task</NavLink>
          </li>
        </ul> */}

        <div className="route-div my-5 text-center">
          <NavLink to={"/dashboard"} end>
            Task Manager
          </NavLink>
        </div>
        <div className="route-div my-5 text-center">
          <NavLink to={"/dashboard/create-task"}>Create Task</NavLink>
        </div>
        <div className="route-div my-5 text-center">
          <NavLink to={"/dashboard/manage-task"}>Manage Task</NavLink>
        </div>

        <div className="divider before:bg-dp-color after:bg-dp-color">or</div>
        <div className="route-div my-5 text-center">
          <NavLink to={"/"}>Home</NavLink>
        </div>
      </div>
      <div className="md:pl-[265px] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
