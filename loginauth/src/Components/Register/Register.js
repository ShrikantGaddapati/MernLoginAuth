
import React,{useState} from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'


const Register=()=> {
  const history=useHistory();

const [user, setUser]=useState({
  name:"",
  email:"",
  password:"",
  reEnterPass:""
})

const handleChange=(e)=>{
  const {name, value}=e.target
  setUser({
    ...user,[name]:value
  })
}

const registerdata=()=>{
  const {name,email,password,reEnterPass}=user;

  if(name && email && password && (password===reEnterPass) ){
   axios.post("http://localhost:4000/register",user)
   .then(res=>{alert("Registered Successfully")
    history.push("/login")
  })
   //alert("posted");
  }
  else{
    alert("invalid");
  }
 
}
 return (
    <div className='register'>
      {console.log("user",user)}
      <h1>Please Register to continue</h1>
     <input  type="text" name="name" value={user.name} placeholder='enter your email' onChange={handleChange}/>
     <input  type="text" name="email" value={user.email} placeholder='enter your name' onChange={handleChange}/>
      <input type="password" name="password" value={user.password} placeholder='enter your password' onChange={handleChange}/>
      <input type="password" name="reEnterPass" value={user.reEnterPass} placeholder='Re-enter your password' onChange={handleChange}/>
      <div className='button' onClick={registerdata}>Register</div>
      <div>or</div>
      <div className='button' onClick={()=>history.push("/login")}>Login</div>
      </div>
  )
}

export default Register