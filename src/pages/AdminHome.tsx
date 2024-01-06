import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2Icon } from "lucide-react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const [registeredUsers, setRegisteredUsers] = useState([{}]);
  const [admins, setAdmins] = useState([
    {
      id: "",
      name: "",
      role: "",
    },
  ]);
  const [requests, setRequests] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);

  const getDealerRequests = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jesus-torrente-cab-server.onrender.com/getDealerRequests"
      );
      if (response.ok) {
        const data = await response.json();
        setRequests(data);
      } else {
        throw new Error("Failed to fetch dealer requests");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const getRegisteredUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jesus-torrente-cab-server.onrender.com/getRegisteredUsers?take=100000"
      );
      if (response.ok) {
        const data = await response.json();
        setRegisteredUsers(data);
      } else {
        throw new Error("Failed to fetch dealer requests");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const getAdmins = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://jesus-torrente-cab-server.onrender.com/getAdmins"
      );
      if (response.ok) {
        const data = await response.json();
        setAdmins(data);
      } else {
        throw new Error("Failed to fetch dealer requests");
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getRegisteredUsers();
    getDealerRequests();
    getAdmins();
  }, []);
  return (
    <article className="p-8 ">
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        <section>
          <Link to={"/torrentekcb/admin/dealerrequests"}>
            <Card className=" hover:shadow-lg duration-200   text-start">
              <CardHeader>
                <CardTitle>Dealer Requests</CardTitle>
                <CardDescription>
                  This page displays all of the dealer requests that the users
                  has been done
                </CardDescription>
                {isLoading ? (
                  <p className="flex items-center gap-2">
                    Requests count
                    <Loader2Icon className="animate-spin" />
                  </p>
                ) : (
                  <p className="flex flex-col gap-3">
                    <div>
                      Requests count:
                      <span className="bg-red-500 ml-3 w-min text-white p-2 rounded-lg font-medium">
                        {requests.length}
                      </span>
                    </div>
                    <Progress value={requests.length} className="max-w-lg  " />
                  </p>
                )}
              </CardHeader>
            </Card>
          </Link>
        </section>

        <section>
          <Link to={"/torrentekcb/admin/registeredUsers"}>
            <Card className=" hover:shadow-lg duration-200  text-start ">
              <CardHeader>
                <CardTitle>Registered Users</CardTitle>
                <CardDescription className="mb-52">
                  This page displays all of the registered users and their
                  information (without password)
                </CardDescription>
                {isLoading ? (
                  <p className="flex gap-2 items-center">
                    User count:
                    <Loader2Icon className="animate-spin" />
                  </p>
                ) : (
                  <p>
                    User count:
                    <span className="bg-red-500 ml-3 text-white p-2 rounded-lg font-medium">
                      {registeredUsers.length}
                    </span>
                  </p>
                )}
              </CardHeader>
            </Card>
          </Link>
        </section>

        <section>
          <Link to={"/torrentekcb/admin/shop/addproduct"} className="">
            <Card className="hover:shadow-lg duration-200  text-start px-5">
              <CardTitle>Add products</CardTitle>
              <CardDescription className="">
                This page allows you to add new products to the shop
              </CardDescription>
            </Card>
          </Link>
        </section>

        <section>
          <Card className=" hover:shadow-lg duration-200   text-start ">
            <CardHeader>
              <CardTitle>Admins</CardTitle>
            </CardHeader>
            {isLoading ? (
              <Loader2Icon className="animate-spin mx-5" />
            ) : (
              <CardDescription className="flex gap-3 px-4 flex-col lg:flex-row flex-wrap">
                {admins.map((admin) => (
                  <div className=" px-3 text-lg flex items-center gap-2 border  rounded-lg">
                    <p className="border-r p-2">{admin.id}</p>
                    <p>{admin.name}</p>
                  </div>
                ))}
              </CardDescription>
            )}
          </Card>
        </section>
      </div>
    </article>
  );
};

export default AdminHome;
