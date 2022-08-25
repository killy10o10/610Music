import React from "react"
import Layout from "../components/Layout"
import * as styles from "../components/styles/korsah.module.css"
import flow from "../components/images/flow-2.jpg"

function Flow() {
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.korsah}>
          <div className={styles.yellow}>
            <img src={flow} alt="flow" />
          </div>
          <div className={styles.blue}>
            <h4>Rich Flow</h4>
            <div className={styles.biography}>
              <h5>Biography</h5>
              <p>
                Rich Flow is an American rapper, singer, and songwriter signed
                to 610MUSIC. After over a decade as a recording artist, Rich
                Flow began gaining recognition in 2015. First, he participated
                in BET's One Shot Competition judged by DJ Drama, where he was
                ranked top 30 of 1000 contestants. That same year, he was issued
                an article in the XXL Magazine as an artist on the rise.
              </p>
              <p>
                Additionally, Rich Flow is a recipient of the "Young Achiever"
                plaque awarded by Norristown Men of Excellence and The House of
                Representatives of the Commonwealth of Pennsylvania.
              </p>
              <h5>Connect with Rich Flow</h5>
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
                <a
                  href="https://www.instagram.com/610music/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-apple"></i>
                </a>
                <a
                  href="https://www.instagram.com/610music/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-spotify"></i>
                </a>
                <a
                  href="https://www.instagram.com/610music/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-tiktok"></i>
                </a>
                <a
                  href="https://www.instagram.com/610music/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-snapchat"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.listen}>
          <h4>Artist Catalogue</h4>
          <div className={styles.spotify}>
            <iframe
              title="Rich Flow Spotify"
              src="https://open.spotify.com/embed/artist/40h4W8oT60nQTUtHLlc2ht?utm_source=generator"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}
export default Flow
