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

  const navLinks = [
    {
      name: "Home",
      link: "/#home",
    },
    {
      name: "Services",
      link: "/#services",
    },
    {
      name: "Work",
      link: "/#work",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ]

  return (
    // <nav className="bg-white w-full p-3 rounded-md mx-3 flex flex-row justify-around">
    <nav className="bg-white flex flex-col lg:flex-row lg:justify-center items-center rounded-md justify-around my-auto p-2 md:py-3 md:m-3">
      {/* Logo */}
      <div className="flex flex-row justify-between w-full">
        {/* <div style={{ maxWidth: `190px` }}> */}
        <div className="w-36 md:w-52 my-auto">
          <Link to="/">
            <StaticImage
              src="../images/webcontract-logo.png"
              alt="gatsby astronaut"
            />
          </Link>
        </div>
        <div
          className="visible lg:invisible my-auto p-2 text-xl text-gray-800 rounded-sm hover:bg-turbo-gray-500 active:bg-turbo-gray-500 cursor-pointer"
          onClick={toggleNavbar}
        >
          {!isOpen ? <CgMenuCheese /> : <GrClose />}
        </div>
      </div>
      {/* Links */}
      <div
        className={`${
          !isOpen ? "hidden" : "z-20"
        } flex flex-col lg:hidden ml-0 md:justify-between my-8 md:my-10 mx-auto space-x-2 space-y-4 font-semibold`}
      >
        {navLinks.map(item => (
          <div key={item.name} className="hover:underline">
            <Link
              to={item.link}
              activeStyle={activeLinkStyles}
              activeClassName="active"
            >
              {item.name}
            </Link>
          </div>
        ))}
        <div className="block lg:hidden mx-auto ">
          <Link to="/#contact">
            <Button content={"Get Started"} />
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex flex-row justify-around space-y-0 space-x-6 lg:space-x-10 font-semibold">
        {navLinks.map(item => (
          <div key={item.name} className="hover:underline my-auto">
            <Link
              to={item.link}
              activeStyle={activeLinkStyles}
              activeClassName="active"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex ml-6">
        <Link to="/#contact" className="">
          <Button content={"Available"} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
