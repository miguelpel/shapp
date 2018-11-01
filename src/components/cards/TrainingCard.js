import React, { Component } from "react";
import "./trainingCard.css";

// JSON link:
// https://api.myjson.com/bins/1hfqi0

const TrainingCard = ({ onClick, card }) => (
  <div onClick={onClick} key={card.id} className="trainingCard">
    <div className="trainingCard__left">
      <img
        className="trainingCard__image"
        src={`${card.logo}`}
        alt={`${card.nameTraining}`}
      />
    </div>

    <div className="trainingCard__center">
      <p className="trainingCard__text">{card.nameTraining}</p>
      <p className="trainingCard__text">{card.descriptionTraining}</p>
      <p className="trainingCard__text">{card.dateTraining}</p>
      <p className="trainingCard__text">
        Eligible Countries :{" "}
        {card.eligibleCountries.map((flag, i) => (
          <img className="flag" key={i} src={`${flag}`} alt={flag} />
        ))}
      </p>
    </div>

    <div className="trainingCard__right">
      <p className="trainingCard__text">{card.city}</p>
      <p className="trainingCard__text">{card.country}</p>
    </div>
  </div>
);

export default TrainingCard;
