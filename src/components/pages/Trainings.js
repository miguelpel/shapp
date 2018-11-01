import PageContainer from "./PageContainer";

import React from "react";
import TrainingCard from "../cards/TrainingCard";
import TrainingCardFull from "../cards/TrainingCardFull";

import Header from "../search/Header";
import store from "../../redux/store";
import { addCardsData } from "../../redux/actions";

class TrainingsPage extends PageContainer {
  constructor(props) {
    super(props);
    this.state = {
      pageName: "trainings",
      // url: "https://api.myjson.com/bins/19781g",
      // filters: [],
      // searchWord: null,
      // results: 0,
      // data: null,
      trainingUrl: "https://api.myjson.com/bins/1hfqi0",
      trainingData: [],
      uniqueID: null,
      searchTerm: ""
    };
    console.log(this.state);
  }

  // componentDidMount() {
  //   fetch(this.state.trainingUrl)
  //     .then(result => result.json())
  //     .then(result => {
  //       this.setState({
  //         trainingData: result
  //       });
  //     });
  // }

  componentDidMount() {
    fetch(this.state.trainingUrl)
      .then(result => result.json())
      .then(result => {
        store.dispatch(addCardsData(result));
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
    const { trainingData, uniqueID, searchTerm } = this.state;

    if (uniqueID === null) {
      return (
        <div>
          <Header
            onChange={this.onSearchTerm}
            value={searchTerm}
            counter={`${
              trainingData.filter(isSearched(searchTerm)).length
            } Training(s)`}
          />

          {trainingData.filter(isSearched(searchTerm)).map(card => (
            <TrainingCard onClick={() => this.getUniqueID(card)} card={card} />
          ))}
        </div>
      );
    } else {
      return <TrainingCardFull onClick={this.goBack} card={uniqueID} />;
    }
  }
}

const isSearched = searchTerm => card =>
  card.nameTraining.toLowerCase().includes(searchTerm.toLowerCase());

const mapStateToProps = state => {
  return {
    trainingData: state.cardsData
  };
};

export default TrainingsPage;
