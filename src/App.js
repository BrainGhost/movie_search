import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Filter from "./Filter";
import Header from "./Header";
import MoviesCard from "./MoviesCard";

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [input, setInput] = useState("");
  const [getSearch, setGetSearch] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4408478627d5cddc9f88bc64c5d89b56&language=en-US&page=${pageNumber}`
    );

    const movies = await data.data;
    setLoading(false);
    setDataMovies(movies.results);
    setfilterMovies(movies.results);
  };
  const handleChange = ({ selected }) => {
    const result = selected;
    setPageNumber(result);

    console.log("clicked");
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
        <>
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
                })
                .map((movie) => (
                  <MoviesCard key={movie.id} movie={movie} />
                ))}
            </AnimatePresence>
          </motion.div>
          <div className="pagination_container">
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              onPageChange={handleChange}
              pageCount={5}
              containerClassName="containerClassName"
            />
          </div>
        </>
      ) : (
        <h1 className="loading">Loading ...</h1>
      )}
    </div>
  );
}

export default App;
