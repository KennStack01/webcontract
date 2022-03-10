import React from "react"
import { Link } from "gatsby"
import Feature from "./Feature"
import UXSVG from "../../../assets/ui-ux.svg"
import SEOSVG from "../../../assets/seo.svg"
import SupportSVG from "../../../assets/support.svg"
import Button from "../Buttons/Button"

const myServicesList = [
  {
    name: "UI/UX DESIGN",
    description:
      "Beautiful and Responsive Website Design, your Website will be responsive on Mobile, Desktop  and Tablet.",
    SVG: <UXSVG width="100%" height="100%" />,
  },
  {
    name: "SEO-FRIENDLY WEBSITE",
    description:
      "With a modern Gatsby, Nextjs and React webiste, your Search Engine Optimization is potentially boosted",
    SVG: <SEOSVG width="100%" height="100%" />,
  },
  {
    name: "ONGOING SUPPORT",
    description: "Stay close with me (Kenn), let’s improve the project",
    SVG: <SupportSVG width="100%" height="100%" />,
  },
]

const FeaturesList = () => {
  return (
    <div
      id="services"
      className="bg-white w-full p-5 my-10 md:my-24 flex flex-col"
    >
      <h1 className="font-bold text-center rounded-md text-xl md:text-4xl px-2 md:mx-8">
        Why Working with WebContract?
      </h1>
      <div className="flex flex-col">
        {myServicesList.map((service, index) => (
          <Feature
            key={index}
            name={service.name}
            description={service.description}
            children={service.SVG}
          />
        ))}
      </div>
      <div className="mx-auto my-5">
        <Link to="/#contact">
          <Button content={"Let's Get Started!"} />
        </Link>
      </div>
    </div>
  )
}

export default FeaturesList
