import { graphql } from "gatsby"
import React from "react"
import ArtistList from "../components/ArtistList"

const StyleTemplate = props => {
    console.log(props)
    return (
        <div>
            <h2>Style Template Page</h2>
        </div>
    )
}

export const query = graphql`
query GetArtistsByStyle($style:String) {
  allAirtable(
    sort: {fields: data___name, order: ASC}
    filter: {data: {style: {eq: $style}}}
  ) {
    nodes {
      id
      data {
        name
        about
        cover_img {
          localFiles {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
            }
          }
        }
        location
      }
    }
  }
}
  `

export default StyleTemplate