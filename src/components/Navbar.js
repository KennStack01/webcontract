import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Button from "./Buttons/Button"
import { CgMenuCheese } from "react-icons/cg"
import { GrClose } from "react-icons/gr"

const activeLinkStyles = {
  backgroundColor: "#F5F5F5",
  padding: "8px",
  textColor: "white",
  cursor: "pointer",
  borderRadius: "4px",
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleNavbar = () => {
    setOpen(!isOpen)
  }

  return (
    // <nav className="bg-white w-full p-3 rounded-md mx-3 flex flex-row justify-around">
    <nav className="bg-white flex flex-col md:flex-row items-center rounded-md justify-around my-auto p-2 md:py-3 md:m-3">
      {/* Logo */}
      <div className="flex flex-row justify-between w-full">
        {/* <div style={{ maxWidth: `190px` }}> */}
        <div className="w-36 md:w-52 my-auto">
          <StaticImage
            src="../images/webcontract-logo.png"
            alt="gatsby astronaut"
          />
        </div>
        <div
          className="block md:hidden my-auto p-2 text-xl text-gray-800 rounded-sm hover:bg-turbo-gray-500 focus:bg-turbo-gray-500 cursor-pointer"
          onClick={toggleNavbar}
        >
          {!isOpen ? <CgMenuCheese /> : <GrClose />}
        </div>
      </div>
      {/* Links */}
      <div
        className={`${
          !isOpen ? "hidden" : "block"
        } flex flex-col md:flex-row ml-0 md:justify-between my-8 md:my-0 mx-auto space-x-2 space-y-4 md:space-y-0 md:space-x-10 lg:space-x-20 font-semibold`}
      >
        <div>
          <Link to="/" activeStyle={activeLinkStyles} activeClassName="active">
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/services"
            activeStyle={activeLinkStyles}
            activeClassName="active"
          >
            Services
          </Link>
        </div>

        <div>
          <Link
            to="/work"
            activeStyle={activeLinkStyles}
            activeClassName="active"
          >
            Work
          </Link>
        </div>

        <div>
          {" "}
          <Link
            to="/blog"
            activeStyle={activeLinkStyles}
            activeClassName="active"
          >
            Blog
          </Link>
        </div>
        <div className="block md:hidden mx-auto">
          <Button content={"Get Started"} />
        </div>
      </div>
      <div className="hidden md:block">
        <Button content={"Get Started"} />
      </div>
    </nav>
  )
}

export default Navbar
