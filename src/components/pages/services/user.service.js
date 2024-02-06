import { privateAxios, publicAxios } from "./axios.service"

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
//update user
export const updateUser=(user)=>{
    return privateAxios
    .put(`/users/${user.userId}`,user).then((response)=>response.data)
}

//for image upload
export const updateUserProfile=(file,userId)=>{
    if(file===null){
        return
    }
  
    const data=new FormData()
    data.append('userImage',file)
    return privateAxios.post(`/users/image/${userId}`,data)
    .then(response=>response.data)

}