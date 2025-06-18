"use client";

import { NavLink as Link } from "react-router-dom";
import {
  Menu,
  ShoppingCart,
  Home,
  Component,
  Users,
  Phone,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartDropdown from "./Products/CartDropdown";
import Dropdown from "./Dropdown";
import MobileDropdown from "./MobileDropdown";
import { useUserContext } from "@/context/userContext";
import { BCAButton } from "./BCAButton";

export default function Navbar() {
  const { user } = useUserContext()
  const menus = [
    {
      title: "Home",
      path: "/",
      icon: <Home size={15} />,
    },
    {
      title: "Designs",
      path: "/torrentekcb/designs",
      icon: <Component size={15} />,
    },
    {
      title: "About Us",
      path: "/torrentekcb/about",
      icon: <Users size={15} />,
    },
    {
      title: "Contact Us",
      path: "/torrentekcb/contact",
      icon: <Phone size={15} />,
    },
    {
      title: "Shop",
      path: "/torrentekcb/shop",
      icon: <ShoppingCart size={15} />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50   bg-white w-full border-b-2 border-black/20 shadow-lg xl:px-32 ">

      <div className="flex  " aria-label="primary menu">
        <Sheet>
          <div className="flex items-center justify-between w-full  py-3 md:py-5 md:flex md:justify-between  ">
            <Link to="/" className="flex items-center gap-5 p-2">
              <img
                src="https://torrente-cabinets-aws.s3.us-east-2.amazonaws.com/ChatGPT+Image+Jun+16%2C+2025%2C+01_49_56+PM+(1).png"
                alt="torrente logo"
                className="w-48 h-10 object-contain"
              />
              <p className="text-2xl font-extrabold tracking-tight lg:text-4xl xl:5xl animate-in bg-gradient-to-r from-red-500 to-amber-300 bg-clip-text text-transparent"></p>
            </Link>
            <div className="lg:hidden">
              <SheetTrigger className="border border-transparent text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border">
                <Menu />
              </SheetTrigger>
            </div>
          </div>

          <div className="pb-3 lg:flex md:pb-0 transition-all duration-300  ">
            {/* Desktop part */}
            {/* Desktop part */}
            {/* Desktop part */}
            {/* Desktop part */}
            {/* Desktop part */}
            <div className="hidden lg:flex items-center">
              <ul className="flex w-max items-center gap-4 ">
                {menus.map((item, idx) => (
                  <li
                    className="group flex items-center gap-1   hover:text-yellow-500 active:scale-105 duration-200 transition-all"
                    key={idx}
                  >
                    {item.icon}
                    <Link to={item.path}>
                      <p className="text-lg  tracking-wide uppercase font-medium">
                        {item.title}
                      </p>
                    </Link>
                  </li>
                ))}

                {/* Register */}

                <div className="flex  items-center gap-4">
                  {/* Navbar BCA Button */}
                  {/* If user role is dealer, dont show the become a dealer button */}
                  <Dropdown />
                </div>
                {user?.role === "DEALER" ? (
                  ""
                ) : (
                  // If the user is not a dealer, show the button
                  <li className="list-none">
                    <BCAButton />
                  </li>
                )}
                <CartDropdown />
              </ul>
            </div>
            {/* Mobile part */}
            {/* Mobile part */}
            {/* Mobile part */}
            <SheetContent className="flex flex-col items-start gap-5 font-medium overflow-y-auto" side={"bottom"}>
              {menus.map((item, idx) => (
                <SheetHeader
                  key={idx}
                  className=" active:text-yellow-500 duration-200"
                >
                  <Link to={item.path} className="flex items-center gap-3">
                    {item.icon}
                    {item.title}
                  </Link>
                </SheetHeader>
              ))}
              <MobileDropdown />
              <CartDropdown />

              <div className="">
                <div className="flex flex-col items-start gap-4">
                  {user?.role === "DEALER" ? (
                    ""
                  ) : (
                    <SheetHeader>
                      <BCAButton />
                    </SheetHeader>
                  )}

                </div>
              </div>
            </SheetContent>
            <SheetDescription></SheetDescription>
          </div>
        </Sheet>
      </div>
    </nav>
  );
}
