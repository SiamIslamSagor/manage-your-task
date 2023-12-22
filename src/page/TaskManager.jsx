import { Helmet } from "react-helmet-async";
import useDataContext from "../hooks/useDataContext";

const TaskManager = () => {
  const { user } = useDataContext();
  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <div className="flex items-center justify-center min-h-[75vh]">
        <Helmet>
          <title>P P P | Dashboard | My Profile</title>
        </Helmet>
        <div>
          <div className="my-10">
            <h1 className="text-4xl text-center font-bold">My Profile</h1>
          </div>
          <div>
            <div className="mb-24 flex flex-col items-center justify-center container mx-auto font-medium">
              <div className="mb-5">
                <img
                  className="w-36 h-36 rounded-full"
                  src={user?.photoURL && user?.photoURL}
                  alt={user?.displayName && user?.displayName}
                />
              </div>
              <p>Name: {user?.displayName}</p>
              <p>Email: {user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
