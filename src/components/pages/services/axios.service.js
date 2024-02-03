import axios from "axios";
import { BASE_URL } from "./helperService";
import { getTokenFromLocalStorage } from "../../auth/helper.auth";

export  const publicAxios=axios.create({
    baseURL:BASE_URL
})

//for handling token
export const privateAxios=axios.create({
    baseURL:BASE_URL
})

privateAxios.interceptors.request.use(config=>{


    //request mein mofification karenge
    const token=getTokenFromLocalStorage()
    if(token)
    {
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;
},
(error)=>Promise.reject(error)
);