import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Navbar from "./components/Navbar.tsx";
import Designs from "./pages/Designs.tsx";
import Contact from "./pages/Contact.tsx";
import MyAccount from "./pages/MyAccount.tsx";
import Shop from "./pages/Shop.tsx";
import BCA from "./pages/BCA.tsx";
import Footer from "./components/Footer.tsx";
import PageNotFound from "./components/PageNotFound.tsx";
import Register from "./pages/auth/Register.tsx";
import Login from "./pages/auth/Login.tsx";
import PrivateRoute from "./pages/private-routes/PrivateRoute.tsx";
import PrivateAdminRoute from "./pages/private-routes/PrivateAdminRoute.tsx";
import PrivateDealerRoute from "./pages/private-routes/PrivateDealerRoute.tsx";
import RegisteredUsers from "./components/AdminPage/RegisteredUsers.tsx";
import AdminHome from "./pages/AdminHome.tsx";
import DealerRequests from "./components/AdminPage/DealerRequests.tsx";
import AddProduct from "./pages/AddProduct.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/torrentekcb/designs" element={<Designs />}></Route>
      <Route path="/torrentekcb/about" element={<About />}></Route>
      <Route path="/torrentekcb/contact" element={<Contact />}></Route>
      <Route path="/torrentekcb/myaccount" element={<MyAccount />}></Route>
      <Route
        path="/torrentekcb/register"
        element={
          <PrivateRoute>
            <Register />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/torrentekcb/login"
        element={
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/torrentekcb/shop" element={<Shop />}></Route>
      <Route
        path="/torrentekcb/becomeadealer"
        element={
          <PrivateDealerRoute>
            <BCA />
          </PrivateDealerRoute>
        }
      ></Route>
      <Route
        path="/torrentekcb/admin"
        element={
          <PrivateAdminRoute>
            <AdminHome />
          </PrivateAdminRoute>
        }
      ></Route>
      <Route
        path="/torrentekcb/admin/registeredusers"
        element={
          <PrivateAdminRoute>
            <RegisteredUsers />
          </PrivateAdminRoute>
        }
      ></Route>
      <Route
        path="/torrentekcb/admin/dealerrequests"
        element={
          <PrivateAdminRoute>
            <DealerRequests />
          </PrivateAdminRoute>
        }
      ></Route>
      <Route
        path="/torrentekcb/admin/shop/addproduct"
        element={<AddProduct />}
      ></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
