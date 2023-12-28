// Modal.js
import PropTypes from "prop-types";
import { IoCloseCircleSharp } from "react-icons/io5";
const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen ? "animate-zoom-in" : "animate-fade-out";

  if (!isOpen) {
    return null;
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center `}>
      <div className="bg-black opacity-50 fixed inset-0 "></div>
      <div className="bg-white p-4 rounded shadow-md z-10 animate-zoom-in border-8 border-red-700 relative">
        <span
          className="text-white hover:text-gray-300 font-bold cursor-pointer absolute -top-10 -right-8   text-4xl  "
          onClick={onClose}
        >
          <IoCloseCircleSharp />
        </span>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
