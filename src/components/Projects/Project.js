import React from "react"
import Button from "../Buttons/Button"
import TeamSVG from "../../../assets/team.svg"

const Feature = ({ name, description, link }) => {
  return (
    <div className="flex flex-col md:flex-row md:h-60 rounded-r-xl border-r-4 md:border-r-[28px] p-4 bg-white border-turbo-pink-500 mt-10 md:mt-16">
      <div className="md:w-2/4 my-auto">
        {" "}
        <TeamSVG width="75%" height="75%" className="my-auto mx-auto" />{" "}
      </div>
      <div className="flex flex-col my-auto md:w-2/4">
        <h1 className="text-gray-900 text-lg md:text-2xl text-center font-bold m-4">
          {" "}
          {name}{" "}
        </h1>
        <p className="text-gray-700 text-sm md:text-md text-center my-5 font-normal ">
          {" "}
          {description}{" "}
        </p>
        <a href={link} target="__blank" className="mx-auto my-10">
          <Button content={"Visit Website"} />
        </a>
      </div>
    </div>
  )
}

export default Feature
