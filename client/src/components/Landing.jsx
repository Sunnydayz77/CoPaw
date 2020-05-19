import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className='landing'>
      <h3>Welcome to CoPaw, please login or register to get started</h3>
      <Link to='/login'>
        <button>Login</button>
      </Link>
      <Link to='/register'>
        <button>Register</button>
      </Link>
    </div>
  )
}