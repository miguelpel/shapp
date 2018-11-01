import PageContainer from "./PageContainer";

import React from "react";
import OrganisationsCard from "../cards/OrganisationsCard";
import OrganisationsCardFull from "../cards/OrganisationsCardFull";
import Header from "../search/Header";

class OrganisationsPage extends PageContainer {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "organisations",
      // url: "https://api.myjson.com/bins/19781g",
      // filters: [],
      // searchWord: null,
      // results: 0,
      // data: null,
      organisationsUrl: "https://api.myjson.com/bins/y9tb4",
      organisationsData: [],
      uniqueID: null,
      searchTerm: ""
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

  onSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    const { organisationsData, uniqueID, searchTerm } = this.state;

    if (uniqueID === null) {
      return (
        <div>
          <Header
            onChange={this.onSearchTerm}
            value={searchTerm}
            counter={`${
              organisationsData.filter(isSearched(searchTerm)).length
            } Organisation(s)`}
          />

          {organisationsData.filter(isSearched(searchTerm)).map(card => (
            <OrganisationsCard
              onClick={() => this.getUniqueID(card)}
              card={card}
            />
          ))}
        </div>
      );
    } else {
      return <OrganisationsCardFull onClick={this.goBack} card={uniqueID} />;
    }
  }
}

const isSearched = searchTerm => card =>
  card.acronym.toLowerCase().includes(searchTerm.toLowerCase());

export default OrganisationsPage;
