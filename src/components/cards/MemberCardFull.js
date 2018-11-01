import React from "react";
import "./memberCardFull.css";

const MemberCardFull = ({ onClick, card }) => (
  <div className="memberCardFull">
    <button onClick={onClick} className="btnGoBack">
      Return to Members list
    </button>

    <div className="memberCard">
      <div className="memberCard__left">
        <img
          className="memberCard__image"
          src={`${card.photo}`}
          alt={`${card.name}`}
        />
      </div>

      <div className="memberCard__center">
        <p className="memberCard__text">{card.name}</p>
        <p className="memberCard__text">{card.surname}</p>
        <p className="memberCard__text">
          {card.address.map(item => `${item} `)}
        </p>
        <p className="memberCard__text">{card.postCode}</p>
        <p className="memberCard__text">{card.dateOfBirth}</p>
        <p className="memberCard__text">
          <img className="phoneIcon" src={`${card.phoneIcon}`} />
          {card.telephone}
        </p>
        <p className="memberCard__text">
          <img className="phoneIcon" src={`${card.phoneIcon}`} />
          {card.telephone1}
        </p>
        <p className="memberCard__text">
          {card.email}{" "}
          <a className="btn" href={`mailto:${card.email}`}>
            Send Mail
          </a>
        </p>
        <p className="memberCard__text">Website: {card.website}</p>
        <p className="memberCard__text">Organisation: {card.organisation}</p>
        <p className="memberCard__text">
          Organisation Fees Paid:{" "}
          <input type="checkbox" checked={card.organisationFeesPaid} />
        </p>
      </div>

      <div className="memberCard__right">
        <p className="memberCard__text">{card.city}</p>
        <p className="memberCard__text">{card.country}</p>
      </div>
    </div>
  </div>
);

export default MemberCardFull;
