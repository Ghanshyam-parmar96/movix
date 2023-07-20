import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";


const HeroBanner = () => {
  const navigate = useNavigate();
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const {data, loading, error} = useFetch("/movie/upcoming");
  const  {url} = useSelector((state) => state.homeSlice);
  // console.log(url);
  useEffect( () => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(bg);
  },[data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`)
    }
  };

  return (
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img src={background} />
      </div>}

      <div className="opacity-layer">
        
      </div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title"> Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover, Explore now,
          </span>
          <div className="searchInput">
            <input
              onKeyUp={searchQueryHandler}
              onChange={(e)=>{setQuery(e.target.value)}}
              type="text"
              placeholder="Search for a Movie or TV Show..."
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
