import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Populer from './populer/Populer'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <Trending/>
      <Populer/>
      <TopRated/>
      Home
    </>
  )
}

export default Home
