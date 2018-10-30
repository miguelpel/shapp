import React from "react";
import Search from "../search/Search";
import Counter from "../search/Counter";
import "../search/header.css";

const Header = ({ onChange, value, counter }) => (
  <div className="header">
    <Search onChange={onChange} value={value} />
    <Counter counter={counter} />
  </div>
);

export default Header;
