import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useDataContext from "../hooks/useDataContext";

const PrivetRoute = ({ children }) => {
  const { user, UserLoading } = useDataContext();
  const location = useLocation();

  if (UserLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center ">
        <div className="loader"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={{ from: location }} to="/auth/login"></Navigate>;
  }

  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
