import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Navbar from "./Navbar"

function Header({ siteTitle }) {
  return (
    <div className="">
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
