import React from 'react'
import Paw from '../services/Paw.png'


export default function Landing() {
  return (
    <div className='landing'>
        <img className="paw-image" src={Paw} />

      <div className="container-text">
        <p className='wufph'>wufph.</p>
        <p className="connect-text">A new way to connect with Datadog 
          <br />- <span className="purple-text"> worldwide</span> 
        </p>
      </div>
    </div>
  )
}