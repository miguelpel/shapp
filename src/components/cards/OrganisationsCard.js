import React from "react";
import "./organisationsCard.css";

// JSON link:
// https://api.myjson.com/bins/y9tb4

const OrganisationsCard = ({
  onClick,
  id,
  organisationLogo,
  acronym,
  telephone,
  website,
  city,
  country
}) => (
  <div onClick={onClick} key={id} className="organisationCard">
    <div className="organisationCard__left">
      <img
        className="organisationCard__image"
        src={`${organisationLogo}`}
        alt={`${acronym}`}
      />
    </div>

    <div className="organisationCard__center">
      <p className="organisationCard__text">{acronym}</p>
      <p className="organisationCard__text">{telephone}</p>
      <p className="organisationCard__text">{website}</p>
    </div>

    <div className="organisationCard__right">
      <p className="organisationCard__text">{city}</p>
      <p className="organisationCard__text">{country}</p>
      <a className="btn" href="#">
        Send Mail
      </a>
    </div>
  </div>
);

export default OrganisationsCard;
