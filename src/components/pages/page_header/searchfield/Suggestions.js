import React from 'react';

import './Suggestions.css';

const Suggestions = (props) => {
  
  const options = props.results.map((result, i) => (
    <li
      key={i}
      className="suggestionsLi"
      onClick={props.handleClick}
    >
      {result}
    </li>
  ))
  return(
    <ul className={`suggestionsUl ${props.results.length > 0 ? '' : 'hide'}`}>{options}</ul>
  )
}

export default Suggestions
