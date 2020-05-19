import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Header from './components/Header'
import UserScreens from './components/UserScreens'

import './App.css';

import {
  loginUser,
  registerUser,
  verifyUser
} from './services/auth-helper'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
      currentUser: null,
      authFormData: {
        email: "",
        password: ""
      }
    }
  }



  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
    this.props.history.push("/");
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
    }
  }

  componentDidMount = () => {
    this.handleVerify()
  }

  // -------------------------
  // -------------------------

  render() {
    return (

      <div className="App">
        <Header
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
          history={this.props.history}
        />

        {!this.state.currentUser ?
          
          //screens to show when logged out
          <div className='public-screens'>
            <Route
              exact path="/"
              render={() => (
                <Landing />
              )}
            />

            <Route exact path="/login" render={(props) => (
              <Login
                history={props.history}
                handleLogin={this.handleLogin}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
                currentUser={this.state.currentUser}
              />)} />

            <Route exact path="/register" render={() => (
              <Register
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData} />)} />
          </div>

          :
        
          //screens to show when logged in
        <UserScreens currentUser={this.state.currentUser}/>
        }

      </div>

    );

  }

}

export default withRouter(App);