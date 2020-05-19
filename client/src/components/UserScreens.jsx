import React from 'react'
import { Route} from 'react-router-dom'
import Home from './Home'
import MyProfile from './MyProfile'
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
        render={() => (
          <div>
            <Profile/>
          </div>
        )}
        />

    </div> 
    )
    
  }


export default UserScreens;