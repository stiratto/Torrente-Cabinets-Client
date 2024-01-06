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

// TODO: COMMENT AND ORGANIZE EVERYTHING ON THIS FILE
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
      const response = await fetch(
        "https://jesus-torrente-cab-server.onrender.com/getRegisteredUsers?take=5"
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
  };

  // TODO: FILTER USERS BY ROLE

  const getRegisteredUsersByRole = async (role: string) => {
    try {
      const response = await fetch(
        `https://jesus-torrente-cab-server.onrender.com/filterUsersByRole/${role}`
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
  };

  useEffect(() => {
    // Llama a la función getRegisteredUsers cuando sea necesario, por ejemplo, cuando el componente se monte.
    getRegisteredUsers();
  }, []);

  return (
    <Table className="flex flex-col gap-8 mx-auto pt-8  ">
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
        <div className="flex flex-col items-center text-start px-8">
          <TableBody className="w-full border-x border-y">
            <TableRow className="flex ">
              <TableCell className="font-medium border-r">
                {registeredUser.id}
              </TableCell>
              <TableCell className="w-full border-r">
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
