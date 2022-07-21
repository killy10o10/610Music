import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./styles/global.css"

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {/* Content for each page */}
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
