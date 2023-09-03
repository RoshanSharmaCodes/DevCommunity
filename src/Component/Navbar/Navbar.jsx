import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarMain">
        <div className="navbarLogo"></div>
        <div className="navbarButtons">
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/SignUp">Sign Up</Link>
          <Link to="/Blogs">Blogs</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
