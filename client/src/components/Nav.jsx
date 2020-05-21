import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div className='nav'>
      <Link to='/home'>Home</Link>
      <Link to='/team'>Team</Link>
      <Link to='/worldwide'>Worldwide</Link>
      <Link to='/my-profile'>Profile</Link>
      <button className="logout-button" onClick={props.handleLogout}>Logout</button>
    </div>
  )
}