import React from "react"

const Feature = ({ name, description, children }) => {
  return (
    <div className="flex flex-col md:flex-row md:h-60 border-l-8 p-4 bg-turbo-gray-500 border-turbo-pink-500 mt-10 md:mt-16">
      <div className="flex flex-col my-auto md:w-2/4">
        <h1 className="text-gray-700 text-xl md:text-3xl text-center font-bold m-4">
          {" "}
          {name}{" "}
        </h1>
        <p className="text-gray-700 text-sm md:text-md text-center font-normal ">
          {" "}
          {description}{" "}
        </p>
      </div>
      <div className="md:w-2/4 md:-mt-10"> {children} </div>
    </div>
  )
}

export default Feature
