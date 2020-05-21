import React from 'react';
import Paw from '../services/Paw.png'

//Likuna: This component handles our register form
const Register = (props) => {

  return (
    <div className="auth-container">

    <div className='landing'>
        <img className="paw-image" src={Paw} />

        <div className="container-text">
          <p className='wufph'>wufph.</p>
          <p className="connect-text">A new way to connect with Datadog 
          <br />- <span className="purple-text"> worldwide</span> 
        </p>
      
        <form className='auth-form' onSubmit={props.handleRegister} >
          <input name="email" type="text" placeholder="Enter your email" value={props.formData.email} onChange={props.handleChange} />
          <input name="password" type="password" placeholder="Enter your password" value={props.formData.password} onChange={props.handleChange} />
          <p className="password-min">password must contain a minimum of 8 characters and at least 1 special character</p>
          <button>Go</button>
        </form>
        </div>
      </div>    
    </div>
  );
}

export default Register;