import { useContext, useState } from "react";
import UserContext from "./user.context";


const UserProvider=({children})=>{

    const [isLogin,setIsLogin]=useState(false);
    const [userData,setUserData]=useState(null);
    /*
    userData:{
        user:{

        },
        jwtToken:""
    }
    */

    return(
        <UserContext.Provider value={
            {userData:userData,
            setUserData:setUserData,
            isLogin:isLogin,
            setIsLogin:setIsLogin}
            }>

            {children}

        </UserContext.Provider>
    )



}
export default UserProvider;