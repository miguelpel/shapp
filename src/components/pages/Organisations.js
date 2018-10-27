import PageContainer from "./PageContainer";

import React from "react";
import OrganisationsCard from "../cards/OrganisationsCard";
import OrganisationsCardFull from "../cards/OrganisationsCardFull";

class OrganisationsPage extends PageContainer {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "organisations",
      url: "https://api.myjson.com/bins/19781g",
      filters: [],
      searchWord: null,
      results: 0,
      data: null,
      organisationsUrl: "https://api.myjson.com/bins/y9tb4",
      organisationsData: [],
      uniqueID: null
    };
  }

  componentDidMount() {
    fetch(this.state.organisationsUrl)
      .then(result => result.json())
      .then(result => {
        this.setState({
          organisationsData: result
        });
      });
  }

  getUniqueID = value => {
    this.setState(prevState => ({
      uniqueID: (prevState.uniqueID = value)
    }));
  };

  goBack = () => {
    this.setState(prevState => ({
      uniqueID: (prevState.uniqueID = null)
    }));
  };

  render() {
    if (this.state.uniqueID === null) {
      return this.state.organisationsData.map(card => (
        <OrganisationsCard onClick={() => this.getUniqueID(card)} card={card} />
      ));
    } else {
      return (
        <OrganisationsCardFull
          onClick={this.goBack}
          card={this.state.uniqueID}
        />
      );
    }
  }
}

export default OrganisationsPage;
