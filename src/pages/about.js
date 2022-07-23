import React from "react"
import Layout from "../components/Layout"
import * as styles from "../components/styles/about.module.css"

function About() {
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.about}>
          <div>
            <h2>About Us</h2>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default About
