import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/taskText.png";
import { MdManageHistory } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className=" flex  ">
      <Toaster />

      <div className="bg-gray-700 text-white max-w-[260px] h-screen w-full fixed max-md:hidden px-2">
        <div>
          <img className="w-full p-5" src={logo} alt="" />
        </div>

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
      {/* mob nav */}
      <div className="h-20 bg-ls-color fixed bottom-0 md:hidden w-full ">
        <div className="flex items-center border justify-evenly text-3xl mt-6">
          <div>
            <NavLink to={"/dashboard"} end>
              <CgProfile />
            </NavLink>
          </div>
          <div>
            <NavLink to={"/dashboard/create-task"}>
              <IoCreateSharp />
            </NavLink>
          </div>
          <div>
            <NavLink to={"/dashboard/manage-task"}>
              <MdManageHistory />
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink to={"/"}>
              <FaHome />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="md:pl-[265px] w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
