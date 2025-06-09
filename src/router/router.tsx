import App from "@/App";
import DealerRequests from "@/components/AdminPage/DealerRequests";
import RegisteredUsers from "@/components/AdminPage/RegisteredUsers";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageNotFound from "@/components/PageNotFound";
import About from "@/pages/About";
import AddProduct from "@/pages/AddProduct";
import AdminHome from "@/pages/AdminHome";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import BCA from "@/pages/BCA";
import Designs from "@/pages/Designs";
import MyAccount from "@/pages/MyAccount";
import PrivateAdminRoute from "@/pages/private-routes/PrivateAdminRoute";
import PrivateDealerRoute from "@/pages/private-routes/PrivateDealerRoute";
import PrivateRoute from "@/pages/private-routes/PrivateRoute";
import Shop from "@/pages/Shop";
import { Contact } from "@/pages/Contact";
import { createBrowserRouter } from "react-router-dom";
import { Product } from "@/components/Products/Product";
import { Layout } from "@/layouts";


export const router = createBrowserRouter([
    {
      path: "/",
      element:  <Layout/>,
      children: [
        {
          path: "/",
          element: <App />
        },
        {
          path: "/torrentekcb/designs",
          element: <Designs />
        },
        {
          path: "/torrentekcb/about",
          element: <About />
        },
        {
          path: "/torrentekcb/contact",
          element: <Contact />
        },
        {
          path: "/torrentekcb/myaccount",
          element: <MyAccount />
        },
        {
          path: "/torrentekcb/product/:id",
          element: <Product/>
        },
        {
          path: "/torrentekcb/register",
          element: (
            <PrivateRoute>
              <Register />
            </PrivateRoute>
          )
        },
        {
          path: "/torrentekcb/login",
          element: (
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          )
        },
        {
          path: "/torrentekcb/shop",
          element: (<PrivateDealerRoute><Shop /></PrivateDealerRoute>)
        },
        {
          path: "/torrentekcb/becomeadealer",
          element: (
            <PrivateRoute>
              <BCA />
            </PrivateRoute>
          )
        },
        {
          path: "/torrentekcb/admin",
          element: (
            <PrivateAdminRoute>
              <AdminHome />
            </PrivateAdminRoute>
          )
        },
        {
          path: "/torrentekcb/admin/registeredusers",
          element: (
            <PrivateAdminRoute>
              <RegisteredUsers />
            </PrivateAdminRoute>
          )
        },
        {
          path: "/torrentekcb/admin/dealerrequests",
          element: (
            <PrivateAdminRoute>
              <DealerRequests />
            </PrivateAdminRoute>
          )
        },
        {
          path: "/torrentekcb/admin/shop/addproduct",
          element: <AddProduct />
        },
        {
          path: "*",
          element: <PageNotFound />
        }
      ]
    }
  ]);
