import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import {
  Cast,
  DetailsBanner,
  VideosSection,
  Similar,
  Recommendation,
} from "../../components";

const Explore = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  const { data1 } = useFetch(`/${mediaType}/${id}/recommendations`);
  console.log(data1);
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Explore;
