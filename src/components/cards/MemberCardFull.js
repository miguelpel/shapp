import React from "react";
import "./memberCardFull.css";

const MemberCardFull = ({
  id,
  photo,
  name,
  surname,
  address,
  postCode,
  dateOfBirth,
  phoneIcon,
  telephone,
  telephone1,
  email,
  website,
  organisation,
  organisationFeesPaid,
  city,
  country
}) => (
  <div key={id} className="memberCard">
    <div className="memberCard__left">
      <img className="memberCard__image" src={`${photo}`} alt={`${name}`} />
    </div>

    <div className="memberCard__center">
      <p className="memberCard__text">{name}</p>
      <p className="memberCard__text">{surname}</p>
      <p className="memberCard__text">{address}</p>
      <p className="memberCard__text">{postCode}</p>
      <p className="memberCard__text">{dateOfBirth}</p>
      <p className="memberCard__text">
        <img className="phoneIcon" src={`${phoneIcon}`} />
        {telephone}
      </p>
      <p className="memberCard__text">
        <img className="phoneIcon" src={`${phoneIcon}`} />
        {telephone1}
      </p>
      <p className="memberCard__text">
        {email}{" "}
        <a className="btn" href={`mailto:${email}`}>
          Send Mail
        </a>
      </p>
      <p className="memberCard__text">Website: {website}</p>
      <p className="memberCard__text">Organisation: {organisation}</p>
      <p className="memberCard__text">
        Organisation Fees Paid:{" "}
        <input type="checkbox" checked={organisationFeesPaid} />
      </p>
    </div>

    <div className="memberCard__right">
      <p className="memberCard__text">{city}</p>
      <p className="memberCard__text">{country}</p>
    </div>
  </div>
);

export default MemberCardFull;
