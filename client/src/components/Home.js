import React from "react"
import Header from "./Header"
import Navbar from "./NavBar"
import SliderOne from "./SliderOne"
import TrendingPros from "./TrendingPros"
import Featured from "./Featured"
import SaleVideo from "./SaleVideo"
import Lastest from "./Lastest"
import SportsLogos from "./SportsLogos"
import Footer from "./Footer"

export default props => {
  return (
    <div>
      <Header />
      <Navbar />
      <SliderOne />
      <TrendingPros />
      <Featured />
      <SaleVideo />
      <Lastest />
      <SportsLogos />
      <Footer />
    </div>
  )
}
