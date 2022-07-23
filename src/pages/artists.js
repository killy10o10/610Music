import React from "react"
import Layout from "../components/Layout"
import * as styles from "../components/styles/artists.module.css"

function Artists() {
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.artist}>
          <div>
            <h2>Our Artists</h2>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default Artists
