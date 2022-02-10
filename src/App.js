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

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4408478627d5cddc9f88bc64c5d89b56&language=en-US&page=1"
    );
    const movies = await data.json();
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
    </div>
  );
}

export default App;
