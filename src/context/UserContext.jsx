import React, { createContext, useState } from "react";

export const UserContext = createContext(null);


const UserContextProvider = (props)=>{
    const [loginState, setLoginState] = useState(false);
    
    const contextValue = {loginState, setLoginState};

    return(
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;