import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <Toaster />
      <h1 className="text-4xl text-center font-bold">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
