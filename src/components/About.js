import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
const About = () => {
  return (<>
  <div className="section wf-section">
        <h1>About The Art Outside</h1>
        <p>I met Roland once before he passed away in 2020 but have since then spent hours with his lovely wife Jo Ann Weaver.</p>
        <p>She graciously showed me around her home and shared her albums of collected Outsider Art. 
          Their enthusiasm and dedication to finding and documenting these artists is infectious and I hope that you will too go out and seek, document and share what you find in the world around you.
          </p><p>
          I built this website because I could not let their work go unshared. I made it for Jo Ann because she recently lost her partner and when she talks about him you know she has lost her other half.
          I made it because I wanted to give Airtable and Gatsby a spin and this seemed an ideal project for it.
          </p><p>
          Their attention to detail was exceptional. Each album came with maps, notes, biographies, photos and a bibliography of the books and content they had used to scout out each of these artists. 
          I have only opened the one for North Carolina and entered the first 4 of 18 artists. We have just begun the process of transcribing their in-depth notes. 
          There are 7 more albums! 
          </p><p>I cannot do justice to the photo albums in full but I hope this website somehow captures a bit of the love they shared together. I also hope it inspires you to stop and check out the oddities you find along your path. 
          </p><p>
          Rosalee
           </p>
      </div>
      <div className="section wf-section">
      <h2>The Volunteers</h2>
      <div className="w-row">
          <div className="team-column w-col w-col-4 w-col-small-4">
              <StaticImage src="../images/roland.atkinson.jpg"className="portrait" alt="Roland"/>
              <h3>Roland Atkinson</h3>
              <p>Interviewer</p>
            </div>
            <div className="team-column w-col w-col-4 w-col-small-4">
            <StaticImage src="../images/joann.jpg" className="portrait" alt="Jo Ann"/>
                <h3>Jo Ann Weaver</h3>
                <p>Photographer</p>
            </div>
            <div className="team-column w-col w-col-4 w-col-small-4">
            <StaticImage src="../images/rosalee.jpg" className="portrait" alt="Rosalee"/>
                <h3>Rosalee Rester</h3>
                <p>Technology</p>
            </div>
          </div>
      </div>
      </>
  )
}

export default About
