import React, { useContext } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import UserContext from '../../context/user.context';

const CustomNavbar = () => {

  const userContext=useContext(UserContext);

  const doLogout=()=>{
    // userContext.setIsLogin(false)
    // userContext.setUserData(null)
    userContext.logout();
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark' >
      <Container>
        <Navbar.Brand as={NavLink} to={'/'}>
        <img src="/assets/electrostore1.jpg" alt="logo" width="30" height="30" ></img>

        <span className='ms-1'>Electro Store</span>
       
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
         {/* //this helps in ms,m,mr changes its position left right */}
            <Nav.Link as={NavLink} to={'/services'}>Features</Nav.Link>
            
            <NavDropdown title="Categories" id="collapsible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Branded Phones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Smart TVs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Laptops</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                More
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to={'/about'}>About</Nav.Link>
            <Nav.Link as={NavLink} to={'/contact'}>Contact Us</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={NavLink} to={'/cart'}>Cart</Nav.Link>

            {
              (userContext.isLogin) 
              ? 
              (<>
              ({userContext.isAdminUser &&(
                <>
                <Nav.Link as={NavLink} to={'/admin/home'}>AdminDashboard</Nav.Link>
                </>
              )})
                <Nav.Link as={NavLink} to={'/user/profile'}>{userContext.userData?.user?.name}</Nav.Link>
                <Nav.Link as={NavLink} to={'/user/orders'}>Orders</Nav.Link>
            <Nav.Link onClick={doLogout}>Logout</Nav.Link>
              </>) : 
              (<>
                <Nav.Link as={NavLink} to={'/login'}>Login</Nav.Link>
            <Nav.Link as={NavLink} to={'/register'}>Sign Up</Nav.Link>
              </>)
              
              }


            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
