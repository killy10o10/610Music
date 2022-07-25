import React from "react"
import Layout from "../components/Layout"
import * as styles from "../components/styles/korsah.module.css"
import korsahbw from "../components/images/korsahbw.svg"

function Korsah() {
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.korsah}>
          <div className={styles.yellow}>
            <img src={korsahbw} alt="korsahwh" />
          </div>
          <div className={styles.blue}>
            <h1>Biography</h1>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}
export default Korsah
