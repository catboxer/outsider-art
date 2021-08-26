import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
const About = () => {
  return (<>
  <div className="section wf-section">
        <h1>About The Art Outside</h1>
        <p>I met Roland once before he passed away in 2020 but have since then spent a few hours with his wife Jo Ann Weaver.</p>
        <p>She graciously showed me around her home and shared her albums of collected interviews and photos of outsider artists. 
          Their enthusiasm and dedication to finding and documenting these artists is infectious and I hope that it inspires you to stop and check out the oddities you find along your path. 
          </p><p>
          I made it because I wanted to give Airtable and Gatsby a spin and this project felt like something new and interesting to put out into the world.
          </p><p>
          Their attention to detail was exceptional. Each album came with maps, notes, biographies, photos and a bibliography of the books and content they had used to scout out each of these artists. I do not think I can do it justice.
          I have only opened the one for North Carolina and am overwhelmed with the content. There are quite a few more albums! 
          </p>
          <p>
          Rosalee Rester
           </p>
           <h1>About The North Carolina Photo Album</h1>
           <h2>Our Tour of 'Environments' by Self-Taught Artists North Carolina, Autumn, 2008</h2>
           <p>Over six days (October 27 - November 1) we drove about 1,400 miles in search of art-filled 
             yards created by 'Outsider artists in North Carolina. To prepare, Jo Ann read 8 books on the subject, 
             and I discovered a <a href="http://www.detourart.com">huge website </a>. 
           We identified about 25 sites in NC that we hoped to see, then pinpointed them on a state map, noting how 
           sites clustered together geographically. We selected those in the largest clusters, to make efficient 
           use of time and fuel, thus choosing 14 sites to visit. We also planned to visit a few museums and 
           galleries specializing in outsider art. Our richest experiences occurred where we were able to visit 
           with the artists (at 3 sites) or, where the artist was deceased, with family members (4 sites). 
           A folded map of NC inside the front album cover indicates the locations of sites we visited 
          </p>
<p>Roland Atkinson & Jo Ann Weaver</p>
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
