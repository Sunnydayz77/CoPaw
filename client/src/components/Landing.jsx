import React from 'react'
import Paw from '../services/Paw.png'


export default function Landing() {
  return (
    <div className='landing'>
      <img src={Paw} />
      <p className='wufph'>wufph.</p>
      <p>A new way to connect with Datadog
       <br/>- worldwide
      </p>
    </div>
  )
}