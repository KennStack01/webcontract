import React from "react"

const Service = ({ SVG, title, description, bgColor, children }) => {
  return (
    <div
      className={`relative w-auto shadow-sm mx-0 md:mx-4 my-10 bg-${bgColor} rounded-md px-4 py-5 flex flex-col justify-between`}
    >
      <div className="-mt-10 md:-mt-24">{children}</div>
      {/* <SVG className="absolute -mt-6" /> */}
      <h1 className="text-xl text-center font-bold m-4"> {title} </h1>
      <p className="text-gray-700 text-center font-medium"> {description} </p>
    </div>
  )
}

export default Service
