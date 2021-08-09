import React from 'react'
import styled from 'styled-components'
import socialLinks from "../constants/social_links"
import { Link } from 'gatsby'
import Artist from './Artist'
// import { StaticImage } from 'gatsby-plugin-image'
import {BgImage} from 'gbimage-bridge'
import { graphql, useStaticQuery } from 'gatsby'
import {getImage} from 'gatsby-plugin-image'

const Hero = () => {
  const {backgroundCover}= useStaticQuery(
    graphql`
        query {
            backgroundCover: file(relativePath: {eq: "waterfall.jpg"}) {
                childImageSharp {
                gatsbyImageData(width: 2000, webpOptions: {quality: 70}, quality: 50)
                }
                }
            }
        `
    )
    const pluginImage = getImage(backgroundCover)
  return (
  <>

  <BgImage className="main-column header" image={pluginImage}>
    <div className="info-wrapper">
      <div className="tagline">The Art Outside</div>
      <div className="byline">Dedicated To Roland Moore Atkinson Jr. 1936-2020</div>
    </div>
    <h1 className="logo">ART <br></br>OUT</h1>
    <div className="big-tagline w-hidden-small w-hidden-tiny">Exploring Outsider Art In The USA</div>
    <div className="footer-wrapper w-clearfix">
    {socialLinks.map((link)=>{
        return (<a href={link.url} key={link.id} className="footer-nav-link w-inline-block" alt="social icon">
          {link.icon}
        </a>)
      })}
    </div>
    </BgImage>

  </>
  )
}



export default Hero
