import { ScrollRestoration } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Layout</h1>
      {children}
      <ScrollRestoration/>
  
    </div>
  );
};