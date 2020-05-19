import React from 'react'
import Nav from './Nav'
import { ReactComponent as Logo } from '../services/dd_icon_rgb.svg'

export default function Header(props) {
  return (
    <div className='header'>
      <h1>CoPaws</h1>
      <Logo/>

      {!props.currentUser ?
        ''
        :
        <div className='logged-in-header'>
          <Nav />
          <button onClick={props.handleLogout}>Logout</button>
        </div>
      }

    </div>
  )
}