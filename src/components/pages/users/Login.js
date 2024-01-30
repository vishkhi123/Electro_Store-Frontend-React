import Base from "./Base";
import React, { useContext, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogin } from "../services/user.service";
import UserContext from "../../context/user.context";

const Login = () => {

  const userContext=useContext(UserContext);

  const redirect=useNavigate();

  let [data, setData] = useState({
    email: "",
    password: "",
  });

  let [error, setError] = useState({
    isError: false,
    errorData: null,
  });

  const [loading, setLoading] = useState(false);

  const handelChange = (event, property) => {
    // console.log(event)
    // console.log(property)
    setData({
      ...data,
      [property]: event.target.value,
    });
  };

  const clearForm = () => {
    setData({
      email: "",
      password: "",
    });
    setError({
      errorData:null,
      isError:false
    })
  };

  const submitForm = (event) => {
    event.preventDefault();

    console.log(data);

    if (data.email == undefined || data.email.trim() == "") {
      toast.error("Enter our Email Id Correctly!!");
      return;
    }

    if (data.password == undefined || data.password.trim() == "") {
      toast.error("Enter our Password Correctly!!");
      return;
    }

    setLoading(true);
    //Login User
    userLogin(data)
      .then((data) => {
        console.log(data);
        toast.success("SuccessFully Logged In!!");
        setError({
          errorData: null,
          isError: false,
        });

        //set data in userContext for state management
        // userContext.setIsLogin(true)
        // userContext.setUserData(data)

        userContext.login(data)

        //redirect to dashboard
        //1.Normal user redirected to dashboard 
        redirect('/user/home')
        //2.Admin user redirected to dashboard
        
      })
      .catch((error) => {
        //console.log(error);
        toast.error(error.response.data.message);
        setError({
          errorData: error,
          isError: true,
        });
      })
      .finally(() => {
        setLoading(false)
      });
    }
    const LoginForm = () => {
      return (
        <Container>
        {JSON.stringify(userContext)}
          {/* Single Row==>12 grids(1col) */}
          <Row>
            {/* {JSON.stringify(data)} */}
            {/* if u make 2 col they will share 6,6 grids with them */}
            <Col sm={{ span: 6, offset: 3 }}>
              <Card
                className="my-2 border-0 shadow-lg"
                style={{
                  position: "relative",
                  top: -60,
                }}
              >
                <Card.Body>
                  <Container className="text-center my-2">
                    <img
                      src="/assets/electrostore.png"
                      alt="logo"
                      width="80"
                      height="80"
                    ></img>
                  </Container>

                  <h3 className="mb-4 text-center">Store Login Here</h3>

                  <Alert onClose={()=>setError({
                    isError:false,
                    errorData:null
                  })} 
                  dismissible variant="danger" show={error.isError}>
                    {error.errorData?.response?.data?.message}
                  </Alert>

                  <Form noValidate onSubmit={submitForm}>
                    {/* User Email */}
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Enter Email</Form.Label>
                      <Form.Control
                        type="Email"
                        placeholder="Enter Email"
                        value={data.email}
                        onChange={(event) => handelChange(event, "email")}
                      />
                    </Form.Group>
                    {/* User Password */}
                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Enter Password</Form.Label>
                      <Form.Control
                        type="Password"
                        placeholder="Enter Password"
                        value={data.password}
                        onChange={(event) => handelChange(event, "password")}
                      />
                    </Form.Group>

                    <Container>
                      <p className="text-center">
                        New User <Link to="/register">Register here </Link>{" "}
                      </p>
                    </Container>

                    <Container className="text-center">
                      <Button
                        type="submit"
                        className="m-2"
                        variant="success"
                        disabled={loading}
                      >
                        <Spinner
                          animation="border"
                          size="sm"
                          className="me-2"
                          hidden={!loading}
                        />
                        <span hidden={!loading}>Wait...</span>
                        <span hidden={loading}>Login</span>
                      </Button>
                      <Button variant="danger" onClick={clearForm}>
                        RESET
                      </Button>
                    </Container>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    };

    return (
      <Base
        title="Electro Store / Login Here"
        description="Fill your Details Correctly"
      >
        {LoginForm()}
      </Base>
    );
  };

export default Login;
