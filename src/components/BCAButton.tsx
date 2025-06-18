import { NavLink as Link} from "react-router-dom"
import { Button } from "./ui/button"

export const BCAButton = () => {
   return (
   <Link
       to="/torrentekcb/becomeadealer"
       className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-red-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group bg-transparent"
     >
       <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
       <Button className="relative w-full text-left text-red-500 transition-colors h-auto duration-200 ease-in-out bg-transparent group-hover:text-white hover:bg-transparent font-medium">
         Become a dealer
       </Button>
     </Link>

   )
}
