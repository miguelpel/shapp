import React from "react";
import "./organisationsCardFull.css";

const OrganisationsCardFull = ({ onClick, card }) => (
  <div className="organisationsCardFull_wrapper">
    <button className="btnGoBack" onClick={onClick}>
      Return to Organisations list
    </button>

    <div className="organisationsCardFull">
      <div className="organisationsCardFull__left">
        <img
          className="organisationsCardFull__img"
          src={`${card.organisationLogo}`}
          alt={card.acronym}
        />
      </div>

      <div className="organisationsCardFull__center">
        <p className="organisationsCardFull__text">Acronym: {card.acronym}</p>
        <p className="organisationsCardFull__text">Address: {card.address}</p>
        <p className="organisationsCardFull__text">
          Post code: {card.postCode}
        </p>
        <p className="organisationsCardFull__text">P.O. box: {card.PObox}</p>
        <p className="organisationsCardFull__text">Referee: {card.referee}</p>
        <p className="organisationsCardFull__text">
          Telephone 1: {card.telephone}
        </p>
        <p className="organisationsCardFull__text">
          Telephone 2: {card.telephone1}
        </p>
        <p className="organisationsCardFull__text">{card.website}</p>
        <p className="organisationsCardFull__text">
          Organisation Type: {card.organisationType}
        </p>
        <p className="organisationsCardFull__text">
          PIC number: {card.PICnumber}
        </p>
        <p className="organisationsCardFull__text">
          National ID: {card.nationalId}
        </p>
        <p className="organisationsCardFull__text">CEDEX: {card.cedex}</p>
        <p className="organisationsCardFull__text">
          Department: {card.department}
        </p>
        <p className="organisationsCardFull__text">Fax: {card.fax}</p>
      </div>

      <div className="organisationsCardFull__right">
        <p className="organisationsCardFull__text">{card.fullLegalName}</p>
        <p className="organisationsCardFull__text">{card.city}</p>
        <p className="organisationsCardFull__text">{card.country}</p>
        <p className="organisationsCardFull__text">
          Referee's position: {card.refereePosition}
        </p>
        <p className="organisationsCardFull__text">
          {card.mail}{" "}
          <a className="btn" href={`mailto:${card.mail}`}>
            Send mail
          </a>
        </p>
        <p className="organisationsCardFull__text">{card.profit}</p>
      </div>
    </div>
  </div>
);

export default OrganisationsCardFull;
