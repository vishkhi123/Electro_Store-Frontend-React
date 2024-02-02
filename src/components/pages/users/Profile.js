import React, { useContext, useEffect, useState } from 'react'
import UserProfileView from './UserProfileView'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import UserContext from '../../context/user.context'
import { getUser } from '../services/user.service'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'


const Profile = () => {

  const userContext=useContext(UserContext);
  const [user,setUser]=useState(null);

  const {userId}=useParams()

  useEffect(()=>{
    console.log(userContext)
    console.log('data from url userid'+userId)
    // if(userContext.userData)
     
    // {getUserDataFromServer();
    // }
    getUserDataFromServer()
    },[userContext.userData])
  
  const getUserDataFromServer=()=>{
    //api call
  //  console.log(userContext)
  //  const userId=userContext.userData.user.userId;

    getUser(userId)
     .then(data=>{
      console.log(data)
     setUser(data)
     })
     .catch(error=>{
      console.log(error)
      setUser(null)
      toast.error("Error in loading user information from server!!")
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

        {
          (user ? (
            <UserProfileView 
            user={ user }/>
          ):<Alert>
          <h1 className='text-center text-uppercase m-2'>User Not Loaded from server !!</h1>
          </Alert>
          )
        }


      

        </Col>
      </Row>
      
      </Container>
    </div>
  )
}

export default Profile


