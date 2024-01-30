import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAdminUser } from '../../auth/helper.auth'
import UserContext from '../../context/user.context'

const AdminDashboard = () => {

  const userContext=useContext(UserContext);

  const dashboardView=()=>{
    return(
      <div>
      <h1>This is Admin Dashboard</h1>
      <Outlet/>
    </div>

    )
  }




  return (
       (isAdminUser()) ?  dashboardView() : <Navigate to={"/login"}/>
  )
}

export default AdminDashboard
