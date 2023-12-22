import { HiDotsVertical } from "react-icons/hi";

const ManageTask = () => {
  const demoData = [
    {
      deadlines: "5pm",
      description: "Code doing",
      email: "mama@mami.com",
      name: "mama",
      priority: "high",
      status: "todo",
      title: "Code",
    },
    {
      deadlines: "6pm",
      description: "Bug fixing",
      email: "papa@mami.com",
      name: "papa",
      priority: "medium",
      status: "ongoing",
      title: "Bug Fixing",
    },
    {
      deadlines: "3pm",
      description: "UI design",
      email: "sister@mami.com",
      name: "sister",
      priority: "low",
      status: "completed",
      title: "UI Design",
    },
    {
      deadlines: "4pm",
      description: "Database optimization",
      email: "brother@mami.com",
      name: "brother",
      priority: "high",
      status: "todo",
      title: "DB Optimization",
    },
    {
      deadlines: "2pm",
      description: "Testing",
      email: "friend@mami.com",
      name: "friend",
      priority: "medium",
      status: "ongoing",
      title: "Testing",
    },
    {
      deadlines: "1pm",
      description: "Documentation",
      email: "colleague@mami.com",
      name: "colleague",
      priority: "low",
      status: "completed",
      title: "Documentation",
    },
    {
      deadlines: "7pm",
      description: "Feature development",
      email: "manager@mami.com",
      name: "manager",
      priority: "high",
      status: "todo",
      title: "Feature Development",
    },
    {
      deadlines: "12pm",
      description: "Code review",
      email: "senior@mami.com",
      name: "senior",
      priority: "medium",
      status: "ongoing",
      title: "Code Review",
    },
    {
      deadlines: "10am",
      description: "Meeting with clients",
      email: "client@mami.com",
      name: "client",
      priority: "low",
      status: "completed",
      title: "Client Meeting",
    },
    {
      deadlines: "8pm",
      description: "Deployment",
      email: "devops@mami.com",
      name: "devops",
      priority: "high",
      status: "todo",
      title: "Deployment",
    },
  ];

  return (
    <div className="flex flex-col item-center justify-center border p-5 my-10">
      <h1 className="text-4xl text-center font-bold  mb-10">ManageTask</h1>
      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8 lg:gap-10 h-full w-full">
        <div className="max-w-xs border min-h-60 min-w-80 rounded-xl">
          <h3 className="mb-3 text-center bg-green-600 text-2xl font-medium text-white rounded-xl leading-10">
            To-Do
          </h3>
          <div className="mx-2">
            <ul>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-xs border min-h-60 min-w-80 rounded-xl">
          <h3 className="mb-3 text-center bg-green-600 text-2xl font-medium text-white rounded-xl leading-10">
            Ongoing
          </h3>
          <div className="mx-2">
            <ul>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-xs border min-h-60 min-w-80 rounded-xl">
          <h3 className="mb-3 text-center bg-green-600 text-2xl font-medium text-white rounded-xl leading-10">
            Completed
          </h3>
          <div className="mx-2">
            <ul>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
              <li className="flex items-center justify-between bg-gray-800 my-1 p-3 rounded-2xl text-white font-medium">
                Lorem dolor sit okey Lorem ipsum dolor, sit amet consectetur
                adipisicing..
                <span>
                  <HiDotsVertical />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTask;
