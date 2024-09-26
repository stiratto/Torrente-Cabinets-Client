import { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const Pagination = ({ setRegisteredUsers }: any) => {
  const [currentPage, setCurrentPage] = useState(0);
  // Stores the look for an id input value
  const [inputValue, setInputValue] = useState("");
  const [maximumUsersFound, setMaximumUsersFound] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleNextPageChange = async () => {
    try {
      // Pages that will skip, (i + 5 each time the button is clicked)
      const nextPage = currentPage + 5;

      // Fetchs the users with the skipped users and displays only 5 users
      const response = await fetch(
        `${apiUrl}/pagination?skip=${nextPage}&take=5`
      );
      if (response.ok) {
        // If the response was ok, parse the data
        const data = await response.json();
        // If there's users left, let the user paginate
        if (data.length > 0) {
          // Actualiza el estado de registeredUsers en AdminPage
          // Updates the registeredUsers state on AdminPage.tsx
          setRegisteredUsers(data);
          setCurrentPage(nextPage);
          setMaximumUsersFound(false);
        } else {
          /* Else, set the maximum users found to true*/
          setMaximumUsersFound(true);
        }
      } else {
        // If response was not ok, throw an error
        throw new Error("Failed to fetch dealer requests");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrevPageChange = async () => {
    try {
      const nextPage = currentPage - 5;
      const newPage = nextPage > 0 ? nextPage : 0;

      const response = await fetch(
       
        `${apiUrl}/pagination?skip=${newPage}&take=5`
      );
      if (response.ok) {
        const data = await response.json();
        setRegisteredUsers(data);
        setCurrentPage(newPage);
        setMaximumUsersFound(false);
      } else {
        throw new Error("Failed to fetch dealer requests");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (ev: any) => {
    // Handle Look for specific ID input value
    setInputValue(ev.target.value);
  };

  const handlePageSpecificId = async () => {
    // Fetches the server and assigns the inputValue (the ID that the user types)
    // into the URL params
    const response = await fetch(
      `${apiUrl}/getSpecificId/${inputValue}`
    );
    if (response.ok) {
      // If response ok, parse the response and save it into a variable called data
      const data = await response.json();

      if (data) {
        if (Array.isArray(data)) {
          // If data is an array (if is an array, it contains multiple users) set the registeredUsers with the data received
          setRegisteredUsers(data);
        } else if (data.id) {
          // If data is not an array but it contains and ID (this means there's only 1 user), set the data into registeredUsers
          // and save it as an array, this guarantees that registeredUsers always will be an array, even if it's only 1 user
          setRegisteredUsers([data]);
        }
      } else {
        console.log("user not found");
      }
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
