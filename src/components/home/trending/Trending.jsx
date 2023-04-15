import React, { useState } from 'react'
import {Carousel, ContentWrapper,SwitchTabs} from '../../index'
import "../style.scss"
import useFetch from '../../../utils/useFetch';


const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");

  const {loading,data} = useFetch(`/trending/all/${endPoint}`);


  const onTabChange = (tab)=>{
    setEndPoint(tab==="Day"?"day":"week");
  }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>
          Trending
        </span>
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel loading={loading} data={data?.results}/>
    </div>
  )
}

export default Trending