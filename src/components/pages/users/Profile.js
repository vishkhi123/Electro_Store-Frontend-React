import React from 'react'
import UserProfileView from './UserProfileView'
import { Container } from 'react-bootstrap'

const Profile = () => {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  )
}

export default Profile


