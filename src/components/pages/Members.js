import PageContainer from "./PageContainer";

import React, { Component } from "react";
import MemberCard from "../cards/MemberCard";

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
      membersUrl: "https://api.myjson.com/bins/13oarw",
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

  render() {
    const renderMembers = this.state.membersData.map(item => {
      return (
        <MemberCard
          id={item.id}
          photo={item.photo}
          surname={item.surname}
          name={item.name}
          telephone={item.telephone}
          address={item.address.map(address => `${address} `)}
          organisation={item.organisation}
          position={item.position}
        />
      );
    });

    return <div>{renderMembers}</div>;
  }
}

export default MembersPage;
