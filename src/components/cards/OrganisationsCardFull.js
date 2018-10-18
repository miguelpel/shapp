import React from "react";
import "./OrganisationsCardFull.css";

const OrganisationsCardFull = ({
  id,
  organisationLogo,
  acronym,
  telephone,
  website,
  city,
  country,
  fullLegalName,
  address,
  postCode,
  PObox,
  referee,
  refereePosition,
  telephone1,
  mail,
  organisationType,
  profit,
  PICnumber,
  nationalId,
  cedex,
  department,
  fax
}) => (
  <div key={id} className="organisationsCardFull">
    <div className="organisationsCardFull__left">
      <img
        className="organisationsCardFull__img"
        src={`${organisationLogo}`}
        alt={acronym}
      />
    </div>

    <div className="organisationsCardFull__center">
      <p className="organisationsCardFull__text">Acronym: {acronym}</p>
      <p className="organisationsCardFull__text">Address: {address}</p>
      <p className="organisationsCardFull__text">Post code: {postCode}</p>
      <p className="organisationsCardFull__text">P.O. box: {PObox}</p>
      <p className="organisationsCardFull__text">Referee: {referee}</p>
      <p className="organisationsCardFull__text">Telephone 1: {telephone}</p>
      <p className="organisationsCardFull__text">Telephone 2: {telephone1}</p>
      <p className="organisationsCardFull__text">{website}</p>
      <p className="organisationsCardFull__text">
        Organisation Type: {organisationType}
      </p>
      <p className="organisationsCardFull__text">PIC number: {PICnumber}</p>
      <p className="organisationsCardFull__text">National ID: {nationalId}</p>
      <p className="organisationsCardFull__text">CEDEX: {cedex}</p>
      <p className="organisationsCardFull__text">Department: {department}</p>
      <p className="organisationsCardFull__text">Fax: {fax}</p>
    </div>

    <div className="organisationsCardFull__right">
      <p className="organisationsCardFull__text">{fullLegalName}</p>
      <p className="organisationsCardFull__text">{city}</p>
      <p className="organisationsCardFull__text">{country}</p>
      <p className="organisationsCardFull__text">
        Referee's position: {refereePosition}
      </p>
      <p className="organisationsCardFull__text">
        {mail}{" "}
        <a className="btn" href={`mailto:${mail}`}>
          Send mail
        </a>
      </p>
      <p className="organisationsCardFull__text">{profit}</p>
    </div>
  </div>
);

export default OrganisationsCardFull;
