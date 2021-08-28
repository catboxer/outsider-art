import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link, graphql, useStaticQuery} from 'gatsby'
import slugify from 'slugify'
const query = graphql`
{
  allAirtable {
    nodes {
      data {
        cover_img {
          localFiles {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                height: 104
              )
            }
          }
        }
        name
        location
        about
      }
    }
  }
}
`
const Slider = () => {
 const data = useStaticQuery(query)
 const nodes = data.allAirtable.nodes

  return (<>
      {nodes.map((cover,id)=>{
            const {name,about,location,cover_img}= cover.data
            const slug = slugify(name,{lower:true} )
            return (
              <Link to={`/artists/${slug}`} key={id} className="article w-inline-block w-clearfix">
                    <div className="image-wrapper">
                    < GatsbyImage image={getImage(cover_img.localFiles[0])}
                    alt={name} width="109" className="thumbnail"></GatsbyImage>
                    </div>
                <section className="article-text-wrapper w-clearfix">
                    <h2 className="arrow">❯</h2>
                    <h2 className="thumbnail-title">{name}</h2>
                    <p>{about}</p>
                    <div className="article-info-wrapper">
                      <div className="article-info-text tag">{location}</div>
                    </div>
                </section>
            </Link>
            ) 
          })}
          </>
        )
  }


export default Slider
