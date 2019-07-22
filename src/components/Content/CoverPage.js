import React from 'react';

function CoverPage () {
    return (
      <main>
        <div className="cover-page">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1 className="logo"><span>DO</span>First</h1>
                <p className="lead">Cover is a one-page  template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p className="lead">
                  <a href="t" className="btn btn-lg btn-secondary" data-toggle="modal" data-target="#registrate">Sign Up</a>
                  <a href="t" className="btn btn-lg btn-secondary" data-toggle="modal" data-target="#login">Sign In</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

export default CoverPage;