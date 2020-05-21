import React from 'react';
import Paw from '../services/Paw.png'

const Login = (props) => {
  return (
    <div className='auth-container'>

      {props.currentUser ?
        '' :
        <div className='landing'>
        <img className="paw-image" src={Paw} />

        <div className="container-text">
          <p className='wufph'>wufph.</p>
          <p className="connect-text">A new way to connect with Datadog 
          <br />- <span className="purple-text"> worldwide</span> 
          </p>
            
        <form className='auth-form' onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
          props.history.push('/');
        }} >
          <input name="email" type="text" placeholder="Enter your email" value={props.formData.email} onChange={props.handleChange} />
          <input name="password" type="password" placeholder="Enter your password" value={props.formData.password} onChange={props.handleChange} />
          <div className='auth-buttons'>
            <button>Go</button>
          </div>

          </form>
        </div>
      </div> 
      }
    </div>
  )
}

export default Login;