import React from "react"
import blomar from "../components/images/Blomar.svg"

function Footer() {
  const year = new Date()
  return (
    <React.Fragment>
      <footer>
        <div className="forms">
          <form>
            <h4>sign up to Receive updates and More</h4>
            <input className="email" type="email" placeholder="Enter e-mail" />
          </form>
          <div>
            <p className="copyright">
              &copy; {year.getFullYear()} 610Music. All Rights Reserved
            </p>
          </div>
        </div>
        <div className="blomar">
          <p>
            powered by <img src={blomar} alt="blomar" />
          </p>
        </div>
        <div className="address">
          <div className="office">
            <h4>office</h4>
            <p>East Legon</p>
            <p>Accra, Ghana</p>
          </div>
          <div className="contact">
            <h4>Contact</h4>
            <p>+92 302 300 3215</p>
            <p>610music@gmail.com</p>
            <div className="social">
              <a href="/">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="/">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
