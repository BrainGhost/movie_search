import React from "react";

const Search = (dataMovies, setfilterMovies, input, setInput, setGetSearch) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setGetSearch(false);
      return;
    }
    const searchFilterd = dataMovies.filter((item) => {
      if (item.title.toLowerCase().includes(input.toLowerCase())) {
        setGetSearch(true);
        return item;
      }
      return false;
    });
    setfilterMovies(searchFilterd);
  };
  return (
    <form className="search_container">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search by name or category"
      />
      <button onClick={handleClick}>Search</button>
    </form>
  );
};

export default Search;
