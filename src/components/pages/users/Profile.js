import React, { useContext, useEffect } from 'react'
import UserProfileView from './UserProfileView'
import { Col, Container, Row } from 'react-bootstrap'
import UserContext from '../../context/user.context'
import { getUser } from '../services/user.service'
import { toast } from 'react-toastify'


const Profile = () => {

  const userContext=useContext(UserContext);

  useEffect(()=>{
    getUserDataFromServer();
  },[])
  
  const getUserDataFromServer=()=>{
    //api call
    const userId=userContext.userData.user.userId;

    getUser(userId)
     .then(data=>{
      console.log(data)
     })
     .catch(error=>{
      console.log(error)
      toast.error("Erroe in loading user information from server!!")
     })
  }


  return (
    <div>
      <Container className='mt-3'>
      <Row>
        <Col md={
          {
            span:6,
            offset:3
          }
        }>

<UserProfileView user={{
        'name':'Priyanka Krishna Khiratkar',
        email:'priyanka@gmail.com',
        gender:"female",
        about:'Home Maker',
        roles:[{roleName:'Admin'},
        {
          roleName:'Normal'
        }]
      }}/>
      

        </Col>
      </Row>
      
      </Container>
    </div>
  )
}

export default Profile


