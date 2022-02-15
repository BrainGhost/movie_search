import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MoviesCard from "../components/MoviesCard";

const Home = ({
  dataMovies,
  filterMovies,
  setfilterMovies,
  errorMessage,
  loading,
}) => {
  const [activeGenre, setActiveGenre] = useState(0);
  const [input, setInput] = useState("");
  const [getSearch, setGetSearch] = useState(false);

  return (
    <div className="">
      <Header
        setfilterMovies={setfilterMovies}
        dataMovies={dataMovies}
        input={input}
        setInput={setInput}
        setGetSearch={setGetSearch}
      />

      <div className="body_container">
        <Hero
          setfilterMovies={setfilterMovies}
          dataMovies={dataMovies}
          input={input}
          setInput={setInput}
          setGetSearch={setGetSearch}
        />
        {!getSearch ? (
          <Filter
            dataMovies={dataMovies}
            setfilterMovies={setfilterMovies}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
        ) : (
          ""
        )}
        {!loading ? (
          <motion.div layout className="popular_movies">
            <AnimatePresence>
              {filterMovies
                .filter((item) => {
                  if (!input.trim()) {
                    return item;
                  }
                  if (item.title.toLowerCase().includes(input.toLowerCase())) {
                    return item;
                  }
                  return false;
                })
                .map((movie) => (
                  <MoviesCard key={movie.id} movie={movie} />
                ))}
            </AnimatePresence>
          </motion.div>
        ) : errorMessage ? (
          errorMessage
        ) : (
          <h1 className="loading">Loading ...</h1>
        )}
        {/* <div className="pagination_container">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          onPageChange={handleChange}
          pageCount={5}
          containerClassName="containerClassName"
        />
      </div> */}
      </div>
    </div>
  );
};

export default Home;
