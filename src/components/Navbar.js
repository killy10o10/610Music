import { Link } from "gatsby"
import React from "react"
import logo from "./images/610-logo.png"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="container ">
          <div className="navbar-brand text-center">
            <Link to="/" className=" logo" title="Logo">
              <img src={logo} alt="610Music" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger hambg-div ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span className="hambg" />
              <span className="hambg" />
              <span className="hambg" />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end nav-menu">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/artists">
                Artists
              </Link>
              <Link className="navbar-item" to="/">
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
