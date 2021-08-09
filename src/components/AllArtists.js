import React from 'react'
import TagsList from './TagsList'
import ArtistList from './ArtistList'
import {graphql, useStaticQuery} from 'gatsby'

const query = graphql`
  {
    allAirtable {
      nodes {
        id
        data {
          name
          about
          biography {
            childMarkdownRemark {
              html
            }
          }
          dob
          gallery_name
          location
          references
          state
          style
          gallery {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
              }
            }
          }
          cover_img {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`

const AllArtists =() => {
const {allAirtable: {nodes:artists}} = useStaticQuery(query)
    return (
    <div>
        <h1>this is all artists</h1>
        <TagsList artists = {artists}/>
        <ArtistList artists = {artists} />
    </div>
    )
}

export default AllArtists