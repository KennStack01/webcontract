import React from "react"
import HeroPicture1 from "../../../assets/hero-pic-1.svg"
import HeroPicture2 from "../../../assets/hero-pic-2.svg"
import HeroSection1 from "./HeroSection1"
import HeroSection2 from "./HeroSection2"

const items = [
  <HeroSection1
    title={`Your Professional, Modern & Beautiful Website is Ready!`}
    description={` Discuss your Business Goals, Ideas, Let’s work together and make it
        Real.`}
    SVG={HeroPicture1}
    value="1"
  />,
  <HeroSection2
    title={`From Logo, Graphic Charter and UI/UX Design!`}
    description={`Web Development + Graphic | Product Design`}
    SVG={HeroPicture2}
    value="2"
  />,
]

const Hero = () => {
  return (
    <div>
      {items.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </div>
  )
}

export default Hero
