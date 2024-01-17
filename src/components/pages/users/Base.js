import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'

const Base = ({title="Page Title",description="Welcome to dynamic Store",children}) => {

// let styleContainer={
//     background:"red"
// }

  return (
    <div>
      
      <Container fluid className='bg-dark p-5 text-white'>

                    <h3 className='text-center'>{title}</h3>
                    <p className='text-center'>{description}</p>

      </Container>

      {children}

      <Footer/>

    </div>
  )
}

export default Base
