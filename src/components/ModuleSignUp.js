import React from 'react';

function ModuleSignUp () {
    return (
      <div className="modal fade" id="registrate" tabindex="-1" role="dialog" aria-labelledby="registrate" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
                <form>
                    <div className="form-group">
                      <label for="registrateEmail1">Choose your name</label>
                      <input type="text" className="form-control" id="registrateName" aria-describedby="registrateName" placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                      <label for="registrateEmail1">Email address</label>
                      <input type="email" className="form-control" id="registrateEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label for="registratePassword1">Password</label>
                      <input type="password" className="form-control" id="registratePassword1" placeholder="Password"/>
                    </div>
                  </form>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ModuleSignUp;


