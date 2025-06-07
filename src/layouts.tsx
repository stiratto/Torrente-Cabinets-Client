import { ScrollRestoration } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Layout</h1>
      <Toaster/>
      {children}
      <ScrollRestoration/>
  
    </div>
  );
};
