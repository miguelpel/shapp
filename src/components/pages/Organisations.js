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
      return this.state.organisationsData.map(item => (
        <OrganisationsCard
          onClick={() => this.getUniqueID(item)}
          id={item.id}
          organisationLogo={item.organisationLogo}
          acronym={item.acronym}
          telephone={item.telephone}
          website={item.website}
          city={item.city}
          country={item.country}
        />
      ));
    } else {
      const { uniqueID } = this.state;
      return (
        <OrganisationsCardFull
          onClick={this.goBack}
          key={uniqueID.id}
          organisationLogo={uniqueID.organisationLogo}
          acronym={uniqueID.acronym}
          address={uniqueID.address}
          postCode={uniqueID.postCode}
          PObox={uniqueID.PObox}
          referee={uniqueID.referee}
          telephone={uniqueID.telephone}
          telephone1={uniqueID.telephone1}
          website={uniqueID.website}
          organisationType={uniqueID.organisationType}
          PICnumber={uniqueID.PICnumber}
          nationalId={uniqueID.nationalId}
          cedex={uniqueID.cedex}
          department={uniqueID.department}
          fax={uniqueID.fax}
          fullLegalName={uniqueID.fullLegalName}
          city={uniqueID.city}
          country={uniqueID.country}
          refereePosition={uniqueID.refereePosition}
          mail={uniqueID.mail}
          profit={uniqueID.profit}
        />
      );
    }
  }
}

export default OrganisationsPage;
