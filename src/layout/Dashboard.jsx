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
        <div>
          <NavLink to={"/"}>Task Manager</NavLink>
        </div>
        <div>
          <NavLink to={"/"}>Create Task</NavLink>
        </div>
        <div>
          <NavLink to={"/"}>Manage Task</NavLink>
        </div>
        <div className="divider"></div>
      </div>
      <div className="md:pl-[265px] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
