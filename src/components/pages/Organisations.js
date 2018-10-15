import PageContainer from "./PageContainer";

import React, { Component } from "react";
import OrganisationsCard from "../cards/OrganisationsCard";

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
      organisationsUrl: "https://api.myjson.com/bins/qqkkk",
      organisationsData: []
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

  render() {
    const renderOrganisations = this.state.organisationsData.map(item => {
      return (
        <OrganisationsCard
          id={item.id}
          organisationLogo={item.organisationLogo}
          acronym={item.acronym}
          telephone={item.telephone}
          website={item.website}
          city={item.city}
          country={item.country}
        />
      );
    });

    return <div>{renderOrganisations}</div>;
  }
}

export default OrganisationsPage;
