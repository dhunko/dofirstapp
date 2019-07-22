import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ModuleSignIn from './components/ModuleSignIn';
import ModuleSignUp from './components/ModuleSignUp';




function App({loggedIn = false, userName = "Owner"}) {
    return (
      <div className="App">
        <Header loggedInUser = {loggedIn} name = {userName} />
        <Main loggedInUser = {loggedIn} />
        <Footer />
        <ModuleSignIn />
        <ModuleSignUp />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));


