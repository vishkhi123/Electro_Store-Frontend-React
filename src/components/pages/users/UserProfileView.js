import React from 'react'

import { Button, Card, Container, Table } from 'react-bootstrap'
import { BASE_URL } from '../services/helperService'

const UserProfileView = ({user=null}) => {

    const profileStyle={
         maxHeight:'150px',
         maxWidth:'230px',
         borderRadius:'50%',
         
    }


  return (
    <>
      {
        (user &&
        (<Card className='my-xxl-5-3 border-0 shadow-sm'>
        <Card.Body>
        <Container className='text-center my-3'>
        
            <img className='border border-primary' style={profileStyle} src={user.imageName ? BASE_URL+'/users/image'+user.userId : "/assets/priyanka.jpg" } alt="Profile" />
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
                            <td>{user.roles.map(role=>  role.roleName)}</td>
                        </tr>
                    </tbody>
                </Table>
                    </Card.Body>
                </Card>
            </div>
            <Container className='text-center mt-3'>
                <Button  variant='success' size='md'>Update</Button>
                <Button className='ms-2' variant='warning' size='md'>Orders</Button>
            </Container>
        </Card.Body>
      </Card>))
      }
    </>
  )
}

export default UserProfileView
