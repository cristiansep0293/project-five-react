import Proptypes from "prop-types";
import { useContext } from "react";
import { UserNameContext } from "../../../context/UserNameContext";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { userNameTrainer } = useContext(UserNameContext);
  const location = useLocation();

  if (userNameTrainer) {
    return <>{children}</>;
  } else
    return (
      <Navigate to="/" state={{ from: location.pathname + location.search }} />
    );
};

ProtectedRoute.propTypes = {
  children: Proptypes.object.isRequired,
};

export default ProtectedRoute;
