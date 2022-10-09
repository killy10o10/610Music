import React from "react"
import Layout from "../components/Layout"
import * as styles from "../components/styles/korsah.module.css"
import korsah from "../components/images/korsah.png"

function Korsah() {
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.korsah}>
          <div className={styles.yellow}>
            <img src={korsah} alt="korsahwh" />
          </div>
          <div className={styles.blue}>
            <h4>Korsah</h4>
            <div className={styles.biography}>
              <h5>Biography</h5>
              <p>
                Born at Atonsu in the capital of the Ashanti region of Ghana,
                Kumasi, Owusu Nkwantabisa well known by his stage name Korsah is
                an Afrobeat and Hip-Hop artist. He was born to Atta Korsah and
                Lydia Kunadu on April 12, 1995. The artist was inspired to go
                into music soon after he lost his mother in 2015.
              </p>
              <p>
                The event in 2015 was devastating, but he drew inspiration from
                it. He moved to Accra where he found his love for music. As a
                young boy, he grew to appreciate Ghanaian music but decided to
                add a new dimension to it when he got the chance.
              </p>
              <p>
                When Korsah decided to go into music, he took time to understudy
                music and decided on his genre afterwards. Since then, he has
                been an admirable figure to many.
              </p>
              <h5>Connect with Korsah</h5>
              <div className="social">
                <a
                  href="https://twitter.com/realkorsah"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://instagram.com/realkorsah"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://instagram.com/realkorsah"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://music.apple.com/gh/artist/korsah/1177147876"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-apple"></i>
                </a>
                <a
                  href="https://open.spotify.com/artist/7uzK7g2xVqTHHYROpIKwHQ?si=2ifeSKOcTfmimZKAsaxayA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-spotify"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@realkorsah"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-tiktok"></i>
                </a>
                <a
                  href="https://www.youtube.com/c/KORSAH"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-youtube" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.listen}>
          <h4>Artist Catalogue</h4>
          <div className={styles.spotify}>
            <iframe
              title="Korsah Spotify"
              src="https://open.spotify.com/embed/artist/7uzK7g2xVqTHHYROpIKwHQ?utm_source=generator"
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
export default Korsah
