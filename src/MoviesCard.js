import { motion } from "framer-motion";
import React from "react";

const MoviesCard = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="movie_card"
    >
      <h2 className="title">{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
        alt=""
      />
    </motion.div>
  );
};

export default MoviesCard;
