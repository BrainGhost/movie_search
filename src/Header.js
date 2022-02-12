import React from "react";

const Header = ({
  dataMovies,
  setfilterMovies,
  input,
  setInput,
  setGetSearch,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setGetSearch(false);
      return;
    }
    console.log("clicked");
    const searchFilterd = dataMovies.filter((item) => {
      if (item.title.toLowerCase().includes(input.toLowerCase())) {
        setGetSearch(true);
        return item;
      }
      return false;
    });
    setfilterMovies(searchFilterd);
    console.log(searchFilterd);
  };

  return (
    <div className="header_container">
      <form className="search_container">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search by name or category"
        />
        <button onClick={handleClick}>Search</button>
      </form>
    </div>
  );
};

export default Header;
