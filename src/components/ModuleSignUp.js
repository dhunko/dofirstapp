import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class ModuleSignUp extends React.Component {
  getUsersDB () {
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

  signUpNewUser() {
    let userdb = this.getUsersDB();
    let name = document.querySelector('#registrateName').value;
    let email = document.querySelector('#registrateEmail1').value;
    let password = document.querySelector('#registratePassword1').value;
    let appState = {};

    for (let i = 0; i < userdb.length; i++) {
      if (userdb[i].userEmail !== email) {
        userdb.push({
          "userId": userdb.length + 1,
          "userName": name,
          "userEmail": email,
          "isAdmin": 0,
          "password": password
        });
        localStorage.setItem("loggedInUser", JSON.stringify(userdb[i]));
        appState.loggedIn = true;
        appState.userName = name;
        localStorage.setItem("appState", JSON.stringify(appState));
        //send updated data to DB
        localStorage.setItem("usersData", JSON.stringify(userdb));
        document.querySelector('.modal.fade.show').click();
        ReactDOM.render(<App loggedIn={true} userName={appState.userName} />, document.getElementById('root'));
        break;
      }
    }
  }

  render() {
    return (
      <div className="modal fade" id="registrate" tabIndex="-1" role="dialog" aria-labelledby="registrate" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
                <form>
                    <div className="form-group">
                      <label htmlFor="registrateEmail1">Choose your name</label>
                      <input type="text" className="form-control" id="registrateName" aria-describedby="registrateName" placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="registrateEmail1">Email address</label>
                      <input type="email" className="form-control" id="registrateEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="registratePassword1">Password</label>
                      <input type="password" className="form-control" id="registratePassword1" placeholder="Password"/>
                    </div>
                  </form>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this.signUpNewUser.bind(this)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


