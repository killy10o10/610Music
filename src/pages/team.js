import React from "react"
import Layout from "../components/Layout"
import * as styles from "../components/styles/team.module.css"
import sony from "../components/images/sony.jpg"
import ella from "../components/images/ELLA.jpg"
import emma from "../components/images/EMMA.jpg"
import flow from "../components/images/FLOW.jpg"
import tef from "../components/images/TEF.jpg"

function Team() {
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.team}>
          <h2>Meet The 610 Team</h2>
          <div className={styles.crew}>
            <div className={styles.crewCard}>
              <img src={tef} alt="sony" />
            </div>
            <div className={styles.crewCard}>
              <img src={ella} alt="sony" />
            </div>
            <div className={styles.crewCard}>
              <img src={emma} alt="sony" />
            </div>
            <div className={styles.crewCard}>
              <img src={flow} alt="sony" />
            </div>
            <div className={styles.crewCard}>
              <img src={sony} alt="sony" />
            </div>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default Team
