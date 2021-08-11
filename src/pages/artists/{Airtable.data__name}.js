import React from "react"
import { Layout, SEO } from "../../components"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Gallery from '@browniebroke/gatsby-image-gallery'
import slugify from 'slugify'
const ArtistTemplate = ({data}) => {
  const {
    name,
    location,
    references,
    gallery_name,
    style,
    cover_img,
    biography,
    photo_credit,
    interviewer,
    dob,
    gallery
  } = data.airtable.data

const images = gallery.localFiles.map((image) => image.childImageSharp)
 const lightboxOptions = {
  imageLoadErrorMessage: 'Impossible To Load',
  nextLabel: 'Next',
  prevLabel: 'Previous',
  zoomInLabel: 'Zoom In',
  zoomOutLabel: 'Zoom Out',
  closeLabel: 'Close',
}
const onClose = () => {
  console.log('Lightbox was closed')
}
 if(references){
  const bibliography = references.split("|")
  return <Layout>
    <SEO title={` ${name} | The Art Outside`} description={`Biography, site photos and more about artist ${name}`}/> 
    <Link to="../../" className="hollow-button">❮   all ARTISTS</Link>
    <div className="header-image wf-section">
    <GatsbyImage className="header-image" image={getImage(cover_img.localFiles[0])} alt={`photo of art made by ${name}`}/>
    <div className="header-container w-container">
          <div className="credits">Photo credits: {photo_credit}</div>
        </div>
    </div>
    <div className="content-section wf-section">
        <div className="w-container">
          <div className="w-row">
            <div className="article-body-column w-col w-col-12">
            <div className="article-info-wrapper">
                {style.map((tag, index) => {
                   const slug = slugify(tag,{lower:true} )
                  return(
                    // <Link to={`/${slug}`} key={index} className="article-info-text tag">{tag}</Link>
                    <div key={index} className="article-info-text tag">{tag}</div>
                  )
                })}
              </div>
              <h1 className="article-heading">{name}</h1>
              <p className="quote">Location: {location}</p>
              <h2>{gallery_name}</h2>
              <p className="subtitle">{dob}</p>
              <h1>Observations</h1> 
              <p>Interviewed by {interviewer}</p>
              <p dangerouslySetInnerHTML={{__html: biography.childMarkdownRemark.html}}></p>
              <h1>Gallery</h1>    
              {/* container for image gallery */}
                          <Gallery
                          images={images}  
                          lightboxOptions={lightboxOptions}
                          onClose={onClose}
                          />
                 
                    
              <h2>References</h2>
              <ol>{bibliography.map((book, index) => {
                return(
                  <li key={index}>{book}</li>
                  )
                })}
              </ol>

            </div>
          </div>
        </div>
      </div>
    </Layout>       
} else {
  return <Layout>
  <SEO title={` ${name} | The Art Outside`} description={`Biography, site photos and more about artist ${name}`}/>
  <div className="header-image wf-section">
  <GatsbyImage className="header-image" image={getImage(cover_img.localFiles[0])} alt={`photo of art made by ${name}`}/>
      <div className="header-container w-container">
        <Link to="../" className="hollow-button">❮   all ARTISTS</Link>
        <div className="credits">Photo credits: {photo_credit}</div>
      </div>
  </div>
  <div className="content-section wf-section">
      <div className="w-container">
        <div className="w-row">
          <div className="article-body-column w-col w-col-12">
            <h1 className="article-heading">{name}</h1>
            <h2>{gallery_name}</h2>
            <p className="subtitle">{dob}</p>
            <p className="quote">Location: {location}</p>
            <h3>Interviewed by {interviewer}</h3>
            <h2>About</h2> 
            <p dangerouslySetInnerHTML={{__html: biography.childMarkdownRemark.html}}></p>
            <div className="article-info-wrapper">
              {style.map((tag, index) => {
                return(
                  <div key={index} className="article-info-text tag">{tag}</div>
                )
              })}
            </div>
            <h2>Clickable Gallery</h2>    
            {/* container for image gallery */}
                        <Gallery
                        images={images}  
                        lightboxOptions={lightboxOptions}
                        onClose={onClose}
                        />
          </div>
        </div>
      </div>
    </div>
  </Layout>    
}}

export const query = graphql`
query getSingleArtist($data__name:String) {
  airtable(data: {name: {eq: $data__name}}) {
    id
    data {
      name
      biography {
        childMarkdownRemark {
          html
        }
      }
      gallery_name
      location
      references
      photo_credit
      interviewer
      cover_img{
        localFiles {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH, transformOptions: {duotone: {highlight: "#f8be3d", shadow: "#682218"}})
          }
        }
      }
      state
      style
      dob
      gallery {
        localFiles {
          childImageSharp {
            thumb: gatsbyImageData(width: 270, height: 270, placeholder: BLURRED)
            full: gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
}`



export default ArtistTemplate