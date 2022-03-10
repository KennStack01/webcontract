import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Achieve from "../../assets/achieve.svg"
import Office from "../../assets/work-office.svg"
import ServicesList from "../components/Services/ServicesList"
import Contact from "../components/Contact"
import FeaturesList from "../components/Features/FeaturesList"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home | WebContract"
      description="Freelance Website Web Developer Headless CMS JAMStack technologies"
    />
    <Hero />
    <div className="bg-white h-96 rounded-sm my-10 py-0 md:px-6 flex flex-col md:flex-row justify-between">
      <div className="flex flex-col justify-center my-auto p-6 md:w-3/5">
        <h5 className="text-gray-600 text-md my-4 font-semibold">
          LET'S ACHIEVE MORE
        </h5>
        <h3 className="font-bold text-2xl md:text-4xl my-4">
          Get a Professional Website connected to Headless CMS.
        </h3>
      </div>
      <Achieve className="md:w-2/5 my-auto mx-auto" />
    </div>
    <h1 className="font-bold text-center text-xl md:text-4xl my-12 md:my-20 md:mx-8">
      Headless CMS ➞ Your Business Website ➞ Your Customers ➞ Sales ➞ Growth
    </h1>
    {/* Headless CMS Logo here*/}
    <div className="bg-white h-96 rounded-sm my-10 py-0 md:px-6 flex flex-col md:flex-row justify-between">
      <Office className="md:w-2/5 my-auto" />
      <div className="flex flex-col justify-center my-auto p-6 md:w-3/5">
        <h5 className="text-gray-600 text-md my-4 font-semibold">
          NO WORRIES ABOUT THE CODE{" "}
        </h5>
        <h3 className="font-bold text-2xl md:text-4xl my-4">
          From the CMS, Run the Business without coding, just a simple{" "}
          <span className="italic">Publish</span> button!
        </h3>
      </div>
    </div>

    <ServicesList />

    <FeaturesList />

    <div id="contact" className="py-5"></div>
    <Contact />
  </Layout>
)

export default IndexPage
