import React from "react"
import GraphCMS from "../../assets/tools/graphcms.svg"
import Gatsby from "../../assets/tools/gatsby.svg"
import Nextjs from "../../assets/tools/nextjs.svg"
import Shopify from "../../assets/tools/shopify.svg"
import Sanity from "../../assets/tools/sanity.svg"
import Strapi from "../../assets/tools/strapi.svg"
import Prismic from "../../assets/tools/prismic.svg"
import GraphQL from "../../assets/tools/graphql.svg"
import Contentful from "../../assets/tools/contentful.svg"
import DatoCMS from "../../assets/tools/datocms.svg"

const logos = [
  <GraphCMS width="75%" height="75%" />,
  <DatoCMS width="75%" height="75%" />,
  <Sanity width="75%" height="75%" />,
  <Strapi width="75%" height="75%" />,
  <Prismic width="75%" height="75%" />,
  <Shopify width="75%" height="75%" />,
  <Contentful width="75%" height="75%" />,
  <GraphQL width="75%" height="75%" />,
  <Nextjs width="75%" height="75%" />,
  <Gatsby width="75%" height="75%" />,
]

const ToolsWeUse = () => {
  return (
    <div className="bg-white px-6 py-4 text-center grid grid-cols-3 content-center mx-auto">
      {logos.map((logo, index) => (
        <div key={index}>{logo}</div>
      ))}
    </div>
  )
}

export default ToolsWeUse
