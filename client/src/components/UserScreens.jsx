import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import MyProfile from './MyProfile'
import ProfileForm from './ProfileForm'
import Profile from './Profile'
import Community from './Community'

function UserScreens(props) {
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
            <MyProfile currentUser={props.currentUser} />
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

      <Route exact path={`/profile/:user_id`}
        render={(props) => {
          const { user_id } = props.match.params;
          return <Profile user_id={user_id} />
        }}
      />
      
      <Route exact path="/community"
        render={() => (
          <div>
            <Community/>
          </div>
        )}
      />

    </div>
  )

}


export default UserScreens;