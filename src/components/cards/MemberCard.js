import React from "react";
import "./memberCard.css";

// JSON link:
// https://api.myjson.com/bins/cgmc0

const MemberCard = ({ onClick, card }) => (
  <div onClick={onClick} key={card.id} className="memberCard">
    <div className="memberCard__left">
      <img
        className="memberCard__image"
        src={`${card.photo}`}
        alt={`${card.name}`}
      />
    </div>

    <div className="memberCard__center">
      <p className="memberCard__text">{card.surname}</p>
      <p className="memberCard__text">{card.name}</p>
      <p className="memberCard__text">{card.telephone}</p>
      <p className="memberCard__text">{card.address.map(item => `${item} `)}</p>
    </div>

    <div className="memberCard__right">
      <p className="memberCard__text">{card.organisation}</p>
      <p className="memberCard__text">{card.position}</p>
      <a className="btn" href="#">
        Send Mail
      </a>
    </div>
  </div>
);

export default MemberCard;
