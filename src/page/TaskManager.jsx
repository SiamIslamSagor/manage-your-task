import { Helmet } from "react-helmet-async";
import useDataContext from "../hooks/useDataContext";
import Modal from "../components/Modal";
import { useState } from "react";

const TaskManager = () => {
  const { user } = useDataContext();

  // ///////
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  /////////////
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
              {/* <button className="btn btn-sm btn-neutral mt-5">
                Edit Profile
              </button> */}
              <div className="p-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={openModal}
                >
                  Open Modal
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <div className="max-w-sm mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Modal Content</h2>
                    <p>This is the content of the modal.</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus, deleniti, labore tempora repellat quae illo
                      perspiciatis illum necessitatibus fugit temporibus nemo
                      qui, adipisci ex! Atque quis aliquam tempore eos
                      exercitationem.
                    </p>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
