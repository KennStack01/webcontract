import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Navbar from "./Navbar"

function Header({ siteTitle }) {
  return (
    <div className="sticky top-0 z-50">
      <Navbar />
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
