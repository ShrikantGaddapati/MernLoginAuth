import React,{useState} from 'react'
import "./login.css"
import axios from "axios"
import { useHistory } from 'react-router-dom'


const Login = ({setUserLogin}) => {

  const history=useHistory();
  const [user, setUser]=useState({
    email:"",
    password:"",

  })
  
  const handleChange=(e)=>{
    const {name, value}=e.target
    setUser({
      ...user,[name]:value
    })
  }

const logindata=(e)=>{
  axios.post("http://localhost:4000/login",user)
  .then(res=>{alert(res.data.message)
  setUserLogin(res.data.user)
  history.push("/")
})
}
  return (
    
    <div className='login'>

      <h1>Please login to continue</h1>
     <input  type="text"name="email" value={user.email} onChange={handleChange} placeholder='enter your email'/>
      <input type="password" name="password" value={user.password} onChange={handleChange}placeholder='enter your password'/>
      <div className='button' onClick={logindata} >Login</div>
      <div>or</div>
      <div className='button' onClick={()=>history.push("/register")}>Register</div>
      




    </div>
  )
}

export default Login