import PageContainer from "./PageContainer";

import React from "react";
import MemberCard from "../cards/MemberCard";
import MemberCardFull from "../cards/MemberCardFull";

class MembersPage extends PageContainer {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "members",
      url: "https://api.myjson.com/bins/19781g",
      filters: [],
      searchWord: null,
      results: 0,
      data: null,
      membersUrl: "https://api.myjson.com/bins/cgmc0",
      membersData: [],
      uniqueID: null
    };
  }

  componentDidMount() {
    fetch(this.state.membersUrl)
      .then(result => result.json())
      .then(result => {
        this.setState({
          membersData: result
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
      return this.state.membersData.map(item => (
        <MemberCard
          onClick={() => this.getUniqueID(item)}
          id={item.id}
          photo={item.photo}
          surname={item.surname}
          name={item.name}
          telephone={item.telephone}
          address={item.address.map(address => `${address} `)}
          organisation={item.organisation}
          position={item.position}
        />
      ));
    } else {
      const { uniqueID } = this.state;
      return (
        <MemberCardFull
          onClick={this.goBack}
          id={uniqueID.id}
          photo={uniqueID.photo}
          name={uniqueID.name}
          surname={uniqueID.surname}
          address={uniqueID.address.map(address => `${address} `)}
          postCode={uniqueID.postCode}
          dateOfBirth={uniqueID.dateOfBirth}
          phoneIcon={uniqueID.phoneIcon}
          telephone={uniqueID.telephone}
          telephone1={uniqueID.telephone1}
          email={uniqueID.email}
          website={uniqueID.website}
          organisation={uniqueID.organisation}
          organisationFeesPaid={uniqueID.organisationFeesPaid}
          city={uniqueID.city}
          country={uniqueID.country}
        />
      );
    }
  }
}

export default MembersPage;
