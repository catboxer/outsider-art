import React from 'react'
import {graphql } from 'gatsby'
import {
  Layout,
  Hero,
  Navbar,
  SEO,
  Slider,
} from '../components'

const HomePage = () => {
  return  <>
  <Layout>
    <SEO title="The Art Outside | Home Page"/>
  <div className="all-content w-clearfix wf-section">
      <Hero/>
        <div className="main-column content">
          <Navbar />
          <Slider/>
        </div>
        </div>
  </Layout>
 
  </>
}



export default HomePage
