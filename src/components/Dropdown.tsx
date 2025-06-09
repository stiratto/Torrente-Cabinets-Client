import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserContext } from "@/context/userContext";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { KeyRound, KeySquare, LockKeyhole, LogOut, User2 } from "lucide-react";
import { NavLink as Link } from "react-router-dom";

const Dropdown = () => {
  const {user} = useUserContext()

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };


  return (
    <DropdownMenu>
      {/* If user logged in (user is true), show the Account dropdown menu */}
      {user ? (
        <DropdownMenuTrigger className=" flex justify-center group items-center font-medium gap-2">
          <img
            src="https://torrente15.files.wordpress.com/2023/11/descarga-1.png"
            className="w-8 h-8 rounded-full p-0 m-0 !focusp:outline-none"
          ></img>
          {user.username}
        </DropdownMenuTrigger>
      ) : (
        // Else, show the auth dropdown menu
        <DropdownMenuTrigger className=" flex justify-center items-center font-medium gap-1 hover:text-yellow-500 duration-200">
          <User2 size={20} />
          Register/Login
        </DropdownMenuTrigger>
      )}

      <DropdownMenuContent className="w-full focus:">
        {/* If user is logged in show the my account text label */}
        {user ? (
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
        ) : (
          // Else, show the authorization text label
          <DropdownMenuLabel>Authorization</DropdownMenuLabel>
        )}
        <DropdownMenuSeparator />
        {/* If user is logged in, greet the user with his name and role */}
        {user && (
          <DropdownMenuItem className="text-md gap-1">
            {user && (
              <p className="">
                Hi, {user.username}, you are an {user.role}
              </p>
            )}
          </DropdownMenuItem>
        )}

        {user?.role === "ADMIN" ? (
          // If user role is admin, show the admin private button
          <Link to={"/torrentekcb/admin"}>
            <DropdownMenuGroup className="hover:cursor-pointer">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex flex-row items-center gap-2">
                  <LockKeyhole size={15} />
                  Admin
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="p-3">
                    <Link to={"/torrentekcb/admin/dealerRequests"}>
                      <DropdownMenuItem className="hover:cursor-pointer">
                        Dealer Requests
                      </DropdownMenuItem>
                    </Link>
                    <Link
                      
                      to={"/torrentekcb/admin/registeredUsers"}
                      className="hover:cursor-pointer"
                    >
                      <DropdownMenuItem className="hover:cursor-pointer">
                        Registered Users
                      </DropdownMenuItem>
                    </Link>
                    <Link
                      
                      to={"/torrentekcb/admin/shop/addproduct"}
                      className="hover:cursor-pointer"
                    >
                      <DropdownMenuItem className="hover:cursor-pointer">
                        Add a product
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
          </Link>
        ) : (
          // Else, show nothing.
          ""
        )}

        {user ? (
          // If user is logged in, show the logout button
          <Link to="/" onClick={logOut}>
            <DropdownMenuItem className="hover:cursor-pointer flex items-center gap-2 ">
              <LogOut size={15} />
              Logout
            </DropdownMenuItem>
          </Link>
        ) : (
          // Else, show the authorization buttons
          <div className="flex flex-col">
            <Link  to={"/torrentekcb/register"}>
              <DropdownMenuItem className="flex items-center gap-2 hover:cursor-pointer">
                <KeyRound />
                Register
              </DropdownMenuItem>
            </Link>
            <Link  to={"/torrentekcb/login"}>
              <DropdownMenuItem className="flex items-center gap-2 hover:cursor-pointer">
                <KeySquare />
                Login
              </DropdownMenuItem>
            </Link>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
