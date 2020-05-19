import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import ProfileForm from './ProfileForm'

function UserScreens  (props) {
    return (
      <div className='user-screens'>

      <Route exact path="/home"
        render={() => (
          <div>
            <Home currentUser={props.currentUser} />
          </div>
        )}
        />
        
        <Route exact path="/my-profile"
        render={() => (
          <div>
            <Profile currentUser={props.currentUser} />
          </div>
        )}
        />
        
        <Route exact path="/edit-profile"
        render={() => (
          <div>
            <ProfileForm currentUser={props.currentUser} />
          </div>
        )}
      />

    </div> 
    )
    
  }


export default UserScreens;