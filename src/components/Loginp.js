import React from 'react'
import './styles/Login.css'
function Loginp() {
  return (
<div className='header'>
     
     <div className='App'>
       <div className='loginContainer'>
         <h1>Welcome back</h1>
         <div className='input-container'>
           <label>Username</label>
           <input type='text' required/>
           
         </div>
         <div className='input-container'>
           <label>Password</label>
           <input type='password' required/>
           
         </div>
         <a href='/forgotpassword'>Forgot password?</a>
         <a href='/createnewaccount'>Create new account</a>
         <button className='loginBut'>
           <p>Login</p>
         </button>
         <button className='siG'>
           <img
           src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
           alt="Trees"
           height="30"
         />
         <p>Sign in with Google</p>
         </button>
 
       </div>
     </div>
     </div>
  )
}

export default Loginp
