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
import Trainings from "./components/pages/Trainings";
import Organisations from "./components/pages/Organisations";
import Members from "./components/pages/Members";
import Manage from "./components/pages/Manage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="AppContent">
          <div className="menu">
            <NavBar />
          </div>

          <div className="page">
            <Route exact path={routes.TRAININGS} component={Trainings} />
            <Route
              exact
              path={routes.ORGANISATIONS}
              component={Organisations}
            />
            <Route exact path={routes.MEMBERS} component={Members} />
            <Route exact path={routes.MANAGE} component={Manage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
