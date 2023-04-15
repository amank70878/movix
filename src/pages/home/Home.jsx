import React from "react";
import "./style.scss";
import { HeroBanner, Popular, Trending } from "../../components";
import TopRated from "../../components/home/topRated/TopRated";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
      </div>
    </>
  );
};

export default Home;
