import React from 'react';

const ResultCount = (props) => {
    const style = {
        margin: '5px 15px'
    }
    return(
        <span style={style}>{props.results} {props.tag.slice(0, -1)}(s)</span>
    )
}

export default ResultCount;