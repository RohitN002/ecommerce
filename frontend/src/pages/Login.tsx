import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const [email,setEmail]=useState<string>('')
const [password,setPassword]=useState<string>('')


const handleFormSubmit=(e:React.FormEvent)=>{
e.preventDefault()
}
  return (
    <div>
        <h3>login</h3>
        <form onSubmit={handleFormSubmit}>

            <input type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter your Emailid ' />
<br/>
            <input type="password" 
            placeholder='enter your password'
            onChange={(e)=>setPassword(e.target.value)}
            value={password} /> <br/> 
              <Link to='/ForgotPassword'> Forgot password ?</Link>
            <button> Login</button>
            <p>Didn't have an account <Link to='/signup'>Create a new account</Link></p>
        </form>
    </div>
  )
}

export default Login