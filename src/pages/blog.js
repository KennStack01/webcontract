import React from "react"
import { Link } from "gatsby"
import Button from "../../src/components/Buttons/Button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogSVG from "../../assets/problem-solving.svg"

const Blog = () => (
  <Layout>
    <SEO
      title="Thank you | WebContract"
      description="Freelance Website Web Developer Headless CMS JAMStack technologies"
    />

    <div
      id="home"
      className="flex flex-col lg:flex-row justify-between mx-auto my-5 py-6 lg:py-6 md:-mt-16 lg:-mt-0"
    >
      <BlogSVG className="w-2/3 mx-auto md:w-2/3 lg:w-2/4 my-auto" />
      <div className="w-full md:w-1/3 lg:w-2/4 flex mx-auto my-auto flex-col md:space-y-6 justify-between">
        <h1 className="text-center text-5xl md:text-5xl lg:text-6xl font-extrabold">
          Stay tuned!
        </h1>
        <p className="text-center text-turbo-gray-900 text-lg font-medium my-10">
          I'm working on a Migration from different Blogging platforms.
        </p>
        <form
          action="https://formsubmit.co/747dc9e76769e944cd50d47db53ec514"
          method="POST"
        >
          <div className="flex flex-col justify-between text-left overflow-hidden">
            <div className="flex flex-col">
              <input
                type="hidden"
                name="_subject"
                value="WebContract Newsletter 🔥"
              />
              <input
                type="hidden"
                name="_next"
                value="https://www.webcontract.io/thankyou"
              />
              <div className="flex flex-col md:flex-row justify-between">
                <div className="my-2 md:my-auto mx-2 w-full">
                  <label
                    htmlFor="Email address"
                    className="block text-sm font-medium text-gray-800"
                  >
                    Join Headless CMS Professionals
                  </label>
                  <input
                    type="email"
                    name="Email address"
                    id="Email address"
                    autoComplete="email"
                    placeholder="Your Email address"
                    required
                    className="mt-1 p-2 focus:ring-turbo-yellow-500 focus:border-turbo-yellow-500 block w-full shadow-sm sm:text-sm border-turbo-yellow-300 rounded-sm"
                  />
                  <p className="mt-1 text-xs italic text-gray-300">
                    You will be notified shortly*
                  </p>
                </div>
              </div>
            </div>

            <div className="my-3 mx-auto ">
              <button type="submit" className="inline-flex justify-center">
                <Button content={`Join the Mission`} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Layout>
)

export default Blog
