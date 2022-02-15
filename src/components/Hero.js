import React from "react";
import Search from "./Search";

const Hero = ({
  setfilterMovies,
  dataMovies,
  input,
  setInput,
  setGetSearch,
}) => {
  // const popular_card = () => {
  //   <div className="popular_card">
  //     <img src="" alt="" />
  //     <h1>title</h1>
  //   </div>;
  // };
  return (
    <div className="hero_container">
      <div className="hero_image_container">
        <div className="hero_text">
          <h1>Welcome.</h1>
          <h3>Great movies, Tv shows and people to discor. Explore now.</h3>
        </div>

        <div className="hero_search">
          <Search
            setfilterMovies={setfilterMovies}
            dataMovies={dataMovies}
            input={input}
            setInput={setInput}
            setGetSearch={setGetSearch}
          />
        </div>
      </div>
      {/* <div className="hero_popular_container">
        <div className="inner_container">
          <div className="popular_tab_container">
            <div className="inner_tab_container">
              <button className="active">All</button>
              <button>Action</button>
              <button>Comedy</button>
              <button>Romance</button>
            </div>
          </div>
          <div className="popular_silder_container">{popular_card()}</div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
