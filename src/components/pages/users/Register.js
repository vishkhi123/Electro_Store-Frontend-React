import React from "react";
import Base from "./Base";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const RegisterForm = () => {
    return (
      <Container>
        {/* Single Row==>12 grids(1col) */}
        <Row>
          {/* if u make 2 col they will share 6,6 grids with them */}
          <Col sm={{ span: 6, offset: 3 }}>
            <Card className="my-2 border-0 shadow-lg">
              <Card.Body>

                <Container className="text-center my-2">
                <img src="/assets/electrostore.png" alt="logo" width="80" height="80" ></img>
                </Container>

                <h3 className="mb-4 text-center">Store SignUp Here</h3>

                {/* User Name */}
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  {/* User Email */}
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Enter your Email</Form.Label>
                    <Form.Control type="Email" placeholder="Enter Email" />
                  </Form.Group>
                  {/* User Password */}
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Enter new Password</Form.Label>
                    <Form.Control
                      type="Password"
                      placeholder="Enter Password"
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
                      />
                      <Form.Check
                        inline
                        name="gender"
                        label="Female"
                        type={"radio"}
                        id={`gender`}
                      />
                    </div>
                  </Form.Group>

                  {/* About User */}
                  <Form.Group className="mb-2">
                  <Form.Label>Write Something About you</Form.Label>
                  <Form.Control as="textarea" 
                  placeholder="Write here"
                  style={{ height: '100px' }} />
                    
                  </Form.Group>

                </Form>
                <Container>
                  <p className="text-center">Already registered ! <Link to='/login'>Login </Link> </p>
                </Container>

                <Container className="text-center">
                  <Button className="m-2" variant="success">REGISTER</Button>
                  <Button variant="danger">RESET</Button>
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
