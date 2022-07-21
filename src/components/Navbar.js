import { Link } from "gatsby"
import React from "react"

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">610Music</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/artists">Artists</Link>
      </div>
    </nav>
  )
}

export default Navbar
