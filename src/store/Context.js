import { createContext, useState } from "react";

export const FirebaseContext = createContext(null);

export const AuthContext = createContext(null);

//We are going to setup this AuthContext in a dfferent way
//Let's start....

export default function Context ({children}) {
    const [user, setUser] = useState(null);

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
            {/* This is where App is going to be */}
        </AuthContext.Provider>
    )
}