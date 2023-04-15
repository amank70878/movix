import React from "react";

import Carousel from "../carousel/Carousel";
import useFetch from "../../utils/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <>
      {data?.total_results && (
        <Carousel
          title="Recommendations"
          data={data?.results}
          loading={loading}
          endpoint={mediaType}
        />
      )}
    </>
  );
};

export default Recommendation;
