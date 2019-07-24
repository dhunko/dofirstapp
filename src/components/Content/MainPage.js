import React from 'react';
import './mainpage.css';

function MainPage () {
    return (
      <main>
        <div className='container'>
          <div className="row">
            <div className="col-sm">
              <p>
                <a className="btn btn-primary" data-toggle="collapse" href="#dashboadTest1" role="button" aria-expanded="false" aria-controls="dashboadTest1">
                  Dashboad test
                </a>
                <button className="btn btn-primary" type="button" aria-controls="AddDashboad">
                  Add Dashboad
                </button>
              </p>
              <div className="collapse show container-fluid" id="dashboadTest1">
                <div className="row">
                  <div className="col-6">
                    <div className="card card-body dashboardContent">
                      <div className="row">
                        <div className="col dashboardBlock dashboardBlockINu">Column</div>
                        <div className="col dashboardBlock dashboardBlockIU">Column</div>
                        <div className="w-100"></div>
                        <div className="col dashboardBlock dashboardBlockNiNu">Column</div>
                        <div className="col dashboardBlock dashboardBlockNiU">Column</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 taskList">
                    <div className="taskListHeader">
                      <span>Task List</span>
                      <button type="button" className="btn btn-primary addTask">Add task</button>
                    </div>
                    <ol className="taskListContent">
                      <li>task test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test</li>
                      <li>task  test test test test test test test test test test test test test test test test test test test testt</li>
                      <li>task test</li>
                      <li>task test test test test test test test test test test test test test</li>
                      <li>task test</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

export default MainPage;