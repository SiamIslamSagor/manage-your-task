// Modal.js
import PropTypes from "prop-types";
const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen ? "animate-zoom-in" : "animate-fade-out";

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${modalClasses}`}
    >
      <div className="bg-black opacity-50 fixed inset-0"></div>
      <div className="bg-white p-4 rounded shadow-md z-10">
        <span
          className="text-gray-500 cursor-pointer absolute top-2 right-2 text-xl"
          onClick={onClose}
        >
          &times;
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
