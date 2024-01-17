import React from 'react'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/services'}>Services</Link>
            </li>
            <li>
                <Link to={'/Cart'}>Cart</Link>
            </li>
            <li>
                <Link to={'/user/aboutUser'}>About User</Link>
            </li>
           
        </ul>      
    </div>
  )
}

export default CustomNavbar
