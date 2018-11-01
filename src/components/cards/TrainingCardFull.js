import React from "react";
import "./trainingCardFull.css";

const TrainingCardFull = ({ onClick, card }) => (
  <div className="trainingCardFull">
    <button className="btnGoBack" onClick={onClick}>
      Return to Trainings list
    </button>

    <div className="trainingCardFull__column">
      <img
        className="trainingCardFull__image"
        src={`${card.logo}`}
        alt={`${card.nameTraining}`}
      />

      <p className="trainingCardFull__text">{card.descriptionTraining}</p>
      <p className="trainingCardFull__text">
        Where: {card.city}, {card.country}
      </p>
      <p className="trainingCardFull__text">When: {card.dateTraining}</p>
      <p className="trainingCardFull__text">
        Eligible Countries:{" "}
        {card.eligibleCountries.map((flag, i) => (
          <img className="flag" key={i} src={`${flag}`} alt={flag} />
        ))}
      </p>
      <p className="trainingCardFull__text">
        Description 1: {card.description1}
      </p>
      <p className="trainingCardFull__text">
        Description 2: {card.description2}
      </p>

      <ul className="trainingCardFull__list">
        Costs:
        {card.costs.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p className="trainingCardFull__text">{card.deadline}</p>

      <div className="trainingCardFull__info">
        <div className="w-50">
          <p className="trainingCardFull__text">
            Infoletter: {card.infoletter}
          </p>
        </div>
        <div>
          <a className="btn" href={`${card.infoletter}`} target="_blank">
            Visit Page
          </a>
          <a className="btn" href={`${card.infoletter}`}>
            Copy Link
          </a>
        </div>
      </div>

      <div className="trainingCardFull__info">
        <div className="w-50">
          <p className="trainingCardFull__text">
            Application Form: {card.applicationForm}
          </p>
        </div>
        <div>
          <a className="btn" href={`${card.applicationForm}`} target="_blank">
            Visit Page
          </a>
          <a className="btn" href={`${card.applicationForm}`}>
            Copy Link
          </a>
        </div>
      </div>

      <div className="trainingCardFull__info">
        <div className="w-50">
          <p className="trainingCardFull__text">Calendar: {card.calendar}</p>
        </div>
        <div>
          <a className="btn" href={`${card.calendar}`} target="_blank">
            Visit Page
          </a>
          <a className="btn" href={`${card.calendar}`}>
            Copy Link
          </a>
        </div>
      </div>

      <div className="trainingCardFull__info">
        <div className="w-50">
          <p>E-mail: {card.mail}</p>
        </div>
        <div>
          <a className="btn" href={`mailto:${card.mail}`}>
            Send Mail
          </a>
        </div>
      </div>
    </div>

    <p className="trainingCardFull__text">Comment: {card.comment}</p>
  </div>
);

export default TrainingCardFull;
