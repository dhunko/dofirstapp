import React from 'react';

function ModuleSignIn () {
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
                <button type="button" className="btn btn-primary">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ModuleSignIn;


