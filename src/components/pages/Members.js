import PageContainer from "./PageContainer";

import React from "react";
import MemberCard from "../cards/MemberCard";
import MemberCardFull from "../cards/MemberCardFull";
import Header from "../search/Header";

class MembersPage extends PageContainer {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "members",
      // url: "https://api.myjson.com/bins/19781g",
      // filters: [],
      // searchWord: null,
      // results: 0,
      // data: null,
      membersUrl: "https://api.myjson.com/bins/cgmc0",
      membersData: [],
      uniqueID: null,
      searchTerm: ""
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

  onSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    const { membersData, uniqueID, searchTerm } = this.state;

    if (uniqueID === null) {
      return (
        <div>
          <Header
            onChange={this.onSearchTerm}
            value={searchTerm}
            counter={`${
              membersData.filter(isSearched(searchTerm)).length
            } Member(s)`}
          />

          {membersData.filter(isSearched(searchTerm)).map(card => (
            <MemberCard onClick={() => this.getUniqueID(card)} card={card} />
          ))}
        </div>
      );
    } else {
      return <MemberCardFull onClick={this.goBack} card={uniqueID} />;
    }
  }
}

const isSearched = searchTerm => card =>
  card.name.toLowerCase().includes(searchTerm.toLowerCase());

export default MembersPage;
