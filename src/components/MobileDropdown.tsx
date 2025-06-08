import { SheetHeader } from "./ui/sheet";
import {
  KeySquare,
  LockKeyhole,
  LogOut,
  PlusSquare,
  User2,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useUserContext } from "@/context/userContext";

const MobileDropdown = () => {
  const {user} = useUserContext()
  

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

   return (
    <div className="bg-white">
      <DropdownMenu>
        {user ? (
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
          {user && (
            <DropdownMenuItem>
              {user && `Hi, ${user.username}, `}
              {user && `right now you are a ${user.role}`}
            </DropdownMenuItem>
          )}

          {/* If user role is admin, show the admin button to go to dealer requests. */}
          {user?.role === "ADMIN" && (
            <DropdownMenuItem className="hover:cursor-pointer">
              <SheetHeader>
                <Link
                  reloadDocument
                  to={"/torrentekcb/admin"}
                  className="flex items-center gap-2"
                >
                  <LockKeyhole size={15} />
                  Admin
                </Link>
              </SheetHeader>
            </DropdownMenuItem>
          )}

          {/* If user is logged in (user is true), show the logout button */}

          {user ? (
            <DropdownMenuItem className="hover:cursor-pointer">
              <Link
                reloadDocument
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
                  reloadDocument
                  to={"/torrentekcb/register"}
                  className="flex items-center gap-2"
                >
                  <PlusSquare />
                  Register
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer">
                <Link
                  reloadDocument
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
