import { Navigate } from "react-router-dom";

import { useEffect, useState } from "react";

const PrivateAdminRoute = ({ children }: any) => {
  const token = localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "ADMIN",
  });

  useEffect(() => {
    const parseJwt = (token: any) => {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    };

    const user = parseJwt(token);
    setUserInfo(user);
  }, []);
  return userInfo.role === "ADMIN" ? children : <Navigate to={"/"} />;
};

export default PrivateAdminRoute;
