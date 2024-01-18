import React from 'react'
import Base from './Base'
import { Button } from 'react-bootstrap'
import {toast} from 'react-toastify'
import axios from 'axios'

const Index = () => {

  function showTostify(){
    toast.success("This is success Message")
  }

  const getData=()=>{
    toast.info("Getting Data from server")
    axios
    .get("http://localhost:9090/users")
    .then((data)=>{
      console.log(data)
      toast.success("Data Fetched")
    })
    .catch((error)=>{
      console.log(error)
      toast.error("Some thing went wrong")
    })
    
  }

  return (
    <div>
      <Base description={'Welcome to Trending Store,We provide best items as you need.'} 
      title='Shop What you need'
      buttonEnabled={true}>
        <h1>Working on home Page</h1>

        <Button variant='success' onClick={showTostify}>Toastify Success</Button>

        <Button variant='primary' className='m-2' onClick={getData}>GEt DAta</Button>
      </Base>
    </div>
  )
}

export default Index
