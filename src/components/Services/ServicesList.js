import React from "react"
import Marketing from "../../../assets/marketing.svg"
import Landing from "../../../assets/landing.svg"
import Blog from "../../../assets/blog.svg"
import Shop from "../../../assets/shop.svg"
import Design from "../../../assets/design.svg"
import Service from "./Service"

const myServicesList = [
  {
    id: 1,
    name: "Marketing Website",
    description:
      "Get a Website that sells your products and services. I can help you with all the technical aspects of the website.",
    bgColor: "white",
    SVG: <Marketing />,
  },
  {
    id: 2,
    name: "Landing Page",
    description:
      "I can build a Website that converts visitors into customers. I can help you with all the technical aspects of the website.",
    bgColor: "white",
    SVG: <Landing />,
  },
  {
    id: 3,
    name: "Online Shop Website",
    description:
      "Get an Online Shop Up and Running without pain. Run the sales from the CMS, without other Customers Support Tools.",
    bgColor: "white",
    SVG: <Shop />,
  },
  {
    id: 4,
    name: "Blogging Website",
    description:
      "Get a Blogging Website, Start Writing Articles without pain, Type and publish without coding.",
    bgColor: "white",
    SVG: <Blog />,
  },
  {
    id: 5,
    name: "Graphic Design Service",
    description: "Logo Design , Social Media Graphics, Graphic Charter",
    bgColor: "turbo-yellow-500",
    SVG: <Design />,
  },
]

const ServicesList = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-xl md:text-4xl my-12 md:my-20 md:mx-8">
        How can WebContract help your Business?
      </h1>
      <div className="flex flex-col md:grid grid-cols-2 place-content-center">
        {myServicesList.map(service => (
          <Service
            key={service.id}
            title={service.name}
            description={service.description}
            children={service.SVG}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesList
