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
              gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED, height: 104)
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

// const Wrapper = styled.div`
//   background: var(--clr-white);
//   max-width: 50vw;
//   .image-container {
//     width:109px;
//     min-width:109px;
//     height: 109px;
//     border: white 6px solid;
//     box-shadow: 0 0.2rem 1.2rem rgba(0,0,0,0.2);
//     border-radius: var(--radius);
//     transition: var(--transition);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     overflow: hidden
//   }
//     .thumbnail {
//     min-width: 100%;
//     min-height: 100%;
      
//     }
//     .next{
//       width:10px;
//     }
//     article {
//       border: #ccc solid 1px;
//       border-top: none;
//       display: flex;
//       /* box-shadow: var(--light-shadow);
//       border-radius: var(--radius); */
//       transition: var(--transition);
//     }
//     article:hover {
//       box-shadow: var(--dark-shadow);
//     }
//     .about-blocks{
//       border: yellow 2px solid;
//       margin-left: 1rem;
//     }
//     .container {
//       display: flex;
//       border: red solid 2px;
//       width: 50vw;
//       max-height: 14rem;
//       padding: .5rem;
//       /* overflow: hidden; */
//       background: var(--clr-white);
//       &:hover .img {
//         opacity: 0.2;
//       }
      
//     @media (min-width: 768px) {
//       .container {
//         height: 15rem;
//       }
//       grid-template-columns: 1fr 1fr;
//     }
//     @media (min-width: 992px) {
//       .container {
//         height: 12.5rem;
//       }
//       grid-template-columns: 1fr 1fr 1fr;
//     }
//     @media (min-width: 1200px) {
//       .container {
//         height: 15rem;
//       }
//     }
// `

export default Slider
