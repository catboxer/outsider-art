import React from 'react'
import styled from 'styled-components'
import socialLinks from "../constants/social_links"
import { Link } from 'gatsby'
//import { StaticImage } from 'gatsby-plugin-image'
import {BgImage} from 'gbimage-bridge'
import { graphql, useStaticQuery } from 'gatsby'
import {getImage} from 'gatsby-plugin-image'
const Hero = () => {
  const {backgroundCover}= useStaticQuery(
    graphql`
        query {
            backgroundCover: file(relativePath: {eq: "waterfall.jpg"}) {
                childImageSharp {
                gatsbyImageData(width: 1200, webpOptions: {quality: 70}, quality: 50)
                }
                }
            }
        `
    )
    const pluginImage = getImage(backgroundCover)
  return (
   <BackgroundImg className="main-column header" image={pluginImage}>
     <div className="tagline">The Art Outside</div>
     <div className="byline">Dedicated To Roland Moore Atkinson Jr. 1936-2020</div>
    <div>
      <h1 className="logo">ART<span>OUT</span></h1>
      <div className="big-tagline w-hidden-small w-hidden-tiny">Exploring Outsider Art In The USA</div>
    </div>
    {/* <div className="footer-wrapper w-clearfix">
    {socialLinks.map((link)=>{
        return (<a href={link.url} key={link.id} className="footer-nav-link w-inline-block" alt="social icon">
          {link.icon}
        </a>)
      })}
    </div> */}
  </BackgroundImg>
  )
}
const BackgroundImg = styled(BgImage)`
.big-tagline {
  margin: 0 auto;
  margin-bottom: 68px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 45px;
  line-height: 54px;
  font-weight: 300;
  max-width: 400px;
}
.tagline {
  margin-bottom: 4px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 16px;
  font-weight: 300;
}
.byline {
  margin-bottom: 52px;
  font-family: Roboto, sans-serif;
  color: hsla(0, 0%, 100%, 0.74);
  font-size: 16px;
  font-weight: 300;
}
h1 span {
  display: table;
}
.logo {
  display: inline-block;
  margin-top: 2rem;
  margin-bottom: 31px;
  padding: 21px;
  border: 8px solid hsla(0, 0%, 100%, 0.38);
  font-family: 'Roboto', sans-serif;
  font-size: 72px;
  line-height: 60px;
  font-weight: 400;
}
.footer-wrapper {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-top: 1px solid hsla(0, 0%, 100%, 0.34);
  text-align: center;
}
.footer-nav-link {
  display: block;
  width: 25%;
  height: 58px;
  padding-top: 17px;
  float: left;
  color:white;
  font-size: 1.5rem;
  border-right: 1px solid hsla(0, 0%, 100%, 0.34);
  opacity: 0.8;
  -webkit-transition: opacity 250ms ease, background-color 250ms ease;
  transition: opacity 250ms ease, background-color 250ms ease;
  text-decoration: none;
}

.footer-nav-link:hover {
  background-color: hsla(0, 0%, 100%, 0.09);
  opacity: 1;
}
@media screen and (max-width: 810px) {
  .footer-wrapper {
    background-color: #000;
  }
}
@media screen and (max-width: 767px) {
  .w-hidden-small {
    display: none !important;
  }
  .logo {
    display: block;
    margin-top: 0px;
    margin-right: 14px;
    margin-bottom: 1.5rem;
    padding: 13px 14px;
    float: left;
    border-width: 5px;
    font-size: 42px;
    line-height: 34px;
  }
  .big-tagline {
    display: block;
    margin-bottom: 57px;
    float: right;
    font-size: 25px;
    line-height: 29px;
  }
}
  @media screen and (max-width: 479px) {
    .main-column.header {
    padding-bottom: 41px;
    }
    .logo {
    display: inline-block;
    margin-bottom: 1.5rem;
    float: none;
  }
  .w-hidden-small {
    display: inherit !important;
  }
  .w-hidden-tiny {
    display: none !important;
  }
}
`


export default Hero
