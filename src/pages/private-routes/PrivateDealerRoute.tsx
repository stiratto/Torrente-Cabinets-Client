import { Navigate } from "react-router-dom";

import { useEffect, useState } from "react";

const PrivateDealerRoute = ({ children }: any) => {
  const token = localStorage.getItem("token");
  const [userInfo, setUserInfo] = useState({
    role: "",
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
    console.log(userInfo)
  }, []);
  
  return userInfo?.role === "DEALER" ? <Navigate to={"/not-found"} /> : children  ;
};

export default PrivateDealerRoute;
