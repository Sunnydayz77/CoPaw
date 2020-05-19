import React from 'react';

//Likuna: This component handles our register form
const Register = (props) => {

  return (
    <div  className="auth-container">
      <h2>Register</h2>

      <form className='auth-form' onSubmit={props.handleRegister} >
        <p>Email:</p>
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" placeholder='8 or more characters' value={props.formData.password} onChange={props.handleChange} />

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;