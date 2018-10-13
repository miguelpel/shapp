import React, { Component } from "react";

class PageBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "Greece",
      city: "Athens",
      organisation: "SHA"
    };
  }

  render() {
    return <div>PageBody</div>;
  }
}

export default PageBody;
