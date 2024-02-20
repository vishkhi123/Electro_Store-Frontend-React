import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAdminUser } from '../../auth/helper.auth'
import UserContext from '../../context/user.context'
import { Col, Container, Row } from 'react-bootstrap'
import SideMenu from '../../admin/SideMenu'

const AdminDashboard = () => {

  const userContext=useContext(UserContext);

  const dashboardView=()=>{
    return(
      <div>
        <Container className='p-4'>
          <Row>
            <Col md={{
              span:2,
              offset:1
            }} className=''>
             <SideMenu/>
            </Col>
            <Col md={8} className=''>
              <Outlet/>
            </Col>
          </Row>
        </Container>
    </div>

    )
  }




  return (
       (isAdminUser()) ?  dashboardView() : <Navigate to={"/login"}/>
  )
}

export default AdminDashboard
