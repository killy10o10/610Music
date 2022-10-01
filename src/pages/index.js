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
            <h2>
              610Music
              <span className={styles.six}> </span>
            </h2>
            <p>
              610Music is based out of Los Angeles, California with a secondary
              office in Accra, Ghana
            </p>
          </div>
          <div className={styles.topImage}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.bottomImage}></div>
        </section>
      </Layout>
    </React.Fragment>
  )
}
