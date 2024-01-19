import { publicAxios } from "./axios.service"

//New User
export const registerUser=(userData)=>{
    return publicAxios.post('/users',userData)
    .then((response)=>response.data);
}

//User Login
export const userLogin=(userData)=>{
    return publicAxios.post('/auth/login',userData)
    .then((response)=>response.data)

}