import React, { useState } from "react";
import Base from "./Base";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    let[data,setData]= useState({
      name:"",
      email:"",
      password:"",
      confirmPassword:"",
      about:"",
      gender:""
    })

    const handelChange=(event,property)=>{
      // console.log(event)
      // console.log(property)
      setData({
        ...data,
        [property]:event.target.value
      })

    }

    const clearData=()=>{
      toast.info("Reset")
      setData({
        name:"",
      email:"",
      password:"",
      confirmPassword:"",
      about:"",
      gender:""

      })
    }

    const [errorData,setErrorData]=useState({
      isError:false,
      errorData:null
    })


  const RegisterForm = () => {

    return (
      <Container>
        {/* Single Row==>12 grids(1col) */}
        <Row>
        {/* {JSON.stringify(data)} */}
          {/* if u make 2 col they will share 6,6 grids with them */}
          <Col sm={{ span: 6, offset: 3 }}>
            <Card className="my-2 border-0 shadow-lg" style={
              {
                position:'relative',
                top:-80
              }
            }
              >
              <Card.Body>

                <Container className="text-center my-2">
                <img src="/assets/electrostore.png" alt="logo" width="80" height="80" ></img>
                </Container>

                <h3 className="mb-4 text-center">Store SignUp Here</h3>

                {/* User Name */}
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter name"
                    onChange={(event)=>handelChange(event,'name')}
                    value={data.name}
                     />
                  </Form.Group>
                  {/* User Email */}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Enter your Email</Form.Label>
                    <Form.Control 
                    type="Email" 
                    placeholder="Enter Email"
                    onChange={(event)=>handelChange(event,'email')}
                    value={data.email}
                     />
                  </Form.Group>
                  {/* User Password */}
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Enter new Password</Form.Label>
                    <Form.Control
                      type="Password"
                      placeholder="Enter Password"
                      onChange={(event)=>handelChange(event,'password')}
                      value={data.password}
                    />
                    </Form.Group>
                    {/* Conform User Password */}
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="Password"
                      placeholder="Re-Enter Password"
                      onChange={(event)=>handelChange(event,'confirmPassword')}
                      value={data.confirmPassword}
                    />
                  </Form.Group>
                  {/* User Gender */}
                  <Form.Group className="mb-2">
                    {/* <Form.label>Select Gender</Form.label> */}
                    <Form.Label>Select Gender</Form.Label>

                    <div>
                      <Form.Check
                        inline
                        name="gender"
                        label="Male"
                        type={"radio"}
                        id={`gender`}
                        value={'male'}
                        checked={data.gender=='male'}
                        onChange={(event)=>handelChange(event,'gender')}

                      />
                      <Form.Check
                        inline
                        name="gender"
                        label="Female"
                        type={"radio"}
                        id={`gender`}
                        value={'female'}
                        checked={data.gender=='female'}
                        onChange={(event)=>handelChange(event,'gender')}
                      />
                    </div>
                  </Form.Group>

                  {/* About User */}
                  <Form.Group className="mb-2">
                  <Form.Label>Write Something About you</Form.Label>
                  <Form.Control as="textarea" 
                  placeholder="Write here"
                  style={{ height: '100px' }} 
                  onChange={(event)=>handelChange(event,'about')}
                  value={data.about}
                  />
                    
                  </Form.Group>

                </Form>
                <Container>
                  <p className="text-center">Already registered ! <Link to='/login'>Login </Link> </p>
                </Container>

                <Container className="text-center">
                  <Button className="m-2" variant="success">REGISTER</Button>
                  <Button variant="danger" onClick={clearData}>RESET</Button>
                </Container>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <Base title="Electro Store /SignUp" description="Fill the Form Correctly">
      {RegisterForm()}
    </Base>
  );
};

export default Register;
