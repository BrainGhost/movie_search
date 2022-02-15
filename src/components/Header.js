import { MenuAlt1Icon } from "@heroicons/react/solid";
import React from "react";
import { Link, NavLink } from "react-router-dom";
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
        <Link to="/">Filamu show</Link>
      </div>
      <div className="div_search">
        <Search
          setfilterMovies={setfilterMovies}
          dataMovies={dataMovies}
          input={input}
          setInput={setInput}
          setGetSearch={setGetSearch}
        />
      </div>

      <nav className="nav_bar">
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/movie" activeClassName="active">
          Movies
        </NavLink>
        <NavLink to="/tvshow" activeClassName="active">
          Tv-series
        </NavLink>
      </nav>
      <MenuAlt1Icon
        className="menu_bar"
        width={30}
        height={40}
        color={"teal"}
      />
    </div>
  );
};

export default Header;
