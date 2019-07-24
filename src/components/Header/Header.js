import React from 'react';
import "./header.css";

function LoggedInHeaderBlock(props) {
  return (
    <React.Fragment>
      <span>Hello, {props.name}</span>
      <button type="button" className="btn btn-primary" onClick={() => {
          localStorage.removeItem('appState'); 
          localStorage.removeItem('loggedInUser'); 
          window.location.reload();
        }}>
          Log Out
      </button>
    </React.Fragment>
  );
}

function NotLoggedInHeaderBlock () {
  return (
    <React.Fragment>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#login">
        Sign In
      </button>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#registrate">
          Sign Up
      </button>
    </React.Fragment>
  );
}

function HeaderBlock (props) {
  return (
    props.loggedInUser ? <LoggedInHeaderBlock  loggedInUser = {props.loggedInUser}   name={props.name} /> : <NotLoggedInHeaderBlock />
  );
}

function Header (props) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h3 className="logo"><span>DO</span>First</h3>
          </div>
          <div className="col">
            <div className="nav">
              <HeaderBlock loggedInUser = {props.loggedInUser} name={props.name}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

  
export default Header;