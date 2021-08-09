import React from 'react'
import { Link} from 'gatsby'
import Title from './Title'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import SearchButtons from './SearchButtons'
import { graphql, useStaticQuery} from 'gatsby'
export const query = graphql`
{
  allAirtable {
    nodes {
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

const Artist = () => {
  const data = useStaticQuery(query)
 console.log(data)
return (
    <div>hello</div>
    )
  }


const Wrapper = styled.div`
  background: var(--clr-white);
  max-width: 50vw;
    .thumbnail {
      width: 109px;
      height: 109px;
      border: white 6px solid;
      box-shadow: 0 0.2rem 1.2rem rgba(0,0,0,0.2);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      border: #ccc solid 1px;
      border-top: none;
      display: flex;
      /* box-shadow: var(--light-shadow);
      border-radius: var(--radius); */
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .about-blocks{
      border: yellow 2px solid;
      margin-left: 2rem;
    }
    .container {
      display: flex;
      border: red solid 2px;
      width: 50vw;
      max-height: 8rem;
      padding: .5rem;
      /* overflow: hidden; */
      background: var(--clr-white);
      &:hover .img {
        opacity: 0.2;
      }
      /* .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
      } */
    }
    @media (min-width: 768px) {
      .container {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .container {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .container {
        height: 15rem;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`
export default Artist
