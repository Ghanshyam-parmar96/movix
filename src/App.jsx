import Home from './pages/home/Home';
import NotFound from './pages/404/NotFound'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import SearchResult from './pages/searchResult/SearchResult'
import './App.css';
import { useEffect } from 'react';
import { fetchDataFromApi} from './utils/Api';
import { useSelector, useDispatch } from 'react-redux'
import {getApiConfiguration, getGenres} from "./store/homeSlice"
import {createBrowserRouter, RouterProvider, Route, Link,} from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';




const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header/>
        <Home/>
        <Footer/>
      </>
    ),
  },
  { path: "/:mediaType/:id", element: (
    <>
    <Header/>
    <Details/> 
    <Footer/>
    </>
  )},
  { path: "/explore/:mediaType", element: (
    <>
    <Header/>
    <Explore/> 
    <Footer/>
    </>
  )},
  { path: "/search/:query", element: (
    <>
    <Header/>
    <SearchResult/> 
    <Footer/>
    </>
  )},
  { path: "*", element: (
    <>
    <Header/>
    <NotFound/> 
    <Footer/>
    </>
  )},
]);

function App() {

  const dispatch = useDispatch()
  const url = useSelector((state) => state.homeSlice.url)

  useEffect(() => {
    (function fetchApiConfig() {
      fetchDataFromApi("/configuration").then((data)=>{
        const res = {
          backdrop : data.images.secure_base_url + "original",
          poster : data.images.secure_base_url + "original",
          profile : data.images.secure_base_url + "original",
        }
        dispatch(getApiConfiguration(res))
      })
    })()
    genresCall();
  }, []);

  const genresCall = async () => {
    let promises = [];
    let endPoinds = ["tv", "movie"]
    let allGenres = {};

    endPoinds.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    data.map(({genres}) => {
      return genres.map((item) => {allGenres[item.id] = item})
    })
    dispatch(getGenres(allGenres))
    // console.log(allGenres);
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App
