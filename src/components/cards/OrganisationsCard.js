import React from "react";
import "./organisationsCard.css";

// JSON link:
// https://api.myjson.com/bins/y9tb4

const OrganisationsCard = ({ onClick, card }) => (
  <div onClick={onClick} key={card.id} className="organisationCard">
    <div className="organisationCard__left">
      <img
        className="organisationCard__image"
        src={`${card.organisationLogo}`}
        alt={`${card.acronym}`}
      />
    </div>

    <div className="organisationCard__center">
      <p className="organisationCard__text">{card.acronym}</p>
      <p className="organisationCard__text">{card.telephone}</p>
      <p className="organisationCard__text">{card.website}</p>
    </div>

    <div className="organisationCard__right">
      <p className="organisationCard__text">{card.city}</p>
      <p className="organisationCard__text">{card.country}</p>
      <a className="btn" href="#">
        Send Mail
      </a>
    </div>
  </div>
);

export default OrganisationsCard;
