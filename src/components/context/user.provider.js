import {  useEffect, useState } from "react";
import UserContext from "./user.context";
import { doLoginLocalStorage, doLogoutFromLocalStorage, getDataFromLocalStorage,  isLoggedIn } from "../auth/helper.auth";
import { isAdminUser as adminUser } from "../auth/helper.auth";

const UserProvider=({children})=>{

    const [isLogin,setIsLogin]=useState(false);
    const [userData,setUserData]=useState(null);
    const [isAdminUser,setIsAdminUser]=useState(false)
    /*
    userData:{
        user:{

        },
        jwtToken:""
    }
    */
   useEffect(()=>{
    setIsLogin(isLoggedIn())
    setUserData(getDataFromLocalStorage())
    setIsAdminUser(adminUser())
   },[])

   //login
   const doLogin=(data)=>{
    doLoginLocalStorage(data);
    setIsLogin(true)
    setIsAdminUser(adminUser())
    setUserData(getDataFromLocalStorage())

   }

   //logout
   const doLogout=()=>{
    doLogoutFromLocalStorage()
   // setIsLogin(false)
    setUserData(null)
    setIsAdminUser(adminUser())
   }

    return(
        <UserContext.Provider value={
            {userData:userData,
            setUserData:setUserData,
            isLogin:isLogin,
            setIsLogin:setIsLogin,
            login:doLogin,
            logout:doLogout,
            isAdminUser:isAdminUser}
            }>

            {children}

        </UserContext.Provider>
    )



}
export default UserProvider;