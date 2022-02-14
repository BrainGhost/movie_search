import React from "react";
import Search from "./Search";

const Header = ({
  setfilterMovies,
  dataMovies,
  input,
  setInput,
  setGetSearch,
}) => {
  return (
    <div className="header_container">
      <div className="title">
        <a href="/">Filamu show</a>
      </div>
      <Search
        setfilterMovies={setfilterMovies}
        dataMovies={dataMovies}
        input={input}
        setInput={setInput}
        setGetSearch={setGetSearch}
      />
      <nav className="nav_bar">
        <a href="/">Home</a>
        <a href="/">Movies</a>
        <a href="/">Tv-series</a>
      </nav>
    </div>
  );
};

export default Header;
