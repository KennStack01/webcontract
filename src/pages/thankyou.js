import React from "react"
import { Link } from "gatsby"
import Button from "../../src/components/Buttons/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HappySVG from "../../assets/happy.svg"

const ThankYou = () => (
  <Layout>
    <SEO
      title="Thank you"
      description="Freelance Website Web Developer Headless CMS JAMStack technologies"
    />

    <div
      id="home"
      className="flex flex-col lg:flex-row justify-between mx-auto my-5 py-6 lg:py-6 md:-mt-16 lg:-mt-0"
    >
      <HappySVG className="w-2/3 mx-auto md:w-2/3 lg:w-2/4 my-auto" />
      <div className="w-full md:w-1/3 lg:w-2/4 flex mx-auto my-auto flex-col md:space-y-6 justify-between">
        <h1 className="text-center text-5xl md:text-5xl lg:text-6xl font-extrabold">
          Thank you for reaching out!
        </h1>
        <p className="text-center text-turbo-gray-900 text-lg font-medium my-10">
          My Name's Kenn! I'm going to be in touch with you shortly.
        </p>
        <div className="mx-auto">
          <Link to="/blog">
            <Button content={"Discover my Articles!"} />
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default ThankYou
