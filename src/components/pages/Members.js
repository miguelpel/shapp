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
      membersData: []
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

  // render() {
  //   const renderMembers = this.state.membersData.map(item => (
  //     <MemberCard
  //       id={item.id}
  //       photo={item.photo}
  //       surname={item.surname}
  //       name={item.name}
  //       telephone={item.telephone}
  //       address={item.address.map(address => `${address} `)}
  //       organisation={item.organisation}
  //       position={item.position}
  //     />
  //   ));

  //   return <React.Fragment>{renderMembers}</React.Fragment>;
  // }

  // MemberCardFull rendering

  render() {
    const renderMemberCardFull = this.state.membersData.map(item => {
      return (
        <MemberCardFull
          id={item.id}
          photo={item.photo}
          name={item.name}
          surname={item.surname}
          address={item.address.map(address => `${address} `)}
          postCode={item.postCode}
          dateOfBirth={item.dateOfBirth}
          phoneIcon={item.phoneIcon}
          telephone={item.telephone}
          telephone1={item.telephone1}
          email={item.email}
          website={item.website}
          organisation={item.organisation}
          organisationFeesPaid={item.organisationFeesPaid}
          city={item.city}
          country={item.country}
        />
      );
    });

    return <React.Fragment>{renderMemberCardFull}</React.Fragment>;
  }
}

export default MembersPage;
