import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {getImage} from 'gatsby-plugin-image'
import {BgImage} from 'gbimage-bridge'


const GbiBridged = () => {
    const {backgroundCover}= useStaticQuery(
        graphql`
            query {
                backgroundCover: file(relativePath: {eq: "cover.jpg"}) {
                    childImageSharp {
                    gatsbyImageData(width: 2000, webpOptions: {quality: 70}, quality: 50)
                    }
                    }
                }
            `
        )


    const pluginImage = getImage(backgroundCover)
    

    return (
       <BgImage image={pluginImage}>Test</BgImage>
        )
}

export default GbiBridged