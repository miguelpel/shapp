import React from "react";
import "./memberCard.css";

// JSON link:
// https://api.myjson.com/bins/cgmc0

const MemberCard = ({
  onClick,
  id,
  photo,
  name,
  surname,
  telephone,
  address,
  organisation,
  position
}) => (
  <div onClick={onClick} key={id} className="memberCard">
    <div className="memberCard__left">
      <img className="memberCard__image" src={`${photo}`} alt={`${name}`} />
    </div>

    <div className="memberCard__center">
      <p className="memberCard__text">{surname}</p>
      <p className="memberCard__text">{name}</p>
      <p className="memberCard__text">{telephone}</p>
      <p className="memberCard__text">{address}</p>
    </div>

    <div className="memberCard__right">
      <p className="memberCard__text">{organisation}</p>
      <p className="memberCard__text">{position}</p>
      <a className="btn" href="#">
        Send Mail
      </a>
    </div>
  </div>
);

export default MemberCard;
