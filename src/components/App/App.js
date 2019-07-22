import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Content';
import ModuleSignIn from '../ModuleSignIn';
import ModuleSignUp from '../ModuleSignUp';




function App({loggedIn = false, userName = "Owner"}) {
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