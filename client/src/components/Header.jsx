import React from 'react'
import Nav from './Nav'

export default function Header(props) {
  return (
    <div className='header'>
      <h1>CoPaws</h1>

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