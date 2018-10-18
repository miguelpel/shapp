import React from 'react';
import TrainingCard from '../../cards/TrainingCard';

const Cards = (props) => {
    console.log("cards rendering")
    console.log(props.pageName);
    console.log(props.pageData);
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
        return(<div>Go fuck yourself</div>)
    }
}

const createTrainingsCards = (data) => {
    let cards = [];
    // map function that unpacks the data end push cards in cards
    if (data) {
        console.log(data)
        data.map((item) => {
            let card = <TrainingCard
                            id={item.id}
                            logo={item.logo}
                            nameTraining={item.nameTraining}
                            descriptionTraining={item.descriptionTraining}
                            dateTraining={item.dateTraining}
                            eligibleCountries={item.eligibleCountries}
                            city={item.city}
                            country={item.country}
                        />
            cards.push(card);
        })
        return cards;
    } else {
        return(<div>no cards</div>)
    }
    
}

const createOrganisationsCards = (data) => {
    let cards = [];
    // map function that unpack the data end push cards in cards
}

const createMembersCards = (data) => {
    let cards = [];
    // map function that unpack the data end push cards in cards
}

const createManageCards = (data) => {
    let cards = [];
    // map function that unpack the data end push cards in cards
}

export default Cards;