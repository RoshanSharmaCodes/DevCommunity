import React from "react"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarMain">
        <div className="navbarLogo"></div>
        <div className="navbarButtons">
          <a href="#">Home</a>
          <a href="#">Login</a>
          <a href="#">Register</a>
          <a href="#">Blogs</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
