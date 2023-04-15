import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfigurations, getGenres } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Explore, PageNotFound, SearchResult, Details } from "./pages";
import { Header, Footer } from "./components";

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfigurations(url));

    });
  };

  const genresCall = async ()=>{
    let promises = []
    let endPoints = ["tv","movie"]
    let allGenres = {}

    endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    });


    const data = await Promise.all(promises);
    data.map(({genres})=>{
      return genres.map((item)=> (allGenres[item.id]=item))
    })
    dispatch(getGenres(allGenres))
  }

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
