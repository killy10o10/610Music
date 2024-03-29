import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import * as styles from "../components/styles/artists.module.css"
import artist from "../components/images/artists.svg"
import SearchEngineOptimize from "../components/seo"

function Artists() {
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.artist}>
          <div>
            <h2>Our Artists</h2>
            <div className={styles.artistList}>
              <Link className={styles.art} to="/korsah">
                Korsah
              </Link>
              <Link className={styles.art} to="/flow">
                Rich Flow
              </Link>
              <Link className={styles.art} to="/">
                Modesta
              </Link>
            </div>
          </div>
          <div>
            <img src={artist} alt="artists" />
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default Artists
export const Head = () => <SearchEngineOptimize />
