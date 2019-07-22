import React from 'react';

function Header () {
      return (
        <header>
          <div className="container">
            <div className="row">
              <div className="col-9">
                <h3 className="logo"><span>DO</span>First</h3>
              </div>
              <div className="col">
                <div className="nav">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#login">
                        Sign In
                    </button>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#registrate">
                        Sign Up
                    </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      );
  }

  
export default Header;