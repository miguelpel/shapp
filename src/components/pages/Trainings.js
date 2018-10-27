import PageContainer from "./PageContainer";

import React from "react";
import TrainingCard from "../cards/TrainingCard";
import TrainingCardFull from "../cards/TrainingCardFull";

class TrainingsPage extends PageContainer {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "trainings",
      url: "https://api.myjson.com/bins/19781g",
      filters: [],
      searchWord: null,
      results: 0,
      data: null,
      trainingUrl: "https://api.myjson.com/bins/1hfqi0",
      trainingData: [],
      uniqueID: null
    };
  }

  componentDidMount() {
    fetch(this.state.trainingUrl)
      .then(result => result.json())
      .then(result => {
        this.setState({
          trainingData: result
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
      return this.state.trainingData.map(card => (
        <TrainingCard onClick={() => this.getUniqueID(card)} card={card} />
      ));
    } else {
      return (
        <TrainingCardFull onClick={this.goBack} card={this.state.uniqueID} />
      );
    }
  }
}

export default TrainingsPage;
