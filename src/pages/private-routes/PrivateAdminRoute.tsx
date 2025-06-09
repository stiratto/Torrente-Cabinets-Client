import { Navigate } from "react-router-dom";
import { useUserContext } from "@/context/userContext";

const PrivateAdminRoute = ({ children }: any) => {
  const {user} = useUserContext()

  return user && user.role === "ADMIN" ? children : <Navigate to={"/"} />;
};

export default PrivateAdminRoute;
