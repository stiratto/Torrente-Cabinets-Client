import { SheetHeader } from "./ui/sheet";
import {
  KeySquare,
  LockKeyhole,
  LogOut,
  PlusSquare,
  User2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const MobileDropdown = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
  });

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const token = localStorage.getItem("token");
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
  return (
    <div className="bg-white">
      <DropdownMenu>
        {userInfo ? (
          <SheetHeader>
            <DropdownMenuTrigger className=" flex justify-center group items-center font-medium gap-1">
              <User2 className="group-hover:-translate-y-1 duration-200" />
              Account
            </DropdownMenuTrigger>
          </SheetHeader>
        ) : (
          <SheetHeader>
            <DropdownMenuTrigger className=" flex justify-center items-center font-medium gap-1">
              <User2 />
              Register/Login
            </DropdownMenuTrigger>
          </SheetHeader>
        )}

        {/* Dropdown menu content */}

        <DropdownMenuContent className="w-full">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>

          <DropdownMenuSeparator />
          {/* If user info is true, greet the user with his name and role. */}
          {userInfo && (
            <DropdownMenuItem>
              {userInfo && `Hi, ${userInfo.name}, `}
              {userInfo && `right now you are a ${userInfo.role}`}
            </DropdownMenuItem>
          )}

          {/* If user role is admin, show the admin button to go to dealer requests. */}
          {userInfo?.role === "ADMIN" && (
            <DropdownMenuItem className="hover:cursor-pointer">
              <SheetHeader>
                <Link
                  to={"/torrentekcb/admin"}
                  className="flex items-center gap-2"
                >
                  <LockKeyhole size={15} />
                  Admin
                </Link>
              </SheetHeader>
            </DropdownMenuItem>
          )}

          {/* If user is logged in (userInfo is true), show the logout button */}

          {userInfo ? (
            <DropdownMenuItem className="hover:cursor-pointer">
              <Link
                to="/"
                onClick={logOut}
                className="flex items-center gap-2 "
              >
                <LogOut size={15} />
                Logout
              </Link>
            </DropdownMenuItem>
          ) : (
            // Else, show the auth buttons
            <div className="flex flex-col">
              <DropdownMenuItem className="hover:cursor-pointer">
                <Link
                  to={"/torrentekcb/register"}
                  className="flex items-center gap-2"
                >
                  <PlusSquare />
                  Register
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer">
                <Link
                  to={"/torrentekcb/login"}
                  className="flex items-center gap-2"
                >
                  <KeySquare />
                  Login
                </Link>
              </DropdownMenuItem>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileDropdown;
