import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
      <Link to='/home'>Home</Link>
      <Link to='/townhall'>Town Hall</Link>
      <Link to='/lounge'>Lounge</Link>
      <Link to='/my-profile'>My Profile</Link>
    </div>
  )
}