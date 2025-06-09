import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet    />
      <Toaster />
  
      <ScrollRestoration/>
      <Footer />
    </>
  );
};
