import { NavLink as Link} from "react-router-dom"
import { Button } from "./ui/button"

export const BCAButton = () => {
   return (
   <Link
       to="/torrentekcb/becomeadealer"
       className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-red-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
     >
       <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
       <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
         <svg
           className="w-5 h-5 text-yellow-500"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M14 5l7 7m0 0l-7 7m7-7H3"
           ></path>
         </svg>
       </span>
       <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
         <svg
           className="w-5 h-5 text-yellow-300"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M14 5l7 7m0 0l-7 7m7-7H3"
           ></path>
         </svg>
       </span>
       <Button className="relative w-full text-left text-red-500 transition-colors h-auto duration-200 ease-in-out bg-transparent group-hover:text-white hover:bg-transparent font-medium">
         Become a dealer
       </Button>
     </Link>

   )
}
