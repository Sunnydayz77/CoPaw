import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div className='nav'>
      <Link to='/home'>Home</Link>
      <Link to='/townhall'>Town Hall</Link>
      <Link to='/community'>Community</Link>
      <Link to='/my-profile'>My Profile</Link>
      <button className="logout-button" onClick={props.handleLogout}>Logout</button>
    </div>
  )
}