import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class ModuleSignIn extends React.Component {
  getUsersDB () {
    /*let usersData;
    if (localStorage.getItem("loggedInUser") == null) {
      const url = "./src/data/users.json";
      console.log(url)
      fetch(url, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        localStorage.setItem("loggedInUser", JSON.stringify(data));
        usersData = data;
      })
    } else {
      usersData = JSON.parse(localStorage.getItem("loggedInUser"));
      
      
    }*/
    let usersData = [
      {
        "userId": 1,
        "userName": "test",
        "userEmail": "test@test.com",
        "isAdmin": 1,
        "password": "test123"
      },
      {
        "userId": 2,
        "userName": "test2",
        "userEmail": "test2@test.com",
        "isAdmin": 0,
        "password": "test123"
      }
    ];
    return usersData;
  }

  logInUser () {
    let userdb = this.getUsersDB();
    let email = document.querySelector('#loginEmail1').value;
    let password = document.querySelector('#loginPassword1').value;
    let appState = {};
    for (let i = 0; i < userdb.length; i++) {
      if (userdb[i].userEmail === email && userdb[i].password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(userdb[i]));
        appState.loggedIn = true;
        appState.userName = userdb[i].userName;
        localStorage.setItem("appState", JSON.stringify(appState));
        document.querySelector('.modal.fade.show').click();
        ReactDOM.render(<App loggedIn={true} userName={appState.userName} />, document.getElementById('root'));
        break;
      }
    }
  }

  render() {
    return (
      <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="loginEmail1">Email address</label>
                  <input type="email" className="form-control" id="loginEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword1">Password</label>
                  <input type="password" className="form-control" id="loginPassword1" placeholder="Password"/>
                </div>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.logInUser.bind(this)}>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



