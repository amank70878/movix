import React, { useState } from "react";
import { Carousel, ContentWrapper, SwitchTabs } from "../../index";
import "../style.scss";
import useFetch from "../../../utils/useFetch";

const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const { loading, data } = useFetch(`/${endPoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel loading={loading} data={data?.results} endPoint={endPoint} />
    </div>
  );
};

export default TopRated;
