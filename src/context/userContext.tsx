import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"

interface User {
   id: number,
   token: string,
   role: string,
   username: string
}

interface UserContextType {
   user: User,
   setUser: Dispatch<SetStateAction<User>>
}

const UserContext = createContext<UserContextType | null>(null)


export const UserProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUser] = useState<User>(() => {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
   })

   useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user))
   }, [user])

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   )
}

export const useUserContext = () => {
   const context = useContext(UserContext)
   if (!context) {
      throw new Error("useUserContext() must be used within a UserContext")
   }
   return context
}
