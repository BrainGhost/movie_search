import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import TvShow from "./pages/TvShow";

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [filterMovies, setfilterMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    const apiKey = `${process.env.REACT_APP_APIKEY}`;
    setLoading(true);
    const data = await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        // `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
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
    <Routes>
      <Route
        path="/"
        element={
          <Home
            dataMovies={dataMovies}
            loading={loading}
            errorMessage={errorMessage}
            filterMovies={filterMovies}
            setfilterMovies={setfilterMovies}
          />
        }
      />
      <Route path="movie" element={<MoviePage />} />
      <Route path="tvshow" element={<TvShow />} />
    </Routes>
  );
}

export default App;
