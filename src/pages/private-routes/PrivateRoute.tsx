import { useUserContext } from "@/context/userContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const {user} = useUserContext()
  return user && user.role !== 'VISITOR' ? <Navigate to="/" /> : children;
};

export default PrivateRoute;
