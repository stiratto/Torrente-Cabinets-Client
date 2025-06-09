import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { TestPage } from "./components/TestPage";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet    />
      <Toaster />
  
      <TestPage/>
      <ScrollRestoration/>
      <Footer />
    </>
  );
};
