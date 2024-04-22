/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    useEffect(() => {
        const data = localStorage.getItem("auth")
        if(data){
            const parsedData = JSON.parse(data)
            setAuth({
                ...auth, 
                user: parsedData.user,
                token: parsedData.token
            })
        }
        //eslint-disable-next-line
      }, [auth.token])
    return (
        <authContext.Provider value={{auth, setAuth}}>
            {children}
        </authContext.Provider>
    )
}

const useAuth = () => useContext(authContext);
export { AuthProvider, useAuth };