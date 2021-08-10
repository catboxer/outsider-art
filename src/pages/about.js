import React from "react"
import { Layout, Hero, SEO, Footer, Navbar, About} from "../components"
import styled from "styled-components"
import { Link } from "gatsby"
const AboutPage = () => {
  return (
  <Layout>
    <SEO title="The Art Outside | About Page"/>
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