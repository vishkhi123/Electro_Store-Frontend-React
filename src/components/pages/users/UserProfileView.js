import React from 'react'
import { Card, Table } from 'react-bootstrap'

const UserProfileView = ({user=null}) => {
  return (
    <>
      {
        (user &&
        (<Card className='m-3'>
        <Card.Body>
            <h3 className='text-center text-uppercase fw-bold text-primary'>{(user.name)? user.name:'Dummy User'}</h3>
            <div className='mt-3'>
                <Card className='bg-secondary text-white' 
                style={{
                    borderRadius:"20px"
                }}
                >
                    <Card.Body>
                    <Table className='text-center text-white' responsive borderless hover variant='secondary'>
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
        </Card.Body>
      </Card>))
      }
    </>
  )
}

export default UserProfileView
