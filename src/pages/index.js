import React from "react"
import Layout from "../components/Layout"
import * as styles from "../components/styles/home.module.css"

export default function Home() {
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.header}>
          <div>
            <h2>610Music</h2>
            <p>
              61Music is based out of Los Angeles, California with a secondary
              office in Ghana
            </p>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}
