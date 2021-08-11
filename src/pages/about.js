import React from "react"
import { Layout, Hero, Seo, Footer, Navbar, About} from "../components"
const AboutPage = () => {
  return (
  <Layout>
    <Seo title="The Art Outside | About Page"/>
  <div className="all-content w-clearfix wf-section">
      <Hero/>
      <div className="main-column content">
      <Navbar />
           <About/>
      </div>
    </div>
    <Footer/>
    </Layout>
    )
}

export default AboutPage