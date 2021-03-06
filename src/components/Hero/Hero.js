import React from "react"
import HeroPicture1 from "../../../assets/hero-pic-1.svg"
import HeroPicture2 from "../../../assets/hero-pic-2.svg"
import HeroSection1 from "./HeroSection1"
import HeroSection2 from "./HeroSection2"

const items = [
  <HeroSection1
    title={`A Responsive, Fast and SEO-friendly Website for Your Business!`}
    description={`Working with a Developer as a Partner for your Business is a great way to grow.`}
    SVG={HeroPicture1}
    value="1"
  />,
  // <HeroSection1
  //   title={`Your Professional, Modern & Beautiful Website is Ready!`}
  //   description={` Discuss your Business Goals, Ideas, Let’s work together and make it
  //       Real.`}
  //   SVG={HeroPicture1}
  //   value="1"
  // />,
  <HeroSection2
    title={`Enjoy the benefits of UI/UX Design for your Projects!`}
    description={`Web Development + Graphic | Product Design`}
    SVG={HeroPicture2}
    value="2"
  />,
]

const Hero = () => {
  return (
    <div className="relative">
      {items.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </div>
  )
}

export default Hero
