import React from "react";
import "./trainingCardFull.css";

const TrainingCardFull = ({
  id,
  logo,
  nameTraining,
  descriptionTraining,
  dateTraining,
  eligibleCountries,
  city,
  country,
  description1,
  description2,
  costs,
  deadline,
  infoletter,
  applicationForm,
  calendar,
  mail,
  comment
}) => (
  <div key={id} className="trainingCardFull">
    <div className="trainingCardFull__column">
      <img
        className="trainingCardFull__image"
        src={`${logo}`}
        alt={`${nameTraining}`}
      />

      <p className="trainingCardFull__text">{descriptionTraining}</p>
      <p className="trainingCardFull__text">
        Where: {city}, {country}
      </p>
      <p className="trainingCardFull__text">When: {dateTraining}</p>
      <p className="trainingCardFull__text">
        Eligible Countries: {eligibleCountries}
      </p>
      <p className="trainingCardFull__text">Description 1: {description1}</p>
      <p className="trainingCardFull__text">Description 2: {description2}</p>

      <ul className="trainingCardFull__list">
        Costs:
        {costs}
      </ul>

      <p className="trainingCardFull__text">{deadline}</p>

      <div className="trainingCardFull__info">
        <div className="w-50">
          <p className="trainingCardFull__text">Infoletter: {infoletter}</p>
        </div>
        <div>
          <a className="btn" href={`${infoletter}`} target="_blank">
            Visit Page
          </a>
          <a className="btn" href={`${infoletter}`}>
            Copy Link
          </a>
        </div>
      </div>

      <div className="trainingCardFull__info">
        <div className="w-50">
          <p className="trainingCardFull__text">
            Application Form: {applicationForm}
          </p>
        </div>
        <div>
          <a className="btn" href={`${applicationForm}`} target="_blank">
            Visit Page
          </a>
          <a className="btn" href={`${applicationForm}`}>
            Copy Link
          </a>
        </div>
      </div>

      <div className="trainingCardFull__info">
        <div className="w-50">
          <p className="trainingCardFull__text">Calendar: {calendar}</p>
        </div>
        <div>
          <a className="btn" href={`${calendar}`} target="_blank">
            Visit Page
          </a>
          <a className="btn" href={`${calendar}`}>
            Copy Link
          </a>
        </div>
      </div>

      <div className="trainingCardFull__info">
        <div className="w-50">
          <p>E-mail: {mail}</p>
        </div>
        <div>
          <a className="btn" href={`mailto:${mail}`}>
            Send Mail
          </a>
        </div>
      </div>
    </div>

    <p className="trainingCardFull__text">Comment: {comment}</p>
  </div>
);

export default TrainingCardFull;
