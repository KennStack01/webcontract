import React from "react"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import HeroPicture1 from "../../../assets/hero-pic-1.svg"
import HeroPicture2 from "../../../assets/hero-pic-2.svg"
import HeroSection from "./HeroSection"

const items = [
  <HeroSection
    title={`Your Professional, Modern & Beautiful Website is Ready!`}
    description={` Discuss your Business Goals, Ideas, Let’s work together and make it
        Real.`}
    SVG={HeroPicture1}
    value="1"
  />,
  <HeroSection
    title={`From Logo, Graphic Charter and UI/UX Design!`}
    description={`Web Development + Graphic | Product Design`}
    SVG={HeroPicture2}
    value="2"
  />,
]

const Hero = () => {
  return (
    <AliceCarousel
      autoPlay
      //   autoPlayControls
      autoPlayStrategy="none"
      autoPlayInterval={4000}
      animationDuration={800}
      animationType="slide"
      infinite
      touchTracking={true}
      disableDotsControls
      disableButtonsControls
      items={items}
    />
  )
}

export default Hero
