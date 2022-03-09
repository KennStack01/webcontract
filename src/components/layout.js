/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="font-custom bg-turbo-gray-500 min-h-screen">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main className="relative flex-1 lg:container p-0 mx-auto overflow-x-hidden overflow-auto">
          {children}
        </main>
        <footer className="w-full bg-white p-4 mt-14 flex flex-row justify-between bottom-0">
          <div className="hidden md:block md:w-1/5 my-auto">
            <Link to="/">
              <StaticImage
                src="../images/webcontract-logo.png"
                alt="gatsby astronaut"
              />
            </Link>
          </div>
          <div className="text-left text-sm font-medium my-auto">
            <h4 className="">
              Business run by Kenn Kibadi,{" "}
              <span className="italic text-gray-600">
                Software Developer and Indie Hacker
              </span>
            </h4>
            <p className="my-2">Working as a Contractor w/Clients.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
