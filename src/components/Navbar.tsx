"use client";

import { Link } from "react-router-dom";
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
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import CartDropdown from "./Products/CartDropdown";
import Dropdown from "./Dropdown";
import MobileDropdown from "./MobileDropdown";

export default function Navbar() {
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

  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
  });

  const token = localStorage.getItem("token");

  // Decodificar el token y acceder a la propiedad 'name'
  // Decodificar el token y acceder a la propiedad 'name'
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
    <nav className="sticky top-0 z-50   bg-white w-full border-b md:border-0 shadow-lg xl:px-32">
      <div className="flex  " aria-label="primary menu">
        <Sheet>
          <div className="flex items-center justify-between w-full  py-3 md:py-5 md:flex md:justify-between  ">
            <Link to="/" className="flex items-center gap-5 ">
              <img
                src="https://i0.wp.com/torrente15.files.wordpress.com/2023/11/adsadsasd.png?ssl=1"
                alt="torrente logo"
                className="h-10 lg :h-auto"
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
                    className="group flex   items-center gap-1   hover:text-yellow-500 active:scale-105 duration-200 transition-all "
                    key={idx}
                  >
                    {item.icon}
                    <Link to={item.path}>
                      <p className="text-md  tracking-wide font-medium uppercase">
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
                {userInfo?.role === "DEALER" ? (
                  ""
                ) : (
                  // If the user is not a dealer, show the button
                  <li className="list-none">
                    <Link
                      to="/torrentekcb/becomeadealer"
                      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-red-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                    >
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          className="w-5 h-5 text-yellow-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          className="w-5 h-5 text-yellow-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <Button className="relative w-full text-left text-red-500 transition-colors h-auto duration-200 ease-in-out bg-transparent group-hover:text-white hover:bg-transparent font-medium">
                        Become a dealer
                      </Button>
                    </Link>
                  </li>
                )}
                <CartDropdown />
              </ul>
            </div>
            {/* Mobile part */}
            {/* Mobile part */}
            {/* Mobile part */}
            {/* Mobile part */}
            {/* Mobile part */}
            {/* Mobile part */}
            {/* @ts-ignore */}
            <SheetContent className="flex flex-col items-start gap-5 font-medium overflow-y-auto">
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
                  {/* If user role is dealer, then dont show the become a dealer button, else, show the button */}
                  {userInfo?.role === "DEALER" ? (
                    ""
                  ) : (
                    <SheetHeader>
                      <Link
                        to="/torrentekcb/becomeadealer"
                        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-red-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                      >
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                          <svg
                            className="w-5 h-5 text-yellow-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                          <svg
                            className="w-5 h-5 text-yellow-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                        <Button className="relative w-full text-left text-red-500 transition-colors h-auto duration-200 ease-in-out bg-transparent group-hover:text-white hover:bg-transparent font-medium">
                          Become a dealer
                        </Button>
                      </Link>
                    </SheetHeader>
                  )}

                  {/* If user is logged (userInfo is true), then show the Account dropdown menu, else, show the auth dropdown menu */}
                </div>
              </div>
            </SheetContent>
          </div>
        </Sheet>
      </div>
    </nav>
  );
}
