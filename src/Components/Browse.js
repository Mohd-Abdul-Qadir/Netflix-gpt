import React from "react";
import Header from "./Header/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./Header/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
