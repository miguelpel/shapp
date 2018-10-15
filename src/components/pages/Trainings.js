import PageContainer from "./PageContainer";

import React, { Component } from "react";
import TrainingCard from "../cards/TrainingCard";

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
      trainingUrl: "https://api.myjson.com/bins/wjjpw",
      trainingData: []
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

  render() {
    const renderTrainings = this.state.trainingData.map(item => {
      return (
        <TrainingCard
          id={item.id}
          logo={item.logo}
          nameTraining={item.nameTraining}
          descriptionTraining={item.descriptionTraining}
          dateTraining={item.dateTraining}
          eligibleCountries={item.eligibleCountries.map(item => {
            return (
              <img
                key={`${item}`}
                className="flag"
                src={`${item}`}
                alt="flag logo"
              />
            );
          })}
          city={item.city}
          country={item.country}
        />
      );
    });

    return <div>{renderTrainings}</div>;
  }
}

export default TrainingsPage;
