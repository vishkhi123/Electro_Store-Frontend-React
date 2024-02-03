import React, { useContext } from 'react'

import { Button, Card, Container, Table } from 'react-bootstrap'
import { BASE_URL } from '../services/helperService'
import UserContext from '../../context/user.context'

const UserProfileView = ({user=null , handleShowModal}) => {

    const {userData,isLogin}=useContext(UserContext);

    const profileStyle={
         height:'200px',
         width:'200px',
         borderRadius:'50%',
         objectFit:'contain'
         
    }


  return (
    <>
      {
        (user &&
        (<Card className='my-xxl-5-3 border-0 shadow-sm'>
        <Card.Body>
        <Container className='text-center my-3'>
        
            <img className='border border-primary' style={profileStyle} src={user.imageName ? BASE_URL+'/users/image/'+user.userId : "/assets/profile.avif" } alt="Profile" />
        </Container>
            <h3 className='text-center text-uppercase fw-bold text-primary'>{(user.name)? user.name:'Dummy User'}</h3>
            <div className='mt-3'>
                <Card className='border-0 shadow-lg' 
                style={{
                    borderRadius:"20px"
                }}
                >
                    <Card.Body>
                    <Table className='text-center ' responsive borderless hover >
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{user.gender}</td>
                        </tr>
                        <tr>
                            <td>About</td>
                            <td>{user.about}</td>
                        </tr>
                        <tr>
                            <td>Roles</td>
                            <td>{user.roles.map(role=>  <div key={role.roleId}>{role.roleName}</div>)}</td>
                        </tr>
                    </tbody>
                </Table>
                    </Card.Body>
                </Card>
            </div>
            {(isLogin && userData.user.userId===user.userId)? (
                <Container className='text-center mt-3'>
                <Button  variant='success' size='md' onClick={handleShowModal}>Update</Button>
                <Button className='ms-2' variant='warning' size='md'>Orders</Button>
            </Container>
            ) : 
            ' '
            }
        </Card.Body>
      </Card>))
      }
    </>
  )
}

export default UserProfileView
