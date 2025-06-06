import { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { adminApi } from "@/api";

const Pagination = ({ setRegisteredUsers }: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  // Stores the look for an id input value
  const [inputValue, setInputValue] = useState("");
  const [maximumUsersFound, setMaximumUsersFound] = useState(false);

  const handleNextPageChange = async () => {
    try {
      const nextPage = currentPage + 5;
      const data = await adminApi.getPaginatedUsers({ skip: nextPage, take: 5 });
      
      if (data.length > 0) {
        setRegisteredUsers(data);
        setCurrentPage(nextPage);
        setMaximumUsersFound(false);
      } else {
        setMaximumUsersFound(true);
      }
    } catch (error) {
      console.error("Error fetching next page:", error);
    }
  };

  const handlePrevPageChange = async () => {
    try {
      const nextPage = currentPage - 5;
      const newPage = nextPage > 0 ? nextPage : 0;

      const data = await adminApi.getPaginatedUsers({ skip: newPage, take: 5 });
      setRegisteredUsers(data);
      setCurrentPage(newPage);
      setMaximumUsersFound(false);
    } catch (error) {
      console.error("Error fetching previous page:", error);
    }
  };

  const handleInputChange = (ev: any) => {
    // Handle Look for specific ID input value
    setInputValue(ev.target.value);
  };

  const handlePageSpecificId = async () => {
    try {
      const data = await adminApi.getSpecificUser(inputValue);

      if (data) {
        if (Array.isArray(data)) {
          setRegisteredUsers(data);
        } else if (data.id) {
          setRegisteredUsers([data]);
        }
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Error fetching specific user:", error);
    }
  };

  return (
    <div className="flex flex-col  mx-4">
      <div className="flex items-center justify-between my-4 ">
        <Button
          className="bg-red-500 hover:bg-red-900"
          onClick={() => handlePrevPageChange()}
        >
          Prev Page
        </Button>
        <div className="flex items-center gap-3">
          <input
            type="number"
            className="p-2 px-4 border rounded-lg"
            placeholder="Look for an specific ID"
            onChange={handleInputChange}
            value={inputValue}
          />

          <button onClick={handlePageSpecificId} className="relative -left-11">
            <Search size={18} />
          </button>
        </div>
        <Button
          className="bg-red-500 hover:bg-red-900"
          onClick={() => handleNextPageChange()}
        >
          Next Page
        </Button>
      </div>
      <p>{maximumUsersFound ? "There are no users left to show!" : ""}</p>
    </div>
  );
};

export default Pagination;
