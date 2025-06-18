import { Navigate } from "react-router-dom";

import { useUserContext } from "@/context/userContext";
import { ReactNode } from "react";

const PrivateDealerRoute = ({ children }: {children: ReactNode}) => {
  const { user } = useUserContext()
  return user?.role === "DEALER" || user?.role === "ADMIN" ? children : <Navigate to={"/torrentekcb/becomeadealer"} />;
};

export default PrivateDealerRoute;
