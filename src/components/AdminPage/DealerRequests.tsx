import { Separator } from "@/components/ui/separator";
import { Loader2Icon, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";
import cardStyles from "@/components/AdminPage/cardStyles";
import { Skeleton } from "@/components/ui/skeleton";
import GotoHomeBtn from "./GotoHomeBtn";

const DealerRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: "",
      name: "",
      company_email: "",
      company_description: "",
      companyvendor_name: "",
      phone_number: "",
      personal_email: "",
      ein: "",
      company_address: "",
      userId: "",
    },
  ]);

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

  const acceptRequest = async (userId: any, requestId: any) => {
    await fetch(
      "https://jesus-torrente-cab-server.onrender.com/acceptRequest",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId, id: requestId }),
      }
    );
  };
  const denieRequest = async (requestId: any) => {
    await fetch("https://jesus-torrente-cab-server.onrender.com/denieRequest", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: requestId }),
    });
  };

  // Pagination

  useEffect(() => {
    getDealerRequests();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row  justify-center p-8 ">
      <GotoHomeBtn />
      <div className="flex flex-col gap-8 w-full items-center ">
        <div className="flex flex-col gap-8 text-center  max-w-xl sm:mx-auto  ">
          <p className="text-3xl">Dealer requests</p>
          <button
            className="flex gap-2 border p-2 rounded-lg group  active:translate-x-3  duration-200"
            onClick={getDealerRequests}
          >
            <RefreshCcw className="group-hover:rotate-180 duration-300" />{" "}
            Refresh
          </button>
        </div>
        {isLoading ? (
          <div className="w-full space-y-5">
            <Loader2Icon className="animate-spin mx-auto" />
            <div className="max-w-xl mx-auto space-y-6">
              <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
              <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
              <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
              <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
              <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
              <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
              <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
              <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
              <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
              <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
              <div className="flex justify-between items-center gap-6 ">
                <Skeleton className="w-full h-[50px] rounded-lg"></Skeleton>
                <Skeleton className="w-full h-[50px] rounded-lg "></Skeleton>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full space-y-8 ">
            {requests.length > 0 ? (
              requests.map((request: any) => (
                <div key={request.id} className={cardStyles.container}>
                  <p>Submitted by USER ID: {request.userId}</p>
                  <Separator className={cardStyles.paragraph} />
                  <p>Request ID: {request.id}</p>
                  <Separator className={cardStyles.paragraph} />
                  <p>Name: {request.name}</p>
                  <Separator className={cardStyles.paragraph} />
                  <p>Company Email: {request.company_email}</p>
                  <Separator className={cardStyles.paragraph} />
                  <p>Company Description: {request.company_description}</p>
                  <Separator className={cardStyles.paragraph} />
                  <p>Company Address: {request.company_address}</p>
                  <Separator className={cardStyles.paragraph} />
                  <p>Company Vendor Name: {request.companyvendor_name}</p>
                  <Separator className={cardStyles.paragraph} />
                  <p>EIN: {request.ein}</p>
                  <Separator className={cardStyles.paragraph} />
                  <p>Phone Number: {request.phone_number}</p>
                  <Separator className={cardStyles.paragraph} />
                  <p>Personal Email: {request.personal_email}</p>
                  <Separator className={cardStyles.paragraph} />
                  <div className="flex justify-between gap-5 mt-8 text-white font-medium">
                    <button
                      className={`${cardStyles.button} ${cardStyles.acceptButton}`}
                      onClick={() => acceptRequest(request.userId, request.id)}
                    >
                      Accept
                    </button>
                    <button
                      className={`${cardStyles.button} ${cardStyles.denyButton}`}
                      onClick={() => denieRequest(request.id)}
                    >
                      Deny
                    </button>
                  </div>
                  {/* Agregar más propiedades según sea necesario */}
                </div>
              ))
            ) : (
              <div className="w-full">
                <div className="max-w-xl mx-auto space-y-6">
                  <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
                  <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
                  <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
                  <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
                  <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
                  <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
                  <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
                  <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
                  <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
                  <Skeleton className=" h-[30px] rounded-full mx-auto"></Skeleton>
                  <div className="flex justify-between items-center gap-6 ">
                    <Skeleton className="w-full h-[50px] rounded-lg"></Skeleton>
                    <Skeleton className="w-full h-[50px] rounded-lg "></Skeleton>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DealerRequests;
