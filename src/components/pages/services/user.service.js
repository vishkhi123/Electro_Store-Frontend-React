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

//get user data by userID
export const getUser=(userId)=>{
   return publicAxios.get(`/users/${userId}`).then((response)=>response.data)

}
