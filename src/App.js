import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import Header from "./Header";
import MoviesCard from "./MoviesCard";

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [input, setInput] = useState("");
  const [getSearch, setGetSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    const apiKey = `${process.env.REACT_APP_APIKEY}`;
    setLoading(true);
    const data = await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )

      .catch((error) => {
        const errorText = error.response.data.status_message;
        const errorCode = error.response.status;
        setErrorMessage(
          <h1 className="loading">
            {errorText} -- {errorCode}
          </h1>
        );
      });
    const movies = await data.data;
    setLoading(false);
    setDataMovies(movies.results);
    setfilterMovies(movies.results);
  };
  return (
    <div className="app">
      <Header
        setfilterMovies={setfilterMovies}
        filterMovies={filterMovies}
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
  );
}

export default App;
