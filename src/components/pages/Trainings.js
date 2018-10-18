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

  // render() {
  //   const renderTrainings = this.state.trainingData.map(item => (
  //     <TrainingCard
  //       id={item.id}
  //       logo={item.logo}
  //       nameTraining={item.nameTraining}
  //       descriptionTraining={item.descriptionTraining}
  //       dateTraining={item.dateTraining}
  //       eligibleCountries={item.eligibleCountries.map(item => (
  //         <img
  //           key={`${item}`}
  //           className="flag"
  //           src={`${item}`}
  //           alt="flag logo"
  //         />
  //       ))}
  //       city={item.city}
  //       country={item.country}
  //     />
  //   ));

  //   return <div>{renderTrainings}</div>;
  // }

  // TrainingCardFull

  render() {
    const renderTrainingCardFull = this.state.trainingData.map(item => {
      return (
        <TrainingCardFull
          id={item.id}
          logo={item.logo}
          descriptionTraining={item.descriptionTraining}
          city={item.city}
          country={item.country}
          dateTraining={item.dateTraining}
          eligibleCountries={item.eligibleCountries.map((item, i) => (
            <img className="flag" key={i} src={`${item}`} alt={item} />
          ))}
          description1={item.description1}
          description2={item.description2}
          costs={item.costs.map(item => (
            <li>{item}</li>
          ))}
          deadline={item.deadline}
          infoletter={item.infoletter}
          applicationForm={item.applicationForm}
          calendar={item.calendar}
          mail={item.mail}
          comment={item.comment}
        />
      );
    });
    return <div>{renderTrainingCardFull}</div>;
  }
}

export default TrainingsPage;
