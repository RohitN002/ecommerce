import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DefaultRoutes } from '../routes'
const Signup = () => {
  const [name,setName]=useState<string>('')
  const [email,setEmail]=useState<string>('')
  const [password,setPassword]=useState<string>('')
  const [confirmPassword,setConfirmPassword]=useState<string>('')

const handleSiginupSubmit=(e:React.FormEvent)=>{
  e.preventDefault()

}
  return (
    <div>
        <h3>Create a new account </h3>
     <form onSubmit={handleSiginupSubmit}>
        <input type="text" value={name} 
        onChange={(e)=>setName(e.target.value)}
        placeholder='enter your name' />
        <br/>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email adress'/>
<br/>
        <input type="password" placeholder='enter password'  onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <br/>
        <input type="password" placeholder='enter confirm password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}
          />
<br/>
        <button type='submit'>create</button>
        <p>Already have a account <Link to={DefaultRoutes.LOGIN}>Login</Link></p>
     </form>
    </div>
  )
}

export default Signup