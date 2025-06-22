"use client";

import { useState, createContext, useEffect } from "react"
import { useSession } from "@node_modules/next-auth/react";

export const MyContext = createContext()

export default function ContextProvider({children}) {
    const [sessionOn, setSessionOn] = useState(false)
    const {data: session} = useSession();

    useEffect(() => {
      if (session?.user) {
        setSessionOn(true)
      }
    }, [session?.user])
    
  return (
    <MyContext.Provider value={{sessionOn, setSessionOn}}>
      {children}
    </MyContext.Provider>
  )
}
