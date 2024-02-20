import React from 'react'
import Home from '../landingpage/home/home'
import Roadmap from '../landingpage/roadmap/roadmap'
import Tokenomics from '../landingpage/tokenomics/tokenomics'
import HomeBanner from '../landingpage/homeBanner/homeBanner'
// import Topbar from '../landingpage/header&footer/navbar'

export default function Landingpage() {
  return (
    <>
    {/* <Topbar/> */}
      {/* <Home/> */}
      <HomeBanner/>
      <Roadmap/>
      <Tokenomics/>
    </>
  )
}
