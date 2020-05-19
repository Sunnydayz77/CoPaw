import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
  return (
    <div className='auth-container'>
      <h2>Login</h2>

      {props.currentUser ?
        '' :
        <form className='auth-form' onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
          props.history.push('/home');
        }} >
          <p>Email:</p>
          <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
          <p>Password:</p>
          <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
          <div className='auth-buttons'>
            <button>Login</button>
          </div>

        </form>
      }
    </div>
  )
}

export default Login;