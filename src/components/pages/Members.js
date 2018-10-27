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
      return this.state.membersData.map(card => (
        <MemberCard onClick={() => this.getUniqueID(card)} card={card} />
      ));
    } else {
      return (
        <MemberCardFull onClick={this.goBack} card={this.state.uniqueID} />
      );
    }
  }
}

export default MembersPage;
