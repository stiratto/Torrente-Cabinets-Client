import { Navigate } from "react-router-dom";

import { useUserContext } from "@/context/userContext";

const PrivateDealerRoute = ({ children }: any) => {
  const { user } = useUserContext()
  return user?.role === "DEALER" ? <Navigate to={"/not-found"} /> : children;
};

export default PrivateDealerRoute;
