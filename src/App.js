import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import * as routes from "./constants/routes";

import NavBar from "./components/menu/NavBar";
import PageContainer from "./components/pages/page_container/PageContainer";
// import Trainings from './components/pages/Trainings';
// import Organisations from './components/pages/Organisations';
// import Members from './components/pages/Members';
// import Manage from './components/pages/Manage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="AppContent">
          <div className="menu">
            <NavBar />
          </div>

          <div className="page">
            <Route
              exact
              path={routes.TRAININGS}
              render={props => (
                <PageContainer {...props} pageName="trainings" />
              )}
            />
            <Route
              exact
              path={routes.ORGANISATIONS}
              render={props => (
                <PageContainer {...props} pageName="organisations" />
              )}
            />
            <Route
              exact
              path={routes.MEMBERS}
              render={props => <PageContainer {...props} pageName="members" />}
            />
            <Route
              exact
              path={routes.MANAGE}
              render={props => <PageContainer {...props} pageName="manage" />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
