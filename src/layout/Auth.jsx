import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <Outlet />
    </div>
  );
};

export default Auth;
