import React from 'react'
import Nav from './Nav'
import { ReactComponent as Logo } from '../services/dd_logo_h_white.svg'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <div className='header'>
      <Link to='/'>
        <Logo className='header-logo' />
      </Link>

      {!props.currentUser ?
        <div className='public-buttons'>
          <Link to='/login' className='login-link'>Already Have an Account?</Link>
          <Link to='/register' ><button className='register-button'>Sign Up</button></Link>
        </div>

        :
        <div className='logged-in-header'>
          <Nav
            handleLogout={props.handleLogout}
          />
        </div>
      }

    </div>
  )
}