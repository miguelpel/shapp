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
      return this.state.trainingData.map(item => (
        <TrainingCard
          onClick={() => this.getUniqueID(item)}
          key={item.id}
          logo={item.logo}
          nameTraining={item.nameTraining}
          descriptionTraining={item.descriptionTraining}
          dateTraining={item.dateTraining}
          eligibleCountries={item.eligibleCountries.map(item => (
            <img
              key={`${item}`}
              className="flag"
              src={`${item}`}
              alt="flag logo"
            />
          ))}
          city={item.city}
          country={item.country}
        />
      ));
    } else {
      const { uniqueID } = this.state;
      return (
        <TrainingCardFull
          onClick={this.goBack}
          id={uniqueID.id}
          logo={uniqueID.logo}
          descriptionTraining={uniqueID.descriptionTraining}
          city={uniqueID.city}
          country={uniqueID.country}
          dateTraining={uniqueID.dateTraining}
          eligibleCountries={uniqueID.eligibleCountries.map((item, i) => (
            <img className="flag" key={i} src={`${item}`} alt={item} />
          ))}
          description1={uniqueID.description1}
          description2={uniqueID.description2}
          costs={uniqueID.costs.map(item => (
            <li>{item}</li>
          ))}
          deadline={uniqueID.deadline}
          infoletter={uniqueID.infoletter}
          applicationForm={uniqueID.applicationForm}
          calendar={uniqueID.calendar}
          mail={uniqueID.mail}
          comment={uniqueID.comment}
        />
      );
    }
  }
}

export default TrainingsPage;
