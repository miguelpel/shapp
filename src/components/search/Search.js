import React from "react";

const Search = ({ onChange, value }) => (
  <input
    className="header__input"
    type="text"
    onChange={onChange}
    value={value}
    placeholder="Search ..."
  />
);

export default Search;
