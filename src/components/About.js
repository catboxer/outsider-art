import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import services from '../constants/services'
import { StaticImage } from 'gatsby-plugin-image'
const About = () => {
  return (<>
  <div className="section wf-section">
        <h1>About The Art Outside</h1>
        <p>I met Roland once before he passed away in 2020 but have since then spent hours with his wife Joanna Weaver.</p>
        <p>Once she showed me her albums of collected Outsider Art, I could not walk away. Their enthusiasm and dedication to finding and documenting these artists is infectious and we hope that you will go out and seek and document the art that is around you.</p>
      </div>
      <div className="section wf-section">
      <h1>The Volunteers</h1>
      <div className="w-row">
          <div className="team-column w-col w-col-4 w-col-small-4">
              <StaticImage src="../images/cover.jpg" width="150" alt=""/>
              <h5>Roland Atkinson</h5>
            </div>
            <div className="team-column w-col w-col-4 w-col-small-4">
            <StaticImage src="../images/cover.jpg" width="150" alt=""/>
                <h5>Joanne Weaver</h5>
            </div>
            <div className="team-column w-col w-col-4 w-col-small-4">
            <StaticImage src="../images/cover.jpg" width="150" alt=""/>
                <h5>Rosalee Rester</h5>
            </div>
            <div className="team-column w-col w-col-4 w-col-small-4">
            <StaticImage src="../images/cover.jpg" width="150" alt=""/>
              <h5>Kelley Ramsey</h5>
            </div>
          </div>
      </div>
      </>
  )
}

export default About
