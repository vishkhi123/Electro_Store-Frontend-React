import React, { useContext, useEffect, useState } from 'react'
import UserProfileView from './UserProfileView'
import { Alert, Button, Card, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap'
import UserContext from '../../context/user.context'
import { getUser, updateUser } from '../services/user.service'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'


const Profile = () => {

  const userContext=useContext(UserContext);
  const [user,setUser]=useState(null);

  //modal state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShowModal = () => setShow(true);

  const {userId}=useParams()

  useEffect(()=>{
    console.log(userContext)
   // console.log('data from url userid'+userId)
    // if(userContext.userData)
     
    // {getUserDataFromServer();
    // }
    getUserDataFromServer()
    },[])
  
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

  const updateFileHandler=(event,property)=>{
    setUser({
      ...user,
      [property]:event.target.value
    })

  }

  const updateUserData=()=>{
    console.log("Updating User Data")
    if(user.name===undefined || user.name.trim()==='')
    {
      toast.error("User name required !!")
      return
    }
    //... rest of the world
    updateUser(user).then(updatedUser=>{
      console.log(updatedUser)
      toast.success("User detail updated!!")
    }).catch(error=>{
      console.log(error)
      toast.error("Not updated!!!")
    })
  }

  //update View
  const updateViewModal=()=>{
    return(
      <div>
        <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update the info !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                            <td>
                              <Form.Control className='text-center' type='text'
                               value={user.name}
                                onChange={(event)=>updateFileHandler(event,'name')}
                               />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>New Password</td>
                            <td>
                            <Form.Control
                             placeholder='Enter new Password here !!!'
                             type='Password'
                             onChange={(event)=>updateFileHandler(event,'password')}
                             />
                            </td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{user.gender}</td>
                        </tr>
                        <tr>
                            <td>About</td>
                            <td>
                            <Form.Control as={'textarea'}   
                            value={user.about} 
                            rows={8}
                            onChange={(event)=>updateFileHandler(event,'about')}
                            />
                            </td>
                        </tr>
                        <tr>
                            <td>Roles</td>
                            <td>{user.roles.map(role=>  <div key={role.roleId}>{role.roleName}</div>)}</td>
                        </tr>
                    </tbody>
                </Table>
                    </Card.Body>
                </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateUserData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
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
            <>
            <UserProfileView 
            user={ user }
            handleShowModal={handleShowModal}/>
            {updateViewModal()}
            </>
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


