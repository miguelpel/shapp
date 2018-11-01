import React from "react";

import TrainingCard from "../../cards/TrainingCard";
import MemberCard from "../../cards/MemberCard";
import OrganisationsCard from "../../cards/OrganisationsCard";

const Cards = props => {
  //   console.log("cards rendering");
  //   console.log(props.pageName);
  //   console.log(props.pageData);

  switch (props.pageName) {
    case "trainings":
      return createTrainingsCards(props.pageData);
    case "organisations":
      return createOrganisationsCards(props.pageData);
    case "members":
      return createMembersCards(props.pageData);
    case "manage":
      return createManageCards(props.pageData);
    default:
      return <div>Go fuck yourself</div>;
  }
};

const createTrainingsCards = data => {
  let cards = [];
  // map function that unpacks the data end push cards in cards
  if (data) {
    // console.log(data);
    data.map(item => {
      let card = (
        <TrainingCard
          onClick={() =>
            console.log(`OrganisationsCard current ID: ${item.id}`)
          }
          key={item.id}
          id={item.id}
          logo={item.logo}
          nameTraining={item.nameTraining}
          descriptionTraining={item.descriptionTraining}
          dateTraining={item.dateTraining}
          eligibleCountries={item.eligibleCountries.map((item, i) => (
            <img className="flag" key={i} src={`${item}`} alt={item} />
          ))}
          city={item.city}
          country={item.country}
          organisation={item.organisation}
          position={item.position}
        />
      );
      cards.push(card);
    });
    return cards;
  } else {
    return <div>no cards</div>;
  }
};

const createOrganisationsCards = data => {
  let cards = [];
  // map function that unpack the data end push cards in cards
  if (data) {
    data.map(item => {
      let card = (
        <OrganisationsCard
          getCardId={() =>
            console.log(`OrganisationsCard current ID: ${item.id}`)
          }
          key={item.id}
          id={item.id}
          organisationLogo={item.organisationLogo}
          acronym={item.acronym}
          telephone={item.telephone}
          website={item.website}
          city={item.city}
          country={item.country}
        />
      );
      cards.push(card);
    });
    return cards;
  } else {
    return <div>no cards</div>;
  }
};

const createMembersCards = data => {
  let cards = [];
  // map function that unpack the data end push cards in cards
  if (data) {
    data.map(item => {
      let card = (
        <MemberCard
          getCardId={() => console.log(`MemberCard current ID: ${item.id}`)}
          key={item.id}
          id={item.id}
          photo={item.photo}
          surname={item.surname}
          name={item.name}
          telephone={item.telephone}
          address={item.address.map(address => `${address} `)}
          organisation={item.organisation}
          position={item.position}
        />
      );

      cards.push(card);
    });
    return cards;
  } else {
    return <div>no cards</div>;
  }
};

const createManageCards = data => {
  let cards = [];
  // map function that unpack the data end push cards in cards
};

export default Cards;
