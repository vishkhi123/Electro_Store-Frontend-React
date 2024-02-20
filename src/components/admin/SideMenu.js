import React from 'react'
import { Badge, ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const SideMenu = () => {
  return (
    <div>
      
      <ListGroup>
            <ListGroup.Item as={NavLink} to={"/admin/home"} action>Home</ListGroup.Item>
            <ListGroup.Item as={NavLink} to={"/admin/addCategory"} action>Add Category</ListGroup.Item>
            <ListGroup.Item as={NavLink} to={"/admin/categories"} action>View Categories</ListGroup.Item>
            <ListGroup.Item as={NavLink} to={"/admin/addProduct"} action>Add Product</ListGroup.Item>
            <ListGroup.Item as={NavLink} to={"/admin/products"} action>View Products</ListGroup.Item>
            <ListGroup.Item as={NavLink} to={"/admin/adminOrders"} action>Orders</ListGroup.Item>
            <ListGroup.Item as={NavLink} to={"/admin/adminUsers"} action
            className='d-flex justify-content-between align-items-start'
            >
            Users
            <Badge bg='danger' pill>
                14
            </Badge>
            </ListGroup.Item>
            <ListGroup.Item as={NavLink} to={"/user/home"} action>Dashboard</ListGroup.Item>
            
      </ListGroup>
    </div>
  )
}

export default SideMenu
