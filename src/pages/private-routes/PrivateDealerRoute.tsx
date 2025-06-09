import { Navigate } from "react-router-dom";

import { useUserContext } from "@/context/userContext";
import { ReactNode } from "react";

const PrivateDealerRoute = ({ children }: {children: ReactNode}) => {
  const { user } = useUserContext()
  return (user && (user?.role === "DEALER" || "ADMIN")) ? children : <Navigate to={"/torrentekcb/becomeadealer"} />;
};

export default PrivateDealerRoute;
