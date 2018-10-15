import React from 'react';

const ResultCount = (props) => {
    return(
        <span>{props.results} {props.tag.slice(0, -1)}(s)</span>
    )
}

export default ResultCount;