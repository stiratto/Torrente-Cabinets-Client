import { Navigate } from "react-router-dom";

const user = localStorage.getItem("token");

const PrivateRoute = ({ children }: any) => {
  return user ? <Navigate to="/" /> : children;
};

export default PrivateRoute;
