import React from "react"
import Layout from "../components/Layout"
import * as styles from "../components/styles/home.module.css"
import korsah1 from "../components/images/korsah-1.svg"
import korsah2 from "../components/images/korsah-2.svg"

export default function Home() {
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.header}>
          <div className={styles.intro}>
            <h2>
              610 <br /> Music
            </h2>
            <p>
              61Music is based out of Los Angeles, California with a secondary
              office in Ghana
            </p>
          </div>
          <div className={styles.topImage}>
            <img src={korsah1} alt="korsah-1" />
          </div>
          <div className={styles.bottomImage}>
            <img src={korsah2} alt="korsah-2" />
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}
