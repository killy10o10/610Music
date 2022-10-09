import React from "react"
import Layout from "../components/Layout"
import * as styles from "../components/styles/home.module.css"
import logo from "../components/images/logo.png"

export default function Home() {
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.header}>
          <div className={styles.intro}>
            <h2>610Music</h2>
            <p>
              610Music Records and Publishing Inc. (marketed as 610Music) is an
              American record label and distribution founded by Kofi Sonny with
              offices in Los Angeles and Accra, Ghana.
            </p>
          </div>
          <div className={styles.topImage}>
            <img src={logo} alt="logo" />
            <h2>610Music</h2>
          </div>
          <div className={styles.bottomImage}></div>
        </section>
      </Layout>
    </React.Fragment>
  )
}
