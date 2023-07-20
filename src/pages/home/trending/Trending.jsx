import React,{useState, useEffect} from 'react'
import ContentWrapper from '../../../components/contentWrapper/contentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'



const Trending = () => {

    const [endpoint, setEndpoint] = useState("day");
    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week")
    }
    const {data, loading} = useFetch(`/trending/all/${endpoint}`)

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}  />
    </div>
  )
}

export default Trending
