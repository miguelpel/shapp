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

  // render() {
  //   const renderOrganisations = this.state.organisationsData.map(item => (
  //     <OrganisationsCard
  //       id={item.id}
  //       organisationLogo={item.organisationLogo}
  //       acronym={item.acronym}
  //       telephone={item.telephone}
  //       website={item.website}
  //       city={item.city}
  //       country={item.country}
  //     />
  //   ));

  //   return <React.Fragment>{renderOrganisations}</React.Fragment>;
  // }

  // OrganisationsCardFull

  render() {
    const renderOrganisationsCardFull = this.state.organisationsData.map(
      item => (
        <OrganisationsCardFull
          key={item.id}
          organisationLogo={item.organisationLogo}
          acronym={item.acronym}
          address={item.address}
          postCode={item.postCode}
          PObox={item.PObox}
          referee={item.referee}
          telephone={item.telephone}
          telephone1={item.telephone1}
          website={item.website}
          organisationType={item.organisationType}
          PICnumber={item.PICnumber}
          nationalId={item.nationalId}
          cedex={item.cedex}
          department={item.department}
          fax={item.fax}
          fullLegalName={item.fullLegalName}
          city={item.city}
          country={item.country}
          refereePosition={item.refereePosition}
          mail={item.mail}
          profit={item.profit}
        />
      )
    );

    return <React.Fragment>{renderOrganisationsCardFull}</React.Fragment>;
  }
}

export default OrganisationsPage;
