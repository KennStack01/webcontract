import React from "react"
import { Link } from "gatsby"
import Button from "../Buttons/Button"

const HeroSection = ({ title, description, SVG, value }) => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-between mx-auto my-5 py-6 lg:py-6 md:-mt-16 lg:-mt-0"
      data-value={value}
    >
      <div className="md:w-4/5 lg:w-2/3 lg:pl-10 flex mx-auto my-auto flex-col md:space-y-6 justify-between">
        <h1 className=" text-5xl md:text-5xl lg:text-6xl font-extrabold">
          {title}
        </h1>
        <p className="text-turbo-gray-900 text-lg font-medium my-10">
          {description}
        </p>
        <div className="mx-auto">
          <Link to="/#contact">
            <Button content={"Reach out to me!"} />
          </Link>
        </div>
      </div>
      <SVG className="w-2/3 mx-auto md:w-1/3 my-auto" />
    </div>
  )
}

export default HeroSection
