import React from 'react';

const ResultCount = (props) => {
    return(
        <span>{props.results} {props.tag}(s)</span>
    )
}

export default ResultCount;