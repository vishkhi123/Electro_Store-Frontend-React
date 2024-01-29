
//data:save in local storage[login]
//javascript obj to json
export const doLoginLocalStorage=(data)=>{
    localStorage.setItem("userData",JSON.stringify(data))

}

export const isLoggedIn=()=>{
    if(getUserFromLocalStorage())
    {
        return true;
    }
    else
    return false;
}

//data:fetch
export const getUserFromLocalStorage=()=>{
    const data=getDataFromLocalStorage()
 if(data!=null)
 {
    return data.user;
 }
 return null;
   
}

export const getTokenFromLocalStorage=()=>{
 const data=getDataFromLocalStorage()
 if(data!=null)
 {
    return data.jwtToken;
 }
 return null;
}

export const getDataFromLocalStorage=()=>{
    const data= localStorage.getItem("userData")
   if(data!=null)
   {
    return JSON.parse(data) //json to js obj
   }

}



//remove data To logout
export const doLogoutFromLocalStorage=()=>{
    localStorage.removeItem("userData");
}