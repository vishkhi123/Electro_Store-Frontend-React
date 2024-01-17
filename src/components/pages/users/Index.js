import React from 'react'
import Base from './Base'
import { Button } from 'react-bootstrap'
import {toast} from 'react-toastify'

const Index = () => {

  function showTostify(){
    toast.success("This is success Message")
  }


  return (
    <div>
      <Base description={'Welcome to Trending Store,We provide best items as you need.'} 
      title='Shop What you need'
      buttonEnabled={true}>
        <h1>Working on home Page</h1>

        <Button variant='success' onClick={showTostify}>Toastify Success</Button>
      </Base>
    </div>
  )
}

export default Index
