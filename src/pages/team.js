import React from "react"
import Layout from "../components/Layout"
import * as styles from "../components/styles/team.module.css"
import ella from "../components/images/ELLA.jpg"
import emma from "../components/images/EMMA.jpg"
import Sonny from "../components/images/Sonny.jpg"
import tef from "../components/images/TEF.jpg"
import SearchEngineOptimize from "../components/seo"

function Team() {
  return (
    <React.Fragment>
      <Layout>
        <section className={styles.team}>
          <h2>Meet The 610 Team</h2>
          <div className={styles.crew}>
            <div className={styles.crewCard}>
              <div className={styles.imgContainer}>
                <img src={Sonny} alt="Flow" />
              </div>
              <div className={styles.connect}>
                <h3>Kofi Sonny</h3>
              </div>
              <div className={styles.overview}>
                With a career spanning over 15 years, Kofi Sonny leads 610Music,
                a record label he founded in 2010. As an executive producer,
                Kofi Sonny has always had a knack for pushing emerging artists
                and breaking popular local artists into mainstream pop culture.
                <div className="social">
                  <a
                    href="https://twitter.com/rinneganz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/rinnestudios/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://m.facebook.com/kofisonnyofficial"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.crewCard}>
              <div className={styles.imgContainer}>
                <img src={tef} alt="tef" />
              </div>
              <div className={styles.connect}>
                <h3>Yaw Tef</h3>
              </div>
              <div className={styles.overview}>
                Amoako Agyei Theophilus, referred to as "Yaw Tef," is the
                Operations Manager at 610Music. Adventurous and ambitious by
                nature, Yaw Tef is a certified rover with the soul of a gipsy.
                He lives by the quote "Givers Never Lack."
                <div className="social">
                  <a
                    href="https://twitter.com/teflon_wayne45"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/tef_wayne/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://m.facebook.com/tefwayne"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.crewCard}>
              <div className={styles.imgContainer}>
                <img src={ella} alt="Ella" />
              </div>
              <div className={styles.connect}>
                <h3>Ella</h3>
              </div>
              <div className={styles.overview}>
                610Music's publicist, You can find Emmanuella Okunmwendia
                listening to music or going for long walks when she's not
                working. A music writer and artist publicist since 2021, Ella is
                inspired by the quote "Be You, Be True, Be Who You Are, No One
                Can Change You."
                <div className="social">
                  <a
                    href="https://twitter.com/ellaokunmwendia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/ellaokunmwendia/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://m.facebook.com/ellaokunmwendia"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.crewCard}>
              <div className={styles.imgContainer}>
                <img src={emma} alt="Emma" />
              </div>
              <div className={styles.connect}>
                <h3>Emmanuel</h3>
              </div>
              <div className={styles.overview}>
                Meet EMAPPIAGYEI, born Emmanuel O. Appiagyei. Currently the
                Artist Relations Manager at 610Music, EMAPPIAGYEI enjoys making
                money and searching for creative ideas as a hobby. Not once has
                he had a conversation without the quote "Think Globally, Operate
                Locally."
                <div className="social">
                  <a
                    href="https://twitter.com/emappiagyei"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/emappiagyei_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://m.facebook.com/emappiagyei"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default Team

export const Head = () => <SearchEngineOptimize />
