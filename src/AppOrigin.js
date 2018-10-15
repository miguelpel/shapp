import React, { Component } from "react";
import "./App.css";

import PageContainer from "./components/pages/PageContainer";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Project</h1>
        <PageContainer />
      </div>
    );
  }
}

export default App;
