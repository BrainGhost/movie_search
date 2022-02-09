import React, { useEffect, useRef } from "react";

const Filter = ({
  dataMovies,
  setfilterMovies,
  activeGenre,
  setActiveGenre,
}) => {
  const filterTemp = useRef();
  const fetchFilter = () => {
    if (activeGenre === 0) {
      setfilterMovies(dataMovies);
      return;
    }
    const filtered = dataMovies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );

    setfilterMovies(filtered);
  };
  filterTemp.current = fetchFilter;
  useEffect(() => {
    filterTemp.current();
  }, [activeGenre]);

  return (
    <div className="filter_container">
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 878 ? "active" : ""}
        onClick={() => setActiveGenre(878)}
      >
        Sci-Fi
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
    </div>
  );
};

export default Filter;
