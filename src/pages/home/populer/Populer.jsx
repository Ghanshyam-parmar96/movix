import React,{useState, useEffect} from 'react'
import ContentWrapper from '../../../components/contentWrapper/contentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'



const Populer = () => {

    const [endpoint, setEndpoint] = useState("movie");
    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv")
    }
    const {data, loading} = useFetch(`/${endpoint}/popular`)

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">What's Populer</span>
        <SwitchTab data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  )
}

export default Populer;
