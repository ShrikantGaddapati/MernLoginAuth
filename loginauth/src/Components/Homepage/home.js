import React from 'react'
import "./home.css"

const home = ({setUserLogin}) => {
  return (
    <div className='homep'>
      <h1>Welcome to Homepage</h1>
<div className='button' onClick={()=>{setUserLogin({})}}>Logout!</div>    
    
    
    </div>
    
  )
}

export default home