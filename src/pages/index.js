import React from 'react'
import {
  Layout,
  Hero,
  Navbar,
  Footer,
  Seo,
  Slider,
} from '../components'

const HomePage = () => {
  return  <>
  <Layout>
    <Seo title="The Art Outside | Home Page"/>
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
