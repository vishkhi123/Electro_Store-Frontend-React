import React, { useContext, useEffect, useState } from 'react'
import UserProfileView from './UserProfileView'
import { Alert, Button, Card, Col, Container, Form, Modal, Row, Spinner, Table } from 'react-bootstrap'
import UserContext from '../../context/user.context'
import { getUser, updateUser } from '../services/user.service'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'


const Profile = () => {

  const userContext=useContext(UserContext);
  const [user,setUser]=useState(null);

  //state to handel image
  const [image,setImage]=useState({
    placeholder:"/assets/profile.avif",
    file:null
  })

  //modal state
  const [show, setShow] = useState(false);

  const [updateLoading,setUpdateLoading]=useState(false);

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
    setUpdateLoading(true);
    updateUser(user).then(updatedUser=>{
      console.log(updatedUser)
      toast.success("User detail updated!!")
      handleClose()
    }).catch(error=>{
     // console.log(error)
    //  if(error.response.status==400)
    //  {
    //   toast.error(error.response.name)
    //  } 
     toast.error("Not updated!!!")
    })
    .finally(()=>{
      setUpdateLoading(false)
    })
  }

  //funtion For Image Change
  const handelProfileImage=(event)=>{
  //  const localFile=event.target.files[0]
    console.log(event.target.files[0])
    if(event.target.files[0].type==='image/png' || event.target.files[0].type==='image/jpeg' )
    {
      //preview
      const reader=new FileReader()
      reader.onload=(r)=>{
        setImage({
          placeholder:r.target.result,
          file:event.target.files[0]
        })
        console.log(r.target.result)
      }

      reader.readAsDataURL(event.target.files[0])

    }
    else{
      toast.error('Invalid File Type !!')
      image.file=null
    }
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
                      <td>
                     
                        Profile Image
                      </td>
                      <td>
                       {/* image Tag for Preview */}
                       <Container className='text-center mb-3'>
                       <img height={200} width={200} src={image.placeholder} alt="" />
                       </Container>
                       
                        <Form.Control type='file' onChange={handelProfileImage}  />
                        <p className='mt-2 text-muted'>Select Square size picture for better ui. </p>

                      </td>
                    </tr>
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
                             <p className='mt-2 text-muted'>Leave the field blank for same password!!!</p>
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
          <Button variant="primary" onClick={updateUserData} disabled={updateLoading}>
          <Spinner
            animation='border'
            size='sm'
            hidden={!updateLoading}
            className='me-2'
          />
            <span hidden={!updateLoading}>Updating</span> 
            <span hidden={updateLoading}>Save Changes</span>
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


