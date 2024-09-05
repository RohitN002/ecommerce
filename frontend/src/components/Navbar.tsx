import React from 'react'
import { Link } from 'react-router-dom'
const logo = ''
const Navbar:React.FC = () => {
  return (
    <div className='Nav fixed-top'>
<div className='logo'>
<img src={logo} alt="logo" />
</div>
<div>
  
    <Link to="/Login">Login</Link>

</div>
    </div>
  )
}

export default Navbar