import React, { Component } from "react";
import "./TrainingCard.css";

// JSON link:
// https://api.myjson.com/bins/1hfqi0

const TrainingCard = ({
  id,
  logo,
  nameTraining,
  descriptionTraining,
  dateTraining,
  eligibleCountries,
  city,
  country
}) => (
  <div key={id} className="trainingCard">
    <div className="trainingCard__left">
      <img
        className="trainingCard__image"
        src={`${logo}`}
        alt={`${nameTraining}`}
      />
    </div>

    <div className="trainingCard__center">
      <p className="trainingCard__text">{nameTraining}</p>
      <p className="trainingCard__text">{descriptionTraining}</p>
      <p className="trainingCard__text">{dateTraining}</p>
      <p className="trainingCard__text">
        Eligible Countries : {eligibleCountries}
      </p>
    </div>

    <div className="trainingCard__right">
      <p className="trainingCard__text">{city}</p>
      <p className="trainingCard__text">{country}</p>
    </div>
  </div>
);

export default TrainingCard;
