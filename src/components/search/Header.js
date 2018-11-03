import React from "react";
import Search from "../search/Search";
import Counter from "../search/Counter";
import "../search/header.css";

const Header = ({ ...props }) => (
  <div className="header">
    <Search {...props} />
    <Counter {...props} />
  </div>
);

export default Header;
