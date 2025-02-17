import { useState } from 'react'
import './Login.css'
const Login = () => {

  const [currentState,setCurrState]  = useState("Sign Up");


  return (
    <div className="login">
      <img src="" alt="" className='logo'/>
      <form className="login-form">
        <h2>{currentState}</h2>
        {currentState === "Sign Up"? <input type="text" placeholder='username' className="form-input" required/> :null }
        <input type="email" placeholder='Email Address' className="form-input" ></input>
        <input type="password" placeholder='password' className="form-input" ></input>
        <button type='submit'> {currentState === "Sign Up" ? "Create Account" : "Login Now"}</button>
        <div className="login-terms">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>

        </div>
        <div className="login-forgot">
          {
            currentState === "Sign Up"
            ?<p className="login-toggle"> Already have a account <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            : <p className="login-toggle"> Create an account <span onClick={()=>setCurrState("Sign Up")}>click here</span></p> 
          }
          
         
         </div>
        
      </form>
    </div>
  )
}

export default Login
