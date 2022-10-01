import React from "react"

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
            <p className="copyright">All Rights Reserved</p>
          </div>
        </div>
        <div className="blomar">
          <div className="office-mobile">
            <p>25391 Commercentre Dr Ste 115,</p>
            <p> Lake Forest, CA 92630</p>
          </div>
          <p>&copy; {year.getFullYear()} 610Music.</p>
        </div>
        <div className="address">
          <div className="office">
            <h4 className="gold">office</h4>
            <p>25391 Commercentre Dr Ste 115,</p>
            <p> Lake Forest, CA 92630</p>
          </div>
          <div className="contact">
            <h4 className="gold">Contact</h4>
            <p>+1(310) 861 9620</p>
            <p>info@610music.com</p>
            <div className="social">
              <a
                href="https://twitter.com/610music"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://m.facebook.com/610MusicGroup"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/610music/"
                target="_blank"
                rel="noreferrer"
              >
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
