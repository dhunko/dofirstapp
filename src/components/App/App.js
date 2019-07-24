import React from 'react';
import './app.css';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Content';
import ModuleSignIn from '../ModuleSignIn';
import ModuleSignUp from '../ModuleSignUp';

function App({loggedIn = false, userName = "Owner"}) {
    if (localStorage.hasOwnProperty('appState')) {
      let stateObj = JSON.parse(localStorage.getItem("appState"));
      loggedIn = stateObj.loggedIn;
      userName = stateObj.userName;
    }
    return (
      <React.Fragment>
        <Header loggedInUser = {loggedIn} name = {userName} />
        <Main loggedInUser = {loggedIn} />
        <Footer />
        <ModuleSignIn />
        <ModuleSignUp />
      </React.Fragment>
    );
  }

export default App;