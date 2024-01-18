import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Base = ({title="Page Title",description="Welcome to dynamic Store",
buttonEnabled=false,buttonText="Show Now",buttonType='btn btn-primary',buttonlink='/',children}) => {

let styleContainer={
    
    height:"200px"
    
}

  return (
    <div>
      
      <Container fluid style={styleContainer} className='bg-dark text-white text-center p-5 d-flex justify-content-center align-items-center' >

          <div>

          <h3 className='text-center'>{title}</h3>
                    <p className='text-center'>{description && description}</p>

                    {buttonEnabled && <Button as={NavLink} to={'/'} variant={buttonType}>{buttonText}</Button> }
        

          </div>
                    
      </Container>

      {children}

      <Footer/>

    </div>
  )
}

export default Base
