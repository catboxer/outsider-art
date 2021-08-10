import React from 'react'
import {graphql } from 'gatsby'
import {
  Layout,
  Hero,
  Navbar,
  Footer,
  SEO,
  Slider,
} from '../components'

const HomePage = () => {
  return  <>
  <Layout>
    <SEO title="The Art Outside | Home Page"/>
  <div className="all-content w-clearfix">
      <Hero/>
        <div className="main-column content">
          <Navbar />
          <Slider/>
          <Footer/>
        </div>
        </div>
  </Layout>
 
  </>
}



export default HomePage
