import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { Button } from "../ui/button";
import GotoHomeBtn from "./GotoHomeBtn";
import { adminApi } from "@/api";

const RegisteredUsers = () => {
  const [registeredUsers, setRegisteredUsers] = useState([
    {
      id: "",
      name: "",
      role: "",
    },
  ]);

  const getRegisteredUsers = async () => {
    try {
      const data = await adminApi.getRegisteredUsers({ take: 5 });
      setRegisteredUsers(data);
    } catch (error) {
      console.error("Error fetching registered users:", error);
    }
  };

  const getRegisteredUsersByRole = async (role: string) => {
    try {
      const data = await adminApi.filterUsersByRole(role);
      setRegisteredUsers(data);
    } catch (error) {
      console.error("Error filtering users by role:", error);
    }
  };


  useEffect(() => {
    getRegisteredUsers();
  }, []);

  return (
    <Table className="flex flex-col gap-8 mx-auto pt-8  max-w-3xl">
      <GotoHomeBtn />
      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-none rounded-lg mx-3">
          <Button variant="outline" className="w-full ">
            Filter by role
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => getRegisteredUsersByRole("VISITOR")}>
            Visitor
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => getRegisteredUsersByRole("DEALER")}>
            Dealer
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => getRegisteredUsersByRole("ADMIN")}>
            Admin
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <TableCaption>
        A list of all the registered users information.
      </TableCaption>
      <TableHeader>
        <TableRow className="w-full flex ">
          <TableHead className="w-full">ID</TableHead>
          <TableHead className="w-full">Name</TableHead>
          <TableHead className="w-full">Role</TableHead>
        </TableRow>
      </TableHeader>
      {registeredUsers.map((registeredUser) => (
        <div className="flex flex-col items-center text-start">
          <TableBody className="w-full">
            <TableRow className="flex ">
              <TableCell className="font-medium ">
                {registeredUser.id}
              </TableCell>
              <TableCell className="w-full">
                Name: {registeredUser.name}
              </TableCell>
              <TableCell className="w-full">
                Role: {registeredUser.role}
              </TableCell>
            </TableRow>
          </TableBody>
          <Separator />
        </div>
      ))}
      <Pagination setRegisteredUsers={setRegisteredUsers} />
    </Table>
  );
};

export default RegisteredUsers;
