import React from 'react'

export default function Home(props) {
  return (
    <div className='landing'>
      <h3>{`Hello ${props.currentUser.username}`}</h3>
    </div>
  )
}