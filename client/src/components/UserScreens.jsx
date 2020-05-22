import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import MyProfile from './MyProfile'
import ProfileForm from './ProfileForm'
import Profile from './Profile'
import Map from './Map'
import Welcome from './Welcome'
import Team from './Team'
import Community from './Community'

function UserScreens(props) {
  console.log('userscreen props', props)
  return (
    <div className='user-screens'>

      <Route exact path="/"
        render={() => (
          <div>
            <Home currentUser={props.currentUser} history={props.history}/>
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

      <Route path={`/community/:interest_id`}
        render={(props) => {
          const { interest_id } = props.match.params;
          return <Community interest_id={interest_id} />
        }}
      />

      <Route exact path="/worldwide"
        render={() => (
          <div>
            <Map />
          </div>
        )}
      />

      <Route exact path="/welcome"
        render={() => (
          <div>
            <Welcome />
          </div>
        )}
      />


      <Route exact path="/team"
        render={() => (
          <div>
            <Team />
          </div>
        )}
      />

    </div>
  )

}


export default UserScreens;
