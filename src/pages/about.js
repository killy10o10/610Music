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
            <p>
              610Music is a record label based in Los Angeles with a secondary
              office in Ghana. Affiliated with Universal Music, its goal is to
              emerge within the African music scene and prepare to cross over
              into international markets with a model of development that will
              ensure domination for years. The label was founded by Kofi Sonny,
              A US-based music executive and business entrepreneur. 610Music is
              home to rising Ghanaian artist Korsah, American rapper Rich Flow
              and LA-based artist Modesta.{" "}
            </p>
            <h2>The Executives</h2>
            <p>
              With a career spanning over 15 years, Kofi Sonny leads 610Music, a
              record label he founded in 2010. The multi-faceted executive
              producer and business mogul graduated from Vanderbilt University,
              where he majored in Engineering Science and Economics. His
              professional journey began with an internship with Avondale
              Partners, an independent investment-banking firm in the US. As an
              executive producer, Kofi Sonny has always had a knack for pushing
              emerging artists and breaking popular local artists into
              mainstream pop culture. He also has experience touring with
              American rappers such as Future, Young Thug and Meek Mill. After
              playing a major role in promoting artists from Philadelphia, Kofi
              Sonny is poised to take the Ghanaian music industry globally.{" "}
            </p>
            <p>
              Endowed with a Bachelor of Arts from Albright College in
              Pennsylvania, Baffour Yaw Sarpong Anim, popularly known as BA4
              (pronounced Baffour), is the vice president of 610Music. A
              multi-talented musician, BA4 is a guitarist, singer-songwriter,
              and producer. When Baffour is not managing the affairs of the
              label or creating strategic plans for the artists, one can find
              him either hiking, reading or pontificating about change in Ghana.
              Baffour believes in being vulnerable enough to build meaningful
              relationships.
            </p>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default About
