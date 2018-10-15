import React from 'react';

const ResultCount = (props) => {
    return(
        <span>{props.results} {props.page}(s)</span>
    )
}

export default ResultCount;