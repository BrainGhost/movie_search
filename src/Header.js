import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header_container">
      <div className="title">
        <a>Filamu show</a>
      </div>
      <Search />
      <nav className="nav_bar">
        <a href="/">Movies</a>
        <a href="/">Tv-series</a>
        <a href="/">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
